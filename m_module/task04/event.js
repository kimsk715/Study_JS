const button = document.getElementById("Search");
const Input = document.querySelector("input[type=text]");

button.addEventListener("click", (e) => {
    userService.getUsers(userLayout.showUsers);
});

Input.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
        button.click();
    }
});
