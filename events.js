// create a delete button and append item on each lists.
/*
var myNodeList = document.getElementsByTagName("LI");
var i; 
for (i = 0; i < myNodeList.length; i++) {
    var span = document.createElement("SPAN"); 
    var btnD = document.createTextNode("\u00D7"); 
    span.className = "delete"; 
    span.appendChild(btnD);
    myNodeList[i].appendChild(span); 
}
*/

// Click on a close button to hide the current list item
/*
var close = document.getElementsByClassName("delete");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}
*/

// add items on the list. 
function newItem() {
    var li = document.createElement("li"); // variable for new element "li". 
    var inputValue = document.getElementById("itemInput").value; // gets the value of the text box. 
    var t = document.createTextNode(inputValue); // creates a new node for the new item.
    li.appendChild(t); // new item added on the bottom of the list.

    if(inputValue === '') {
        alert("You must add an item!"); // message pops up when no value. 
    } else {
        document.getElementById("aItems").appendChild(li); // creating new "li" element to the list - adding new item. 
    }
    document.getElementById("itemInput").value = ""; // making the text field empty.

    // creates a "X" button to delete items off the lists.
    var span = document.createElement("SPAN"); 
    var txt = document.createTextNode("\u00D7"); 
    span.className = "delete"; 
    span.appendChild(txt); 
    li.appendChild(span); 

    // deletes the item off the lists. 
    var close = document.getElementsByClassName("delete");
    var i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
        var remove = this.parentElement;
        remove.style.display = "none";
        }
    }
}

// completed items added on complete section. 
document.getElementsByTagName('LI').onclick = function() {
    checkItem()
}; 

function checkItem() {
    var l = document.createElement("li"); // variable for new element "li". 
    var v = document.getElementById("itemInput").value; // gets the value of the text box. 
    var tl = document.createTextNode(v); // creates a new node for the new item.
    l.appendChild(tl); 
}