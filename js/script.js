const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const dateInput = document.getElementById("date-input");
const todoList = document.getElementById("todo-list");
const deleteAllBtn = document.getElementById("delete-all");

let todos = [];

form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (todoInput.value === "" || dateInput.value === "") {
        alert("Please fill in all fields");
        return;
    }

    todos.push({
        text: todoInput.value,
        date: dateInput.value,
        completed: false
    });

    todoInput.value = "";
    dateInput.value = "";
    renderTodos();
});

function renderTodos() {
    todoList.innerHTML = "";

    if (todos.length === 0) {
        todoList.innerHTML = `
      <tr>
        <td colspan="4" class="empty">No task found</td>
      </tr>
    `;
        return;
    }

    todos.forEach((todo, index) => {
        todoList.innerHTML += `
      <tr>
        <td class="${todo.completed ? "completed" : ""}">${todo.text}</td>
        <td>${todo.date}</td>
        <td>${todo.completed ? "Done" : "Pending"}</td>
        <td>
          <button class="action-btn" onclick="toggleTodo(${index})">✔</button>
          <button class="action-btn" onclick="deleteTodo(${index})">✖</button>
        </td>
      </tr>
    `;
    });
}

function toggleTodo(index) {
    todos[index].completed = !todos[index].completed;
    renderTodos();
}

function deleteTodo(index) {
    todos.splice(index, 1);
    renderTodos();
}

deleteAllBtn.addEventListener("click", function () {
    todos = [];
    renderTodos();
});
