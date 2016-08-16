/////---------------------Global Objects Замыкания
//task1
/*function sum(a) {
  return function(b) {
    return a + b; 
  };
}
console.log(sum(1)(2));
console.log(sum(5)(-1));

*/
//task2-3
/*function makeBuffer(){
  var buffer = "";
  function funcBuffer(){
    if(arguments[0] == undefined)
      return buffer;
    buffer += arguments[0];
  }
  funcBuffer.clear = function(){
    buffer = "";
  }
  return funcBuffer;
}
//or
//function makeBuffer(){
//  var buffer = "";
//  return function(){
//    if (arguments[0] == undefined) 
//      return buffer;
//
//    buffer +=arguments[0];
//  }
//}
//or
//function makeBuffer(){
//  var buffer = "";
//  return function(piece){
//    if (arguments.length == 0) 
//      return buffer;
//    buffer +=piece;
//  }
//}
var buffer = makeBuffer();
var buffer2 = makeBuffer();
// добавить значения к буферу
buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');
buffer2(0);
buffer2(1);
buffer2(0);

// получить текущее значение
console.log(buffer()); // Замыкания Использовать Нужно!
console.log(buffer2()); // 010
buffer2.clear();
console.log(buffer2()); // */

//task4
/*var users = [{
  name: "Вася",
  surname: 'Иванов',
  age: 20
}, {
  name: "Петя",
  surname: 'Чапаев',
  age: 25
}, {
  name: "Маша",
  surname: 'Медведева',
  age: 18
}];
//byField = function(field) {
//  return function(a, b){
//      return a[field] > b[field] ? 1 : -1;
//  };
//};
//or
function byField(field) {
  return function(a, b){
      return a[field] > b[field] ? 1 : -1;
  };
};
users.sort(byField("age"));
users.forEach(function(user) {
  console.log( user.age );
})*/

//task5
/*var arr = [1, 2, 3, 4, 5, 6, 7];

function filter(arr, func) {
  var newArray = [];
  arr.forEach (function(item, i, arr) {
    if(func(item)) {
      newArray.push(item);
    }
  });
  return newArray;
  filter.inBetween = function(a, b) {
    if(a <= item <= b){
      return true;
    }
  }
}

function inBetween(a, b) {
  return function(x) {
    return x >= a && x <= b;
  }
}

function inArray(array) {
  return function(x) {
//    for(var i = 0; i < array.length; i++){
//      if(x == array[i])
//        return true;
//    }
    //or
     return array.indexOf(x) != -1;
  }
}


console.log(filter(arr, function(a) {
  return a % 2 == 0;
}));
console.log(filter(arr, inBetween(3, 6)));
console.log(filter(arr, inArray([1, 2, 10])));*/

//task6
//1
/*function makeArmy() {

  var shooters = [];

  for (var i = 0; i < 10; i++) {
    var shooter = function me() { // функция-стрелок
      console.log( me.i ); // выводит свой номер
    };
    shooter.i = i;
    shooters.push(shooter);
  }

  return shooters;
}
*/
//2
/*function makeArmy() {

  var shooters = [];

  for (var i = 0; i < 10; i++) {

    var shooter = (function(x) {

      return function() {
        console.log( x );
      };

    })(i);

    shooters.push(shooter);
  }

  return shooters;
}*/
//3
function makeArmy() {

  var shooters = [];

  for (var i = 0; i < 10; i++)(function(i) {

    var shooter = function() {
      console.log( i );
    };

    shooters.push(shooter);

  })(i);

  return shooters;
}

var army = makeArmy();

army[0](); // стрелок выводит 10, а должен 0
army[5](); // стрелок выводит 10...
// .. все стрелки выводят 10 вместо 0,1,2...9