const button = document.getElementById("get-comments");
const input = document.querySelector("input#ID");

button.addEventListener("click", (e) => {
    commentService.getComments(commentLayout.showComments);
});
