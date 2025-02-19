// Toggle mobile menu
const mobileMenu = document.getElementById('mobile-menu');
const navlinks = document.getElementById('.nav-links');

mobileMenu.addEventListener('click', () => {
    navlinks.classList.toggle('active');
});

// Smooth scrolling for anchor links
document.querySelector('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Form submission handling
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank You for your message! we will get back to you soon.');
    contactForm.reset();
});


