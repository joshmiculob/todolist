// add items on the list. 
function newItem() {
    var li = document.createElement("li"); // variable for new element "li". 
    var inputValue = document.getElementById("itemInput").value; // gets the value of the text box. 
    var t = document.createTextNode(inputValue); // creates a new node for the new item.
    li.className = "item"
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
    var close = document.getElementsByClassName("delete"); //get the class name of SPAN. 
    var i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
        var remove = this.parentElement;
        remove.style.display = "none";
        }
    }

    // This removes an item off the Item section and move it to the completed section.
    var item = document.getElementsByClassName("item"); 
    for (var i = 0; i < item.length; i++) {
        var j = document.createElement("li"); 
        item[i].onclick = function() {
            var l = document.createElement("li");
            var n = document.createTextNode(item); 
            l.appendChild(n);
            j.appendChild(l); 
        }
        console.log(document.getElementById("cItems").appendChild(j));
    } 
}



/*
document.getElementsByTagName("UL").addEventListener("click", checkItem()); 
function checkItem(item) {
    if(item.target.tagName === "LI") {
        var i = document.getElementsByTagName("LI");
        var n = document.createTextNode(i); 
        done.appendChild(n);
    }
    console.log(document.getElementById("cItems").appendChild(item));
}
 */