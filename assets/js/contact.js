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




// footer js
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }