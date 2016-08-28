/* a.href = '/';

console.log( 'атрибут:' + a.getAttribute('href') ); // '/'
console.log( 'свойство:' + a.href );  // полный URL


  // работа с checked через атрибут
  console.log( input.getAttribute('checked') ); // пустая строка
  input.removeAttribute('checked'); // снять галочку

  // работа с checked через свойство
  console.log( input.checked ); // false <-- может быть только true/false
  input.checked = true; // поставить галочку*/

 // console.log( input.value );
 // input.value = "new";
 // console.log( input.value );
 // console.log( input.getAttribute("value") );


//task1
/*var divEl = document.getElementById("widget");
var widgetNameP = divEl.dataset.widgetName;
var widgetNameA = divEl.getAttribute("data-widget-name");
console.log(divEl + " " + widgetNameP + " " + widgetNameA);*/

//task2
/*var a = document.querySelectorAll("a");
for (var i = 0; i < a.length; i++) {
  var hrefAttrb = a[i].getAttribute("href");
  if(!hrefAttrb) continue;
  if ( ((~hrefAttrb.indexOf("http://")) || (~hrefAttrb.indexOf("ftp://"))) && hrefAttrb.indexOf("http://internal.com"))
      a[i].classList.add("external")
}

//or
var links = document.querySelectorAll('a');
for (var i = 0; i < links.length; i++) {
  var a = links[i];
  var href = a.getAttribute('href');
  if (!href) continue; // нет атрибута
  if (href.indexOf('://') == -1) continue; // без протокола
  if (href.indexOf('http://internal.com') === 0) continue; // внутренняя
  a.classList.add('external');
}
//or */

// ищем все ссылки, у которых в href есть протокол,
// но адрес начинается не с http://internal.com
var css = 'a[href*="://"]:not([href^="http://internal.com"])';
var links = document.querySelectorAll(css);

for (var i = 0; i < links.length; i++) {
  links[i].classList.add('external');
}