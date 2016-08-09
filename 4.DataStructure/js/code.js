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
//task1
/*var obj = {
  className: "open menu"
};
//function addClass(obj, cls){
//	var arr = obj.className.split(" ");
//	if(arr.indexOf(cls) == -1){
//		arr.push(cls);
//	}
//	obj.className = arr.join(" ");
//}
//orr
function addClass(obj, cls){
	var arr = obj.className.split(" ");
	for(var i = 0; i < arr.length; i++) {
		if(arr[i] == cls) return;
	}
	arr.push(cls);
	obj.className = arr.join(" ");
}
addClass(obj, "open");
console.log(obj);
addClass(obj, "menu");
console.log(obj);
addClass(obj, "mu");
console.log(obj);*/

//task2
/*function camelize(str){
	var arr = str.split("-");
	for(var i = 1; i < arr.length; i++){
		arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
	}
	return arr.join("");
}
console.log(camelize("background-color")); //'backgroundColor';
console.log(camelize("list-style-image")); // 'listStyleImage';
console.log(camelize("-webkit-transition")); // 'WebkitTransition'*/

//task3
/*var obj = {
  className: "open menu menu menu"
};
function removeClass(obj, cls) {
	var arr = obj.className.split(" ");
	for(var i = 0; i < arr.length; i++){
		if(arr[i] == cls) {
			arr.splice(i, 1);
			i--	;
		}
	}
	obj.className = arr.join(" ");
}
//removeClass(obj, 'open'); // obj.className='menu'
removeClass(obj, 'menu')
console.log(obj);
removeClass(obj, 'blabla'); // без изменений (нет такого класса)
console.log(obj);*/

//task4
/*var arr = [5, 3, 8, 1];
function filterRangeInPlace(arr, a, b){
	for(var i = 0; i < arr.length; i++){
		if(a <= arr[i] && arr[i] <= b){
			arr.splice(i, 1);
			i--;
		}
	}
}
console.log(arr);
filterRangeInPlace(arr, 1, 4);
console.log(arr);*/

//task5 
/*var arr = [5, 2, 1, -10, 8];
console.log(arr);
arr.sort(function (a, b){
	return b - a;
})
console.log(arr);*/


//task6
/*var arr = ["HTML", "JavaScript", "CSS"];
var arrSorted = [];
function arrSort(){
	//for(var i = 0; i < arr.length; i++) {
	//	arrSorted[i] = arr[i];
	//}
	//arrSorted.sort();
	arrSorted = arr.slice().sort();
}
arrSort();
console.log(arrSorted); // CSS, HTML, JavaScript
console.log(arr); // HTML, JavaScript, CSS (без изменений)*/


//task7
/*var arr = [1, 2, 3, 4, 5];
arr.sort(function (a, b){
	return Math.random() - 0.5;
});
console.log(arr);*/

//task8
/*var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var vovochka = { name: "Вовочка", age: 6 };

var people = [vasya, masha, vovochka];
people.sort(function (a, b){
	return a.age - b.age;
});
for(var i = 0; i < people.length; i++)
	console.log(people[i].name + ": " + people[i].age);
*/	

//task9
/*var list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};
//or
//var list = { value: 1 };
//list.next = { value: 2 };
//list.next.next = { value: 3 };
//list.next.next.next = { value: 4 };
function printList(list) {
	var tmp = list;
	while(tmp) {
		console.log(tmp.value);
		tmp = tmp.next;
	}
}
function printListRec(list) {
	console.log(list.value);
	if(list.next)
		printListRec(list.next);
}
function printReverseListRec(list) {
	if(list.next)
		printReverseListRec(list.next);

	console.log(list.value);
}
function printReverseList(list){
	var arr = [];
	var tmp = list;
  	while (tmp) {
    	arr.push(tmp.value);
    	tmp = tmp.next;
  	}
  	arr.reverse();
  	console.log(arr);
}
//printList(list);
//printListRec(list);
printReverseListRec(list);
//printReverseList(list);
//console.log(list);*/


//task10
/*var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];
function aclean(arr){
	var obj = {};
	for(var i = 0; i < arr.length; i++){
		var sorted = arr[i].toLowerCase().split("").sort().join();
		obj[sorted] = arr[i];
	}
	var resuslt = [];
	for(var key in obj)
		resuslt.push(obj[key]);
	return resuslt;
}
console.log(aclean(arr));*/


//task11
/*var strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", "8-()"];

function uniqueObj(arr) {
  var obj = {};
  for(var i = 0; i < arr.length; i++){
  	var word = arr[i];
  	obj[word] = true;
  }
  //var result = [];
  //for(var key in obj)
  //	result.push(key);
  //return result;
  //or
  return Object.keys(obj);
}
function uniqueFor(arr) {
  var result = [];
  nextInput:
    for (var i = 0; i < arr.length; i++) {
      var str = arr[i]; 
      for (var j = 0; j < result.length; j++) { 
        if (result[j] == str) continue nextInput; 
      }
      result.push(str);
    }
  return result;
}

console.log(uniqueObj(strings));
//console.log(uniqueFor(strings));*/

