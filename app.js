var addBtn = document.getElementById("addition");
var todoItem = document.getElementById("todo-item");
var list = document.getElementById("list");
function addition() {
    var task = todoItem.value;

    // creating li 
    var li = document.createElement("li");
    var liText = document.createTextNode(todoItem.value);
    li.setAttribute("class" , "mylist")
    li.appendChild(liText);
    list.appendChild(li);


    // creating delete button
    var delButton = document.createElement("button")
    var delText = document.createTextNode("DELETE");
    delButton.setAttribute("class" , "delete-button")
    delButton.setAttribute("onclick", "deleteText(this)")
    delButton.appendChild(delText);
    li.appendChild(delButton);



    todoItem.value = "";
}

function deleteText(element) {
    var listItem = element.parentNode;
    listItem.parentNode.removeChild(listItem);
}
