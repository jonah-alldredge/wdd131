// I can use JavaScript to make cards for the different bikes, I don't know if I need to make different pages for each one but hopefully not
// lets put 2 bikes from each site to each page. 2 mountain bikes and 2 road bikes
//actually maybe i have 3, 1 for each tier of cost, low, medium, high.
//I could also have a thing where it edits what the price of the bike is
// for the general guide im think of maybe doing a history lesson each of the brands, what that brand is known for?

// also for the code in hear, maybe I do an if statement to say if the class matches this put this info in the individual cards
const hamButton = document.querySelector("#menu");
const navMenu = document.querySelector(".navMenu");
let guideGetter = localStorage.getItem("id");
const guideSetter = document.querySelectorAll(".guide"); // we have to iterate through it like a list

hamButton.addEventListener("click", () => {
    hamButton.classList.toggle("active");
    navMenu.classList.toggle("active");
});

guideSetter.forEach(guide => {
    guide.addEventListener("click", (event) => {
        const id = event.currentTarget.id;
        localStorage.setItem("id", id);
    });
});

const roadBike = [
    {
        manufactured: "Trek",
        name: "Madone SLR 9 Gen 8",
        year: "2026",
        price: 14299.99,
        imageUrl: "images/trek-highprice.webp",
        link: "https://www.sharpbicycle.com/product/trek-madone-slr-9-gen-8-770737-1.htm"
    }
];

const mountainBike = [
    {
        manufactured: "Giant",
        name: "Madone SLR 9 Gen 8",
        year: "2026",
        price: 14299.99,
        imageUrl: "images/trek-highprice.webp",
        link: "https://www.sharpbicycle.com/product/trek-madone-slr-9-gen-8-770737-1.htm"
    }
];

if (guideGetter != "") {
    if (guideGetter === "roadGuide") {
        createBikeCard(roadBike);
    } else if (guideGetter === "mountainGuide") {
        createBikeCard(mountainBike);
    }
}

function createBikeCard(bikes) {
    // document.querySelector("main-card").innerHTML = "";
    bikes.forEach(bike => {
        const main = document.getElementById("main-card");
        const picture = document.createElement("picture");
        const figure = document.createElement("figure");
        const img = document.createElement("img");
        const div = document.createElement("div");
        const manufactured = document.createElement("figcaption");
        const year = document.createElement("figcaption");
        const price = document.createElement("figcaption");
        const title = document.createElement("h3");
        main.appendChild(picture);
        picture.classList.add("card");
        picture.appendChild(figure);
        figure.appendChild(img);
        figure.appendChild(title);
        figure.appendChild(div);
        div.appendChild(manufactured);
        div.appendChild(year);
        div.appendChild(price);
        // div.appendChild();
        img.setAttribute("src", bike.imageUrl);
        img.setAttribute("loading", "lazy");
        img.setAttribute("alt", `Picture of the ${bike.name} bike`);
        title.textContent = bike.name;
        manufactured.textContent = `Made by ${bike.manufactured}`;
        year.textContent = `Year Made: ${bike.year}`;
        price.textContent = `Price: $${bike.price}`;
    });
}