// JavaScript code for basic interactions
document.addEventListener('DOMContentLoaded', () => {
    // Example: Fade-in effect on page load
    document.body.style.opacity = 1;

    // Burger menu toggle logic
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.main-navigation-links');
    
    burgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
