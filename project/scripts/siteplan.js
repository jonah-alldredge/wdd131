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
        price: "14,299.99",
        imageUrl: "images/trek-high-price.webp",
        link: "https://www.sharpbicycle.com/product/trek-madone-slr-9-gen-8-770737-1.htm"
    },
    {
        manufactured: "Trek",
        name: "Checkpoint SL 7 AXS Gen 3",
        year: "2026",
        price: "6,249.99",
        imageUrl: "images/trek-medium-price.webp",
        link: "https://www.sharpbicycle.com/product/trek-checkpoint-sl-7-axs-gen-3-1244236-1.htm"
    },
    {
        manufactured: "Trek",
        name: "Domane AL 2 Gen 4",
        year: "2024",
        price: "1,199.99",
        imageUrl: "images/trek-low-price.webp",
        link: "https://www.sharpbicycle.com/product/trek-domane-al-2-gen-4-551489-1.htm"
    },
    {
        manufactured: "Giant",
        name: "Propel Advanced SL 0",
        year: "2026",
        price: "13,000",
        imageUrl: "images/giant-high-price.webp",
        link: "https://www.giant-bicycles.com/us/propel-advanced-sl-0--red-"
    },
    {
        manufactured: "Giant",
        name: "Propel Advanced Pro 0-AXS",
        year: "2026",
        price: "8,250",
        imageUrl: "images/giant-medium-price.webp",
        link: "https://www.giant-bicycles.com/us/propel-advanced-pro-0-axs-2027"
    },
    {
        manufactured: "Giant",
        name: "Contend 3",
        year: "2025",
        price: "900",
        imageUrl: "images/giant-low-price.jpg",
        link: "https://www.giant-bicycles.com/us/contend-3-2025"
    },
    {
        manufactured: "Cannondale",
        name: "SuperSix EVO LAB71 Team",
        year: "2025",
        price: "14,999",
        imageUrl: "images/cannondale-high-price.webp",
        link: "https://www.cannondale.com/en-us/bikes/road/race/supersix-evo/supersix-evo-lab71-team-c11105u"
    },
    {
        manufactured: "Cannondake",
        name: "Synapse Carbon 1",
        year: "2025",
        price: "8,499",
        imageUrl: "images/cannondale-medium-price.webp",
        link: "https://www.cannondale.com/en-us/bikes/road/endurance/synapse-carbon/synapse-carbon-1"
    },
    {
        manufactured: "Cannondale",
        name: "Synapse 2",
        year: "2025",
        price: "1,799",
        imageUrl: "images/cannondale-low-price.png",
        link: "https://www.cannondale.com/en-us/bikes/road/endurance/synapse/synapse-2"
    }
];

const mountainBike = [
    {
        manufactured: "Trek",
        name: "Slash+ 9.7 SLC/XT",
        year: "2025",
        price: "7,999.99",
        imageUrl: "images/trek-mountain-high-price.webp",
        link: "https://www.sharpbicycle.com/product/trek-slash-9.7-slx-xt-821386-1.htm"
    },
    {
        manufactured: "Trek",
        name: "Top Fuel 8",
        year: "2025",
        price: "3,499.99",
        imageUrl: "images/trek-mountain-medium-price.jpg",
        link: "https://www.sharpbicycle.com/product/trek-top-fuel-8-398587-1.htm"
    },
    {
        manufactured: "Trek",
        name: "Marlinn 5 Gen 3",
        year: "2026",
        price: "799.99",
        imageUrl: "images/trek-mountain-low-price.png",
        link: "https://www.sharpbicycle.com/product/trek-marlin-5-gen-3-709745-1.htm"
    },
    {
        manufactured: "Giant",
        name: "Trance X Advanced 0",
        year: "2024",
        price: "8,000",
        imageUrl: "images/giant-mountain-high-price.webp",
        link: "https://www.giant-bicycles.com/us/trance-x-advanced-0-2024"
    },
    {
        manufactured: "Giant",
        name: "XTC Advanced 29 1",
        year: "2026",
        price: "4,000",
        imageUrl: "images/giant-mountain-medium-price.webp",
        link: "https://www.giant-bicycles.com/us/xtc-advanced-29-1"
    },
    {
        manufactured: "Giant",
        name: "Stance",
        year: "2022",
        price: "1,400",
        imageUrl: "images/giant-mountain-low-price.jpg",
        link: "https://www.giant-bicycles.com/us/stance-2022"
    },
    {
        manufactured: "Cannondale",
        name: "Moterra SL 1",
        year: "2024",
        price: "11,549",
        imageUrl: "images/cannondale-mountain-high-price.png",
        link: "https://www.cannondale.com/en-us/bikes/electric/e-mountain/moterra-sl/moterra-sl-1"
    },
    {
        manufactured: "Cannondale",
        name: "Moterra 4",
        year: "2024",
        price: "4,499",
        imageUrl: "images/cannondale-mountain-medium-price.png",
        link: "https://www.cannondale.com/en-us/bikes/electric/e-mountain/moterra-neo/moterra-4-smu"
    },
    {
        manufactured: "Cannondale",
        name: "Habit HT 3",
        year: "2023",
        price: "1,199",
        imageUrl: "images/cannondale-mountain-low-price.png",
        link: "https://www.cannondale.com/en-us/bikes/mountain/trail-bikes/habit-ht/habit-ht-3"
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
        img.setAttribute("alt", `Picture of the ${bike.name}`);
        title.textContent = bike.name;
        manufactured.textContent = `Made by: ${bike.manufactured}`;
        year.textContent = `Year Made: ${bike.year}`;
        price.textContent = `Price: $${bike.price}`;
    });
}