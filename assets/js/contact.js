// menu use bootstrap js
function toggleMode() {
  document.getElementById("body").classList.toggle("dark-mode");
}

// 2. Mouse Parallax Effect
const hero = document.getElementById("contactHero");

hero.addEventListener("mousemove", (e) => {
  const x = (window.innerWidth / 2 - e.clientX) / 25;
  const y = (window.innerHeight / 2 - e.clientY) / 25;

  document.querySelectorAll(".parallax").forEach(el => {
    const speed = el.dataset.speed;

    el.style.transform = `
      translate(${x * speed}px, ${y * speed}px)
    `;
  });
});



// minimap and contact
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    el.classList.add("active");
  });
});


// SCROLL REVEAL
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
},{ threshold:0.2 });

reveals.forEach(el => observer.observe(el));


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
      let:"Let's Build Something Amazing Together",
      have:"Have a project idea, business inquiry, or just want to say hello? We'd love to hear from you.",
      con: "Contact Information",
      reach: "Reach out anytime. We help with UI/UX, websites, branding and digital growth.",
      location: "Location",
      road:"#I86, National Road 3, Sangkat Chom Chao II, Khan Porsenchey, Phnom Penh, CAMBODIA",
      email: "Email",
      phone: "Phone",
      search: "Search our location on Google Maps",

      workwith: "Work with us",
      info: "info@noname.design  +855 (0) 70770571",
      address: "Address",
      national: "#I86, National Road 3, Sangkat Chom Chao II, Khan Porsenchey, Phnom Penh, CAMBODIA.",
      socials: "Socials",
      noname: " © 2026 Website noname Design and Digital Services",
    },
    km: {
      home: "ទំព័រដើម",
      projects: "គម្រោង",
      studio: "ស្ទូឌីយោ",
      insights: "ព័ត៌មាន",
      contact: "ទំនាក់ទំនង",
      menu: "មុឺនុយ",
      let:"រួមគ្នាបង្កើតគំនិតរបស់អ្នកឲ្យក្លាយជាការពិត",
      have:"មានគំនិតគម្រោង សំណួរអាជីវកម្ម ឬចង់ទំនាក់ទំនងជាមួយយើង? យើងរីករាយនឹងស្តាប់ពីអ្នកជានិច្ច",
      con: "ព័ត៌មានទំនាក់ទំនង",
      reach: "ទំនាក់ទំនងមកយើងគ្រប់ពេលវេលា។ យើងជួយក្នុងការរចនា UI/UX, គេហទំព័រ, ការរចនាប្រេន និងការលូតលាស់ឌីជីថល។",
      location: "ទីតាំង",
      road:"#I86 ផ្លូវជាតិលេខ3 សង្កាត់ចោមចៅ2 ខណ្ឌពោធិ៍សែនជ័យ រាជធានីភ្នំពេញ ប្រទេសកម្ពុជា",
      email: "អ៊ីមែល",
      phone: "ទូរស័ព្ទ",
      search: "🇰🇭📍ស្វែងរកទីតាំងរបស់យើងនៅលើ Google Maps",

      workwith: "ធ្វើការជាមួយយើង",
      info: "info@noname.design +៨៥៥ (០) ៧០៧៧០៥៧១",
      address: "អាស័យដ្ឋាន",
      national: "#I86 ផ្លូវជាតិលេខ3 សង្កាត់ចោមចៅ2 ខណ្ឌពោធិ៍សែនជ័យ រាជធានីភ្នំពេញ ប្រទេសកម្ពុជា",
      socials: "បណ្ដាញសង្គម",
      noname: "© ២០២៦ គេហទំព័រ noname សេវាកម្ម សម្រាប់ការរចនា និងឌីជីថល",
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
    set("Let", t.let);
    set("Have", t.have);
    set("Con", t.con);
    set("Reach", t.reach);
    set("Location", t.location);
    set("Road", t.road);
    set("Email", t.email);
    set("Phone", t.phone);
    set("Search", t.search);

    set("WorkWith", t.workwith);
    set("InFo", t.info);
    set("Address", t.address);
    set("National", t.national);
    set("Socials", t.socials);
    set("Noname", t.noname);

    // 🔥 restart AFTER render
    requestAnimationFrame(() => {
      const animated = [
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
        "Let",
        "Have",
        "Con",
        "Reach",
        "Location",
        "Road",
        "Email",
        "Phone",
        "Search",
    
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

// AOS FOR TITLE
AOS.init({
    duration: 800,
    once: true,
    offset: 100
});