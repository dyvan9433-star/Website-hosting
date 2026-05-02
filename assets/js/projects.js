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



// project
    const buttons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.card');

// animation on load
window.addEventListener('load', () => {
  cards.forEach((card, i) => {
    setTimeout(() => {
      card.classList.add('show');
    }, i * 180);
  });
});

// filter
buttons.forEach(btn => {
  btn.addEventListener('click', () => {

    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    cards.forEach(card => {
      card.classList.remove('show');

      setTimeout(() => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = 'block';
          setTimeout(() => card.classList.add('show'), 50);
        } else {
          card.style.display = 'none';
        }
      }, 200);
    });

  });
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