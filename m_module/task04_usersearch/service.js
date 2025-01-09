const userService = (() => {
    const getUsers = async (callback) => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
        const users = await response.json();
        if (callback) {
            return callback(users);
        }
    };

    return { getUsers: getUsers };
})();
