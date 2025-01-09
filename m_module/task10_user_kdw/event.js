const button = document.getElementById("get-users");

button.addEventListener("click", () => {
    userService.getUsers(userLayout.showUsers);
});
