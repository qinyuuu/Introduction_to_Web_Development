var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/firefox2.png') {
      myImage.setAttribute ('src','images/firefox-icon.png');
	} else {
	  myImage.setAttribute ('src','images/firefox2.png');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name:');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Mozilla is Coooool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is Coooool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
