const Route = require('express');
const route = new Route();
const QuestionsController = require('../controllers/questions.controller');

route.get('/questions/getuserquestions', QuestionsController.getUserQuestions);
route.post('/questions/sendnswer', QuestionsController.sendAnswer);

module.exports = route;