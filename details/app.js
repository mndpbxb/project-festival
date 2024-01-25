const performers = [
  {
    name: "Prabisha Adhikari",
    video:
      '<iframe width="50%" height="100%" src="https://www.youtube.com/embed/8W7rkP0MX_I" title="SHABDA - Prabisha Adhikari | Amavasya Productions" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    image: "prabisha.png",
    date: "29 January, 2024",
    time: "12:00PM - 3:00PM",
    genre: "Classical",
    song: "Jindagi Nai Bhandina",
  },
  {
    name: "Pramod Kharel",
    image: "pramod.png",
    date: "30 January, 2024",
    time: "09:00AM - 01:00PM",
    genre: "Rock",
    song: "Jindagi Nai Bhandina",
  },
  {
    name: "Raju Lama",
    image: "raju.jpeg",
    date: "30 January, 2024",
    time: "01:15PM - 05:00PM",
    genre: "Gazal, Pop",
    song: "Jindagi Nai Bhandina",
  },

  {
    name: "Sushant KC",
    image: "sushant-kc.png",
    date: "31 January, 2024",
    time: "10:00AM - 04:00PM",
    genre: "Modern Folk,",
    song: "Aama",
  },
];

// Function to generate HTML for each performer
function generatePerformerCard(performer) {
  const cardContainer = document.getElementById("card-container");
  let thumbnail;
  if (performer.video) {
    thumbnail = performer.video;
  } else {
    thumbnail = `<img src="assets/${performer.image}" alt="${performer.name}"></img>`;
    console.log({ thumbnail });
  }

  const cardDiv = document.createElement("div");
  cardDiv.className = "card-container";

  cardDiv.innerHTML = `
            <div class="card">
            ${thumbnail}
        
            <div class="card-content">
            <div class="overlay">  
             <h2>${performer.name}</h2>
             <span class="date"><i class="fa-solid fa-calendar-check"></i> Date:<span class="time-hour"> ${performer.date}</span></span><br />
             <span class="time"><i class="fa-solid fa-clock"></i> Time:<span class="time-hour"> ${performer.time}</span></span><br />
             <span class="genre"><i class="fa-solid fa-music"></i> Genre:<span> ${performer.genre}</span></span><br/>
             <span class="song"><i class="fa-solid fa-icons"></i> Song:<span class="song-name"> ${performer.song}</span></span><br/>
             <div class="buy-button">
             <a href="../tickets/index.html"><button><span><i class="fa-solid fa-ticket-simple"></i> Buy Tickets</span></button></a> 
             </div>
             </div>
             </div>
            </div>
          `;

  cardContainer.appendChild(cardDiv);
}

performers.forEach(generatePerformerCard);

//This is hero
