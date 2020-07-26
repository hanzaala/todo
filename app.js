
var list = document.getElementById("list");


function add(){
    var todo_item = document.getElementById("todo-item");
    var li =document.createElement('li');
    var litext = document.createTextNode(todo_item.value)
    li.appendChild(litext);
    




    var delbtn = document.createElement("button");
    var deltxt= document.createTextNode("DELETE")
    delbtn.appendChild(deltxt);
    li.appendChild(delbtn)
    delbtn.setAttribute("onclick","deleteval(this)")
    delbtn.setAttribute("id","del");
     var editbtn = document.createElement("button")
     var editxt = document.createTextNode("EDIT")
     editbtn.appendChild(editxt);
     li.appendChild(editbtn);
     editbtn.setAttribute("onclick","editVal(this)");
     editbtn.setAttribute("id","del");



    list.appendChild(li)
    todo_item.value = ""
}
 function deleteval(e){
      e.parentNode.remove();
}
function delall(){
    list.innerHTML=""
}
function editVal(e){
var val = e.parentNode.firstChild.nodeValue;
var editValue = prompt("enter edit value",val)
e.parentNode.firstChild.nodeValue=editValue;
}