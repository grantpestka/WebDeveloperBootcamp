function average(arr){
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum += arr[i]; 
    }
    var avg = Math.round(sum/arr.length);
    // console.log("sum = " + sum);
    console.log("avg = " + avg);
    // console.log("avg = " + arr.length);
    return avg;
}

var scores = [90,98,89,100, 100,86,94];
average(scores);

var scores2 = [40,65,77,82,80,54,73,63,95,49];

average(scores2);