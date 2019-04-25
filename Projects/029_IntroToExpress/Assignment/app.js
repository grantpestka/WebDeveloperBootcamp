var express = require("express");
var app = express();

// "/" => "Hi"
app.get("/",function(req,res){
    res.send("Hi there, welcome to my assignment!");
})

// "/speak/:aminal"
app.get("/speak/:animal",function(req,res){
    var sounds = {
        "pig":  "Oink",
        "cow":  "Moo",
        "dog":  "Woof Woof",
        "cat":  "Meow",
        "goat": "Baagh"
    }
    var animal = req.params.animal.toLowerCase();
    res.send("The " + animal + " says '" + sounds[animal] + "'");
})

// "/repeat/:word/:times"
app.get("/repeat/:word/:times", function(req,res){
    var repeat = "";
    var word = req.params.word;
    var times = Number(req.params.times);

    for(var i = 0; i < times; i++){
        repeat += word + " ";
    }

    res.send(repeat);
});

app.get("*", function(req,res){
    res.send("Sorry, page not found...");
});

app.listen(3000);