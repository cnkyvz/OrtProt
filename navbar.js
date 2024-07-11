document.addEventListener('DOMContentLoaded', function() {
    // Navbar button element
    const navbarButton = document.querySelector('.navbar-button');
    // Nav container element
    const navbarContainer = document.querySelector('.navbar-container');

    // Kontrol ekle
    if (navbarButton && navbarContainer) {
        // Toggle navigation container visibility on navbar button click
        navbarButton.addEventListener('click', function() {
            navbarContainer.classList.toggle('show');
        });
    } else {
        console.error("Navbar button or nav container not found!");
    }
});