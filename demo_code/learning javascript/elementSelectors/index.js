// document.title("Element Selectors");


const fruits = document.getElementsByClassName("fruits");

fruits[0].style.backgroundColor = "yellow";
console.log(fruits);

// for (let fruit of fruits){
//     fruit.style.backgroundColor = "yellow";
// }

// fruits.forEach() this doesn't exist/it doesn't work

Array.from(fruits).forEach(fruit =>{
    fruit.style.backgroundColor = "yellow";
});