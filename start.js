// start.ts
console.log('🚀 Запуск всех сервисов...');

// Запускаем лендинг
const web = Bun.spawn(['bun', 'run', 'server.js'], {
  cwd: '.',
  stdout: 'inherit',
});

// Запускаем воркер
const mailer = Bun.spawn(['bun', 'run', 'index.js'], {
  cwd: './worker',
  stdout: 'inherit',
});

console.log('✅ Сервисы работают');
