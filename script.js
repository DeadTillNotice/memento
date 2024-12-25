document.addEventListener("DOMContentLoaded", () => {
  /* ------------------------------------
     A. Initialize Naples Map
     Using a dark tile layer for a 'night' vibe
  --------------------------------------- */
  const naplesMap = L.map("mapNaples").setView([40.8518, 14.2681], 13);
  L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
    attribution: '© OpenStreetMap, © CARTO'
  }).addTo(naplesMap);

  /* ------------------------------------
     B. Memory Markers in Naples
  --------------------------------------- */
  const memoryPoints = [
    {
      coords: [40.8686, 14.2588],
      message: "I had the best time ever with your hand in mine and your little bed"
    },
    {
      coords: [40.8502, 14.2592],
      message: "Our very first dinner together"
    },
    {
      coords: [40.8508, 14.2556],
      message: "We sat on the bench for hours talking about Leopardi. You're the love of my life."
    },
    {
      coords: [40.8598, 14.2495],
      message: "The stranger place where we got to know each other"
    },
    {
      coords: [40.8831, 14.2900],
      message: "I miss you and your kisses"
    },
    {
      coords: [40.8522, 14.2532],
      message: "We got Howard here :')"
    }
  ];

  let visitedCount = 0;
  const totalPoints = memoryPoints.length;

  memoryPoints.forEach(point => {
    const marker = L.marker(point.coords).addTo(naplesMap);
    marker.bindPopup(point.message);

    marker.on("click", () => {
      visitedCount++;
      if (visitedCount === totalPoints) {
        revealTransitionMessage();
      }
    });
  });

  /* ------------------------------------
     C. Reveal Transition & World Map
  --------------------------------------- */
  function revealTransitionMessage() {
    // Hide Naples map section
    document.querySelector(".naples-map-section").style.display = "none";

    // Show transition message
    const transitionMsg = document.querySelector(".transition-message");
    transitionMsg.classList.add("show-transition-message");

    // After a short delay, reveal the world map
    setTimeout(() => {
      document.querySelector(".world-map-section").classList.add("show-world-map");
      initWorldMap();
    }, 2000);
  }

  function initWorldMap() {
    const worldMap = L.map("mapWorld").setView([20, 0], 2);

    // Also use a dark tile layer for the world map
    L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
      attribution: '© OpenStreetMap, © CARTO'
    }).addTo(worldMap);

    // Optionally add a marker or popup
    // L.marker([20, 0]).addTo(worldMap).bindPopup("Let's fill our world with memories!");
  }
});
