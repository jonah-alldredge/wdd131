let firstName = "Antonia";
let lastName = "Francesca";

// Function Declaration (definition)
function fullName(first, last) {
    return `First Name: ${first}\nLast Name: ${last}`;
}
console.log(fullName(firstName, lastName));

// Function Expression
const fullNameExpression = function (first, last) {
    return `First Name: ${first}\nLast Name: ${last}`
}
console.log(fullNameExpression(firstName, lastName))

// Arrow Function Expression
const fullNameArrow = (first, last) => `First Name: ${first}\nLast Name: ${last}`;

function helloName(first, last) {
    return `Hello: ${first} ${last}`
}

document.querySelector("#fullName").textContent = helloName(firstName, lastName);