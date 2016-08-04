//---------------------digits----------------------------

//task1
function askNum() {
	var num;
	while (isNaN(num) || num == null)	{
		num = +prompt("Enter a number:", "");
	}
	return num;
}

/*function sumTo(){
	return askNum() + askNum();
}

console.log(sumTo());*/


//task2
/*var n = 1.5;
var m = 1.35;
var k = 6.35;
console.log(n.toFixed(0));
console.log(m.toFixed(1));
console.log(k.toFixed(20));*/

//task3
/*var price01 = 0.1, price02 = 0.25;
console.log(+(price01 + price02).toFixed(2));*/

//task4
/*var i = 0;
while (i < 11) {
  i += 0.2;
  if (i > 9.7 && i < 10.4) {
  	alert(i);
  }
}*/

//task5
/*function getDecimal(num) {
	//if (num < 0) {
	//	return +(Math.ceil(num) - num).toFixed(2);
	//}
	//return +(num - Math.floor(num)).toFixed(2);
	var str = "" + num;
	var pos = str.indexOf(".");
	if(pos == -1) {return "Not a decimal";}
	else {return "0" + str.slice(pos);}
}
console.log(getDecimal(num));*/


//task6
/*function fib(num){
	var a = 1, b = 0, c;
	for (var i = 0; i < num; i++){
		c = a + b;
		a = b;
		b = c;
	}
	return b;
}
function fibRec(num){
	if (num == 0) {return 0;}
	else if (num == 1) {return 1;}
	return fibRec(num-1) + fibRec(num-2);
}
function fibBinet(num){
	var phi = ((1 + Math.sqrt(5)) / 2);
	return Math.round((Math.pow(phi, num)) / Math.sqrt(5));
}

console.log(fib(num));
console.log(fibRec(num));
console.log(fibBinet(num));*/

//task7
/*function max(num) {
	return Math.round(Math.random() * num);
}
console.log(max(num));*/

//task8
/*var min = askNum();
var max = askNum();
function genMinMax(min, max) {
	return Math.round(min + Math.random() * (max - min));
}
console.log(genMinMax(min, max));*/

//task9 
var min = askNum();
var max = askNum();
/*function genMinMax(min, max) {
	return Math.round((min - 0.5) + Math.random() * (max - min + 1));
}*/
//or
function genMinMax(min, max) {
	return Math.floor(min + Math.random() * (max - min + 1));
}
console.log(genMinMax(min, max));