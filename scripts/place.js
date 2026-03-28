const lastModified = new Date();
const currentYear = new Date().getFullYear();

// // Format it as a readable string
// const dateTime = lastModified.toLocaleString();

// // Display it on the page
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;
document.getElementById("currentYear").textContent = currentYear;

const temperature = 12;
const windSpeed = 5;

const setWindChill = document.getElementById("windChillText");
const setTemperature = document.getElementById("temperatureText").textContent = `Temperature: ${temperature}\u00B0C`;
const setWindSpeed = document.getElementById("windText").textContent = `Wind: ${windSpeed} mph`;

function calculateWindChill(t, w) {
    let calcWindChill = Math.round(35.74 + (0.6215 * t) - (35.75 * (Math.pow(w, 0.16))) + (0.4275 * t * (Math.pow(w, 0.16))));
    return calcWindChill;
}

if (temperature <= 50 && windSpeed > 3){
    const windChill = calculateWindChill(temperature, windSpeed);
    setWindChill.textContent = `Wind Chill: ${windChill}\u00B0C`;
} else {
    setWindChill.textContent = "Wind Chill: NA";
}