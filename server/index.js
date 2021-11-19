require('dotenv').config()
express = require('express');

const app = express();

app.use(express.json())
app.use(express.static('files'));


// routes
const codeRoute = require('./routes/code.route');

app.use(codeRoute);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log("Server started")
})