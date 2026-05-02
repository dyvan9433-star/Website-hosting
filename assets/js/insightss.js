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




// slider for header
let index = 0;
const slides = document.getElementById("slides");
const dots = document.querySelectorAll(".slider-dot");

let interval = setInterval(nextSlide, 5000);

function updateSlider(){
    slides.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach((dot,i)=>{
        dot.classList.toggle("active", i === index);
    });
}

function resetInterval(){
    clearInterval(interval);
    interval = setInterval(nextSlide, 5000);
}

function nextSlide(){
    index = (index + 1) % 3;
    updateSlider();
    resetInterval();
}

function goToSlide(i){
    index = i;
    updateSlider();
    resetInterval();
}




//all Insightss
  // Toggle text
    document.querySelectorAll(".btn-toggle").forEach(button => {
      button.addEventListener("click", () => {
        const text = button.previousElementSibling;

        text.classList.toggle("expanded");

        button.textContent = text.classList.contains("expanded") ? "Less" : "More";
      });
    });

    // Scroll animation
    const cards = document.querySelectorAll(".content");

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, { threshold: 0.2 });

    cards.forEach(card => observer.observe(card));



// footer js
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }