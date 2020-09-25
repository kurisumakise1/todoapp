var buttonadd = document.getElementById("buttonadd");
var buttondeleteall = document.getElementById("buttondeleteall");
i=0;
function addClick(){
    var textinput = document.querySelector("#textinput").value;
    console.log(textinput);
    var createddiv = document.createElement("div");
    createddiv.id="createddiv"+i;
    createddiv.className = "class1";
    var createdh3 = document.createElement("h3");
    createdh3.id = "createdh3"+i;
    createdh3.innerHTML = textinput;
    var createdbutton = document.createElement("input");
    createdbutton.setAttribute("type","button");
    createdbutton.setAttribute("value","Delete");
    createdbutton.id = "createdbutton"+i;
    if (textinput!=''){
        document.body.appendChild(createddiv);
        createddiv.appendChild(createdh3);
        createddiv.appendChild(createdbutton);
    }else {
        alert("Input can not be empty");
    }
    createdbutton.addEventListener('click',function(parameter){
        parameter.target.parentNode.remove();
    })
    ++i;
}
buttonadd.addEventListener('click',addClick);
buttondeleteall.addEventListener('click',function(){
    document.querySelectorAll(".class1").forEach(fonksiyon2);
    function fonksiyon2(item,index){
        document.getElementById(item.id).remove();
        console.log(item);
    };
})





