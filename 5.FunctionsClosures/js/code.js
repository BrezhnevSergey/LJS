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
  function Buffer(){
    if(arguments[0] == undefined)
      return buffer;
    buffer += arguments[0];
  }
  Buffer.clear = function(){
    buffer = "";
  }
  return Buffer;
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
var users = [{
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
})