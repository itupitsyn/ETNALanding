// start.ts
console.log('🚀 Запуск всех сервисов...');

// Запускаем лендинг
const web = Bun.spawn(['bun', 'run', 'start'], {
  cwd: './server.js',
  stdout: 'inherit',
});

// Запускаем воркер
const mailer = Bun.spawn(['bun', 'run', 'index.js'], {
  cwd: './worker',
  stdout: 'inherit',
});

console.log('✅ Сервисы работают');
