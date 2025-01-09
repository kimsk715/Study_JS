const button = document.getElementById("get-users");

button.addEventListener("click", (e) => {
    userService.getUser(1, userLayout.userList);
});
