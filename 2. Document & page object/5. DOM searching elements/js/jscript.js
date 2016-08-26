//task1

//1.Все элементы label внутри таблицы. Должно быть 3 элемента.
//var elems1 = document.getElementById("age-table").getElementsByTagName("label");
//var elems2 = document.querySelectorAll("table label");
//console.log(elems1, elems2);

//2.Первую ячейку таблицы (со словом "Возраст").
//var elems1 = document.getElementById("age-table").rows[0].cells[0];
//var elems2 = document.getElementById("age-table").getElementsByTagName("td")[0];
//console.log(elems1, elems2);

//3.Вторую форму в документе.
//var elems1 = document.body.children[0].children[2];
//var elems2 = document.getElementsByName("search-person");
//var elems3 = document.getElementsByTagName("form")[1];
//var elems4 = document.querySelectorAll("form")[1];
//console.log(elems1, elems2, elems3, elems4);

//4.Форму с именем search, без использования её позиции в документе.
//var elems1 = document.getElementsByName("search");
//var elems2 = document.getElementsByTagName("form")[0];
//var elems3 = document.querySelectorAll("form")[0];
//var elems4 = document.querySelector(".wrapper > form");
//var elems5 = document.querySelector("form[name = 'search']");
//console.log(elems1, elems2, elems3, elems4, elems5);

//5.Элемент input в форме с именем search. Если их несколько, то нужен первый.
//var elems1 = document.querySelector("form[name = 'search'] input");
//console.log(elems1);

//6.Элемент с именем info[0], без точного знания его позиции в документе.
//var elems1 = document.getElementsByName("info[0]")[0];
//console.log(elems1);

//7.Элемент с именем info[0], внутри формы с именем search-person.
//var elems2 = document.querySelector("form[name = 'search-person'] [name = 'info[0]']");
//console.log(elems2);

//task2
var liElement = document.getElementsByTagName("li");
for (var i = 0; i < liElement.length; i++){
  var liText = liElement[i].firstChild.data.trim();
  var chidrenCount = liElement[i].getElementsByTagName("li").length;
    console.log(liText + ":" + chidrenCount);
}