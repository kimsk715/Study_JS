const infoService = (() => {
    const getInfo = async (callback) => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
        const users = await response.json();
        if (callback) {
            callback(users);
        }
    };
    return {
        getInfo: getInfo,
    };
})();
