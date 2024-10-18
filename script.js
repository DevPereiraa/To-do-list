const list = document.querySelector("ul");



function addTask(){

    const inputText = document.querySelector(".inputText").value;

    const li = document.createElement("li")
    li.innerHTML = inputText + "<span onclick='deleteTask(event) '>X</span>";

    document.querySelector("ul").appendChild(li);

    document.querySelector(".inputText").value = "";
}

document.querySelector(".btnSubmit").addEventListener("click", addTask);

function deleteTask(e){
    e.target.parentElement.remove();
}