//---------------------digits----------------------------

//task1
/*function askNum() {
	var num;
	while (isNaN(num) || num == null)	{
		num = +prompt("Enter a number:", "");
	}
	return num;
}
*/
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
/*var min = askNum();
var max = askNum();*/
/*function genMinMax(min, max) {
	return Math.round((min - 0.5) + Math.random() * (max - min + 1));
}*/
//or
/*function genMinMax(min, max) {
	return Math.floor(min + Math.random() * (max - min + 1));
}
console.log(genMinMax(min, max));*/



/////-------------------string

//task1
/*function ucFirst(str) {
	var resultString;
	if(str.length == 0 || str == 0) return "Empty string";
	return resultString = str[0].toUpperCase() + str.slice(1);
//or
//	if(!str) return "Empty string";
//	return resultString = str[0].toUpperCase() + str.slice(1);
//
}
console.log(ucFirst("   "));*/


//task2
/*function checkSpam(str) {
	var target1 = "viagra", target2 = "xxx";
	if(~str.toLowerCase().indexOf(target1) || ~str.toLowerCase().indexOf(target2)) return true;
	return false;
}
console.log(checkSpam("Vka la  xxX la"));*/

//task3
/*function truncate(str, maxlength) {
	var resultString;
	if(str.length > maxlength){
		return resultString = str.slice(0, (maxlength - 3)) + "...";
	}
}

var str = "sfdgfdsgf sdghfdfgh df hdfg hdf";
console.log(truncate(str, 20));*/

//task4
/*function extractCurrencyValue(str) {
	return  +str.slice(1);
}
console.log(extractCurrencyValue("$120"));*/


////-----------------objects

/*var user = {};
user.name = "Вася";
user.surname = "Петорв";
for(var key in user){
	console.log(key);
}
console.log(user);
user.name = "Сергей";
console.log(user);
delete user.name;
console.log(user);
*/

//task1
/*function isEmpty(obj) {
  for(var key in schedule){
  	return false;
  }
  return true;
}
var schedule = {};
console.log(isEmpty(schedule)); // true
schedule["8:30"] = "подъём";
console.log(isEmpty(schedule)); // false*/

//task2
/*var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};
function salariesSum() {
	var totalSalaries = 0;
	for(var key in salaries){
		totalSalaries += salaries[key];
	}
	return totalSalaries;
}
console.log(salariesSum());*/


//task3
/*var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};

function getBiggestSalaries(){
	var name = "", maxSelery = 0;
	for(var key in salaries){
		if(maxSelery < salaries[key]){
			maxSelery = salaries[key];
			name = key
		}
	}
	return name || "No employees";
}
console.log(getBiggestSalaries());*/

//task4
/*var menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function isNumeric(num){
	return !isNaN(parseFloat(num)) && isFinite(num);	
}
function multiplyNumeric(menu) {
	for(var key in menu){
		if(isNumeric(menu[key]))
			menu[key] *= 2;
	}
}
console.log(menu);
multiplyNumeric(menu);
console.log(menu);
*/

/////////------------------array
//task1
/*arr = ["car", "shirt", "toy", "beer"];
function getLastElement(arr) {
	return arr[arr.length - 1];
}
console.log(getLastElement(arr));*/

//task2
/*function addLastElement() {
	arr.push("computer");
}
addLastElement();
console.log(arr);*/

//task3
/*var arr = ["jazz", "bluz"];
console.log(arr);
arr.push("rock-n-roll");
console.log(arr);
arr[arr.length - 2] = "classic";
console.log(arr);
console.log(arr.shift());
console.log(arr);
arr.unshift("rap", "reggy");
console.log(arr);*/

//task4
/*var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
function getRamdomElement(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}
console.log(getRamdomElement(arr));*/

