console.log("Hello") // prints text to the console

// window.alert("this is an alert!") // gives the window an alert


// using the document selector means you are accessing the html document that is linked to this javascript page
document.getElementById("myH1").textContent = "Hello"; // Sets the h1 tag with an ID of "myH1" to say "Hello"
document.getElementById("myP").textContent = "I love pizza"; // Sets the p tag with an ID of "myP" to say "I love pizza"
const article = document.querySelector("article");
// This changes the HTML of an existing element
article.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, sunt minima corporis eos itaque sit, aperiam dolorum repellendus delectus soluta obcaecati ea unde, rerum aut deleniti quod consectetur dicta nesciunt.";
// This changes the CSS style of the element and makes the text align left
article.style.textAlign = "left";
// Changes the attribute of the element
article.setAttribute("class", "active");
// An alternate way of changing the element's class is 
article.classList.add("active"); //This way is preferred because "classList" provides .add, .remove, .toggle, .contains

const paragraph = document.createAttribute("p");
article.appendChild(paragraph);
article.append(paragraph, "Hello World Addition!");
article.removeChild(paragraph); // Removes the paragraph tag inside the article
article.remove(); //Removes the article itself



for (let i = 0; i < 5; i++) {
    console.log("Iteration number: " + i);
}

let count = 0;
while (count < 5) {
    console.log("Count is: " + count);
    count++;
}

let fruits = ["apple", "banana", "cherry"];
fruits.forEach(function (fruit) {
    console.log("Fruit: " + fruit);
});