document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;

    // Toggle menu function
    function toggleMenu() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    }

    // Toggle menu on hamburger click
    hamburger.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleMenu();
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navLinks.classList.contains('active') && 
            !hamburger.contains(e.target) && 
            !navLinks.contains(e.target)) {
            toggleMenu();
        }
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', (e) => {
            if (navLinks.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // Handle touch events for iOS
    document.addEventListener('touchstart', (e) => {
        if (navLinks.classList.contains('active') && 
            !hamburger.contains(e.target) && 
            !navLinks.contains(e.target)) {
            toggleMenu();
        }
    }, { passive: true });
}); 