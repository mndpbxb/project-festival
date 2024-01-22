const performers = [
  {
    name: "Sushant KC",
    image: "assets/sushant-kc.png",
    time: "10am - 2PM",
    genre: "Modern Folk, Pop, Rock, Gazal",
    song: "Aama",
  },
  {
    name: "Prabisha Adhikari",
    image: "assets/Prabisha-Adhikari.png",
    time: "11am - 1PM",
    genre: "Modern Folk, Classical",
    song: "Jindagi Nai Bhandina",
  },
  {
    name: "Pramod Kharel",
    image: "assets/pramod.jpg",
    time: "11am - 1PM",
    genre: "Modern Folk, Classical",
    song: "Jindagi Nai Bhandina",
  },
  {
    name: "Raju Lama",
    image: "assets/raju.jpg",
    time: "11am - 1PM",
    genre: "Modern Folk, Classical",
    song: "Jindagi Nai Bhandina",
  },
];

// Function to generate HTML for each performer
// function generatePerformerCard(performer) {
//   const cardContainer = document.getElementById("card-container");

//   const cardDiv = document.createElement("div");
//   cardDiv.className = "card-container";

//   cardDiv.innerHTML = `
//             <div class="card">
//               <img src="assets/${performer.image}" alt="${performer.name}">
//               <div class="card-content">
//                 <h2>${performer.name}</h2>
//                 <span class="time"><ion-icon name="musical-notes-sharp"></ion-icon> Time:<span class="time-hour"> ${performer.time}</span></span><br />
//                 <span class="genre"><ion-icon name="musical-notes-sharp"></ion-icon> Genre:<span> ${performer.genre}</span></span><br/>
//                 <span class="song"><ion-icon name="radio-sharp"></ion-icon> Song:<span class="song-name"> ${performer.song}</span></span><br/>
//                 <div class="buy-button">
//                     <button><span><ion-icon name="ticket-sharp"></ion-icon> Buy Tickets</span></button>
//                 </div>
//               </div>
//             </div>
//           `;

//   cardContainer.appendChild(cardDiv);
// }

// performers.forEach(generatePerformerCard);

//This is hero

  // Function to create HTML for each performer
  function createArtistCard(artist) {
    const card = document.createElement('div');
    card.classList.add('artist-card');

    card.innerHTML = `
      <div class="overlay">
        <div class="content">
          <h5>${artist.name}</h5>
          <p class="date"><ion-icon name="time-outline"></ion-icon> <span> Time: ${artist.time}</span></p>
          <p class="genre"> <ion-icon name="musical-notes-sharp"></ion-icon> <span> Genre: ${artist.genre}</span></p>
          <p class="title"><ion-icon name="radio-sharp"></ion-icon> <span> Song: ${artist.song}</span></p>
          <div class="button">
            <button><ion-icon name="ticket-sharp"></ion-icon><span>Buy Tickets<span></button>
          </div>
        </div>
      </div>
      <img src="${artist.image}" alt="artist image" />
    `;

    return card;
  }

  function populateWebpage() {
    const container = document.getElementById('artist-container');

    performers.forEach(artist => {
      const artistCard = createArtistCard(artist);
      container.appendChild(artistCard);
    });
  }

  populateWebpage();
