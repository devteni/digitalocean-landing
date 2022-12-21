var navBar = document.getElementById("nav-items");

function navToggle() {
    navBar.classList.toggle('hidden');
}

// SHOW NAVBAR ON DESKTOP SCREEN
window.addEventListener("resize", function() {
    if(window.innerWidth <= 900) {
        navBar.classList.add('hidden');
    } else {
        navBar.classList.remove('hidden');
    }
});
