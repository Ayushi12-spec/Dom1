var form=document.getElementById("addForm");
var a=document.getElementById("items");
form.addEventListener("submit",addItem)
function addItem(e){
    e.preventDefault();

var work=document.getElementById("item").value; //Jo b value dalngy vo work var m ajygi when we click on submit
var childLi=document.createElement("li");
childLi.className="list-group-item";
childLi.appendChild(document.createTextNode(work));
a.appendChild(childLi);
var b=document.createElement("button");
b.className="btn btn-danger btn-sm float-right delete";
b.appendChild(document.createTextNode("X"));
childLi.appendChild(b);
var editButton=document.createElement("button");
editButton.className="btn btn-info btn-sm float-right";
editButton.appendChild(document.createTextNode("Edit"));
childLi.appendChild(editButton);
}
a.addEventListener("click",removeItem);
function removeItem(e){
    if(e.target.classList.contains("delete")){
        if(confirm("Are you sure?")){
            var childLi=e.target.parentElement;
            a.removeChild(childLi);
        }
    }
}