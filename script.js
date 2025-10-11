const API_BASE = "http://localhost:8080"; // backend base URL

const usernameInput = document.getElementById("username");
const descriptionInput = document.getElementById("description");
const targetDateInput = document.getElementById("targetDate");
const doneInput = document.getElementById("done");
const todoList = document.getElementById("todoList");
const message = document.getElementById("message");

document.getElementById("loadBtn").addEventListener("click", loadTodos);
document.getElementById("addBtn").addEventListener("click", addTodo);

async function loadTodos() {
  const username = usernameInput.value.trim();
  if (!username) {
    showMessage("Please enter a username first!", "red");
    return;
  }

  const response = await fetch(`${API_BASE}/users/${username}/todos`);
  const todos = await response.json();
  displayTodos(todos);
}

async function addTodo() {
  const username = usernameInput.value.trim();
  const description = descriptionInput.value.trim();
  const targetDate = targetDateInput.value;
  const done = doneInput.checked;

  if (!username || !description || !targetDate) {
    showMessage("Please fill in all fields!", "red");
    return;
  }

  const todo = { description, targetDate, done };

  await fetch(`${API_BASE}/users/${username}/todos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todo),
  });

  showMessage("Todo added successfully!");
  loadTodos();
  clearInputs();
}

async function updateTodo(username, id, updatedTodo) {
  await fetch(`${API_BASE}/users/${username}/todos/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedTodo),
  });
  showMessage("Todo updated!");
  loadTodos();
}


async function deleteTodo(username, id) {
  await fetch(`${API_BASE}/users/${username}/todos/${id}`, {
    method: "DELETE",
  });
  showMessage("Todo deleted!");
  loadTodos();
}

function displayTodos(todos) {
  todoList.innerHTML = "";
  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${todo.description} - ${todo.targetDate} - ${todo.done ? "✅" : "❌"}</span>
      <div class="todo-actions">
        <button onclick="editTodo('${todo.id}', '${todo.description}', '${todo.targetDate}', ${todo.done})">Edit</button>
        <button onclick="deleteTodo('${usernameInput.value}', '${todo.id}')">Delete</button>
      </div>
    `;
    todoList.appendChild(li);
  });
}

function editTodo(id, desc, date, done) {
  descriptionInput.value = desc;
  targetDateInput.value = date;
  doneInput.checked = done;

  const username = usernameInput.value;
  document.getElementById("addBtn").textContent = "Update";
  document.getElementById("addBtn").onclick = async () => {
    const updatedTodo = {
      description: descriptionInput.value,
      targetDate: targetDateInput.value,
      done: doneInput.checked,
    };
    await updateTodo(username, id, updatedTodo);
    document.getElementById("addBtn").textContent = "Add";
    document.getElementById("addBtn").onclick = addTodo;
  };
}

function clearInputs() {
  descriptionInput.value = "";
  targetDateInput.value = "";
  doneInput.checked = false;
}

function showMessage(msg, color = "green") {
  message.style.color = color;
  message.textContent = msg;
  setTimeout(() => (message.textContent = ""), 3000);
}
