//task1
  	//	console.log(document.documentElement.children[0]);
   	//	console.log(document.documentElement.firstChild);
    //  console.log(document.head);
   	//	console.log(document.body.children[1]);
   	//	console.log(document.body.children[1].children[1]);


//task2
    /*var element = document.body.children[1].children[1];
    console.log(element.childNodes);
    console.log(element.childNodes.length);
   	if (!element.childNodes.length) 
		console.log("Emty element");
   	//or
   	//if (!element.firstChild) 
   	//	console.log("Emty element");
   	//or
   	//if (!element.lastChild) 
   	//	console.log("Emty element");*/
    //or
    //console.log(element.hasChildNodes());
    //if ( !element.hasChildNodes() ) 
    //    console.log("Emty element");*/

 //task3
 //var element = document.body.children[2].children[0];
 //console.log(element);
/* for (var i = 0; i < element.children.length; i++) {
 	element.children[i].children[i].style.backgroundColor = 'red'; 		
 	} */
//or
var table = document.body.children[2];
for (var i = 0; i < table.rows.length; i++) {
	table.rows[i].cells[i].style.backgroundColor = "red";
}
