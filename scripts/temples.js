const hamButton = document.querySelector("#menu");
const navMenu = document.querySelector(".navMenu");

hamButton.addEventListener("click", () => {
    hamButton.classList.toggle("active"); 
    navMenu.classList.toggle("active");
});


// Create a new Date object
const lastModified = new Date();
const currentYear = new Date().getFullYear();

// // Format it as a readable string
// const dateTime = lastModified.toLocaleString();

// // Display it on the page
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;
document.getElementById("currentYear").textContent = currentYear;