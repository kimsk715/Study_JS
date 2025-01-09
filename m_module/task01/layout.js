const postLayout = (() => {
    const showPosts = (posts) => {
        const tdwrap = document.getElementById("post-wrap-td");
        let text = `<tr>
            <th>UserId</th>
            <th>Title</th>
            <th>Body</th>
        </tr>`;
        posts.forEach(({ userId, title, body }) => {
            text += `<tr><td class="overflow"><"${userId}"></td><td class="overflow"><"${title}"></td><td class="overflow"><"${body}"></td></tr>`;
        });
        tdwrap.innerHTML = text;
    };

    return { showPosts: showPosts };
})();
