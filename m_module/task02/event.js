const button = document.getElementById("get-todos");

button.addEventListener("click", (e) => {
    todoService.getTodos(1, todoLayout.showTodos);
});
