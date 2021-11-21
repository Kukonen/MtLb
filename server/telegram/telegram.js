require('dotenv').config()
const Question = require('../models/Question');

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

    const command = message.split(" ")[0]; // получаем подстроку до пробела

    switch(command) {
        case '/start': 
            bot.sendMessage(user, "Привет! Это бот, который будет присылать твой код!");
            return true;
        case '/help': 
            bot.sendMessage(user, `Бот сам пришёл тебе код, но если у тебя есть вопрос, то можешь задать его в формате \/what {твоё сообщение}`);
            return true;
        case '/what': 
            bot.sendMessage(user, `Твоё сообщение записано, мы скоро свяжемся с тобой`);
            userQuestion(user, message);
            return true;
    }

    return false;
}

const userQuestion = async (user, message) => {

    const question = message.replace("\/what", ""); // получение вопроса без комманды /what

    const id = generateId(5);

    console.log(id)

    await new Question({id, user, message: question}).save();
}

const generateId = (length) => {
    const symbols = "qwertyuiopasdghjklzxcvbnm1234567890QWERTYUIOPASDFGHJKLZXCVBNM";

    let id = "";

    for (let i = 0; i < length; ++i) {
        const randomIndex = Math.floor(Math.random() * length - 1);
        id += symbols[randomIndex];
    }

    return id;
}

module.exports = bot;