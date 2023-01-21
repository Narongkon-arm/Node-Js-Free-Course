const express = require('express');
const chalk = require('chalk')
const debug = require('debug')('app');
const morgan = require('morgan');
const app = express();
const port = process.env.PORT;
const path = require('path');
const { resolveSoa } = require('dns');
const productRouter = express.Router();

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "/public/")));

app.set("views","./src/views");
app.set("view engine", "ejs");

productRouter.route("/").get((req,res) =>{
    res.send("Hello I 'm Products");
});

productRouter.route("/1").get((req,res) =>{
    res.send("Hello I 'm Products 1");
});

app.use("products", productRouter)

app.get("/", (req, res) => {

    res.render('index',{username: 'Arm55+' , customers : ["arm","armm","armmm"]});

})

app.listen(port, () => {

    console.log("Listening on port" + chalk.red(" : " + port));

})