require('dotenv').config()
const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TELEGRAM;

const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {
  const user = msg.chat.id;
  const message = msg.text;

  if (tryUseCommands(user, message)) {
      ruturn;
  }

  bot.sendMessage(user, "Комманда не распознана, напишите /help");
});

const tryUseCommands = (user, message) => {

    switch(message) {
        case '/help': 
            bot.sendMessage(user, "commands");
            return true;
    }

    return false;
}

module.exports = bot;