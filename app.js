const performers = [
  {
    name: "Sushant KC",
    image: "sushant-kc.png",
    time: "10am - 2PM",
    genre: "Modern Folk, Pop, Rock, Gazal",
    song: "Aama",
  },
  {
    name: "Prabisha Adhikari",
    image: "Prabisha-Adhikari.png",
    time: "11am - 1PM",
    genre: "Modern Folk, Classical",
    song: "Jindagi Nai Bhandina",
  },
  {
    name: "Pramod Kharel",
    image: "pramod.jpg",
    time: "11am - 1PM",
    genre: "Modern Folk, Classical",
    song: "Jindagi Nai Bhandina",
  },
  {
    name: "Raju Lama",
    image: "raju.jpg",
    time: "11am - 1PM",
    genre: "Modern Folk, Classical",
    song: "Jindagi Nai Bhandina",
  },
];

// Function to generate HTML for each performer
function generatePerformerCard(performer) {
  const cardContainer = document.getElementById("card-container");

  const cardDiv = document.createElement("div");
  cardDiv.className = "card-container";

  cardDiv.innerHTML = `
            <div class="card">
              <img src="assets/${performer.image}" alt="${performer.name}">
              <div class="card-content">
                <h2>${performer.name}</h2>
                <span class="time"><ion-icon name="time-sharp"></ion-icon> Time:<span class="time-hour"> ${performer.time}</span></span><br />
                <span class="genre"><ion-icon name="musical-notes-sharp"></ion-icon> Genre:<span> ${performer.genre}</span></span><br/>
                <span class="song"><ion-icon name="radio-sharp"></ion-icon> Song:<span class="song-name"> ${performer.song}</span></span><br/>
                <div class="buy-button">
                    <button><span><ion-icon name="ticket-sharp"></ion-icon> Buy Tickets</span></button>
                </div>
              </div>
            </div>
          `;

  cardContainer.appendChild(cardDiv);
}

performers.forEach(generatePerformerCard);

//This is hero
