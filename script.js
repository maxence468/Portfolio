window.addEventListener("scroll", function() {
    let main = document.getElementById("main");

    if (window.scrollY > 50) {
        main.classList.remove("fullscreen");
    } else {
        main.classList.add("fullscreen");
    }
});