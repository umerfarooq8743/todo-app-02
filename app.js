
var list=document.getElementById("list")
function addtodo(){
    var todoitem=document.getElementById("todo-item");
    var li=document.createElement('li');
    var litext=document.createTextNode(todoitem.value);
    li.appendChild(litext)
      // delete btn
    var delbtn=document.createElement('button');
    var deltext=document.createTextNode("Delete!!");
    delbtn.setAttribute('class',"btn btn-danger rounded-pill mx-5 my-2 ")
    delbtn.setAttribute("onclick","deleteitem(this)")
    delbtn.appendChild(deltext)
//edit button
var editbtn= document.createElement('button');
var edittext=document.createTextNode("Update!!");
editbtn.setAttribute('class',"btn btn-secondary rounded-pill ")
editbtn.setAttribute("onclick","edititem(this)")
editbtn.appendChild(edittext)


    li.appendChild(delbtn)
    li.appendChild(editbtn)
    list.appendChild(li)
   
    todoitem.value=""
}
function deleteitem(e){
    e.parentNode.remove()
}
function deleteall(){
    list.innerHTML =""
}
function edititem(e){
 var val=prompt("enter updated text",e.parentNode.firstChild.nodeValue)
 e.parentNode.firstChild.nodeValue = val;
}