var age = prompt("age");
// var age;
// var pmpt = Number(prompt("age"));
var message = "";
// console.log(age);
// console.log("end setup");


//After several hours of trying to figure out a recursive function with if statements that would repeatedly ask the user for the correct type of age input intil it was given, I have decided to wait for the "while" loops lesson and hope that they can solve this kind of problem.
// function isValidAge() {
// 	if (pmpt < 0 || !Number(pmpt)){
// 		console.log(pmpt);
// 		console.log(requestValidAge());
// 	} else {
// 		return pmpt;
// 	}
// }
// function requestValidAge (){
// 	var input = prompt("Please enter a valid age.");
// 	if (input <0 || !Number(input)){
// 		console.log(input);
// 		requestValidAge();
// 		console.log(input);
// 	}else{
// 		console.log(input);
// 		return input;
// 		// return 1;
// 	}
// 	console.log(input);
// 	return input;
// }
// age = requestValidAge();
// console.log(isValidAge(age));
// age = isValidAge(age);

if (age <0 || !Number(age)){
	age = prompt("Please enter a valid age.");
}

if (age == 21){
	message = message + "happy 21st birthday!! ";
}

if (age%2 == 1){
	message = message + "your age is odd ";
}

if (Math.sqrt(age)%1 == 0){
	message = message + "perfect square";
}

console.log(Math.sqrt(age)%1);

console.log(message);
alert(message);