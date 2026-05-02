const links = document.querySelectorAll(".nav a");
const bar = document.querySelector(".bar");

const burger = document.getElementById("burger");
const menu = document.getElementById("mobileMenu");
const overlay = document.getElementById("overlay");
const theme = document.getElementById("theme");

/* MOVE BAR */
function moveBar(el){
  bar.style.width = el.offsetWidth + "px";
  bar.style.left = el.offsetLeft + "px";
}

/* INIT */
moveBar(document.querySelector(".nav a.active"));

/* NAV CLICK */
links.forEach(link => {
  link.addEventListener("click", function(){

    links.forEach(l => l.classList.remove("active"));
    this.classList.add("active");

    moveBar(this);

    // Home effect restart
    if(this.textContent === "Home"){
      bar.style.transform = "scaleX(1.2)";
      setTimeout(()=> bar.style.transform = "scaleX(1)", 200);
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
  setTimeout(()=> burger.classList.remove("bounce"), 300);
});

/* CLOSE MENU */
overlay.addEventListener("click", closeMenu);

function closeMenu(){
  menu.classList.remove("show");
  overlay.classList.remove("show");
  burger.classList.remove("active");
}

/* DARK MODE */
theme.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  theme.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});


// slider header
const slides = document.querySelector(".slides");
const slideCount = document.querySelectorAll(".slide").length;
const dotsContainer = document.querySelector(".dots");

let index = 0;

/* create dots */
for (let i = 0; i < slideCount; i++) {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  if (i === 0) dot.classList.add("active");

  dot.addEventListener("click", () => {
    index = i;
    updateSlider();
  });

  dotsContainer.appendChild(dot);
}

function updateSlider() {
  slides.style.transform = `translateX(-${index * 100}%)`;

  document.querySelectorAll(".dot").forEach((d, i) => {
    d.classList.toggle("active", i === index);
  });
}

/* buttons */
document.querySelector(".next").onclick = () => {
  index = (index + 1) % slideCount;
  updateSlider();
};

document.querySelector(".prev").onclick = () => {
  index = (index - 1 + slideCount) % slideCount;
  updateSlider();
};

/* auto slide */
setInterval(() => {
  index = (index + 1) % slideCount;
  updateSlider();
}, 4000);




// bigger image
window.addEventListener("load", () => {
  const imgs = document.querySelectorAll(".image-container img");

  imgs.forEach((img, i) => {
    setTimeout(() => {
      img.classList.add("show");
    }, i * 650); // stagger effect
  });
});


// meet the team work
window.addEventListener("load", () => {
  const items = document.querySelectorAll(".animate");

  items.forEach((el, i) => {
    el.style.animationDelay = (i * 250) + "ms";
  });
});




// icon
  window.addEventListener("load", () => {
    const cards = document.querySelectorAll(".benefit-card");

    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add("show");
      }, index * 300);
    });
  });


// footer js
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
