const inputBox =document.getElementById("input-box");
const listContainer =document.getElementById("list-container");
const clearAll = document.getElementById("clear");
const li = document.getElementById("li");
function addTask(){
    if(inputBox.value == ''){
        alert("You must write something!");
    }else {
        let li =document.createElement("li");
        li.innerHTML = inputBox.value;
  
        let editBtn = document.createElement("button");
        editBtn.textContent="Edit";
        editBtn.classList.add("editBtn");
        li.appendChild(editBtn);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        listContainer.appendChild(li);
    }
    inputBox.value= '';
    saveData();
}
inputBox.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});


listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
    } ,false);

    function saveData(){
        localStorage.setItem("data", listContainer.innerHTML);
    }
    function showTask(){
        listContainer.innerHTML = localStorage.getItem("data");
    }
clearAll.addEventListener("click", function(){
    const userConfirmed = confirm("Are you sure you want to clear all tasks?");
    if(userConfirmed){
        listContainer.innerHTML= '';
        localStorage.removeItem("data");
    }
 })
 function editTask(li) {
    const currentText = li.firstChild.textContent; // Get current task text
    const newText = prompt("Edit your task:", currentText); // Prompt user to edit the task

    if (newText != null && newText !== "") {
        li.firstChild.textContent = newText; // Update the task with the new text
        saveData(); // Save the updated list to localStorage
    }
}


    showTask();