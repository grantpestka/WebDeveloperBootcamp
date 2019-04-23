//Change the color of the background of the body between 2 colors when the button is clicked
var button = document.querySelector("button");
button.addEventListener("click",function() {
	var bodyColor = document.querySelector("body").style.background;
	if (bodyColor !== "green"){
		document.querySelector("body").style.background = "green";
	}else{
		document.querySelector("body").style.background = "blue";
	}
	 
})