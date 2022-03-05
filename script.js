// Selector
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const completeButton = document.querySelectorAll(".complete-btn");
const deleteButton = document.querySelectorAll(".delete-btn");

// Event Listener
todoButton.addEventListener("click", function(event) {
    event.preventDefault();
    // Todo
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // Create LI
    const newListTodo = document.createElement("li");
    newListTodo.innerText = todoInput.value;
    newListTodo.classList.add("todo-item");
    todoDiv.appendChild(newListTodo);

    // Button Completed and Delete
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add("delete-btn");
    todoDiv.appendChild(deleteButton);

    todoList.appendChild(todoDiv);

    todoInput.value = "";
});

todoList.addEventListener("click", deleteList);
todoList.addEventListener("click", completeList);

// Function

function deleteList(e) {
    const item = e.target;

    if (item.classList[0] === "delete-btn") {
        const todo = item.parentElement;
        todo.remove();
    }
}

function completeList(e) {
    const item = e.target;

    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}