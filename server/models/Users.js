const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    key: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Users', UsersSchema)