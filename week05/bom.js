const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list"); 
button.addEventListener("click", function () {
    if (input.value != "") {
        // const li = document.createElement("li");
        // li.textContent = input.value;
        // // Creates a button and adds a click event listener
        // const deleteButton = document.createElement("button");
        // deleteButton.textContent = "❌";
        // deleteButton.addEventListener("click", function () {
        //     list.removeChild(li);
        //     input.focus();
        // });
        // // Adds the button to the list item
        // li.appendChild(deleteButton);
        // // Output: finally displays the completed list item to the unordered list
        // list.appendChild(li);
        // // clears the user input field
        displayList(input.value); // call the function that outputs the submitted chapter
        chaptersArray.push(input.value); // add the chapter to the array
        setChaptersList(); // update the localStorage with the new array
        input.value = "";
        input.focus();
    }
});

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

function displayList(item) {
    const li = document.createElement("li");
    li.textContent = input.value;
    // Creates a button and adds a click event listener
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";
    deleteButton.addEventListener("click", function () {
        list.removeChild(li);
        input.focus();
    });
    // Adds the button to the list item
    li.appendChild(deleteButton);
    // Output: finally displays the completed list item to the unordered list
    list.appendChild(li);
}