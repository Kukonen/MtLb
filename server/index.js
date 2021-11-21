require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json())
app.use(express.static('files'));

// telegram

const bot = require('./telegram/telegram');

// routes
const codeRoute = require('./routes/code.route');

app.use(codeRoute);

mongoose.connect(process.env.MONGODB, () => {
    console.log(`mongoose running`)
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log("Server started")
})