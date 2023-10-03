const taskList = document.getElementById('taskList');
const taskInput = document.getElementById('task');

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');
    li.innerHTML = `
                ${taskText}
                <button onclick="editTask(this)">Edit</button>
                <button onclick="deleteTask(this)">Delete</button>
            `;

    taskList.appendChild(li);
    taskInput.value = '';
}

function editTask(button) {
    const li = button.parentElement;
    const taskText = li.firstChild.textContent;
    const newTaskText = prompt('Edit the task:', taskText);

    if (newTaskText !== null) {
        li.firstChild.textContent = newTaskText;
    }
}

function deleteTask(button) {
    const li = button.parentElement;
    taskList.removeChild(li);
}