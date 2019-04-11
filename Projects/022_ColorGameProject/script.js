var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square")
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");

init();


function changeColors(color){
	//loop through all squares
	for(var i = 0; i < squares.length; i++ )
	//change each color to match given color
	squares[i].style.backgroundColor = color;
}

function generatRandomColors(num){
	//make array
	var arr = [];
	//add num random colors to array
	//repeat num times
	for(var i = 0; i < num; i++){
		//create random color and push into arr
		arr.push(randomColor());
	}
	//return array
	return arr;
}

function init(){
	setupModeButtons();
	setupResetButton();
	setupSquares();
	reset();
}

function pickColor(){
	//randomly create index value of color to select
	var random = Math.floor(Math.random() * colors.length)
	return colors[random];
}

function randomColor(){
	//pick a red 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a green 0- 255
	var g = Math.floor(Math.random() * 256);
	//pick a blue 0- 255
	var b = Math.floor(Math.random() * 256);
	//create rgb color string
	var rgbColor = "rgb(" + r + ", " + g + ", " +b + ")"; 
 
	return rgbColor;
}

function reset(){
	//generate new colors
	colors = generatRandomColors(numSquares);
	//pick a new picked color
	pickedColor = pickColor();
	
	
	//update header 
	h1.style.backgroundColor = "steelblue";
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors"
	messageDisplay.textContent = ""
	//update Squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block"
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none"
		}
	}
}

function setupModeButtons(){
	//mode buttons event listeners
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			//figure out howmany squares to show
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
	
			reset();
		})
	}	
}

function setupResetButton(){
	resetButton.addEventListener("click", function(){
		reset();
	})
}

function setupSquares(){
	for(var i = 0; i < squares.length; i++){
		//add click listeners to squares
		squares[i].addEventListener("click", function(){
			//grab color of clicked square
			// alert(this.style.backgroundColor);
			var clickedColor = this.style.backgroundColor;
			//compare color to pickedColor
			if(clickedColor === pickedColor){
				//correct guess
				messageDisplay.textContent = "Correct!!";
				resetButton.textContent = "Play Again"
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
			}else{
				//incorrect guess
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again"
			}
		})
	}
}