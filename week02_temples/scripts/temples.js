// Current year for copyright display
const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = `© ${currentYear}`;

// Last modified date for the page
document.getElementById("lastModified").textContent = document.lastModified;

const hamburgerButton = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburgerButton.addEventListener("click", function() {
    navMenu.classList.toggle("show");
});