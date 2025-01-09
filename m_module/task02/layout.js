const todoLayout = (() => {
    const showTodos = (todos) => {
        const todowrap = document.getElementById("todo-wrap");
        let text = `<tr>
            <th>UserId</th>
            <th>Title</th>
             <th>Comp?</th>
                    </tr>`;
        todos.forEach(({ userId, title, completed }) => {
            text += `<tr><td>${userId}</td>
            <td ${
                completed && "class ='on'"
            }>${title}</td><td>${completed}</td></tr>`;
        });

        todowrap.innerHTML = text;
    };

    return { showTodos: showTodos };
})();
