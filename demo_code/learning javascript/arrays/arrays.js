let scores = [100, 72, 83, 84, 94, 88, 87];
let names = ["Nancy", "Blessing", "Jorge", "John"];
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