// menu use bootstrap js
function toggleMode() {
  document.getElementById("body").classList.toggle("dark-mode");
}


// header style
const hero = document.querySelector(".hero-section");
const cards = document.querySelectorAll(".hero-card");
/* LOAD ANIMATION */
window.addEventListener("load", () => {
  hero.classList.add("loaded");
});
/* SCROLL REVEAL */
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add("show");
      }, i * 150);
    }
  });
}, { threshold: 0.2 });
cards.forEach(card => observer.observe(card));
/* HERO PARALLAX MOUSE MOVE */
hero.addEventListener("mousemove", (e) => {
  if (window.innerWidth < 768) return;
  const x = (window.innerWidth / 2 - e.clientX) / 40;
  const y = (window.innerHeight / 2 - e.clientY) / 40;
  document.querySelector(".hero-bg").style.transform =
    `scale(1.12) translate(${x}px, ${y}px)`;
});



// hover interaction enhancement (optional smooth effect)
document.querySelectorAll(".hero-card").forEach(card => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.transform = `
      perspective(600px)
      rotateX(${(y - rect.height / 2) / 15}deg)
      rotateY(${-(x - rect.width / 2) / 15}deg)
      translateY(-10px)
      scale(1.02)
    `;
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0) scale(1)";
  });
});


//My project
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loaded");

  initScrollObserver();

  const cards = document.querySelectorAll(".card");

  // smooth entrance
  cards.forEach((card, i) => {
    setTimeout(() => {
      card.classList.add("is-visible");
    }, i * 150); // ✔ balanced smooth delay
  });
});
function filter(category, btn) {
  const cards = document.querySelectorAll(".card");
  const buttons = document.querySelectorAll(".menu button");

  buttons.forEach(b => b.classList.remove("active"));
  btn.classList.add("active");

  let delay = 0;

  cards.forEach((card) => {
    const match = category === "all" || card.classList.contains(category);

    if (match) {
      card.style.display = "block";

      requestAnimationFrame(() => {
        setTimeout(() => {
          card.classList.add("is-visible");
        }, delay);

        delay += 150; // ✔ smooth wave
      });

    } else {
      card.classList.remove("is-visible");

      setTimeout(() => {
        card.style.display = "none";
      }, 400);
    }
  });
}
// ===== SCROLL OBSERVER =====
function initScrollObserver() {
  const cards = document.querySelectorAll(".card");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      } else {
        entry.target.classList.remove("is-visible");
      }
    });
  }, {
    threshold: 0.2
  });

  cards.forEach(card => observer.observe(card));
}




