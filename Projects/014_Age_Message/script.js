var input = prompt("age");
var age;
var message = "";
console.log(input);
console.log(age);
console.log("end setup");


//This method of testing for a valid age excedes what had been taught in the class so far.  However, experiance has taught me that allowing for bad inputs is a recipe for disaster.
function isValidAge(input) {
	if (input < 0 || !Number(input)){
		input = prompt("Please enter a valid age.");
		isValidAge(input);
		console.log(input);
		console.log(age);
		console.log("end function")

	} else {
		age = input;
	}
}
// console.log(isValidAge(input));

console.log(age);

if (
	isValidAge(input) && 
	age == 21){
	message = message + "happy 21st birthday!! ";
}

console.log(age);


if (
	isValidAge(input) && 
	age%2 == 1){
	message = message + "your age is odd";
}


console.log(message);
alert(message);