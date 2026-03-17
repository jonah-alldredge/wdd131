// store the selected elements that we are going to use.
const mainNav = document.querySelector(".navigation");
const hamButton = document.querySelector("#menu");

// Adds a click event listener to the hamburger button and uses a callback function
// that toggles the list element's list of classes
hamButton.addEventListener("click", () => {
    mainNav.classList.toggle("show");
    hamButton.classList.toggle("show");
});