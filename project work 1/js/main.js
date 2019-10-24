//date variable
var dateElement = document.getElementById("date");

//show the date
var options = {weekday: "long", month: "long", day: "numeric"};
var today = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-US", options);

//TODO code starts here

// Click on a close button to hide the current list item
//this deletes the example list items, needs better code?
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
		var div = this.parentElement;
		div.style.display = "none";
  }
}

//create a new note when clicking on the 'Add' button
function addNote() {
	var li = document.createElement("li");
	var inputValue = document.getElementById("input-field").value;
	var t = document.createTextNode(inputValue);
	li.appendChild(t);

	var span = document.createElement("SPAN");
	 var txt = document.createTextNode("\u274C");
	 span.className = "close";
	 span.appendChild(txt);
	 li.appendChild(span);

	if (inputValue === "") {
		alert("Please write a note first");
	} else if (inputValue === "stupid bear" || inputValue === "stupid" || inputValue === "bear") { //display alert to user
		alert("The dancing polar bear is quite smart actually. It lives in a world of an ever-changing landscape. Hunting and surviving within an ice relief below water and on the surface demands a sharp memory.")
	} else {
		document.getElementById("note-list").appendChild(li);
	}
	document.getElementById("input-field").value = "";
	
	// Click on a close button to hide the current list item
	var close = document.getElementsByClassName("close");
	var i;
	for (i = 0; i < close.length; i++) {
	  close[i].onclick = function() {
			var div = this.parentElement;
			div.style.display = "none";
	  }
	}
}

//show and hide tips-div
function showHideTips() {
  var x = document.getElementById("tips-div");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
