const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener("click", function () {
    if (input.value != "") {
        displayList(input.value); // call the function that outputs the submitted chapter
        chaptersArray.push(input.value); // add the chapter to the array
        setChaptersList(); // update the localStorage with the new array
        // console.log(localStorage.setItem('value', input.value));
        input.value = "";
        input.focus();
    }
});

function displayList(item) {
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");
    li.textContent = item; // not the use of the displayList parameter 'item'
    deleteButton.textContent = "❌";
    deleteButton.classList.add('delete'); // this references the css rule .delete{width:fit-content;} to size the delete button
    li.append(deleteButton);
    list.append(li);
    deleteButton.addEventListener("click", function () {
        list.removeChild(li);
        deleteChapter(li.textContent); // note this is a new function that is needed to remove the chapter from the array and localStorage
        input.focus(); // set the focus back to the input
    });
}

function setChaptersList() {
    localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem("myFavBOMList"));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1); // Slices off the last character
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChaptersList();
}