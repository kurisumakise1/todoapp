var button = document.querySelector("#button1");
var deleteAllButton = document.querySelector("#button2");
i=0;
var b;
function deletingAllFunction(){
    document.querySelectorAll("div.class1").forEach(function2);
    function function2(item,index){
        document.getElementById("createddiv"+index).remove();
        document.location.reload(true);
    };
};
function deletingFunction(parameter){
    parameter.target.parentNode.parentNode.remove();
};
function clickingFunction() {
    var newToDo = document.querySelector("#input1").value;
    if(newToDo!=''){
        createddiv1 = document.createElement("div");
        document.body.appendChild(createddiv1);
        createddiv1.id = "createddiv"+i;
        createddiv1.className = "class1";
        createdh31 = document.createElement("h3");
        createdh31.innerHTML = String(newToDo);
        createddiv1.appendChild(createdh31);
        createdform1 = document.createElement("form");
        createdform1.id = "createdform"+i;
        createddiv1.appendChild(createdform1);
        createdbutton1 = document.createElement("input");
        createdbutton1.setAttribute("type","button");
        createdbutton1.setAttribute("value","Delete");
        createdbutton1.id = "createdbutton"+i;
        createdform1.appendChild(createdbutton1);
        document.getElementById("createdbutton"+i).addEventListener('click', deletingFunction);
        ++i;
    }else {
        window.alert("Input can not be empty!");
    };
};
button.addEventListener('click', clickingFunction);
deleteAllButton.addEventListener('click',deletingAllFunction);
