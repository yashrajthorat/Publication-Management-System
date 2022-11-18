const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const encoder = bodyParser.urlencoded();

const app = express();
app.use("/assets",express.static("assets"));


const connection =mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database:"nodejs"
});

// connect to the database 
connection.connect(function(error){
    if (error) throw error
    else console.log("connected to the database successfully!")
});

app.get("/",encoder,function(req,res){
    var user_name = req.body.username;
    var user_password = req.body.password;
    res.sendFile(__dirname + "/index.html");
})

app.post("/",function(req,res){
    connection.query("select * from loginuser where user_name = ? and user_password = ?",function(error,results,fields){
        if (results = results){
            res.redirect("/index.html")
        } else{
            res.redirect("/");
        }
        res.end();
    })
})

app.get("/index", function (req,res){
    res.sendFile(__dirname + "/index.html")
})


app.listen(3306);


