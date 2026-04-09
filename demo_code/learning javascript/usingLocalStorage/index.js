const input = document.querySelector("input"), // this will grab the first input tag
    h2 = document.querySelector("h2"); // This will grab the first h2 tag

    
h2.innerHTML = localStorage.getItem("value");
input.addEventListener("keyup", display);

function display() {
    // h2.innerHTML = input.value; // Without local storage
    localStorage.setItem('value', input.value); // Stores this in the memory
    // console.log(localStorage.getItem("value"));
    h2.innerHTML = localStorage.getItem("value");
}

// When storing things to the local storage, they are ONLY SAVED AS STRINGS
// to get rid of it, use localStorage.removeItem('keyName');
// or you could use localStorage.clear(); - which will clear all the data

let myObj = {
    name: "Jonah",
    age: 56
};

let myObj_serialized = JSON.stringify(myObj); //.stringify turns it into a string so it can be saved

localStorage.setItem("myObj", myObj_serialized);

let myObj_deserialized = JSON.parse(localStorage.getItem("myObj")); //.parse reverses .stringify

// localStorage.setItem("myObj", myObj_deserialized);
console.log(myObj_deserialized);