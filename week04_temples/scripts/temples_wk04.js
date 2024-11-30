// Current year for copyright display
const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = `© ${currentYear}`;

// Last modified date for the page
document.getElementById("lastModified").textContent = document.lastModified;

const hamburgerButton = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburgerButton.addEventListener("click", function() {
    navMenu.classList.toggle("show");
});

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
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
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
      location: "Kensington, Maryland, United States",
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
        templeName: "Mesa Temple",
        location: "Mesa, Arizona",
        dedicated: "April 25, 1992",
        area: 10700,
        imageUrl:
        "https://www.churchofjesuschrist.org/bc/content/ldsorg/church/news/2020/03/25/580-Mesa-Arizona-Temple1-scaled.jpg?lang=eng"
    },
    {
        templeName: "Salt Lake Temple",
        location: "Salt lake City, Utah", 
        dedicated: "April 24, 1893", 
        area: 253015,
        imageUrl:
        "https://www.churchofjesuschrist.org/bc/content/ldsorg/church/news/2019/01/02/580-the-salt-lake-temple-reflects-in-the-reflection-pool-on.jpg?lang=eng"
    },
];
function createTempleCard(temple) {
    const card = document.createElement("div");
    card.className = "temple-card";

    card.innerHTML = `
        <h2>${temple.templeName}</h2>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Area:</strong> ${temple.area} sq ft</p>
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
    `;

    document.getElementById("templeContainer").appendChild(card);
}

function displayTemples(templeArray) {
    document.getElementById("templeContainer").innerHTML = ""; // Clear previous cards
    templeArray.forEach(createTempleCard); // Create new cards
}
displayTemples(temples);

function filterTemples(criteria) {
    const filtered = temples.filter(temple => {
        const year = new Date(temple.dedicated).getFullYear();
        switch (criteria) {
            case "Old":
                return year < 1900;
            case "New":
                return year > 2000;
            case "Large":
                return temple.area > 90000;
            case "Small":
                return temple.area < 10000;
            default:
                return true; // Show all temples for "Home"
        }
    });
    displayTemples(filtered);
}
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const criteria = event.target.textContent.trim();
        filterTemples(criteria);
    });
});