// menu use bootstrap js
function toggleMode() {
  document.getElementById("body").classList.toggle("dark-mode");
}



// project
function filter(category, btn) {
  let cards = document.querySelectorAll(".card");
  let buttons = document.querySelectorAll(".menu button");

  buttons.forEach(b => b.classList.remove("active"));
  btn.classList.add("active");

  cards.forEach(card => {
    card.style.display = (category === "all" || card.classList.contains(category))
      ? "block"
      : "none";
  });
}

// ===== PAGE LOAD =====
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loaded");

  // ===== SCROLL ANIMATION (INTERSECTION OBSERVER) =====
  const cards = document.querySelectorAll(".card");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.2 });

  cards.forEach(card => observer.observe(card));
});




// loop image bottom
const box = document.getElementById("scrollBox");

/* 🔥 CLONE CARDS for infinite loop */
box.innerHTML += box.innerHTML;

let speed = 1;

function animate() {
  box.scrollLeft += speed;

  // loop reset smoothly
  if (box.scrollLeft >= box.scrollWidth / 2) {
    box.scrollLeft = 0;
  }

  requestAnimationFrame(animate);
}

animate();

/* pause on hover */
box.addEventListener("mouseenter", () => speed = 0);
box.addEventListener("mouseleave", () => speed = 1);


// footer js
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}