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