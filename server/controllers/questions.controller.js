const Users = require('../models/Users');
const Questios = require('../models/Question');
const Question = require('../models/Question');
const bot = require('../telegram/telegram');

class QuestionsController {
    async getUserQuestions (req, res) {
        const key = req.cookies.key;

        if (!key) {
            return res.status(400).json()
        }

        const user = await Users.findOne({key}).then()
        
        if (!user) {
            return res.status(401).json()
        }

        const questions = await (await Questios.find({}, '-_id' ).then())
            .filter(question => !question.answer);

        res.status(200).json(questions);
    }

    async sendAnswer(req, res) {
        const key = req.cookies.key;

        if (!key) {
            return res.status(400).json()
        }

        const userHowLogin = await Users.findOne({key}).then()
        
        if (!userHowLogin) {
            return res.status(401).json()
        }

        const {id, message, user, answer} = req.body;

        await Question.updateMany({id}, {answer})

        bot.sendMessage(user, `На Ваше обращение "${message}" пришёл ответ:\n${answer}`);
    }
}

module.exports = new QuestionsController();