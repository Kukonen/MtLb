express = require('express');

const app = express();

app.use(express.json())
app.use(express.static('files'));


// routes
const codeRoute = require('./routes/code.route');

app.use(codeRoute);

app.listen(3000, () => {
    console.log("Server started")
})