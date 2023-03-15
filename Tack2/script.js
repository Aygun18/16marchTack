let input = document.querySelector(".todo-input");
let add = document.querySelector(".btn");
let list = document.querySelector("ul");
let errorMsg = document.querySelector(".errorMsg");
let count =document.querySelector("#count");
let clearAll = document.querySelector("#clear-all");
input.addEventListener("keyup",function (e) {
    if (e.target.value.length < 3 || e.target.value.trim()=="") {
        errorMsg.style.display = "inline";
        add.setAttribute("disabled","");

    }
    else {
        errorMsg.style.display = "none";
        add.removeAttribute("disabled","");   
    }

})
add.addEventListener("click",function (e) {
    e.preventDefault();
    let listItem = document.createElement("li");
    listItem.classList.add("list-group-item");
    listItem.classList.add("d-flex");
    listItem.classList.add("justify-content-between");
    listItem.classList.add("align-items-center");
 //------------------------------------------------------ 
    let span = document.createElement("span");
    span.classList.add("lead");
    span.textContent=input.value;
//----------------------------------------------------
    let btnDelete = document.createElement("button");
    btnDelete.classList.add("btn");
    btnDelete.classList.add("btn-danger");
    btnDelete.textContent="Delete";
    btnDelete.style.marginRight ="5px";
//-------------------------------------
    let btnDone =document.createElement("button");
    btnDone.classList.add("btn");
    btnDone.classList.add("btn-secondary");
    btnDone.textContent ="Done";
//-------------------------------------------------
    let btnEdit =document.createElement("button");
    btnEdit.classList.add("btn");
    btnEdit.classList.add("btn-info");
    btnEdit.textContent ="Edit";
    btnEdit.style.marginLeft ="5px"
//-----------------------------------------------------
    let wrapper = document.createElement("div");
    wrapper.append(btnDelete,btnDone,btnEdit);
    listItem.append(span,wrapper);
    list.append(listItem);
    input.value ="";
    count.textContent = "To Do"+ list.children.length;
    let deleteButtons = document.querySelectorAll(".btn-danger");
    let doneButtons = document.querySelectorAll(".btn-secondary");
    let editButtons = document.querySelectorAll(".btn-info");
    deleteButtons.forEach(btnDelete => {
        btnDelete.addEventListener("click",function(e){
            e.target.parentElement.parentElement.remove();
            count--;
            count.textContent="To Do"+ list.children.length;;
        })
    });
    doneButtons.forEach(btnDone => {
        btnDone.addEventListener("click",function(e){
            let selected =e.target.parentElement.previousElementSibling;
            selected.style.textDecoration ="line-through";
        })
    });
    clearAll.addEventListener("click",function(){
        list.innerHTML ="";
    })
})