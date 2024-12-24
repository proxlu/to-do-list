let taskInput = document.getElementById('task-input');
let taskList = document.getElementById('task-list');

function addTask() {
    let task = taskInput.value;
    if (task !== '') {
        let li = document.createElement('li');
        li.innerHTML = task;
        taskList.appendChild(li);
        taskInput.value = '';
    } else {
        alert('Por favor, digite uma tarefa.');
    }
}
