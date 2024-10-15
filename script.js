let tasks = [];

const addTask = () => {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value.trim();

    if (task) {
        tasks.push(task);
        updateTaskList();
        taskInput.value = '';
    } else {
        alert("Please enter a task!");
    }
};

const removeLastTask = () => {
    if (tasks.length > 0) {
        tasks.pop();
        updateTaskList();
    } else {
        alert("No tasks to remove!");
    }
};

const updateTaskList = () => {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = ''; 

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        li.textContent = `${index + 1}. ${task}`;
        taskList.appendChild(li);
    });
};
