const express = require('express');
const chalk = require('chalk')
const debug = require('debug')('app');
const morgan = require('morgan');
const app = express();
const port = process.env.PORT;
const path = require('path');

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "/public/")));

app.get("/", (req, res) => {

    res.send('Hello arm ??');

})

app.listen(port, () => {
    console.log("Listening on port" + chalk.red(" : " + port));
})