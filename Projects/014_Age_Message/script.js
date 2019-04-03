// var age = prompt("age");
var age;
var pmpt = prompt("age");
var message = "";
console.log(age);
console.log("end setup");


//This method of testing for a valid age excedes what had been taught in the class so far.  However, experiance has taught me that allowing for bad inputs is a recipe for disaster.
function isValidAge() {
	if (pmpt < 0 || !Number(pmpt)){
		console.log(pmpt);
		console.log(requestValidAge());
	} else {
		return pmpt;
	}
}

function requestValidAge (){
	var input = prompt("Please enter a valid age.");
	if (input <0 || !Number(input)){
		console.log(input);
		requestValidAge();
		console.log(input);

	}else{
		console.log(input);
		return input;
		// return 1;
	}
	console.log(input);
	return input;
}


age = isValidAge();
// age = requestValidAge();
console.log(age)
// console.log(isValidAge(age));
// // age = isValidAge(age);

// console.log(age);

// if (age == 21){
// 	message = message + "happy 21st birthday!! ";
// }else{
// 	console.log("(21)"+age);
// }

// console.log(age);


// if (age%2 == 1){
// 	message = message + "your age is odd";
// }else{
// 	console.log("(odd)"+age);
// }


// console.log(message);
// alert(message);