const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    user: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model('Question', QuestionSchema)