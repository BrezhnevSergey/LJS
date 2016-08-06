//-----------function


//task 1
/*function checkAge(age) {
	return result = age > 18 ? true : confirm("Родители разрешили?");
}
function checkAge(age) {
	return age > 18 || confirm("Родители разрешили?"); 
}

console.log(checkAge(15));
console.log(checkAge(20));*/


//task2
/*function min(a, b){
	return a < b ? a : b;
}

console.log(min(2, 5));
console.log(min(3, -1));
console.log(min(1, 1));*/


//task3
/*function askNum() {
	var a, b;
	while(isNaN(a) || +a == null || a < 1) {
		a = +parseInt(prompt("Enter first number:", ""));
	}
	while(isNaN(b) || +b == null || b < 1) {
		b = +parseInt(prompt("Enter second number:", ""));
	}
	return [a, b];
}
var result = askNum();
var a = result[0];
var b = result[1];
function pow(a, b) {
	for(var i = 1; i < b; i++) {
		a *= a;
	}
	return a;
}

console.log(pow(a, b));	*/


//----------------recursion

//task1
function askNum() {
	var number;
	while(isNaN(number) || +number == null || number < 1) {
		number = +parseInt(prompt("Enter number:", ""));
	}
	return number;
}
var number = askNum();

/*function sumToFor(number) {
	var result = 0;
	for (var i = 1; i <= number; i++) {
		result += i;
	}
	return result;
}

function sumToRec(number) {
	return number < 1 ? 0 : number + sumToRec(number - 1);
}

function sumToFormula(number){
  return number * (number + 1) / 2;
}

console.log(sumToFor(number));
console.log(sumToRec(number));
console.log(sumToFormula(number));*/

//task2
/*function factorial(number) {
	return number == 1 ? 1 : number * factorial(number - 1);
}
console.log(factorial(number));*/


//task3
/*function fibonachiRec(number){
	return number <= 1 ? number : fibonachiRec(number - 1) + fibonachiRec(number - 2);
}

function fibonachiFor(number) {
	var a = 0, b = 1, c;
	for (var i = 1; i < number; i++){
		c = a + b;
		a = b;
		b = c;
	}
	return b;
}

console.log(fibonachiRec(number));
console.log(fibonachiFor(number));*/


//task4
var f = function fibonachiRec(number) {
	return number <= 1 ? number : fibonachiRec(number - 1) + fibonachiRec(number - 2);
}

var g = f;
f = null;
//console.log(f(number));
console.log(g(number));


(function m() {alert("Hi");})

m();

