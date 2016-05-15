var numbers = [1,2,3,4,5,6];
var people = ["bob", "joe", "laura"];



//__________________________

var modArr = numbers.map(addfive);

function addfive(i){
	return i + 5;
}


//__________________________

var modArr2 = people.map(greetings);

function greetings(i){
	return "hello "+i;
}


//__________________________


var modArr3 = numbers.map(square);

function square(n){
	return n * n;
}

//_______________

var modArr4 = people.map(Thanks);

function Thanks(i){
	return "Thanks for playing " + i;
}






console.log(modArr);
console.log(modArr2);
console.log(modArr3);
console.log(modArr4);