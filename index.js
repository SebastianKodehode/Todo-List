

const todoInput = document.querySelector(".todo-input")
const todoList = document.querySelector(".todo-list")
const todoBtn = document.querySelector(".todo-btn")
const input = document.querySelector("input")
const deleteBtn = document.querySelector(".delete-btn")


todoBtn.addEventListener('click', addTodo);

function addTodo(event) {

    event.preventDefault();

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const newTodo = document.createElement("li");
    newTodo.innerText = input.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    const deleteButton = document.createElement("i");
    deleteButton.classList.add("fas", "fa-trash")
    todoDiv.appendChild(deleteButton)

    todoList.appendChild(todoDiv);

    input.value = "";

    deleteButton.addEventListener('click', deleteTodo);
}

function deleteTodo(event) {
    const item = event.target;

    const todo = item.parentElement;
    todo.remove();

    console.log(item)
}