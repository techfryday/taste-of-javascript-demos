let form = document.getElementById("todoForm");
let todo = document.getElementById("todoTb");
let todoList = document.querySelector("ul");
let listItem;
form.addEventListener("submit", (e) => {
  e.preventDefault();
  listItem = document.createElement(`li`);
  listItem.textContent = todo.value;
  todoList.appendChild(listItem);
});
