require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json())
app.use(cookieParser());
app.use(express.static('files'));

// telegram

const bot = require('./telegram/telegram');

// routes
const codeRoute = require('./routes/code.route');
const questionsRoute = require('./routes/questions.route');
const authRoute = require('./routes/auth.route');


app.use(codeRoute);
app.use(questionsRoute);
app.use(authRoute);

mongoose.connect(process.env.MONGODB, () => {
    console.log(`mongoose running`)
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log("Server started")
})