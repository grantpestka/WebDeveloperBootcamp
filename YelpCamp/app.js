const express       = require("express"),
      app           = express(),
      bodyParser    = require("body-parser"),
      mongoose      = require("mongoose")

mongoose.connect("mongodb://localhost:27017/yelp_camp", { useNewUrlParser: true });
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

//SCHEMA SETUP
const campgroundSchema = new mongoose.Schema({
    name:   String,
    image:  String,
    description: String
});

const Campground = mongoose.model("Campground",campgroundSchema);

// Campground.create(
//     {
//         name: "Granite Hill", 
//         image: "https://www.photosforclass.com/download/flickr-7626464792",
//         description: "aodj;lodh;sdklam  ;osdhfalrdras asoidf hf wehofajf;s asdoaisd;sdfndk"
//     }, (err,campground)=>{
//         if(err){
//             console.log(err);
//         } else {
//             console.log("NEW CAMPGROUND:");
//             console.log(campground);
//         }
//     });

app.get("/",(req,res)=>{
    res.render("landing");
});

//INDEX
app.get("/campgrounds", (req,res)=>{
    //Get all campgrounds from DB
    Campground.find({},(err,allCampgrounds)=>{
        if(err){
            console.log(err);
        }else{
            res.render("index", {campgrounds: allCampgrounds});
        }
    })
});

//NEW
app.get("/campgrounds/new",(req,res)=>{
    res.render("new.ejs");
});

//CREATE
app.post("/campgrounds",(req,res)=>{
    // get data from form 
    let name = req.body.name;
    let image = req.body.image;
    let desc = req.body.description;
    let newCampground = {name: name, image: image, description: desc};
    //Create a new campground and save to DB
    Campground.create(newCampground, (err,created)=>{
        if(err){
            console.log(err);
        }else{
            // redirect back to campgrounds page
            res.redirect("/campgrounds");
        }
    });
})

//SHOW
app.get("/campgrounds/:id",(req,res)=>{
    //find campground with provided id
    Campground.findById(req.params.id, (err,foundCampground)=>{
        if(err){
            console.log(err);
        }else{
            //render show tmeplate with it
            res.render("show", {campground: foundCampground});
        }
    });
})

app.listen(3000, ()=>{
    console.log("YelpCamp Server Started");
});