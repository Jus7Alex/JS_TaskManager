//Retrieving elements from DOM
const submitButton = document.getElementById("btnSubmit");
const tasks = document.getElementById("tasks");
const messageElement = document.getElementById("message");
const clearButton = document.getElementById("btnClear");
const greetingMessage = "No tasks for today!";

//Event handlers
submitButton.addEventListener('click', addTask);
tasks.addEventListener('click', handleTaskClick);
clearButton.addEventListener('click', clearList);

displayMessage(greetingMessage);

//Clears the list removing children from parent node
function clearList() {
    const taskLists = tasks.getElementsByClassName("list-group-item");
    while(taskLists.length > 0) {
        taskLists[0].parentNode.removeChild(taskLists[0]);
    }
    displayMessage(greetingMessage);
}

//Adds a style decoration to the text whenever the user triggers the event
function handleTaskClick(event) {
    const style = event.target.style;
    if(!style.textDecoration) {
        style.textDecoration = "line-through";
    } else {
        style.textDecoration = ""; 
    }
    }
    
//Adds the user input as a task creating a list
function addTask() {
    const newTask = document.getElementById("newTask");
    if(inputIsValid(newTask.value)) {
        tasks.innerHTML += '<li class="list-group-item">' + newTask.value + '</li>';
        newTask.value = "";
        messageElement.style.visibility = "hidden";
    } else {
        displayMessage("Please provide non empty input.");
    }
    

}

function displayMessage(message) {
    messageElement.innerText = message;
    messageElement.style.visibility = "visible";
}

// Checks if the user input is null, undefined...
function inputIsValid(input) {
    if(input) {
        return true;
    }
    return false;
}