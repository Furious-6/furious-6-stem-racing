// Get the scroll to top button
let mybutton = document.getElementById("scrollToTopBtn");

// Get the hamburger button and the main navigation
const hamburger = document.getElementById('hamburger-menu');
const nav = document.getElementById('main-nav');
const contentWrapper = document.getElementById('content-wrapper'); // Get the content wrapper

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", topFunction);

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// --- Mobile Navigation Toggle ---
hamburger.addEventListener('click', () => {
    nav.classList.toggle('is-active'); // Toggle class on nav to show/hide
    hamburger.classList.toggle('is-active'); // Toggle class on hamburger for animation
    document.body.classList.toggle('no-scroll'); // Prevent scrolling body when menu is open
    contentWrapper.classList.toggle('no-scroll'); // Prevent scrolling content wrapper
});

// Close menu when a navigation link is clicked (optional, but good UX)
nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('is-active');
        hamburger.classList.remove('is-active');
        document.body.classList.remove('no-scroll');
        contentWrapper.classList.remove('no-scroll');
    });
});
