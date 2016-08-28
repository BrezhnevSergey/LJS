//task1
/*(function() {

  // проверяем поддержку
  if (!Element.prototype.matches) {

    // определяем свойство
    Element.prototype.matches = Element.prototype.matchesSelector ||
      Element.prototype.webkitMatchesSelector ||
      Element.prototype.mozMatchesSelector ||
      Element.prototype.msMatchesSelector;

  }

})();*/

//task2

/*(function() {

  // проверяем поддержку
  if (!Element.prototype.closest) {

    // реализуем
    Element.prototype.closest = function(css) {
      var node = this;

      while (node) {
        if (node.matches(css)) return node;
        else node = node.parentElement;
      }
      return null;
    };
  }

})();*/

//task3

(function() {

  // проверяем поддержку
  if (!document.documentElement.textContent === undefined) {

    // реализуем
    Object.defineProperty(this, "textContent", {
    	get: function() {
    		return this.innerText;
    	},

    	set: function(value) {
    		this.innerText = value;
    	}
    });
  }
 })();
