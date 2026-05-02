const links = document.querySelectorAll(".nav a");
const bar = document.querySelector(".bar");

const burger = document.getElementById("burger");
const menu = document.getElementById("mobileMenu");
const overlay = document.getElementById("overlay");
const theme = document.getElementById("theme");

/* MOVE BAR */
function moveBar(el) {
  bar.style.width = el.offsetWidth + "px";
  bar.style.left = el.offsetLeft + "px";
}

/* INIT */
moveBar(document.querySelector(".nav a.active"));

/* NAV CLICK */
links.forEach(link => {
  link.addEventListener("click", function () {

    links.forEach(l => l.classList.remove("active"));
    this.classList.add("active");

    moveBar(this);

    // Home effect restart
    if (this.textContent === "Home") {
      bar.style.transform = "scaleX(1.2)";
      setTimeout(() => bar.style.transform = "scaleX(1)", 200);
    }

    closeMenu();
  });
});

/* BURGER */
burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  menu.classList.toggle("show");
  overlay.classList.toggle("show");

  burger.classList.add("bounce");
  setTimeout(() => burger.classList.remove("bounce"), 300);
});

/* CLOSE MENU */
overlay.addEventListener("click", closeMenu);

function closeMenu() {
  menu.classList.remove("show");
  overlay.classList.remove("show");
  burger.classList.remove("active");
}

/* DARK MODE */
theme.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  theme.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});


// interactive page




// Scroll Animation
const texts = document.querySelectorAll('.text');

window.addEventListener('scroll', () => {
  texts.forEach(text => {
    const rect = text.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      text.classList.add('show');
    }
  });
});


// Register plugin
gsap.registerPlugin(ScrollTrigger);

// Card animation
gsap.to(".card", {
  scrollTrigger: {
    trigger: ".grid",
    start: "top 80%",
    toggleActions: "play none none reset"
  },
  opacity: 1,
  y: 0,
  duration: 1,
  stagger: 0.2,
  ease: "power3.out"
});

//  box
const boxes = document.querySelectorAll('.box');

function showBoxes() {
  const triggerBottom = window.innerHeight * 0.85;

  boxes.forEach((box, index) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add('show');
    }
  });
}

// assign left/right
boxes.forEach((box, index) => {
  if (index % 2 === 0) {
    box.classList.add('left');
  } else {
    box.classList.add('right');
  }
});

window.addEventListener('scroll', showBoxes);
showBoxes();


// footer js
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}