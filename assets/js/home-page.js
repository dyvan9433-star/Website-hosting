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
const visionText = document.querySelector(".vision-text");

const visionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("reveal");
    } else {
      entry.target.classList.remove("reveal");
    }
  });
}, {
  threshold: 0.5
});

visionObserver.observe(visionText);




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




//zoom iamge
const images = document.querySelectorAll(".card img, .image-card img");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");

// open image modal
images.forEach(img => {
  img.addEventListener("click", function () {
    modal.style.display = "block";
    modalImg.src = this.src;
  });
});

// close button
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// click outside image to close
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});


// footer js
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}



// change Language
function restartAnimation(el) {
  if (!el) return;

  el.classList.remove("fade-in");

  // 🔥 force browser to reset animation
  void el.offsetWidth;

  // 🔥 small delay makes it 100% reliable
  setTimeout(() => {
    el.classList.add("fade-in");
  }, 5);
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
    textheader: "Design Posters & Digital Art That Stand Out",
    textwecreate: " We create modern, clean and high-quality poster designs, branding visuals and digital artwork for your business or personal brand.",
    webuildbrand: " We build brands that matter,transform communities, and bring positive changes.✨",
    img1: "The Royal Festival of Boats, Floating Buddhas, and the Full Moon Festival, Ak Ambok, is always celebrated over a period of 3 days.",
    img2: "20% discount on car sales",
    img3: "Menu",
    img4: "The National Independence Day ceremony, which is celebrated every year on November 9.",
    img5: "The Royal Coronation Ceremony of His Majesty King Norodom Sihamoni, the King of the Kingdom of Cambodia, was officially celebrated from October 29, 2004, to October 29, 2005.",
    img6: "Episode 1 of the comedy story “Digital Grandma and Grandpa.”",
    img7: "Chea Sim Komchaymear Education and Training Center.",
    img8: "Chea Sim Komchaymear Education and Training Center.",
    img9: "Chea Sim Komchaymear Education and Training Center.",
    img10: "The Royal Pchum Ben Festival Ceremony.",
    img11: "The Inauguration Ceremony of the Digital Technology Center.",
    img12: "The Inauguration Ceremony of the Digital Technology Center.",
    img13: "AI Ready ASEAN Training on Mar 15, 2026.",
    img14: "The Royal Coronation Ceremony of His Majesty King Norodom Sihamoni, the King of the Kingdom of Cambodia, was officially celebrated from October 29, 2004, to October 29, 2005",
    img15: "Selling drinks",
    img16: "The Royal Ceremony of the Khmer Traditional New Year Festival.",
    allprojects: "← All Project",
    aiasean:"AI Ready ASEAN Training on Mar 15, 2026",
    aiaseantime:"March 15, 2026",
    aseanallready:"The AI Ready ASEAN project is an initiative aimed at empowering educators, students, and parents across Southeast Asia, especially in countries such as Cambodia, to understand and effectively use Artificial Intelligence (AI) in education and daily life. The project focuses on building digital literacy, promoting responsible AI usage, and encouraging regional collaboration through training programs.",
    digitalcenter:"Digital Technology Middle Age Inauguration Ceremony",
    addtime:"11 July 2024",
    digitalcentertext:"Hun Sen Kamchamar Kindergarten to August 12, 2017 is the last year of the Chea Sim Kamchamar (Sangkat Sangkat Sangkat Samang) Global Year. Special features: such as: Learning in one place, creating a system of preschool education from primary to grade 1. For staff and community: empowering the Royal Government and staff working in the city to send young children to study on the spot and for the people of Samang Commune. Human resource training education: The first basic kindergarten targeted to transform the Kamchamar area, which was previously a battlefield, to provide a ”human resource learning and training area” for Prey Veng province and the country. The decision that the kindergarten assembly hall adds a more special introduction function in Chea SimKamchamar University",
    happynewyear:"Khmer New Year Festival",
    happynewyeartitle:"The Royal Khmer New Year is a grand festival held over three days every year, from April 13-15 (sometimes April 14-16), to celebrate the arrival of the new year’s deities. The festival has a deep meaning in preserving culture, family, gatherings, and honoring ancestors, starting with Maha Sangkranti, Vanbat, and Choi Sak.",
    projectcompleted:"Projects Completed",
    number50:"50+",
    number40:"40+",
    happyclient:"Happy Clients",
    number2:"2+",
    yearsex:"Years Experience",
    number100:"100+",
    responsive:"Responsive Design",
    allinsights:"All Insights",
    companies:"Companies we've worked with",
    workwith:"Work with us",
    info:"info@noname.design  +855 (0) 70770571",
    address:"Address",
    national:"#I86, National Road 3, Sangkat Chom Chao II, Khan Porsenchey, Phnom Penh, CAMBODIA.",
    socials:"Socials",
    noname:" © 2026 Website => noname <= Design and Digital",
  },

  km: {

    home: "ទំព័រដើម",
    projects: "គម្រោង",
    studio: "ស្ទូឌីយោ",
    insights: "ព័ត៌មាន",
    contact: "ទំនាក់ទំនង",
    menu: "មុឺនុយ",
    textheader: "រចនាផ្ទាំងរូបភាព និងសិល្បៈឌីជីថលដែលលេចធ្លោ",
    textwecreate: "យើងបង្កើតការរចនាផ្ទាំងរូបភាពទំនើប ស្អាត និងមានគុណភាពខ្ពស់ រូបភាពផ្សព្វផ្សាយពាណិជ្ជសញ្ញា និងស្នាដៃសិល្បៈឌីជីថលសម្រាប់អាជីវកម្ម ឬពាណិជ្ជសញ្ញាផ្ទាល់ខ្លួនរបស់អ្នក",
    webuildbrand: "យើងកសាងម៉ាកដែលមានន័យសំខាន់ ផ្លាស់ប្តូរសហគមន៍ និងនាំមកនូវ ការផ្លាស់ប្តូរវិជ្ជមាន✨",
    img1: "ព្រះរាជពិធីបុណ្យ អុំទូក បណ្តែតប្រទីប និងសំពះព្រះខែ អកអំបុក តែងតែប្រារព្ធក្នុងរយៈពេល៣ថ្ងៃ",
    img2: "រថយន្តស្វ័យប្រវត្តិ",
    img3: "មុឺនុយ",
    img4: "ពិធីបុណ្យឯករាជ្យជាតិ ដែលប្រារព្ធឡើងជារៀងរាល់ឆ្នាំនៅថ្ងៃទី ៩ ខែវិច្ឆិកា",
    img5: "ព្រះរាជពិធីគ្រងព្រះបរមរាជសម្បត្តិ របស់ ព្រះករុណា ព្រះបាទសម្តេចព្រះបរមនាថ នរោត្តម សីហមុនី ជាព្រះមហាក្សត្រនៃព្រះរាជាណាចក្រកម្ពុជា បានប្រារព្ធឡើងជាផ្លូវការនៅថ្ងៃទី ២៩ ខែតុលា ឆ្នាំ២០០៤-២៩ ខែតុលា ឆ្នាំ២០០៥",
    img6: "វគ្គទី ១ របស់រឿងថ្លុក ”យាយតាឌីជីថល” ",
    img7: "មជ្ឈមណ្ឌលអប់រំ និងបណ្ដុះបណ្ដាល ជា ស៊ីម កំចាយមារ",
    img8: "មជ្ឈមណ្ឌលអប់រំ និងបណ្ដុះបណ្ដាល ជា ស៊ីម កំចាយមារ",
    img9: "មជ្ឈមណ្ឌលអប់រំ និងបណ្ដុះបណ្ដាល ជា ស៊ីម កំចាយមារ",
    img10: "ព្រះរាជពិធីបុណ្យភ្ជុំបិណ្ឌ",
    img11: "ពិធីសម្ភោធមជ្ឈបណ្ឌលបច្ចេកវិទ្យាឌីជីថល",
    img12: "ពិធីសម្ភោធមជ្ឈបណ្ឌលបច្ចេកវិទ្យាឌីជីថល",
    img13: "ការបណ្តុះបណ្តាល AI Ready ASEAN នៅថ្ងៃទី ១៥ ខែមីនា ឆ្នាំ ២០២៦",
    img14: "ព្រះរាជពិធីគ្រងព្រះបរមរាជសម្បត្តិ របស់ ព្រះករុណា ព្រះបាទសម្តេចព្រះបរមនាថ នរោត្តម សីហមុនី ជាព្រះមហាក្សត្រនៃព្រះរាជាណាចក្រកម្ពុជា បានប្រារព្ធឡើងជាផ្លូវការនៅថ្ងៃទី ២៩ ខែតុលា ឆ្នាំ២០០៤-២៩ ខែតុលា ឆ្នាំ២០០៥",
    img15: "ការលក់ ភេស្ជៈ",
    img16: "ព្រះរាជពិធីបុណ្យចូលឆ្នាំថ្មីប្រពៃណីជាតិខ្មែរ",
    allprojects: "គម្រោងទាំងអស់",
    aiasean:"ការបណ្តុះបណ្តាល AI Ready ASEAN នៅថ្ងៃទី ១៥ ខែមីនា ឆ្នាំ ២០២៦",
    aiaseantime:"១៥ ខែមីនា ឆ្នាំ ២០២៦",
    aseanallready: "គម្រោងការត្រៀមខ្លួនរបស់អាស៊ានដើម្បីទទួលយកបញ្ញាសប្បនិម្មិត(AI Ready ASEAN)គឺជាគំនិតផ្តួចផ្តើមមួយក្នុងគោលបំណងផ្តល់សិទ្ធិអំណាចដល់អ្នកអប់រំ សិស្សានុសិស្ស និងអាណាព្យាបាលនៅទូទាំងអាស៊ីអាគ្នេយ៍ ជាពិសេសនៅក្នុងប្រទេសដូចជាប្រទេសកម្ពុជា ដើម្បីស្វែងយល់ និងប្រើប្រាស់បញ្ញាសិប្បនិម្មិត(AI) ប្រកបដោយប្រសិទ្ធភាពក្នុងការអប់រំ និងជីវិតប្រចាំថ្ងៃ។ គម្រោងនេះផ្តោតលើការកសាងអក្ខរកម្មឌីជីថល ការលើកកម្ពស់ការប្រើប្រាស់ AI ប្រកបដោយការទទួលខុសត្រូវនិងការជំរុញកិច្ចសហការក្នុងតំបន់តាមរយៈការបណ្តុះបណ្តាល។",
    digitalcenter:"ពិធីសម្ភោធមជ្ឈបណ្ឌលបច្ចេកវិទ្យាឌីជីថល",
    addtime:"១១, កក្កដា, ២០២៤",
    digitalcentertext:" ការសម្ពោធសាលាមត្តេយ្យសិក្សា ហ៊ុន សែន កំចាយមារ កាលពីថ្ងៃទី១១ ខែកក្កដា ឆ្នាំ២០២៤ គឺស្ថិតនៅក្នុងបរិវេណ សាកលវិទ្យាល័យជាតិ ជាស៊ីម កំចាយមារ (ភូមិថ្នល់កែង ឃុំស្មោងខាងជើង) ផ្ទាល់តែម្តង។ការដាក់បញ្ចូលសាលាមត្តេយ្យនៅក្នុងបរិវេណសាកលវិទ្យាល័យនេះ គឺជាយុទ្ធសាស្ត្រមួយដែលគេហៅថា ”មជ្ឈមណ្ឌលអប់រំ និងបណ្តុះបណ្តាល ជា ស៊ីម កំចាយមារ” ដែលមានចំណុចពិសេសដូចជា៖ ការអប់រំពេញលេញមួយកន្លែង៖ វាបង្កើតឱ្យមានប្រព័ន្ធអប់រំតាំងពីថ្នាក់មត្តេយ្យ បឋមសិក្សា វិទ្យាល័យ រហូតដល់ថ្នាក់សាកលវិទ្យាល័យ នៅក្នុងតំបន់តែមួយ។ភាពងាយស្រួលដល់បុគ្គលិក និងសហគមន៍៖ ផ្តល់ភាពងាយស្រួលដល់មន្ត្រីរាជការ សាស្ត្រាចារ្យ និងបុគ្គលិកដែលបម្រើការងារក្នុងសាកលវិទ្យាល័យ អាចបញ្ជូនកូនតូចៗឱ្យមករៀននៅក្បែរកន្លែងធ្វើការ និងសម្រាប់ប្រជាពលរដ្ឋក្នុងឃុំស្មោងខាងជើងផងដែរ។ ការបណ្តុះបណ្តាលធនធានមនុស្ស៖ សាលាមត្តេយ្យនេះគឺជាគ្រឹះដំបូងគេបង្អស់ ក្នុងគោលដៅប្រែក្លាយតំបន់កំចាយមារ ដែលពីមុនជាសមរភូមិ ឱ្យទៅជា ”តំបន់អប់រំ” និងបណ្តុះបណ្តាលធនធានមនុស្ស ដ៏សំខាន់សម្រាប់ខេត្តព្រៃវែង និងប្រទេសជាតិ។ក្នុងពិធីសម្ពោធនោះ សម្តេចក្រឡាហោម ស ខេង ក៏បានសង្កត់ធ្ងន់ថា ការកសាងសាលាមត្តេយ្យនេះ គឺជាការបំពេញបន្ថែមនូវរចនាសម្ព័ន្ធអប់រំឱ្យកាន់តែសម្បូរបែបនៅក្នុងសាកលវិទ្យាល័យជាតិ ជា ស៊ីម កំចាយមារ។",
    happynewyear:"ព្រះរាជពិធីបុណ្យចូលឆ្នាំថ្មីប្រពៃណីជាតិខ្មែរ",
    happynewyeartitle:"ព្រះរាជពិធីបុណ្យចូលឆ្នាំថ្មីប្រពៃណីជាតិខ្មែរ គឺជាពិធីបុណ្យដ៏ធំដែលប្រារព្ធឡើងមានរយៈពេល ៣ ថ្ងៃ ជារៀងរាល់ឆ្នាំគឺនៅថ្ងៃទី១៣-១៥ ខែមេសា (ជួនកាលថ្ងៃទី១៤-១៦) ដើម្បីអបអរទេវតាឆ្នាំថ្មីចុះមកទទួលតំណែង។ ពិធីនេះមានអត្ថន័យជ្រាលជ្រៅក្នុងការថែរក្សាវប្បធម៌ លក្ខណៈគ្រួសារ ការជួបជុំ និងការគោរពដូនតា ដោយចាប់ផ្ដើមពីថ្ងៃមហាសង្ក្រាន្ត, ថ្ងៃវនបត, និងថ្ងៃឡើងស័ក។",
    projectcompleted:"គម្រោងដែលបានបញ្ចប់",
    number50:"៥០+",
    number40:"៤០+",
    happyclient:"អតិថិជនមានភាពពេញចិត្ត",
    number2:"២+",
    yearsex:"បទពិសោធន៍ការងារ (ឆ្នាំ)",
    number100:"១០០+",
    responsive:"ការរចនាដែលអាចសម្របតាមអេក្រង់",
    allinsights:"ការយល់ដឹងទាំងអស់",
    companies:"ក្រុមហ៊ុនដែលយើងបានសហការជាមួយ",
    workwith:"ធ្វើការជាមួយយើងខ្ញុំ",
    info:"info@noname.design +៨៥៥ (០) ៧០៧៧០៥៧១",
    address:"អាស័យដ្ឋាន",
    national:"#I86 ផ្លូវជាតិលេខ3 សង្កាត់ចោមចៅ2 ខណ្ឌពោធិ៍សែនជ័យ រាជធានីភ្នំពេញ ប្រទេសកម្ពុជា",
    socials:"បណ្ដាញសង្គម",
    noname:"© ២០២៦ គេហទំព័រ => noname <= សម្រាប់ការរចនា និងឌីជីថល",
  }
};