//////-------------Array iteration
//task1
/*var arr = ["Есть", "жизнь", "на", "Марсе"];
var arrLength = [];
//for (var i = 0; i < arr.length; i++) {
//  arrLength[i] = arr[i].length;
//}
arrLength = arr.map(function(array) {
	return array.length;
});
console.log(arrLength); // 4,5,2,5
*/
//task2
//arr = [1,2,3,4,5];
//arr = [-2,-1,0,1];
/*function getSums(arr) {
	function Process(prevArray, current, index, arr) {
		if(index == 0){
			var tmpArray = prevArray.concat(current);
		} else {
			var tmpArray = prevArray.concat(arr[index - 1] + current);
		}
		return tmpArray;
	}
	var resultArray = arr.reduce(Process, []);
	return resultArray;
}*/
/*function getSums(arr) {
	function Process(prevArray, current, index, arr) {
			var tmp = 0;
			for(var i = 0; i <= index; i++){
				tmp += arr[i];
			}
			var tmpArray = prevArray.concat(tmp);
		return tmpArray;
	}
	var resultArray = arr.reduce(Process, []);
	return resultArray;
}*/
/*function getSums(arr) {
	var array = [];
	if(!arr.length) return array;
	var resultArray = arr.reduce(function (sum, current){
		array.push(sum);
		return sum + current;
	});
	array.push(resultArray)
	return array;
}
console.log(getSums(arr));*/


//////-----------------arguments array
//task1
/*function f(x) {
	return arguments.length ? 1 : 0;
}
console.log(f(undefined)); // 1
console.log(f()); //0
console.log(f(1)); //1*/


//task2
/*function sum(){
	var result = 0;
	for(var i = 0; i < arguments.length; i++){
		result += arguments[i];
	}
	return result;
}
console.log(sum()); // 0
console.log(sum(1)); // 1
console.log(sum(1, 2)); // 3
console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2, 3, 4)); // 10*/

//task3 
/*var john = {
	name: "John",
	surname: "Smith",
	age: 25
};

var user = {
	isAdmin: false,
	isMailConfirm: true
};

var university = {
	university: "Cambridge"
}

function copy(dst) {
	for(var i = 1; i < arguments.length; i++){
		var arg = arguments[i];
		for(var key in arg) {
			dst[key] = arguments[key];
		}
	}
	return dst;
}

console.log(john, user, university);
console.log(copy (john, user, university));
console.log(john, user, university);*/


/////---------------------date object
/*var arr = [];
for (var i = 0; i < 1000; i++) arr[i] = 0;

function walkIn(arr) {
  for (var key in arr) arr[key]++;
}

function walkLength(arr) {
  for (var i = 0; i < arr.length; i++) arr[i]++;
}

function bench(f) {
  var date = new Date();
  for (var i = 0; i < 1000; i++) f(arr);
  return new Date() - date;
}

// bench для каждого теста запустим много раз, чередуя
var timeIn = 0,
  timeLength = 0;
for (var i = 0; i < 100; i++) {
  timeIn += bench(walkIn);
  timeLength += bench(walkLength);
}

console.log( 'Время walkIn: ' + timeIn + 'мс' );
console.log( 'Время walkLength: ' + timeLength + 'мс' );*/

/*var arr = [];
for (var i = 0; i < 1000; i++) arr[i] = 0;

function walkIn(arr) {
  for (var key in arr) arr[key]++;
}

function walkLength(arr) {
  for (var i = 0; i < arr.length; i++) arr[i]++;
}

function bench(f) {
  for (var i = 0; i < 10000; i++) f(arr);
}

console.time("All Benchmarks");

console.time("walkIn");
bench(walkIn);
console.timeEnd("walkIn");

console.time("walkLength");
bench(walkLength);
console.timeEnd("walkLength");

console.timeEnd("All Benchmarks");*/

//task1
/*var date = new Date(2012, 1, 20, 3, 12);
console.log(date);*/

//task2
/*var date = new Date(2012, 0, 3);
//function getWeekDays(date) {
//	var day = date.getDay();
//	switch (day) {
//		case 0:
//			return "вс";
//		case 1:
//			return "пн";
//		case 2:
//			return "вт";
//		case 3:
//			return "ср";
//		case 4:
//			return "чт";
//		case 5:
//			return "пт";
//		case 6:
//			return "сб";
//		default:
//			return "error";
//	}
//}
//or
//function getWeekDays(date) {
//	var days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
//	return days[date.getDay()];
//}
//or
function getWeekDays(date) {
	return date.toLocaleString('ru', {weekday: 'long'});
}
console.log(getWeekDays(date));*/

