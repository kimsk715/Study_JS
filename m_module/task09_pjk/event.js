const button = document.getElementById("get-info");

button.addEventListener("click", (e) => {
    infoService.getInfo(infoLayout.showInfo);
});
