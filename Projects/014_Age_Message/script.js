var age = prompt("age");
var message = "";
console.log(age);
console.log("end setup");


//This method of testing for a valid age excedes what had been taught in the class so far.  However, experiance has taught me that allowing for bad inputs is a recipe for disaster.
function isValidAge(age) {
	if (age < 0 || !Number(age)){
		age = prompt("Please enter a valid age.");
		// console.log(age);
		isValidAge(age);
		// console.log(age);
		// console.log("repeat")
		// return "bad";
		return age;
	} else {
		console.log(age);
		console.log("end")
		// return 1;
		// return "good";
		return age;
	}
}

// console.log(isValidAge(age));
age = isValidAge(age);

console.log(age);

if (age == 21){
	message = message + "happy 21st birthday!! ";
}else{
	console.log("(21)"+age);
}

console.log(age);


if (age%2 == 1){
	message = message + "your age is odd";
}else{
	console.log("(odd)"+age);
}


console.log(message);
alert(message);