const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const request = require("request");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req,res){
    res.render("search");
})

app.get("/results", function(req,res){
    let search = req.query.search
    let url = "http://omdbapi.com/?s="+search+"&apikey=thewdb"
    request(url, function(error, responce, body){
        if(!error && responce.statusCode == 200){
            let data = JSON.parse(body);
            // res.send(results["Search"][0]["Title"]);
            res.render("results", {data: data});
        }
    });
});



app.listen(3000, function(){
    console.log("Movie Server Started");
});