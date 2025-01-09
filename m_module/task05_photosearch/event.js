const button = document.getElementById("Search");
const Input = document.querySelector("input[type=text]");

button.addEventListener("click", (e) => {
    photoService.getPhotos(photoLayout.showPhotos);
});

Input.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
        button.click();
    }
});
