const commentLayout = (() => {
    const showComments = (comments) => {
        const table = document.getElementById("tab");
        let text = `<tr>
        <th class="on">PostID</th><th class="on">name</th><th class="on">body</th>
        </tr>`;
        comments.forEach(({ postId, name, body }) => {
            text += `<tr>
            <td ${postId == ID.value && "class ='on'"}>${postId}</td>
            <td ${postId == ID.value && "class ='on'"}>${name}</td>
            <td ${postId == ID.value && "class ='on'"}>${body}</td>
            </tr>`;
        });
        console.log(ID.value);
        tab.innerHTML = text;
    };

    return { showComments: showComments };
})();
