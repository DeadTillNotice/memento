/* ------------------------------------
   1. Importing Fonts
   - Meddon for the title
   - Poppins for other text
--------------------------------------- */
@import url('https://fonts.googleapis.com/css2?family=Meddon&family=Poppins:wght@400;600&display=swap');

/* ------------------------------------
   2. Reset / Basic Styles
--------------------------------------- */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}

/* ------------------------------------
   3. Gradient + Starry Background
--------------------------------------- */
body {
  /* We'll apply a gradient background and overlay stars with a pseudo-element */
  background: linear-gradient(to bottom, #020548, #16016c, #240046, #240046) no-repeat center center fixed;
  background-size: cover;
  font-family: 'Poppins', sans-serif; /* Default for all text */
  color: #fff;
  position: relative; /* So pseudo-elements can be positioned absolutely */
}

/* Create the 'stars' using a pseudo-element */
body::after {
  content: "";
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  /*
    We'll create small white dots to simulate distant stars.
    You can add more radial-gradients if you want more stars.
  */
  background:
    radial-gradient(1px 1px at 20% 20%, rgba(255,255,255,0.8) 1%, transparent 1%),
    radial-gradient(1px 1px at 80% 30%, rgba(255,255,255,0.6) 1%, transparent 1%),
    radial-gradient(1px 1px at 50% 80%, rgba(255,255,255,0.7) 1%, transparent 1%),
    radial-gradient(1px 1px at 90% 60%, rgba(255,255,255,0.8) 1%, transparent 1%);
  background-repeat: repeat;
  background-size: 200px 200px;

  /* Animation to make them twinkle slightly */
  animation: twinkle 2s infinite alternate ease-in-out;
  pointer-events: none; /* Let clicks pass through to underlying content */
  z-index: -1; /* Place behind the .content container */
}

@keyframes twinkle {
  0% {
    opacity: 0.7;
  }
  100% {
    opacity: 1;
  }
}

/* ------------------------------------
   4. Main Content Container
--------------------------------------- */
.content {
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 100vh; /* Enough scroll space */
  position: relative;
  z-index: 1; /* Above the star layer */
}

/* ------------------------------------
   5. Title Section (Meddon font)
--------------------------------------- */
.title-section {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.title-section h1 {
  font-family: 'Meddon', cursive; /* Title uses Meddon */
  font-size: 4rem;
  color: #f9d4d4; /* Soft pinkish tone for Christmas vibe */
  animation: fadeout 3s forwards;
  animation-delay: 2s; /* Wait 2 seconds, then fade out over 3s */
}

@keyframes fadeout {
  to {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);
  }
}

/* ------------------------------------
   6. Intro Text
--------------------------------------- */
.intro-text {
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 1rem;
  font-size: 1.2rem;
}

/* ------------------------------------
   7. Map Containers
--------------------------------------- */
.map-container {
  width: 100%;
  height: 600px;
  margin: 2rem auto;
  border: 2px solid #fff;
  border-radius: 8px;
}

/* ------------------------------------
   8. Transition Message (hidden initially)
--------------------------------------- */
.transition-message {
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.5rem;
  padding: 1rem;
  opacity: 0;
  transition: opacity 1s;
}

.show-transition-message {
  opacity: 1 !important;
}

/* ------------------------------------
   9. World Map Section (hidden initially)
--------------------------------------- */
.world-map-section {
  min-height: 100vh;
  display: none; 
  align-items: center;
  justify-content: center;
}

.show-world-map {
  display: flex !important;
}

/* ------------------------------------
   10. Final Paragraph
--------------------------------------- */
.final-paragraph {
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 2rem 0;
  font-size: 1.3rem;
  line-height: 1.5;
}
