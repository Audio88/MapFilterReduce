var numbers = [1,2,3,4,5,6,-12,-4,0,-8];
var people = ["bob", "joe", "laura"];

//___________________________


var positiveNumbers = numbers.filter(function(number){
	return number > 0;
});


var negativeNumbers = numbers.filter(function(number){
	return number < 0;
});

var namesWithO = people.filter(function(name){
	var letters = name.split("");
	for(var i=0; i<name.length; i++){	
		if (letters[i] === "o"){
			return true;
		}
	}
});

console.log(positiveNumbers);
console.log(negativeNumbers);
console.log(namesWithO);