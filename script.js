
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

// Menu toggle for mobile view
const menuToggle = document.getElementById('menuToggle');
        const sideMenu = document.getElementById('sideMenu');

        // Toggle menu when menu button is clicked
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            sideMenu.classList.toggle('active');
            
            // Prevent body scrolling when menu is open
            document.body.style.overflow = sideMenu.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu when clicking on a menu item
        const menuItems = document.querySelectorAll('.menu-items a');
        menuItems.forEach(item => {
            item.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                sideMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        // Close menu when clicking outside the menu
        sideMenu.addEventListener('click', (e) => {
            if (e.target === sideMenu) {
                menuToggle.classList.remove('active');
                sideMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });

