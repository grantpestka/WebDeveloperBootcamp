function isEven(num){
	return num % 2 === 0;
}

alert(isEven(4));


function factorial (num){
	var fac = 1;
	for (var i = 1; i <= num ; i++) {
		 fac = i * fac;
		 console.log(fac);
	}
	return fac;
}

alert(factorial(7));


function kebabToSnake(str){
	var snk = str.replace(/-/g,"_");
	return snk;
}

alert(kebabToSnake("hello-world-again"));