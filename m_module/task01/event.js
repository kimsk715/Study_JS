const button = document.getElementById("get-posts");

button.addEventListener("click", (e) => {
    postService.getPosts(2, postLayout.showPosts);
});
