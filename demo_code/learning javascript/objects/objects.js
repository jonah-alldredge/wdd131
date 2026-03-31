let person = {
    name: "Jonah Alldredge",
    age: 30,
    profession: "none",
    hobbies: ["reading", "video games", "cycling", "lifting weights"],
    address: {
        street: "2920 W. 13200 S.",
        city: "Riverton",
        state: "Utah",
        country: "United States",
    },
    isEmployed: false,
    greet: function () {
        console.log(`Hello ${this.name}, it's nice to meet you.`);
    }
};

person.age = 21;

console.log(person["isEmployed"]); // Bracket notation
console.log(person.hobbies[0]); // dot notation
console.log(person.age); // dot notation
console.log(person["address"].city); // combined notation
console.log(person.greet()) // calling the function