//task5
/*var arr = [];
function askElement(){
	while(true) {
		var num = prompt("Enter a number:", "0");
		if (!isNumber(num)) break;
		fillArray(num);
	} 
}
function isNumber(num) {
	if (isNaN(num) || num === null || num === "")
		return false;
	return true;
}
function fillArray(num){
	arr.push(+num);
}
function arraySum(){
	askElement();
	var total = 0;
	for(var i = 0; i < arr.length - 1; i++){
		total += arr[i];
	}
	return total;
}
console.log(arraySum());
console.log(arr);*/

//task6
/*var arr = ["test", 2, 1.5, false];
//function find(arr, value){
//	for(var i = 0; i < arr.length - 1; i++){
//		if(value === arr[i]){
//			return i;
//		}
//	}
//	return -1;
//}
if([].indexOf){
	var find = function(arr, value){
		return arr.indexOf(value);
	}
} else {
	var find = function(arr, value){
		for(var i = 0; i < arr.length - 1; i++){
			if(arr[i] === value) return i;			
		}
	return -1;
	}
}
console.log(find(arr, "test")); // 0
console.log(find(arr, 2)); // 1
console.log(find(arr, 1.5)); // 2
console.log(find(arr, 0)); // -1*/


//task7
/*var arr = [5, 4, 3, 8, 0];
function filterRange(arr, a ,b){
	var Narr = [];
	for(var i = 0; i < arr.length -1; i++){
		if(a <= arr[i] && arr[i] <= b) Narr.push(arr[i]);
	}
	return Narr;
}
console.log(filterRange(arr, 3, 5));
console.log(arr);*/

//task8
/*var arr = [];
for (var i = 2; i < 100; i++) {
  arr[i] = true;
}
console.log(arr);
var p = 2;
do {
  for (i = 2 * p; i < 100; i += p) {
    arr[i] = false;
  }
  console.log(arr);
  for (i = p + 1; i < 100; i++) {
    if (arr[i]) break;
  }
  p = i;
} while (p * p < 100); 

var sum = 0;
for (i = 0; i < arr.length; i++) {
  if (arr[i]) {
    sum += i;
  }
}
console.log(sum);*/

//task9
/*function getMaxSubSum(arr){
	var resuslt = 0;
	for(var i = 0; i < arr.length; i++){
		var partialSum = 0;
		console.log("arr[i] = " + arr[i] + " partialSum = " + partialSum);
		for(var j = i; j < arr.length; j++){
			partialSum += arr[j];
			console.log("arr[j] = " + arr[j] + " partialSum = " + partialSum);
			resuslt = Math.max(resuslt, partialSum);
			console.log("resuslt = " + resuslt);
		}
	}
	return resuslt;
}
console.log(getMaxSubSum([-1, 2, 3, -9])); // 5
console.log(getMaxSubSum([-1, 2, 3, -9, 11])); // 11
console.log(getMaxSubSum([-2, -1, 1, 2])); // 3
console.log(getMaxSubSum([1, 2, 3])); // 6
console.log(getMaxSubSum([100, -9, 2, -3, 5])); // 100*/
///or
/*function getMaxSubSum(arr) {
  var maxSum = 0,
    partialSum = 0;
  for (var i = 0; i < arr.length; i++) {
    partialSum += arr[i];
    maxSum = Math.max(maxSum, partialSum);
    console.log("arr[i] = " + arr[i] + " partialSum = " + partialSum + " maxSum = " + maxSum);
    if (partialSum < 0) partialSum = 0;
  }
  return maxSum;
}

console.log(getMaxSubSum([-1, 2, 3, -9])); // 5
//console.log(getMaxSubSum([-1, 2, 3, -9, 11])); // 11
//console.log(getMaxSubSum([-2, -1, 1, 2])); // 3
//console.log(getMaxSubSum([100, -9, 2, -3, 5])); // 100
//console.log(getMaxSubSum([1, 2, 3])); // 6
//console.log(getMaxSubSum([-1, -2, -3])); // 0*/

///////-----------method of array
var user = {
  name: "Петя",
  age: 30
}

var keys = Object.keys(user);

console.log( keys ); // name, age