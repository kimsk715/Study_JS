const userService = (() => {
    const getUser = async (page = 1, callback) => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
        const users = await response.json();

        const rowSize = 20;
        const end = page * rowSize;
        const start = end - rowSize;

        const input = document.querySelector("input[type=text]");
        const list = users.filter((user) => user.id >= input.value);

        if (callback) {
            // 사용자 숫자보다 높은 숫자를 입력하는지 체크를 하기 위해 users.length, input.value도 같이 보냄
            callback(list.slice(start, end), users.length, input.value);
        }
    };

    return {
        getUser: getUser,
    };
})();
