const express = require("express");
const parser = require("body-parser");

const app = express();
app.use(parser.urlencoded({extended : true}));

app.get("/",function(req,res) {
    res.sendFile(__dirname+"\\index.html");
});

app.post("/",function(req,res) {
    let result = Number(req.body.num1) + Number(req.body.num2);
    res.send("Here is the result: "+result);
})

app.listen(3000);