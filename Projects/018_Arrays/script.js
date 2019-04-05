function printReverse (array){
	for(var l = array.length-1; l>=0; l--){
		console.log(array[l]);
	}
}

function isUniform(array){
	var test = array[0];
	array.forEach(function(item){
		if(test === item){
			return true;
		}else{
			return false;
		}
	});
}

function sumArray(array){
	var sum = array[0];
	array.forEach(function(num){
		sum += num;
	});
}

function max(array){
	var max = array[0];
	array.forEach(function(num){
		if(num > max){
			max = num;
		}
	});
}