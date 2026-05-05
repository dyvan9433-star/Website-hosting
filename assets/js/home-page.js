// menu use bootstrap js
function toggleMode() {
  document.getElementById("body").classList.toggle("dark-mode");
}


// header slider
window.addEventListener("load", () => {
  const lines = document.querySelectorAll(".line");
  const text = document.querySelector("p.hidden-left");
  const buttons = document.querySelector(".buttons");
  const image = document.querySelector(".hero-image");

  lines.forEach((line, index) => {
    setTimeout(() => {
      line.classList.add("show");
    }, index * 400);
  });

  setTimeout(() => text.classList.add("show"), 1200);
  setTimeout(() => buttons.classList.add("show"), 1500);
  setTimeout(() => image.classList.add("show"), 600);
});


// Scroll Animation text bottom
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

gsap.to(".card", {
  scrollTrigger: {
    trigger: ".grid",
    start: "top 95%",
    toggleActions: "play none none reset"
  },
  opacity: 1,
  y: 0,
  duration: 0.8,   // 👈 បន្ថែម duration
  stagger: 0.12,
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


//zoom iamge
const images = document.querySelectorAll(".card img");
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImg");
  const closeBtn = document.querySelector(".close");

  // loop ទៅលើរូបទាំងអស់
  images.forEach(img => {
    img.onclick = function() {
      modal.style.display = "block";
      modalImg.src = this.src;
    }
  });

  closeBtn.onclick = () => modal.style.display = "none";

  modal.onclick = (e) => {
    if (e.target !== modalImg) {
      modal.style.display = "none";
    }
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