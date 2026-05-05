// menu use bootstrap js
function toggleMode() {
  document.getElementById("body").classList.toggle("dark-mode");
}


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