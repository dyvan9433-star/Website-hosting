// menu use bootstrap js
function toggleMode() {
  document.getElementById("body").classList.toggle("dark-mode");
}




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