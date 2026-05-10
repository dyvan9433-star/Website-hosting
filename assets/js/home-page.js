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



// we build
const text = document.querySelector(".text");
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show"); // re-trigger when scrolling again
        }
    });
}, {
    threshold: 0.5
});

observer.observe(text);




// element
// =====================================
// ADVANCED PREMIUM EFFECTS
// =====================================
gsap.registerPlugin(ScrollTrigger);
// =====================================
// REVEAL TEXT LETTER ANIMATION
// =====================================
document.querySelectorAll(".text").forEach(text => {
  const letters = text.innerText.split("");
  text.innerHTML = letters
    .map(letter =>
      letter === " "
        ? `<span>&nbsp;</span>`
        : `<span class="letter">${letter}</span>`
    )
    .join("");
  gsap.fromTo(
    text.querySelectorAll(".letter"),
    {
      opacity: 0,
      y: 80,
      rotateX: -90,
      filter: "blur(10px)"
    },
    {
      scrollTrigger: {
        trigger: text,
        start: "top 80%"
      },
      opacity: 1,
      y: 0,
      rotateX: 0,
      filter: "blur(0px)",
      stagger: 0.03,
      duration: 1,
      ease: "back.out(1.7)"
    }
  );
});
// =====================================
// 3D CARD ROTATION EFFECT
// =====================================
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 20;
    const rotateX = ((y / rect.height) - 0.5) * -20;
    gsap.to(card, {
      rotateY,
      rotateX,
      transformPerspective: 1000,
      duration: 0.4,
      ease: "power2.out"
    });
  });
  card.addEventListener("mouseleave", () => {
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.8,
      ease: "elastic.out(1,0.5)"
    });
  });
});
// =====================================
// SCROLL PROGRESS BAR
// =====================================
const progressBar = document.createElement("div");
progressBar.style.position = "fixed";
progressBar.style.top = "0";
progressBar.style.left = "0";
progressBar.style.width = "0%";
progressBar.style.height = "4px";
progressBar.style.background =
  "linear-gradient(90deg,#6b73ff,#2A6094)";
progressBar.style.zIndex = "9999";
document.body.appendChild(progressBar);
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  const progress = (scrollTop / docHeight) * 100;
  progressBar.style.width = progress + "%";
});
// =====================================
// IMAGE FLASH EFFECT
// =====================================
document.querySelectorAll(".card img").forEach(img => {
  img.addEventListener("mouseenter", () => {
    gsap.fromTo(
      img,
      {
        filter: "brightness(1)"
      },
      {
        filter: "brightness(1.3)",
        duration: 0.3,
        yoyo: true,
        repeat: 1
      }
    );
  });
});
// =====================================
// FADE + SCALE SECTION
// =====================================
gsap.utils.toArray(".card").forEach(card => {
  gsap.fromTo(
    card,
    {
      opacity: 0,
      scale: 0.7,
      y: 100
    },
    {
      scrollTrigger: {
        trigger: card,
        start: "top 90%"
      },
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 1,
      ease: "expo.out"
    }
  );
});
// =====================================
// BACKGROUND PARALLAX
// =====================================
gsap.to(".bg-shape", {
  y: 150,
  scrollTrigger: {
    trigger: "body",
    start: "top top",
    end: "bottom bottom",
    scrub: true
  }
});
// =====================================
// SMOOTH BUTTON POP EFFECT
// =====================================
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    gsap.to(btn, {
      scale: 1.08,
      duration: 0.3,
      ease: "power2.out"
    });
  });
  btn.addEventListener("mouseleave", () => {
    gsap.to(btn, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out"
    });
  });
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