//task4
var doc = document;
console.log(doc.nodeType);
alert(doc);
console.log(doc.constructor);
console.dir(doc);
console.log(HTMLDocument.prototype.constructor); // function HTMLDocument
console.log(HTMLDocument.prototype.__proto__.constructor); // function Document
console.log(HTMLDocument.prototype.__proto__.__proto__.constructor); // function Node
