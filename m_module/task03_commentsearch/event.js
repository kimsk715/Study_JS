const button = document.getElementById("get-comments");
const input = document.querySelector("input#ID");

button.addEventListener("click", (e) => {
    let digit = /^(\d{1,2})$/;
    console.log(digit);
    if (digit.test(ID.value)) {
        commentService.getComments(commentLayout.showComments);
    } else {
        tab.innerText = "0에서 99 사이의 숫자를 입력해주세요!";
    }
});

input.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
        button.click();
    }
});
