const submit = document.getElementById("submit");
const fName = document.getElementById("fname");
const lName = document.getElementById("lname");
const email = document.getElementById("email");

// button.addEventListener("click", addStorage())
fName.addEventListener("keyup", () => {
    localStorage.setItem("fName", fName.value);
    console.log("this is working");
});
lName.addEventListener("keyup", () => {
    localStorage.setItem("lName", lName.value);
    console.log("this is working");
});
email.addEventListener("keyup", () => {
    localStorage.setItem("email", email.value);
    console.log("this is working");
});