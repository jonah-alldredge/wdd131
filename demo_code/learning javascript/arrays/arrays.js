let scores = [100, 72, 83, 84, 94, 88, 87];
let names = ["Nancy", "Blessing", "Jorge", "Svetlana", "Bob"];
let aScore = scores[0]; // The aScore variable is assigned to 100
scores[0] = 99; // This assigns scores[0] to 99 instead of 100
let numScores = scores.length; // The numScores length is assigned 7 because the array has 7 elements

for (let i = 0; i < scores.length; i++){
    console.log(scores[i]);
}
for (let i = 0; i < names.length; i++){
    console.log(names[i]);
}

scores.push(100); // Adds a new element to the end of the array
scores.pop(); // Removes the last element from the array
scores.shift(); // Removes the first element from the array
scores.unshift(100); // Adds a new element to the beginning of the array
scores.splice(2, 1); // Removes 1 element from the array starting at index 2 aka 83
scores.join(", "); // Transforms the array into a single string using a comma and space as the delimiter(don't know what the means)
// I think this could be used when saving data to the console, so you can sort through it later...idk tho


// Array.filter()
const words = ["spray", "elite", "exuberant", "destruction", "present"];
const result = words.filter((word) => word.length > 6);
console.log(result);
// expected output: Array["exuberant", "destruction", "present"]


// Array.map()
const array = [1, 4, 9, 16];
// Pass a function to map
const mapped = array.map((x) => x * 2);
console.log(mapped);
// Expected Output: Array [2, 8, 18, 32]


// Array.reduce()
const arrayV2 = [1, 2, 3, 4];
// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = arrayV2.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
// The accumulator starts at what you provide(initialValue)
// The currentValue starts as the first element in the array(index 0)
console.log(sumWithInitial);
// Expected Output: 10

const namesFilter = ["Nancy", "Blessing", "Jorge", "John", "Bob", "Svetlana"];
let nameFilter = namesFilter.filter(name => name.charAt(0) === "B");
console.log(nameFilter);
// Output: "Bob", "Blessing"

names = ["Nancy", "Blessing", "Jorge", "Bob", "Svetlana"];
const length = names.map((name) => name.length);
console.log(length);
// Output: 5, 8, 5, 4, 3, 8

// MY ANSWER
const namesReduce = length.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue) / names.length;

// EXAMPLE ANSWER
console.log(names.reduce((total, name) => total + name.length, 0) / names.length);
console.log(namesReduce);