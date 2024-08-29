// add background color on navigation when scroll and open menu in responsive
window.addEventListener("scroll", function() {
    var navbar = document.querySelector(".sticky-nav");
    if (window.scrollY > 50) { 
        navbar.classList.add("scrolled");
    } else if (!document.querySelector(".navbar-collapse").classList.contains("show")) {
        navbar.classList.remove("scrolled");
    }
});

document.querySelector(".navbar-toggler").addEventListener("click", function() {
    var navbar = document.querySelector(".sticky-nav");
    if (window.innerWidth <= 992) { // Check if the viewport is in responsive mode
        navbar.classList.add("scrolled"); // Always add background color when menu opens
    }
});
