const express = require('express');
const chalk = require('chalk')
const debug = require('debug')('app');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT;
const productsRouter = require("./src/router/productsRouter")
const path = require('path');
const { resolveSoa } = require('dns');

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "/public/")));

app.set("views","./src/views");
app.set("view engine", "ejs");


app.use("/products", productsRouter)

app.get("/", (req, res) => {

    res.render('index',{username: 'Arm55+' , customers : ["arm","armm","armmm"]});

})

app.listen(port, () => {

    console.log("Listening on port" + chalk.red(" : " + port));

})