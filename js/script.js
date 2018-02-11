window.onload = function() {
  console.log('The page is fully loaded.');
  // the rest of the script
}



var buttons = document.getElementsByClassName('button');
var quantity = buttons.length;

for (var i=0; i < quantity; i++) {
	var inButton = buttons[i].innerText;
	alert(inButton)
}







/*var itemsByTagName = document.getElementsByTagName('li');
console.log(itemsByTagName);

var navigation = document.getElementById('nav');
var newElem = document.createElement('p');
newElem.innerHTML = 'The text inside the p tag, which is under newElem';
navigation.appendChild(newElem);
console.log(newElem);
/*console.log(location);
window.location = 'http://www.kodilla.pl';*/