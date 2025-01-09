const commentService = (() => {
    const getComments = async (callback) => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/comments"
        );
        const comments = await response.json();
        if (callback) {
            return callback(comments);
        }
    };

    return { getComments: getComments };
})();