// loop image bottom
const slider = document.getElementById("slider");
let isDown = false;
let startX;
let scrollLeft;
slider.addEventListener("mousedown",(e)=>{
  isDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener("mouseleave",()=> isDown = false);
slider.addEventListener("mouseup",()=> isDown = false);
slider.addEventListener("mousemove",(e)=>{
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 1.6;
  slider.scrollLeft = scrollLeft - walk;
});
slider.addEventListener("touchstart",(e)=>{
  startX = e.touches[0].pageX;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener("touchmove",(e)=>{
  const x = e.touches[0].pageX;
  const walk = (x - startX) * 1.6;
  slider.scrollLeft = scrollLeft - walk;
});



//zoom iamge
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".card img, .ui-card img");
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImg");
  const closeBtn = document.querySelector(".close");
  // open modal
  images.forEach(img => {
    img.addEventListener("click", () => {
      modal.style.display = "flex";
      modalImg.src = img.src;
    });
  });
  // close button
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
  // click outside
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

});


// footer js
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


// =======================
// change language with animation restart
// =======================
function restartAnimation(el) {
  if (!el || !el.parentNode) return;

  // clone element (hard reset)
  const clone = el.cloneNode(true);

  // keep same id
  clone.id = el.id;

  // replace old element
  el.parentNode.replaceChild(clone, el);

  // re-trigger animation
  requestAnimationFrame(() => {
    clone.classList.add("fade-in");
  });
}


function restartAnimation(el) {
  if (!el) return;

  // remove animation class
  el.classList.remove("fade-in");

  // FORCE reflow (MOST IMPORTANT PART)
  void el.offsetHeight;

  // re-add on next frame (guaranteed restart)
  requestAnimationFrame(() => {
    el.classList.add("fade-in");
  });
}


document.addEventListener("DOMContentLoaded", () => {

  function restartAnimation(el) {
    if (!el) return;

    el.classList.remove("fade-in");

    // force real DOM repaint
    void el.offsetHeight;

    requestAnimationFrame(() => {
      el.classList.add("fade-in");
    });
  }

  let currentLang = "en";

  const translations = {
    en: {
      home: "Home",
      projects: "Projects",
      studio: "Studio",
      insights: "Insights",
      contact: "Contact",
      menu: "Menu",
      modern: "We build modern digital experiences",
      creative: "Creative design, development & branding solutions.",
      uiux: "🎨 UI/UX Design",
      clean: "Clean modern interface design.",
      web: "💻 Web Development",
      fats: "Fast and responsive websites.",
      seo: "🚀 SEO Growth",
      my: "🖼️ My Gallery",
      all: "All",
      festival: "Festival",
      event: "Event Programs",
      product: "Product display",
      festivalboats: "The Royal Festival of Boats",
      iden: "Identity Design",
      auto: "AUTOCAR",
      iden1: "Identity Design",
      khmernewyear: "The Royal Ceremony of the Khmer",
      iden2: "Identity Design",
      selling: "Selling drinks",
      iden3: "Identity Design",
      king1: "The Royal Coronation Ceremony of King Norodom Sihamoni",
      iden4: "Identity Design",
      asean: "AI Ready ASEAN Training on Mar 15, 2026.",
      iden5: "Identity Design",
      inauguration: "The Inauguration Ceremony of the Digital Technology Center.",
      iden6: "Identity Design",
      inauguration1: "The Inauguration Ceremony of the Digital Technology Center.",
      iden7: "Identity Design",
      pchumben: "The Royal Pchum Ben Festival Ceremony.",
      iden8: "Identity Design",
      chearsim: "Chea Sim Komchaymear Education and Training Center.",
      iden9: "Identity Design",
      chear: "Chea Sim Komchaymear Education and Training Center.",
      iden10: "Identity Design",
      episode: "Episode 1 of the comedy story “Digital Grandma and Grandpa.”",
      iden11: "Identity Design",
      king2: "The Royal Coronation Ceremony of King Norodom Sihamoni",
      iden12: "Identity Design",
      indep: "The National Independence Day ceremony, which is celebrated every year on November 9.",
      iden13: "Identity Design", 
      men:"Menu", 
      iden14: "Identity Design",
      sim: "Chea Sim Komchaymear Education and Training Center.",
      iden15: "Identity Design",  
      Un: "UNIIC SIGNING CEREMONY 2025",
      iden16: "Identity Design",
      cere: "The Royal Pchum Ben Festival Ceremony.",
      iden17: "Identity Design",
      kafe: "Kafe Srokasre", 
      iden18: "Identity Design",
      sauto: "NATURAL COSMETICS",
      iden19: "Identity Design",
      royal: "The Royal Pchum Ben Festival Ceremony.",
      iden20: "Identity Design",
      of: "The Royal Ceremony of the Khmer New Year",
      iden21: "Identity Design",
      digital: "The Inauguration Ceremony of the Digital Technology Center.",
      iden22: "Identity Design",
      test: "UNIIC SIGNING CEREMONY 2025",
      iden23: "Identity Design",
      uihead:"All Projects",
      smooth: "Smooth and Responsive Design",
      display: "Product display",
      cosmetics: "NATURAL COSMETICS",
      iden24: "Identity Design",
      event: "Event Programs",
      u2025: "UNIIC SIGNING CEREMONY 2025",
      iden25: "Identity Design",
      festi: "Festival",
      pchum: "The Royal Pchum Ben Festival Ceremony.",
      iden26: "Identity Design",
      festi1: "Festival",
      khmer1: "The Royal Ceremony of the Khmer New Year",
      iden27: "Identity Design",
      ev:"Event Programs",
      m:"Menu",
      iden28: "Identity Design",
      et:"Event Programs",
      aia:"AI Ready ASEAN Training on Mar 15, 2026.",
      iden29: "Identity Design",
      festi3: "Festival",
      ro: "The Royal Pchum Ben Festival Ceremony.",
      iden30: "Identity Design",
      pd: "Product display",
      kf: "Kafe Srokasre",
      iden31: "Identity Design",
      val: "Festival",
      new: "The Royal Ceremony of the Khmer New Year",  
      iden32: "Identity Design",
      a1: "Product display",  
      b2: "AUTOCAR",
      iden33: "Identity Design",
      c3: "Festival", 
      d4: "The Royal Festival of Boats",
      iden34: "Identity Design",
      e5: "Festival",
      f6: "The Royal Coronation Ceremony of King Norodom Sihamoni",
      iden35: "Identity Design",
      g7: "Event Programs",
      h8: "The Inauguration Ceremony of the Digital Technology Center.",
      iden36: "Identity Design",
      i10: "Product display",
      j11: "Episode 1 of the comedy story “Digital Grandma and Grandpa.”",
      iden37: "Identity Design",
      k12: "Product display",
      l13: "AUTOCAR",
      iden38: "Identity Design",
      m14:"Event Programs",
      n15:"The inauguration of its Entrepreneurship Development and Incubation Institute On 22nd July 2025",
      iden39: "Identity Design",
      o16: "Event Programs",
      p17: "The Inauguration Ceremony of the Digital Technology Center.", 
      iden40: "Identity Design",
      q18: "Festival",
      r19: "The Royal Festival of Boats",
      s20:"Festival",
      t21:"The National Independence Day ceremony, which is celebrated every year on November 9.",
      iden41: "Identity Design",
      u22: "Product display",
      v23: "Beats EP On-Ear Headphones",
      iden43: "Identity Design",
      w24: "Event Programs",
      x25: "The Inauguration Ceremony of the Digital Technology Center.",
      iden44: "Identity Design",


      workwith: "Work with us",
      info: "info@noname.design  +855 (0) 70770571",
      address: "Address",
      national: "#I86, National Road 3, Sangkat Chom Chao II, Khan Porsenchey, Phnom Penh, CAMBODIA.",
      socials: "Socials",
      noname: " © 2026 Website => noname <= Design and Digital",
    },
    km: {
      home: "ទំព័រដើម",
      projects: "គម្រោង",
      studio: "ស្ទូឌីយោ",
      insights: "ព័ត៌មាន",
      contact: "ទំនាក់ទំនង",
      menu: "មុឺនុយ",

      modern: "យើងបង្កើតបទពិសោធន៍ឌីជីថលទំនើប",
      creative: "ការរចនាដ៏ច្នៃប្រឌិត ការអភិវឌ្ឍន៍ និងដំណោះស្រាយម៉ាក",
      uiux: "🎨 ការរចនា UI/UX",
      clean: "ការរចនាចំណុចប្រទាក់ទំនើបស្អាត",
      web: "💻 ការអភិវឌ្ឍន៍វេបសាយ",
      fats: "គេហទំព័ររហ័ស និងឆ្លើយតបបានល្អ។",
      seo: "🚀 ការលូតលាស់ SEO",
      improve: "បង្កើនចំណាត់ថ្នាក់ និងចរាចរណ៍គេហទំព័រ",
      my: "បណ្ណាល័យរូបភាពរបស់ខ្ញុំ",
      all: "ទាំងអស់",
      festival: "ពិធីបុណ្យ",
      event: "កម្មវិធីព្រឹត្តិការណ៍",
      product: "ការបង្ហាញផលិតផល",
      festivalboats: "ព្រះរាជពិធីបុណ្យអុំទូក",
      iden: "ការរចនាអត្តសញ្ញាណ",
      auto: "រថយន្តស្វ័យប្រវត្តិ",
      iden1: "ការរចនាអត្តសញ្ញាណ",
      khmernewyear: "ព្រះរាជពិធីបុណ្យចូលឆ្នាំខ្មែរ",
      iden2: "ការរចនាអត្តសញ្ញាណ",
      selling: "ការលក់ភេសជ្ជៈ",
      iden3: "ការរចនាអត្តសញ្ញាណ",
      king1: "ព្រះរាជពិធីគ្រងរាជសម្បត្តិ ព្រះករុណា ព្រះបាទសម្ដេច ព្រះបរមនាថ នរោត្តម សីហមុនី",
      iden4: "ការរចនាអត្តសញ្ញាណ",
      asean: "ការបណ្តុះបណ្តាល AI Ready ASEAN នៅថ្ងៃទី ១៥ ខែមីនា ឆ្នាំ ២០២៦",
      iden5: "ការរចនាអត្តសញ្ញាណ",
      inauguration: "ពិធីបើកសម្ពោធមជ្ឈមណ្ឌលបច្ចេកវិទ្យាឌីជីថល",
      iden6: "ការរចនាអត្តសញ្ញាណ",
      inauguration1: "ពិធីបើកសម្ពោធមជ្ឈមណ្ឌលបច្ចេកវិទ្យាឌីជីថល",
      iden7: "ការរចនាអត្តសញ្ញាណ",
      pchumben: "ព្រះរាជពិធីបុណ្យភ្ជុំបិណ្ឌ",
      iden8: "ការរចនាអត្តសញ្ញាណ",
      chearsim: "មជ្ឈមណ្ឌលអប់រំ និងបណ្តុះបណ្តាល ជា ស៊ីម កុំចាយយមារ",
      iden9: "ការរចនាអត្តសញ្ញាណ",
      chear: "មជ្ឈមណ្ឌលអប់រំ និងបណ្តុះបណ្តាល ជា ស៊ីម កុំចាយយមារ",
      iden10: "ការរចនាអត្តសញ្ញាណ",
      episode: "ភាគ ១ នៃរឿងកំប្លែង “តាឌីជីថល និងតាឌីជីថល”",
      iden11: "ការរចនាអត្តសញ្ញាណ",
      king2: "ព្រះរាជពិធីគ្រងរាជសម្បត្តិ ព្រះករុណា ព្រះបាទសម្ដេច ព្រះបរមនាថ នរោត្តម សីហមុនី",
      iden12: "ការរចនាអត្តសញ្ញាណ",
      indep: "ព្រះរាជពិធីបុណ្យឯករាជ្យជាតិ ដែលប្រារព្ធឡើងរៀងរាល់ឆ្នាំនៅថ្ងៃទី ៩ ខែវិច្ឆិកា",
      iden13: "ការរចនាអត្តសញ្ញាណ",
      men: "ម៉ឺនុយ",
      iden14: "ការរចនាអត្តសញ្ញាណ",
      sim: "មជ្ឈមណ្ឌលអប់រំ និងបណ្តុះបណ្តាល ជា ស៊ីម កុំចាយយមារ",
      iden15: "ការរចនាអត្តសញ្ញាណ",
      Un: "ពិធីចុះហត្ថលេខា UNIIC ២០២៥",
      iden16: "ការរចនាអត្តសញ្ញាណ",
      cere: "ព្រះរាជពិធីបុណ្យភ្ជុំបិណ្ឌ",
      iden17: "ការរចនាអត្តសញ្ញាណ",
      kafe: "កាហ្វេ ស្រុកស្រែ",
      iden18: "ការរចនាអត្តសញ្ញាណ",
      sauto: "ផលិតផលសម្រស់ធម្មជាតិ",
      iden19: "ការរចនាអត្តសញ្ញាណ",
      royal: "ព្រះរាជពិធីបុណ្យភ្ជុំបិណ្ឌ",
      iden20: "ការរចនាអត្តសញ្ញាណ",
      of:"ព្រះរាជពិធីបុណ្យចូលឆ្នាំខ្មែរ",
      iden21: "ការរចនាអត្តសញ្ញាណ",
      digital: "ពិធីបើកសម្ពោធមជ្ឈមណ្ឌលបច្ចេកវិទ្យាឌីជីថល",
      iden22: "ការរចនាអត្តសញ្ញាណ",
      test: "ពិធីចុះហត្ថលេខា UNIIC ២០២៥",
      iden23: "ការរចនាអត្តសញ្ញាណ",
      uihead: "គម្រោងទាំងអស់",
      smooth: "ការរចនាដែលរលូន និងឆ្លើយតបបានល្អ",
      display: "ការបង្ហាញផលិតផល",
      cosmetics: "ផលិតផលសម្រស់ធម្មជាតិ",
      iden24: "ការរចនាអត្តសញ្ញាណ",
      event: "កម្មវិធីព្រឹត្តិការណ៍",
      u2025: "ពិធីចុះហត្ថលេខា UNIIC ២០២៥",
      iden25: "ការរចនាអត្តសញ្ញាណ",
      festi: "ពិធីបុណ្យ",
      pchum: "ព្រះរាជពិធីបុណ្យភ្ជុំបិណ្ឌ",
      iden26: "ការរចនាអត្តសញ្ញាណ",
      festi1: "ពិធីបុណ្យ",
      khmer1: "ព្រះរាជពិធីបុណ្យចូលឆ្នាំខ្មែរ",
      iden27: "ការរចនាអត្តសញ្ញាណ",
      ev: "កម្មវិធីព្រឹត្តិការណ៍",
      m: "ម៉ឺនុយ",
      iden28: "ការរចនាអត្តសញ្ញាណ",
      et: "កម្មវិធីព្រឹត្តិការណ៍",
      aia: "ការបណ្តុះបណ្តាល AI Ready ASEAN នៅថ្ងៃទី ១៥ ខែមីនា ឆ្នាំ ២០២៦",
      iden29: "ការរចនាអត្តសញ្ញាណ",
      festi3: "ពិធីបុណ្យ",
      ro: "ព្រះរាជពិធីបុណ្យភ្ជុំបិណ្ឌ",
      iden30: "ការរចនាអត្តសញ្ញាណ",
      pd: "ការបង្ហាញផលិតផល",  
      kf: "កាហ្វេ ស្រុកស្រែ",
      iden31: "ការរចនាអត្តសញ្ញាណ",
      val: "ពិធីបុណ្យ",       
      new: "ព្រះរាជពិធីបុណ្យចូលឆ្នាំខ្មែរ",
      iden32: "ការរចនាអត្តសញ្ញាណ",
      a1: "ការបង្ហាញផលិតផល",
      b2: "រថយន្តស្វ័យប្រវត្តិ",
      iden33: "ការរចនាអត្តសញ្ញាណ",
      c3: "ពិធីបុណ្យ",
      d4: "ព្រះរាជពិធីបុណ្យអុំទូក",
      iden34: "ការរចនាអត្តសញ្ញាណ",
      e5: "ពិធីបុណ្យ",
      f6: "ព្រះរាជពិធីគ្រងរាជសម្បត្តិ ព្រះករុណា ព្រះបាទសម្ដេច ព្រះបរមនាថ នរោត្តម សីហមុនី",
      iden35: "ការរចនាអត្តសញ្ញាណ",
      g7: "កម្មវិធីព្រឹត្តិការណ៍",
      h8: "ពិធីបើកសម្ពោធមជ្ឈមណ្ឌលបច្ចេកវិទ្យាឌីជីថល",
      iden36: "ការរចនាអត្តសញ្ញាណ",
      i10: "ការបង្ហាញផលិតផល",
      j11: "ភាគ ១ នៃរឿងកំប្លែង “តាឌីជីថល និងតាឌីជីថល”",
      iden37: "ការរចនាអត្តសញ្ញាណ",
      k12: "ការបង្ហាញផលិតផល",
      l13: "រថយន្តស្វ័យប្រវត្តិ",
      iden38: "ការរចនាអត្តសញ្ញាណ",
      m14:"កម្មវិធីព្រឹត្តិការណ៍",
      n15:"ពិធីបើកសម្ពោធវិទ្យាស្ថានអភិវឌ្ឍន៍ និងបណ្តុះបណ្តាលសហគ្រិនភាពរបស់វា នៅថ្ងៃទី ២២ ខែកក្កដា ឆ្នាំ ២០២៥",
      iden39: "ការរចនាអត្តសញ្ញាណ",
      o16: "កម្មវិធីព្រឹត្តិការណ៍",
      p17: "ពិធីបើកសម្ពោធមជ្ឈមណ្ឌលបច្ចេកវិទ្យាឌីជីថល",
      iden40: "ការរចនាអត្តសញ្ញាណ",
      q18: "ពិធីបុណ្យ",
      r19: "ព្រះរាជពិធីបុណ្យអុំទូក",
      iden41: "ការរចនាអត្តសញ្ញាណ",
      s20: "ពិធីបុណ្យ",
      t21: "ព្រះរាជពិធីបុណ្យឯករាជ្យជាតិ ដែលប្រារព្ធឡើងរៀងរាល់ឆ្នាំនៅថ្ងៃទី ៩ ខែវិច្ឆិកា",
      iden42: "ការរចនាអត្តសញ្ញាណ",
      u22: "ការបង្ហាញផលិតផល",
      v23: "កាសស្តាប់ត្រចៀក Beats EP On-Ear",
      iden43: "ការរចនាអត្តសញ្ញាណ",
      w24: "កម្មវិធីព្រឹត្តិការណ៍",
      x25: "ពិធីបើកសម្ពោធមជ្ឈមណ្ឌលបច្ចេកវិទ្យាឌីជីថល",
      iden44: "ការរចនាអត្តសញ្ញាណ",


      workwith: "ធ្វើការជាមួយយើង",
      info: "info@noname.design +៨៥៥ (០) ៧០៧៧០៥៧១",
      address: "អាស័យដ្ឋាន",
      national: "#I86 ផ្លូវជាតិលេខ3 សង្កាត់ចោមចៅ2 ខណ្ឌពោធិ៍សែនជ័យ រាជធានីភ្នំពេញ ប្រទេសកម្ពុជា",
      socials: "បណ្ដាញសង្គម",
      noname: "© ២០២៦ គេហទំព័រ => noname <= សម្រាប់ការរចនា និងឌីជីថល",
    }
  };

  window.changeLanguage = function () {

    const lang = document.getElementById("languageSelect").value;
    const t = translations[lang];

    if (!t) return;

    const set = (id, val) => {
      const el = document.getElementById(id);
      if (el) el.textContent = val;
    };

    // update text first
    set("homeText", t.home);
    set("projectText", t.projects);
    set("studioText", t.studio);
    set("insightText", t.insights);
    set("contactText", t.contact);

    set("mobileMenuTitle", t.menu);
    set("mobileHome", t.home);
    set("mobileProjects", t.projects);
    set("mobileStudio", t.studio);
    set("mobileInsights", t.insights);
    set("mobileContact", t.contact);

    set("Modern", t.modern);
    set("Creative", t.modern);
    set("UIUXDesign", t.uiux);
    set("Clean", t.clean);
    set("Web", t.web);
    set("Fast", t.fats);
    set("SEO", t.seo);
    set("ImProve", t.improve);
    set("My", t.my);
    set("All", t.all);
    set("Festival", t.festival);
    set("Event", t.event);
    set("Product", t.product);
    set("FestivalBoats", t.festivalboats);
    set("Iden", t.iden);
    set("Auto", t.auto);
    set("Iden1", t.iden);
    set("Khmernewyear", t.khmernewyear);
    set("Iden2", t.iden);
    set("Selling", t.selling);
    set("Iden3", t.iden);
    set("King1", t.king1);
    set("Iden4", t.iden);
    set("Asean", t.asean);
    set("Iden5", t.iden);
    set("Inauguration", t.inauguration);
    set("Iden6", t.iden);
    set("Inauguration1", t.inauguration);
    set("Iden7", t.iden);
    set("PchumBen", t.pchumben);
    set("Iden8", t.iden);
    set("ChearSim", t.chearsim);
    set("Iden9", t.iden); 
    set("Chaer", t.chear);
    set("Iden10", t.iden);
    set("Episode", t.episode);
    set("Iden11", t.iden);
    set("King2", t.king2);
    set("Iden12", t.iden);
    set("Indep", t.indep);
    set("Iden13", t.iden);
    set("Men", t.men);
    set("Iden14", t.iden); 
    set("Sim", t.sim);
    set("Un", t.Un); 
    set("Iden16", t.iden);
    set("Cere", t.cere);
    set("Iden17", t.iden);
    set("Kafe", t.kafe);
    set("Iden18", t.iden);
    set("Sauto", t.sauto);
    set("Iden19", t.iden);
    set("Royal", t.royal);
    set("Iden20", t.iden);
    set("Of", t.of);
    set("Iden21", t.iden);
    set("Digital", t.digital);
    set("Iden22", t.iden);
    set("Test", t.test);
    set("Iden23", t.iden);
    set("Uihead", t.uihead);
    set("Smooth", t.smooth);
    set("Display", t.display);
    set("Fault", t.cosmetics);
    set("Iden24", t.iden24);
    set("Programs", t.event);
    set("U2025", t.u2025);
    set("Iden25", t.iden25);
    set("Festi", t.festi);
    set("Pchum", t.pchum);
    set("Iden26", t.iden26);
    set("Festi1", t.festi1);
    set("Khmer1", t.khmer1);
    set("Iden27", t.iden27); 
    set("Ev", t.ev);
    set("M", t.m);
    set("Iden28", t.iden28);
    set("Et", t.et);
    set("Aia", t.aia);
    set("Iden29", t.iden29); 
    set("Festi3", t.festi3);
    set("Ro", t.ro);
    set("Iden30", t.iden30);
    set("PD", t.pd);
    set("KF", t.kf);
    set("Iden31", t.iden31);
    set("Val", t.val);
    set("New", t.new);
    set("Iden32", t.iden32);
    set("A1", t.a1);
    set("B2", t.b2);
    set("Iden33", t.iden33);
    set("C3", t.c3);
    set("D4", t.d4);
    set("Iden34", t.iden34);
    set("E5", t.e5);
    set("F6", t.f6);
    set("Iden35", t.iden35);  
    set("G7", t.g7);
    set("H8", t.h8);
    set("Iden36", t.iden36);
    set("I10", t.i10);
    set("J11", t.j11);
    set("Iden37", t.iden37);
    set("K12", t.k12);
    set("L13", t.l13);
    set("Iden38", t.iden38);
    set("M14", t.m14);
    set("N15", t.n15);
    set("Iden39", t.iden39);
    set("O16", t.o16);
    set("P17", t.p17);
    set("Iden40", t.iden40);
    set("Q18", t.q18);
    set("R19", t.r19);
    set("Iden41", t.iden41);
    set("S20", t.s20);
    set("T21", t.t21);
    set("Iden42", t.iden42);
    set("U22", t.u22);
    set("V23", t.v23);
    set("Iden43", t.iden43);
    set:("W24", t.w24);
    set("X25", t.x25);
    set("Iden44", t.iden44);




    set("WorkWith", t.workwith);
    set("InFo", t.info);
    set("Address", t.address);
    set("National", t.national);
    set("Socials", t.socials);
    set("Noname", t.noname);

    // 🔥 restart AFTER render
    requestAnimationFrame(() => {
      const animated = [
        "textHeader",
        "textWeCreate",
        "homeText",
        "projectText",
        "studioText",
        "insightText",
        "contactText",
        "mobileMenuTitle",
        "mobileHome",
        "mobileProjects",
        "mobileStudio",
        "mobileInsights",
        "mobileContact",

        "Modern",
        "Creative",
        "UIUXDesign",
        "Clean",
        "Web",
        "Fast",
        "SEO",
        "ImProve",
        "My",
        "All",
        "Festival",
        "Event",
        "Product",
        "FestivalBoats",
        "Iden",
        "Auto",
        "Iden1",
        "Khmernewyear",
        "Iden2",
        "Selling",
        "Iden3",
        "King1",
        "Iden4",
        "Asean",
        "Iden5",
        "Inauguration",
        "Iden6",
        "Inauguration1",
        "Iden7",
        "PchumBen",
        "Iden8",
        "ChearSim",
        "Iden9",
        "Chaer",
        "Iden10",
        "Episode",
        "Iden11",
        "King2",
        "Iden12",
        "Indep",
        "Iden13",
        "Men",
        "Iden14",
        "Sim",
        "Iden15",
        "Un",
        "Iden16",
        "Cere",
        "Iden17",
        "Kafe",
        "Iden18",
        "Sauto",
        "Iden19",
        "Royal", 
        "Iden20",
        "Of",
        "Iden21",
        "Digital",
        "Iden22",
        "Test",
        "Iden23",
        "AllPro",
        "smooth",
        "Display",
        "Fault",
        "Iden24",
        "Programs",
        "U2025",
        "Iden25",
        "Festi",
        "Pchum",
        "Iden26",
        "Festi1",
        "Khmer1",
        "Iden27",
        "Ev",
        "M",
        "Iden28",
        "Et",
        "Aia",
        "Iden29",
        "Festi3",
        "Ro",
        "Iden30",
        "PD",
        "KF",
        "Iden31",
        "Val",
        "New",
        "Iden32",
        "a1",
        "b2",
        "Iden33",
        "c3",
        "d4",
        "Iden34",
        "E5",
        "F6",
        "Iden35",
        "G7",
        "H8",
        "Iden36",
        "I10",
        "J11",
        "Iden37",
        "K12",
        "L13",
        "Iden38",
        "M14",
        "N115",
        "Iden39",
        "O16",
        "P17",
        "Iden40",
        "Q18",
        "R19",
        "Iden41",
        "S20",
        "T21",
        "Iden42",
        "U22",
        "V23",
        "Iden43",
        "W24",
        "X25",
        "Iden44",
        


        "WorkWith",
        "InFo",
        "Address",
        "National",
        "Socials",
        "Noname"
      ];

      animated.forEach(id => {
        const el = document.getElementById(id);
        if (el) restartAnimation(el);
      });
    });
  };
});