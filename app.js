const express = require('express');
const app = express();

const path = require("path");

const routersMain = require("./routers/main");

app.use(express.static("public"));

app.use("/", routersMain);




app.listen(3000, ()=>{
    console.log("Servidor funcionando");
})