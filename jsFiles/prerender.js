windo.addEventListener("load", () => {
    var loader = document.getElementById("loader");
    var mainContainer = document.getElementById("main-container");
    loader.style.display = "none";
    mainContainer.classList.remove("unloaded");
});

