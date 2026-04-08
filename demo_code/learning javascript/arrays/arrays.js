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


// CALLBACK WITH ARRAY METHODS

// forEach()
const nums = [1, 2, 3, 4, 5];

nums.forEach(function (num) {
    num = num * num;
    console.log(num); 
});
// Iterate an Object
const employees = [
    {
        id: 101,
        name: 'Alex',
        sal: 10000
    },
    {
        id: 102,
        name: 'Clark',
        sal: 13000
    },
    {
        id: 103,
        name: 'John',
        sal: 12000
    },
    {
        id: 104,
        name: 'Tony',
        sal: 20000
    }
]

employees.forEach(function (emp) {
    console.log(emp.name.toUpperCase()); 
});

// map()
const squareNums = nums.map(function (num) {
    return num * num; 
});
console.log(squareNums);


const employee = employees.map(function (emp) {
    return emp.name;
});
console.log(employee);


const shortWords = ['lol', 'brb', 'btw', 'lmk', 'g2g'];
const abbreviations = shortWords.map(function (word) {
    return word.toUpperCase().split('').join('.'); 
});
console.log(abbreviations);


// ARROW FUNCTIONS
const square = (num) => {
    return num * num;
}
// Without parenthesis - they are optional for one argument
const squareNum = num => {
    return num * num;
}
// Implicit Return - one liner
const squareNumber = num => num * num;


// find()
const fullNames = ['Jimmy Shah', 'Ram Sharma', 'Vikram Gupta', 'Shyam Sharma'];
const nameResult = fullNames.find(name => name.includes('Sharma'))
console.log(nameResult);

const salary = employees.find(emp => emp.sal >= 20000);
console.log(salary);


// filter()
const filterNames = fullNames.filter(name => name.includes('Sharma'));
console.log(filterNames);

const filterSal = employees.filter(emp => emp.sal >= 20000);
console.log(filterSal);


// every()
const kWords = ['kia', 'karen', 'king', 'korean'];
// Check all words starts with k
console.log(kWords.every(word => word[0] === 'k'));
// Check all words ends with g
console.log(kWords.every(word => word[kWords.length - 1] === 'g'));


// some() - very similar but returns true if any of the items pass the given function
console.log(kWords.some(word => word[kWords.length - 1] === 'g')); // was false with every() but returns true with some()



// sort()
const numberList = [1, 20, 10, 22, 30, 44, 100, 11];
numberList.sort(); // [1, 10, 100, 11, 20 22, 30, 44]
numberList.sort((a, b) => a - b); // [1, 10, 11, 20, 22, 30, 44, 100]


// reduce()
// Sum of the array
let output = numberList.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(output);
// Finding the min/max
output = numberList.reduce((max, item) => Math.max(max, item));
console.log(output); //100
// Tallying Votes
const votes = ['y', 'y', 'n', 'y', 'n', 'n', 'n'];
output = votes.reduce((tally, vote) => {
    tally[vote] = (tally[vote] || 0) + 1
    return tally;
}, {}); // Initial Value: {}

function calculate(a, b, callback) {
    callback(a + b);
}

function displayResult(result) {
    console.log("The result is: " + result);
}
calculate(2, 3, displayResult); // the answer for callback essentially becomes the result