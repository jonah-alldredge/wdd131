const button = document.getElementById("button");
button.addEventListener("click", hello)
const spend = document.getElementById("spend");
spend.addEventListener("click", spending)
let clicks = 0;
function hello() {
    clicks++;
    const clicker = document.getElementById("clicker").textContent = "Clicks: " + clicks;
    // console.log("Working on it");
}
function spending() {
    if (clicks < 5) {
        window.alert("Sorry you haven't clicked the button enough times");
    }
    else {
        clicks -= 5;
        const clicker = document.getElementById("clicker").textContent = "Clicks: " + clicks;
    }
}