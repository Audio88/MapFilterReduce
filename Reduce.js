//_______________________global variables

var numbers = [1,2,3,4,5,6];
var people = ["bob", "joe", "laura"];

//_______________________

var modArray = numbers.reduce(function(a, b){
	return a + b;
});


//_______________________

var modArray2 = numbers.reduce(function(a, b){
	return a * b;
});


//_______________________

var modArray3 = numbers.reduce(function(a, b){
	return a + a b;
});


//_______________________

console.log(modArray);
console.log(modArray2);
console.log(modArray3);
