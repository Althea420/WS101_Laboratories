let tasks = [];

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const dateInput = document.getElementById("dateInput");

  if (taskInput.value && dateInput.value) {
    tasks.push({ text: taskInput.value, date: dateInput.value });
    taskInput.value = "";
    dateInput.value = "";
    renderTasks();
  }
}

function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = "task-item";
    li.innerHTML = `
      <span>${task.text} - ${task.date}</span>
      <div class="task-buttons">
        <button class="edit-btn" onclick="editTask(${index})">Edit</button>
        <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
      </div>
    `;
    taskList.appendChild(li);
  });
}

function editTask(index) {
  const task = tasks[index];
  document.getElementById("taskInput").value = task.text;
  document.getElementById("dateInput").value = task.date;
  deleteTask(index);
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}
