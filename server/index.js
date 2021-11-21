require('dotenv').config()
express = require('express');

const app = express();

app.use(express.json())
app.use(express.static('files'));

// telegram

const bot = require('./telegram/telegram');

// routes
const codeRoute = require('./routes/code.route');

app.use(codeRoute);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log("Server started")
})