const movies = [
    {
      title: "A Knights Tale",
      releaseDate: "2010-07-16",
      rating: 8.8,
      description: "After his master dies, a peasant squire, fueled by his desire for food and glory, creates a new identity for himself as a knight.",
      poster: "https://image.tmdb.org/t/p/original/M0RI3J2XyR7A9YsuZ5HGsZx5Xj.jpg"
    },
    {
        title: "Lord of the Rings - Return of the King",
        releaseDate: "2010-11-05",
        rating: 9.0,
        description: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
        poster: "https://image.tmdb.org/t/p/original/uexxR7Kw1qYbZk0RYaF9Rx5ykbj.jpg"
    },
    {
      title: "RRR",
      releaseDate: "2022-03-25",
      rating: 7.8,
      description: "A fearless warrior on a perilous mission comes face to face with a steely cop serving British forces in this epic saga set in pre-independent India.",
      poster: "https://m.media-amazon.com/images/M/MV5BODUwNDNjYzctODUxNy00ZTA2LWIyYTEtMDc5Y2E5ZjBmNTMzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg"
    },
    {
        title: "Megamind",
        releaseDate: "2010-11-05",
        rating: 7.3,
        description: "Evil genius Megamind finally defeats his do-gooder nemesis, Metro Man, but is left without a purpose in a superhero-free world.",
        poster: "https://ia.media-imdb.com/images/M/MV5BMTAzMzI0NTMzNDBeQTJeQWpwZ15BbWU3MDM3NTAyOTM@._V1_UX182_CR0,0,182,268_AL_.jpg"
    },
    {
        title: "Stardust",
        releaseDate: "2007-07-29",
        rating: 7.6,
        description: "In a countryside town bordering on a magical land, a young man makes a promise to his beloved that he'll retrieve a fallen star by venturing into the magical realm.",
        poster: "https://pbcdn1.podbean.com/imglogo/ep-logo/pbblog628240/STARDUST_poster.jpg"
    },
    {
        title: "The Princess Bride",
        releaseDate: "1987-10-09",
        rating: 8.0,
        description: "A bedridden boy's grandfather reads him the story of a farmboy-turned-pirate who encounters numerous obstacles, enemies and allies in his quest to be reunited with his true love.",
        poster: "https://m.media-amazon.com/images/M/MV5BYzdiOTVjZmQtNjAyNy00YjA2LTk5ZTAtNmJkMGQ5N2RmNjUxXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_FMjpg_UX1000_.jpg"
    },
    {
        title: "Kung Fu Panda",
        releaseDate: "2008-10-08",
        rating: 7.6,
        description: "To everyone's surprise, including his own, Po, an overweight, clumsy panda, is chosen as protector of the Valley of Peace. His suitability will soon be tested as the valley's arch-enemy is on his way.",
        poster: "https://cdn.shopify.com/s/files/1/1416/8662/products/KungFuPanda_2008_original_film_art_f_1200x.jpg?v=1586555846"
    },
    {
        title: "The Prestige",
        releaseDate: "2006-10-20",
        rating: 8.5,
        description: "Rival 19th-century magicians engage in a bitter battle for trade secrets.",
        poster: "https://image.tmdb.org/t/p/original/dKoKG8SyvDjOW3ZC4OO6mSza8xZ.jpg",
    },
    {
        title: "Nacho Libre",
        releaseDate: "2006-06-16",
        rating: 5.9,
        description: "Berated all his life by those around him, a monk follows his dream and dons a mask to moonlight as a Luchador (Mexican wrestler).",
        poster: "https://cdn.shopify.com/s/files/1/1416/8662/products/nacho_libre_2006_teaser_original_film_art_08419768-998e-42b2-80ec-db766f5a1319_600x.jpg?v=1619026604"
    },
    {
        title: "Hot Rod",
        releaseDate: "2007-08-03",
        rating: 6.7,
        description: "Self-proclaimed stuntman Rod Kimble is preparing for the jump of his life - to clear fifteen buses to raise money for his abusive stepfather Frank's life-saving heart operation.",
        poster: "https://c8.alamy.com/comp/E5ND3K/hot-rod-from-left-isla-fisher-danny-r-mcbride-andy-samberg-bill-hader-E5ND3K.jpg"
    },

  ];

  function generateMovieList(movies, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = ""; // Clear existing content
  
    movies.forEach(movie => {
      const movieElement = document.createElement("article");
      movieElement.classList.add("movie");
  
      movieElement.innerHTML = `
        <img src="${movie.poster}" alt="Poster of ${movie.title}" class="movie-poster">
        <h2>${movie.title}</h2>
        <p><strong>Release Date:</strong> ${movie.releaseDate}</p>
        <p><strong>Rating:</strong> ${movie.rating}</p>
        <p>${movie.description}</p>
      `;
  
      container.appendChild(movieElement);
    });
  }
  
  // Call function for the main page
  if (document.getElementById("movie-list")) {
    generateMovieList(movies, "movie-list");
  }

  function sortMoviesByReleaseDate() {
    const sortedMovies = [...movies].sort((a, b) => new Date(a.releaseDate) - new Date(b.releaseDate));
    generateMovieList(sortedMovies, "movie-list-sorted");
  }
  
  // Sort movies by rating (highest to lowest)
  function sortMoviesByRating() {
    const sortedMovies = [...movies].sort((a, b) => b.rating - a.rating);
    generateMovieList(sortedMovies, "movie-list-sorted");
  }
  
  // Detect the page and call the appropriate function
  if (document.title.includes("Oldest to Newest")) {
    sortMoviesByReleaseDate();
  } else if (document.title.includes("Highest Rated")) {
    sortMoviesByRating();
  }

  function saveLastPage(pageName) {
    localStorage.setItem("lastPage", pageName);
  }
  
  // Load the last viewed page
  function loadLastPage() {
    const lastPage = localStorage.getItem("lastPage");
    if (lastPage) {
      window.location.href = lastPage;
    }
  }
  
  // Call this when a navigation link is clicked
  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", (e) => {
      saveLastPage(e.target.href);
    });
  });
  
  // Optionally, redirect to the last page on load (if applicable)
  if (window.location.pathname === "/index.html") {
    loadLastPage();
  }