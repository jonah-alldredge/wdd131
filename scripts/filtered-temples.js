const hamButton = document.querySelector("#menu");
const navMenu = document.querySelector(".navMenu");
hamButton.addEventListener("click", () => {
    hamButton.classList.toggle("active"); 
    navMenu.classList.toggle("active");
});
// Create a new Date object
const lastModified = new Date();
const currentYear = new Date().getFullYear();
// Format it as a readable string
// const dateTime = lastModified.toLocaleString();
// Display it on the page
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;
document.getElementById("currentYear").textContent = currentYear;

// Old: Temples built before 1900 - id = oldPage
// New: Temples built after 2000 - id = newPage
// Large: Temples larger than 90,000 square feet - id = largePage
// Small: Temples smaller than 10,000 square feet - id = smallPage
// Home: displays all the temples stored in the array - id = homePage

const oldPageLink = document.querySelector("#oldPage");
const newPageLink = document.querySelector("#newPage");
const largePageLink = document.querySelector("#largePage");
const smallPageLink = document.querySelector("#smallPage");
const homePageLink = document.querySelector("#homePage");

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Anchorage Alaska",
        location: "Anchorage, Alaska",
        dedicated: "1999, January, 9",
        area: 11937,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/anchorage-alaska/400x225/anchorage-temple-lds-253274-wallpaper.jpg"
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 41010,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/800x500/5-Rome-Temple-2160345.jpg"
    },
    {
        templeName: "Draper",
        location: "Draper, Utah",
        dedicated: "2009, March, 20",
        area: 58300,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/draper-utah/800x500/draper-temple-769424-wallpaper.jpg"
    }
    // Add more temple objects here...
];

createTempleCard(temples);

oldPageLink.addEventListener("click", () => {
    const yearDedicated = temples.filter((temple) => parseInt(temple.dedicated) < 2000);
    createTempleCard(yearDedicated);
});

newPageLink.addEventListener("click", () => {
    const yearDedicated = temples.filter((temple) => parseInt(temple.dedicated) >= 2000);
    createTempleCard(yearDedicated);
});

largePageLink.addEventListener("click", () => {
    createTempleCard(temples.filter((temple) => temple.area > 90000));
});

smallPageLink.addEventListener("click", () => {
    createTempleCard(temples.filter((temple) => temple.area < 10000));
});

homePageLink.addEventListener("click", () => {
    createTempleCard(temples);
});


function createTempleCard(filteredTemples) {
    document.querySelector(".pictures").innerHTML = "";
    filteredTemples.forEach(temple => {
        const picture = document.getElementById("picture");
        const figure = document.createElement("figure");
        const img = document.createElement("img");
        const div = document.createElement("div");
        const location = document.createElement("figcaption");
        const dedicated = document.createElement("figcaption");
        const area = document.createElement("figcaption");
        const title = document.createElement("h2");
        picture.appendChild(figure);
        figure.appendChild(title);
        figure.appendChild(div);
        div.appendChild(location);
        div.appendChild(dedicated);
        div.appendChild(area);
        
        // figure.appendChile(div);
        figure.appendChild(img);
        title.textContent = temple.templeName;
        location.textContent = `Location: ${temple.location}`;
        dedicated.textContent = `Dedication: ${temple.dedicated}`;
        area.textContent = `Area: ${temple.area} sq ft`;
        // .textContent = "hello elder todd";
        // figure.appendChild(document.createElement("figcaption").textContent = "hello");
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("loading", "lazy");
        img.setAttribute("alt", `Picture of the ${temple.templeName} temple`)
    }); 
}

// console.log(temples[0].templeName);
// prints it to the console("picture")