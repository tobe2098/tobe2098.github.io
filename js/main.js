// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: 'smooth'
            });
        }
    });
});

// Fade-in Animation on Scroll
const sections = document.querySelectorAll('section');
const fadeInOnScroll = () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight * 0.85) {
            section.classList.add('visible');
        }
    });
};

// Run fadeInOnScroll on page load and scroll
window.addEventListener('scroll', fadeInOnScroll);
document.addEventListener('DOMContentLoaded', fadeInOnScroll);

// Mobile Menu Toggle (if you add a hamburger menu)
const mobileMenu = document.querySelector('.nav-links');
const menuToggle = document.createElement('div');
menuToggle.className = 'menu-toggle';
menuToggle.innerHTML = '&#9776;'; // Hamburger icon

document.querySelector('nav').prepend(menuToggle);
menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});
