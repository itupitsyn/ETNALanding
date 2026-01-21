import { PrismaPg } from '@prisma/adapter-pg';
import cron from 'node-cron';
import nodemailer from 'nodemailer';

import { PrismaClient } from '../app/generated/prisma/client';

const { DATABASE_URL, SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, TARGET_EMAIL } = process.env;

const adapter = new PrismaPg({
  connectionString: DATABASE_URL,
});

const prisma = new PrismaClient({ adapter });

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: true, // Use true for port 465, false for port 587
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
});

async function sendSummaryEmail() {
  console.log('--- Формирование сводного отчета ---');

  // 1. Находим все неотправленные записи
  const newEntries = await prisma.request.findMany({
    where: { isSent: false },
  });

  if (newEntries.length === 0) {
    console.log('Новых записей нет.');
    return;
  }

  // 2. Генерируем HTML-таблицу
  const tableRows = newEntries
    .map(
      (item) => `
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px; max-width: 300px; overflow-wrap: break-word; vertical-align: top;">${item.phoneNumber}</td>
      <td style="border: 1px solid #ddd; padding: 8px; max-width: 300px; overflow-wrap: break-word; vertical-align: top;">${item.email}</td>
      <td style="border: 1px solid #ddd; padding: 8px; max-width: 300px; overflow-wrap: break-word; vertical-align: top;">${item.name}</td>
      <td style="border: 1px solid #ddd; padding: 8px; max-width: 300px; overflow-wrap: break-word; vertical-align: top;">${item.theme}</td>
      <td style="border: 1px solid #ddd; padding: 8px; max-width: 300px; overflow-wrap: break-word; vertical-align: top;">${item.message}</td>
      <td style="border: 1px solid #ddd; padding: 8px; max-width: 300px; overflow-wrap: break-word; vertical-align: top;">${item.createdAt.toLocaleString()}</td>
    </tr>
  `,
    )
    .join('');

  const htmlBody = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="ru">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <style>
    body { margin: 0; padding: 0; font-family: Arial, sans-serif; }
  </style>
</head>
<body style="margin: 0; padding: 0">
  <h2>Новые заявки</h2>
  <table style="border-collapse: collapse;">
    <thead>
      <tr">
        <th style="border: 1px solid #ddd; padding: 8px;">Телефон</th>
        <th style="border: 1px solid #ddd; padding: 8px;">Email</th>
        <th style="border: 1px solid #ddd; padding: 8px;">Имя</th>
        <th style="border: 1px solid #ddd; padding: 8px;">Тема</th>
        <th style="border: 1px solid #ddd; padding: 8px;">Сообщение</th>
        <th style="border: 1px solid #ddd; padding: 8px;">Дата</th>
      </tr>
    </thead>
    <tbody>
      ${tableRows}
    </tbody>
  </table>
  </body>
</html>
`;

  try {
    await transporter.sendMail({
      to: TARGET_EMAIL,
      from: SMTP_USER,
      subject: `Отчет: ${newEntries.length} новых записей`,
      html: htmlBody,
    });

    const entryIds = newEntries.map((e) => e.id);
    await prisma.request.updateMany({
      where: {
        id: { in: entryIds },
      },
      data: { isSent: true },
    });

    console.log(`Отчет отправлен. Обработано записей: ${newEntries.length}`);
  } catch (error) {
    console.error('Ошибка при отправке сводного отчета:', error);
  }
}

cron.schedule('*/5 * * * *', sendSummaryEmail);

console.log('Воркер рассылки запущен...');
