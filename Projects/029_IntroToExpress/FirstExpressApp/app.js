var express = require("express");
var app = express();


// "/" => "Hi"
app.get("/",function(req,res){
    res.send("Hi");
})

// "/bye" => "Bye"
app.get("/bye",function(req,res){
    res.send("bye");
})

// "/dog" => Woof
app.get("/dog",function(req,res){
    console.log("sent dog")
    res.send("Woof");
})

app.get("*", function(req,res){
    res.send("ERR");
});

app.listen(3000);