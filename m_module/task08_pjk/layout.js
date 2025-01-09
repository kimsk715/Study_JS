const commentLayout = (() => {
    const showComments = (comments) => {
        const div = document.getElementById("comment");

        let text = ``;

        comments.forEach(({ postId, email, body }) => {
            text += `
                <ul ${(postId === 1 || postId === 3) && "class='green'"}>
                    <li>"PostId: ${postId}"</li>
                    <li>"Email: ${email}"</li>
                    <li>"댓글: ${body}"</li>
                </ul>
            `;
        });

        div.innerHTML = text;
    };
    return {
        showComments: showComments,
    };
})();
