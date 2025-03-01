// Update copyright year automatically
document.getElementById('year').textContent = new Date().getFullYear();

// You can add more JavaScript functionality here as needed
// For example, form validation, interactive elements, etc.

// document.addEventListener("DOMContentLoaded", function() {
//     // Get the current page filename
//     let currentPage = window.location.pathname.split("/").pop();
    
//     // Get all navigation links
//     let navLinks = document.querySelectorAll(".header-link");

//     navLinks.forEach(link => {
//         if (link.getAttribute("href") === currentPage) {
//             link.classList.add("active"); // Add a hover-like state
//             link.removeAttribute("href"); // Remove link functionality
//         }
//     });
// });
const currentPage = window.location.pathname.split("/").pop();
  
  // Set active class based on current page
  if (currentPage === "index.html" || currentPage === "") {
    document.getElementById("main-link").classList.add("active");
  } else if (currentPage === "portfolio.html") {
    document.getElementById("portfolio-link").classList.add("active");
  }