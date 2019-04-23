//Movie Data base array
// Array Movies
//Movie Object
// Title-string
// rating-number
// has watched-boolean
//Loop through, log to console

var movies = [
{
	title: "Guardians of the Galaxy",
	rating: 5,
	haveSeen: true,
},
{
	title: "Master and Commander",
	rating: 4.5,
	haveSeen: true,
},
{
	title: "Back to the Future",
	rating: 4,
	haveSeen: false,
},
{
	title: "Captian America: Winter Soilder",
	rating: 2,
	haveSeen: false,
},
{
	title: "What Happened to Monday",
	rating: 4,
	haveSeen: true,
}
];

movies.forEach(function(movie){
	var seen = "You have ";
	if(movie.haveSeen === true){
		seen += "watched \"";
	}else{
		seen += "not seen \"";
	}

	seen += movie.title + "\" - " + movie.rating;

	console.log(seen);

});
