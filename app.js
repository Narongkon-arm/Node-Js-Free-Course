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

productRouter.route("/").get((req, res) =>{
    res.render("products",
    {
        products:[
        {productTitle: 'น้ำยาล้างจาน', productDescription: 'น้ำยาล้างจานสูตร 1 ดีเลิศ', productPrice: 45},
        {productTitle: 'น้ำยาล้างจาน', productDescription: 'น้ำยาล้างจานสูตร 2 ดีเลิศ', productPrice: 35},
        {productTitle: 'น้ำยาล้างจาน', productDescription: 'น้ำยาล้างจานสูตร 3 ดีเลิศ', productPrice: 55},
        {productTitle: 'น้ำยาล้างจาน', productDescription: 'น้ำยาล้างจานสูตร 4 ดีเลิศ', productPrice: 65},
    ]}
    );

});

productRouter.route("/1").get((req, res) =>{
    res.send("Hello I 'm Products 1");
});

app.use("/products", productRouter)

app.get("/", (req, res) => {

    res.render('index',{username: 'Arm55+' , customers : ["arm","armm","armmm"]});

})

app.listen(port, () => {

    console.log("Listening on port" + chalk.red(" : " + port));

})