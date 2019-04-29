const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");


let campgrounds = [
    {name: "Salmon Creek", image: "https://www.photosforclass.com/download/flickr-321487195"},
    {name: "Granite Hill", image: "https://www.photosforclass.com/download/flickr-7626464792"},
    {name: "Mountian Goat's Rest", image: "https://www.photosforclass.com/download/flickr-5641024448"}
]

app.get("/",(req,res)=>{
    res.render("landing");
});

app.get("/campgrounds", (req,res)=>{
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.get("/campgrounds/new",(req,res)=>{
    res.render("new.ejs");
});

app.post("/campgrounds",(req,res)=>{
    // get data from form and add to campgrounds array
    let name = req.body.name;
    let image = req.body.image;
    let newCampground = {name: name, image: image};
    campgrounds.push(newCampground);

    // redirect back to campgrounds page
    res.redirect("/campgrounds");
})

app.listen(3000, ()=>{
    console.log("YelpCamp Server Started");
});