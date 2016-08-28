//task2 
//Напишите полифилл для метода remove для старых браузеров.
//Если у elem нет родителя – ничего не делает.
//Если есть – удаляет элемент из родителя.

if (!Element.prototype.remove) {
  Element.prototype.remove = function remove() {
    if(this.parentElement) {
      this.parentElement.removeChild(this);
    } 
  };
}

var elem = document.body.children[0].children[0];
elem.remove();