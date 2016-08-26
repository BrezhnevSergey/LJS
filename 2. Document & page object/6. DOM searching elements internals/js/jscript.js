//task3
/*
function bench(f ,times) {
	var d = new Date();
	for (var i = 0; i < times; i++) f();
	return new Date() - d;
}

function runGet() {
	var result = document.getElementsByTagName("li");
	for (var i = 0; i < result.length; i++)
		result[i];
}

function runQuery() {
	var result = document.querySelectorAll("li");
	for (var i = 0; i < result.length; i++)
		result[i];
}

console.log(bench(runGet, 1000));
console.log(bench(runQuery, 1000));
*/

//task4
var ul = document.body.children[0].children[0];
console.log(ul);
var li = ul.getElementsByTagName("li")[1];
var lii = ul.querySelectorAll("ul > li:nth-child(2)");
console.log(li);
console.log(lii);