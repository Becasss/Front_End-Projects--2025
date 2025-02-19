// Toggle mobile menu
const mobileMenu = document.getElementById('mobile-menu');
const navlinks = document.getElementById('.nav-links');

mobileMenu.addEventListener('click', () => {
    navlinks.classList.toggle('active');
});


