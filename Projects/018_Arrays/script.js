function printReverse (array){
	for(var l = array.length-1; l>=0; l--){
		console.log(array[l]);
	}
}

function isUniform(array){
	var test = array[0];
	// array.forEach(function(item){
	// 	if(test === item){
	// 		return true;
	// 	}else{
	// 		return false;
	// 	}
	// });
	for(var i = 1; i < array.length; i++){
		if(test !== array[i]){
			return false;
		}
	}
	return true;
}

function sumArray(array){
	var sum = 0;
	array.forEach(function(num){
		sum += num;
	});
	return sum;
}

function max(array){
	var max = array[0];
	array.forEach(function(num){
		if(num > max){
			max = num;
		}
	});
	return max;
}