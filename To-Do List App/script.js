// Script.js

// Select elements

const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');


// Add Task
addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    createTask(taskText);
    taskInput.value = '';   // Clear Input

});


// Function to create Task

function createTask(taskText) {
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;


    // Toggle task Completion
    taskItem.addEventListener('click', () => {
        taskItem.classList.toggle('completed');
    });


    // Delete button

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = "delete-btn";

    deleteBtn.addEventListener('click', () => {
        taskList.removeChild(taskItem);
    });

    taskItem.appendChild(deleteBtn);
    taskList.appendChild(taskItem);
}


// Allow "Enter" key to add tasks.

taskInput.addEventListener("keypress",(e) => {
    if (e.key === "Enter") {
        addTaskBtn.click();
    }
});