// menu use bootstrap js
function toggleMode() {
  document.getElementById("body").classList.toggle("dark-mode");
}


// slider header
const slides = document.querySelector(".slides");
const slide = document.querySelectorAll(".slide");
const dotsContainer = document.querySelector(".dots");
let index = 0;
/* DOTS */
slide.forEach((_, i) => {
  const dot = document.createElement("span");
  dot.addEventListener("click", () => {
    index = i;
    update();
  });
  dotsContainer.appendChild(dot);
});
const dots = document.querySelectorAll(".dots span");
function update() {
  slides.style.transform = `translateX(${-index * 100}%)`;
  slide.forEach((s, i) => {
    s.classList.toggle("active", i === index);
  });
  dots.forEach((d, i) => {
    d.classList.toggle("active", i === index);
  });
}
/* BUTTONS (UPDATED CLASS NAME) */
document.querySelector(".slider-btn.next").addEventListener("click", () => {
  index = (index + 1) % slide.length;
  update();
});
document.querySelector(".slider-btn.prev").addEventListener("click", () => {
  index = (index - 1 + slide.length) % slide.length;
  update();
});
/* AUTO SLIDE */
setInterval(() => {
  index = (index + 1) % slide.length;
  update();
}, 4000);
/* INIT */
update();





/* text bottom slider */
window.addEventListener("DOMContentLoaded", () => {
  const text = document.getElementById("text");
  // 👉 split words
  const words = text.innerText.split(" ");
  text.innerHTML = words.map(word => `<span>${word}</span>`).join(" ");
  const spans = document.querySelectorAll("#text span");
  // 👉 scroll trigger
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      spans.forEach((span, i) => {
        setTimeout(() => {
          span.classList.add("show");
        }, i * 40); // 👉 delay each word
      });
    }
  }, {
    threshold: 0.2
  });
  observer.observe(text);
});



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
 const cards = document.querySelectorAll(".team-card");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2
});

cards.forEach(card => observer.observe(card));




// icon
const section = document.querySelector('.benefits-container');

if (section) {
  const cards = section.querySelectorAll('.benefit-card');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, { threshold: 0.2 });

  cards.forEach(card => observer.observe(card));
}


// footer js
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
