const commentService = (() => {
    const getComment = async (callback) => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/comments"
        );
        const comments = await response.json();

        if (callback) {
            callback(comments.slice(0, 15));
        }
    };
    return {
        getComment: getComment,
    };
})();
