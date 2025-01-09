const todoService = (() => {
    const getTodos = async (page = 1, callback) => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos"
        );
        const todos = await response.json();
        const rowSize = 20;
        const end = page * rowSize;
        const start = end - rowSize;
        if (callback) {
            callback(todos.slice(start, end));
        }
    };

    return { getTodos: getTodos };
})();
