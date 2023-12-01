const TelegramBot = require('node-telegram-bot-api');
const token = require('./token.cjs');

const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
  console.log(msg.text);
  if (msg.text.includes('привет')) {
    bot.sendDice(msg.chat.id);
  }
});

bot.onText(/kek/, (msg) => {
  bot.sendPhoto(
    msg.chat.id,
    'https://raw.githubusercontent.com/undefined64/psycho-tester-tg-bot/main/assets/bot-avatar.jpg'
  );
});