function changeLanguage() {

  currentLang =
    document.getElementById("languageSelect").value;

  const t = translations[currentLang];

  document.getElementById("homeText").textContent =
    t.home;

  document.getElementById("projectText").textContent =
    t.projects;

  document.getElementById("studioText").textContent =
    t.studio;

  document.getElementById("insightText").textContent =
    t.insights;

  document.getElementById("contactText").textContent =
    t.contact;

  // Menu for Mobile
  document.getElementById("mobileMenuTitle").textContent =
    t.menu;

  document.getElementById("mobileHome").textContent =
    t.home;

  document.getElementById("mobileProjects").textContent =
    t.projects;

  document.getElementById("mobileStudio").textContent =
    t.studio;

  document.getElementById("mobileInsights").textContent =
    t.insights;

  document.getElementById("mobileContact").textContent =
    t.contact;

  document.getElementById("textHeader").textContent =
    t.textheader;

  document.getElementById("textWeCreate").textContent =
    t.textwecreate;

  document.getElementById("btnProjects").textContent =
    t.projects;

  document.getElementById("btnContact").textContent =
    t.contact;

  document.getElementById("WeBuild").textContent =
    t.webuildbrand;

  document.getElementById("Picture1").textContent =
    t.img1;

  document.getElementById("Picture2").textContent =
    t.img2;

  document.getElementById("Picture3").textContent =
    t.img3;

  document.getElementById("Picture4").textContent =
    t.img4;

  document.getElementById("Picture5").textContent =
    t.img5;

  document.getElementById("Picture6").textContent =
    t.img6;

  document.getElementById("Picture7").textContent =
    t.img7;

  document.getElementById("Picture8").textContent =
    t.img8;

  document.getElementById("Picture9").textContent =
    t.img9;

  document.getElementById("Picture10").textContent =
    t.img10;

  document.getElementById("Picture11").textContent =
    t.img11;

  document.getElementById("Picture12").textContent =
    t.img12;

  document.getElementById("Picture13").textContent =
    t.img13;

  document.getElementById("Picture14").textContent =
    t.img14;

  document.getElementById("Picture15").textContent =
    t.img15;

  document.getElementById("Picture16").textContent =
    t.img16;

  document.getElementById("AllProjects").textContent =
    t.allprojects;

    document.getElementById("Aiasean").textContent =
    t.aiasean;

    document.getElementById("aiAseantime").textContent =
    t.aiaseantime;

    document.getElementById("aseanAllready").textContent =
    t.aseanallready;

    document.getElementById("DigitalCenter").textContent =
    t.digitalcenter;

    document.getElementById("AddTime").textContent =
    t.addtime;

    document.getElementById("DigitalCenterText").textContent =
    t.digitalcentertext;

    document.getElementById("HappyNewYear").textContent =
    t.happynewyear;

    document.getElementById("HappyNewYearTitle").textContent =
    t.happynewyeartitle;

    document.getElementById("ProjectCompleted").textContent =
    t.projectcompleted;

    document.getElementById("Number50").textContent =
    t.number50;

     document.getElementById("Number40").textContent =
    t.number40;

    document.getElementById("HappyClient").textContent =
    t.happyclient;

    document.getElementById("Number2").textContent =
    t.number2;

    document.getElementById("YearsEx").textContent =
    t.yearsex;

     document.getElementById("Number100").textContent =
    t.number100;

     document.getElementById("Responsive").textContent =
    t.responsive;

    document.getElementById("AllInsights").textContent =
    t.allinsights;

    document.getElementById("Companies").textContent =
    t.companies;

    document.getElementById("WorkWith").textContent =
    t.workwith;

    document.getElementById("InFo").textContent =
    t.info;

    document.getElementById("Address").textContent =
    t.address;

    document.getElementById("National").textContent =
    t.national;

    document.getElementById("Socials").textContent =
    t.socials;

    document.getElementById("Noname").textContent =
    t.noname;
    



  // 🔥 RESTART ANIMATION LAST
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
    "headimage",
    "btnProjects",
    "btnContact",
    "WeBuild",
    "Picture1",
    "Picture2",
    "Picture3",
    "Picture4",
    "Picture5",
    "Picture6",
    "Picture7",
    "Picture8",
    "Picture9",
    "Picture10",
    "Picture11",
    "Picture12",
    "Picture13",
    "Picture14",
    "Picture15",
    "Picture16",
    "AllProjects",
    "Aiasean",
    "aiAseantime",
    "aseanAllready",
    "DigitalCenter",
    "AddTime",
    "DigitalCenterText",
    "HappyNewYear",
    "HappyNewYearTitle",
    "ProjectCompleted",
    "Number50",
    "Number40",
    "HappyClient",
    "Number2",
    "YearsEx",
    "Number100",
    "Responsive",
    "AllInsights",
    "Companies",
    "WorkWith",
    "InFo",
    "Address",
    "National",
    "Socials",
    "Noname",

  ];

  animated.forEach(id => {
    const el = document.getElementById(id);
    if (el) restartAnimation(el);
  });
}
