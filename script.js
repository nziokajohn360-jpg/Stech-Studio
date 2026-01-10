
// script.js

// Toggle light and dark theme

function toggleTheme() {
const icon = document.getElementById("icon");
icon.onclick = function() {
    document.body.classList.toggle("light-theme");
    if(document.body.classList.contains("light-theme")){
        icon.src = "sun.png";
    } else {
        icon.src = "moon.png";
    }
}
}

toggleTheme();


// Set current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

//animation on scroll
AOS.init({
    duration: 1000,
    once: true,
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
