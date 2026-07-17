// menu use bootstrap js
function toggleMode() {
  document.getElementById("body").classList.toggle("dark-mode");
}

// slider header
const track = document.querySelector('.track');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dots div');
let current = 0;
function showSlide(index){
    track.style.transform = `translateX(-${index * 100}%)`;
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    slides[index].classList.add('active');
    dots[index].classList.add('active');
}
document.querySelector('.right').addEventListener('click', () => {
    current = (current + 1) % slides.length;
    showSlide(current);
});
document.querySelector('.left').addEventListener('click', () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
});
setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
}, 5000);


/* text bottom */
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
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".image-container img");
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // show animation once
          entry.target.classList.add("show");
          // stop observing (prevents repeat jump)
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );
  images.forEach((img) => observer.observe(img));
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
      our: "Our capabilities",
      st: "Strategy",
      st1:"Digital Studio • Creative Agency",
      expre:"Build Modern Studio Experience",
      height:"We design and develop high-performance websites, mobile apps, and digital experiences with modern UI/UX systems built for scale.",
      bran:"Brand Diagnose",
      de:"Brand Definition",
      n:"Brand Name",
      a:"Brand Architecture",
      b:"Brand Activation Plan",
      c:"Design",d:"Visual Identity", 
      e:" Bespoke Typeface",f:"Web and Mobile Design", 
      g:"Verbal Identity & Messaging",h:"Packaging Design", i:"Trend", j:"Concept Testing", k:"Design Training", u:"Mang Seyha",
      l:"Brand Guideline and Tools", m:"Brand Governance", tes:"Meet The Team", o:"Veng Thavong", p:"Deployment and Maintenance",
      q:"Role: Deployment and Maintenance Engineer / DevOps Specialist Education: Master’s Degree in Computer Science or Information and Communication Technology (ICT) Experience: 10 Years in the Tech Industry (Cloud Infrastructure Management, System Deployment, and Technical Troubleshooting) Core Competencies 1. System Deployment & Automation Release Management: Organizing and coordinating the process of migrating code or applications from the staging/development phase to live production servers safely, ensuring zero disruption to services. Deployment Automation: Building and managing automated Continuous Integration and Continuous Deployment (CI/CD) pipelines to accelerate feature releases for apps or websites while significantly minimizing human errors.",
      em:"2. System Maintenance & Monitoring System Monitoring: Setting up advanced monitoring tools to track overall infrastructure health—such as system speed, storage capacity, and security metrics—to proactively identify and resolve anomalies before they impact end-users. System Upgrades & Patching: Managing data backup protocols, routine operating system updates (Server OS updates), and vulnerability patching to fortify the infrastructure against cyber security threats.",
      r:"Phan Heang", s:"Coding & Testing", t:"Role: Software Developer & QA Tester Education: Master’s Degree in Computer Science or Information and Communication Technology (ICT) Experience: 8 Years in the Tech Industry (Software Development, Automation Testing, and Quality Assurance) Core Competencies 1. Creative Coding & Development Software Development: Capable of writing code, building new features, and troubleshooting technical system issues to effectively meet business requirements. Logic & Clean Code: Focused on writing well-structured, easy-to-understand, and clean code that ensures smooth maintenance and seamless scalability in the future.",
      plan:"Planning & Analysis",plan1:"Planning & Analysis", sek:"Choun Sophat",
      x:"Role: Product Planning & Systems Analyst Education: Master’s Degree in Computer Science or Information and Communication Technology (ICT) Experience: 8 Years in the Tech Industry (Project Management, Systems Analysis, and Quality Assurance) Core Competencies 1. Business & Systems Analysis Requirements Gathering: Researching and analyzing client needs and business goals, and translating them into detailed Functional Specifications for UX/UI design and development teams to execute. Feasibility Analysis: Evaluating system gaps, technical feasibility, and potential project risks prior to kickoff to minimize development delays and post-launch defects (bugs).",
      x1:"Role: Product Planning & Systems Analyst Education: Master’s Degree in Computer Science or Information and Communication Technology (ICT) Experience: 9 Years in the Tech Industry (Project Management, Systems Analysis, and Quality Assurance) Core Competencies 1. Business & Systems Analysis Requirements Gathering: Researching and analyzing client needs and business goals, and translating them into detailed Functional Specifications for UX/UI design and development teams to execute. Feasibility Analysis: Evaluating system gaps, technical feasibility, and potential project risks prior to kickoff to minimize development delays and post-launch defects (bugs).",
      y1:"2. Product Planning & Strategy Roadmap Planning: Strategizing and mapping out project timelines, phases, and milestones in perfect alignment with company resources and target deadlines. Sprint & Process Optimization: Organizing and coordinating daily team workflows utilizing modern methodologies (Agile/Scrum) to ensure efficient, high-quality, and on-time product delivery.",
      eff:"Website Effectiveness",com:"Fast Communication", enda:"Websites enable communication and allow users to access information quickly and efficiently.",
      build:"Build Trut", well:"A well-designed website increases credibility and builds customer confidence.", cus:"Custom Web Solutions", design:"We design and develop modern websites and web applications tailored to your business needs.",
      t1:"2. Software Testing & QA Bug Detection: Conducting thorough manual testing to discover system gaps, anomalies, and vulnerabilities before the product is officially deployed to customers. Automation Testing: Creating and writing automation scripts to optimize testing workflows, reduce overall time-to-market, and guarantee a high level of technical accuracy.",
      choose:"UX/UI Design",
      mkoo:"Role: UX/UI Designer / Product Designer Education: Master’s Degree in Computer Science or Information and Communication Technology (ICT) Experience: 6 Years in the Tech Industry (Software Development, QA Testing, Automation, and UX/UI Design) Core Competencies 1. User Experience (UX) Research & Design User Pain Point Analysis: Leveraging meticulous analytical skills developed in Quality Assurance (QA) and Software Testing to identify system friction, user bottlenecks, and usability gaps in web and mobile applications. User Flows & Information Architecture: Designing intuitive, streamlined user journeys and information structures based on data-driven research to maximize user engagement and efficiency.",
      utp:"2. User Interface (UI) Design & Systems Visual Design & Prototyping: Crafting high-fidelity visual designs, clean wireframes, and interactive, dynamic prototypes that bring digital concepts to life. Design Systems: Structuring standardized, scalable design systems (components, typography, and color palettes) to ensure seamless, efficient, and error-free developer handoffs.",
      y:"2. Product Planning & Strategy Roadmap Planning: Strategizing and mapping out project timelines, phases, and milestones in perfect alignment with company resources and target deadlines. Sprint & Process Optimization: Organizing and coordinating daily team workflows utilizing modern methodologies (Agile/Scrum) to ensure efficient, high-quality, and on-time product delivery.",
      z:"Cheat Langhout",
      workwith: "Work with us",
      info: "info@noname.design  +855 (0) 70770571",
      address: "Address",
      national: "#I86, National Road 3, Sangkat Chom Chao II, Khan Porsenchey, Phnom Penh, CAMBODIA.",
      socials: "Socials",
      noname: " © 2026 Website => noname <= Design and Digital Services",
    },
    km: {
      home: "ទំព័រដើម",
      projects: "គម្រោង",
      studio: "ស្ទូឌីយោ",
      insights: "ព័ត៌មាន",
      contact: "ទំនាក់ទំនង",
      menu: "មុឺនុយ",
      our: "សមត្ថភាពរបស់យើង",
      st: "យុទ្ធសាស្ត្រ",
      st1:"ស្ទូឌីយោឌីជីថល • សេវាកម្មរចនា និងច្នៃប្រឌិត",
      expre:"បង្កើតបទពិសោធន៍ស្ទូឌីយោទំនើប និងមានស្តង់ដារខ្ពស់",
      height:"យើងរចនា និងអភិវឌ្ឍគេហទំព័រ និងកម្មវិធីទូរស័ព្ទដែលមានប្រសិទ្ធភាពខ្ពស់ រួមជាមួយបទពិសោធន៍ឌីជីថលទំនើប ដោយប្រើប្រព័ន្ធ UI/UX ដែលអាចពង្រីក និងអភិវឌ្ឍបានតាមតម្រូវការ",
      brand: "ការធ្វើរោគវិនិច្ឆ័យម៉ាកយីហោ",
      de:"និយមន័យម៉ាកយីហោ", n:"ឈ្មោះម៉ាកយីហោ", a:"ស្ថាបត្យកម្មម៉ាកយីហោ",
      b:"ផែនការធ្វើឱ្យម៉ាកយីហោសកម្ម", c:"ការរចនា", d:"អត្តសញ្ញាណដែលមើលឃើញ", f:"ការរចនាគេហទំព័រ និងទូរស័ព្ទចល័ត", g:"អត្តសញ្ញាណពាក្យសំដី និងការផ្ញើសារ",
      e:"ពុម្ពអក្សរតាមតម្រូវការ", h:"ការរចនាវេចខ្ចប់", i:"និន្នាការ", j:"ការធ្វើតេស្តគោលគំនិត", k:"ការបណ្តុះបណ្តាលផ្នែករចនា", l:"គោលការណ៍ណែនាំ និងឧបករណ៍សម្រាប់ម៉ាកយីហោ", em:"២. ការថែទាំ និងធានាស្ថិរភាពប្រព័ន្ធ (System Maintenance & Monitoring) ការត្រួតពិនិត្យ និងតាមដាន (System Monitoring): រៀបចំឧបករណ៍តាមដានសុខភាពប្រព័ន្ធ ដូចជាល្បឿន លំហផ្ទុកទិន្នន័យ និងសុវត្ថិភាព ដើម្បីដឹង និងដោះស្រាយបញ្ហាភ្លាមៗ មុនពេលវាប៉ះពាល់ដល់អ្នកប្រើប្រាស់។ ការធ្វើបច្ចុប្បន្នភាព និងសុវត្ថិភាព (System Upgrades & Patching): គ្រប់គ្រងការ Backup ទិន្នន័យ ការធ្វើបច្ចុប្បន្នភាពប្រព័ន្ធប្រតិបត្តិការ (Server OS) និងការលុបបំបាត់ចន្លោះប្រហោងសន្តិសុខ ដើម្បីការពារប្រព័ន្ធពីការវាយប្រហារផ្សេងៗ។ can you transla khmer to english ",
      m:"ការគ្រប់គ្រងម៉ាកយីហោ", tes:"ជួបជាមួយក្រុមការងារ", o:"វ៉េង ថាវង្ស", p:"ការដាក់ឲ្យដំណើរការ និងការថែទាំ", q:"តួនាទី៖ Deployment and Maintenance Engineer / DevOps Specialist ការអប់រំ៖ បរិញ្ញាបត្រជាន់ខ្ពស់ (Master's Degree) ផ្នែកវិទ្យាសាស្ត្រកុំព្យូទ័រ ឬបច្ចេកវិទ្យាគមនាគមន៍និងព័ត៌មាន បទពិសោធន៍៖ ១០ ឆ្នាំក្នុងវិស័យបច្ចេកវិទ្យា (ការគ្រប់គ្រងហេដ្ឋារចនាសម្ព័ន្ធ Cloud, ការដាក់ឱ្យដំណើរការប្រព័ន្ធ និងការដោះស្រាយបញ្ហាបច្ចេកទេស)ជំនាញ និងបទពិសោធន៍លេចធ្លោ (Core Competencies) ១. ការដាក់ឱ្យដំណើរការប្រព័ន្ធប្រកបដោយប្រសិទ្ធភាព (System Deployment & Automation) ការគ្រប់គ្រងការបញ្ចេញផលិតផល (Release Management): រៀបចំ និងសម្របសម្រួលដំណើរការផ្ទេរកូដ ឬកម្មវិធីពីដំណាក់កាលអភិវឌ្ឍន៍ (Staging) ទៅកាន់ម៉ាស៊ីនបម្រើការងារពិតប្រាកដ (Production Servers) ឱ្យមានសុវត្ថិភាព និងមិនមានការរអាក់រអួល។ ការធ្វើស្វ័យប្រវត្តិកម្ម (Deployment Automation): បង្កើត និងគ្រប់គ្រងប្រព័ន្ធស្វ័យប្រវត្តិ (CI/CD) ដើម្បីជួយឱ្យការបញ្ចេញមុខងារថ្មីៗរបស់ App Website ដំណើរការទៅមុខបានលឿន និងកាត់បន្ថយកំហុសឆ្គងដែលកើតឡើងដោយមនុស្ស (Human Errors)។",
      r:"ផាន ហៀង", s:"ការសរសេរកូដ និងការធ្វើតេស្ត", t:"តួនាទី៖ Software Developer & QA Tester (អ្នកសរសេរកូដ និងអ្នកតេស្តប្រព័ន្ធ) ការអប់រំ៖ បរិញ្ញាបត្រជាន់ខ្ពស់ (Master's Degree) ផ្នែកវិទ្យាសាស្ត្រកុំព្យូទ័រ ឬបច្ចេកវិទ្យាគមនាគមន៍និងព័ត៌មាន បទពិសោធន៍៖ ៨ ឆ្នាំក្នុងវិស័យបច្ចេកវិទ្យា (ការសរសេរកូដអភិវឌ្ឍ, ការតេស្តស្វ័យប្រវត្តិកម្ម និងការធានាគុណភាពប្រព័ន្ធ)ជំនាញ និងបទពិសោធន៍លេចធ្លោ (Core Competencies) 1. ការសរសេរកូដ និងការអភិវឌ្ឍប្រព័ន្ធ (Creative Coding & Development) ការអភិវឌ្ឍកម្មវិធី (Software Development): មានសមត្ថភាពក្នុងការសរសេរកូដ បង្កើតមុខងារថ្មីៗ និងដោះស្រាយបញ្ហាបច្ចេកទេស (Troubleshooting) ទៅលើប្រព័ន្ធដើម្បីឆ្លើយតបតាមតម្រូវការរបស់អាជីវកម្ម។ ការគិតបែបតក្កវិទ្យា (Logic & Clean Code): ផ្តោតលើការសរសេរកូដដែលមានរចនាសម្ព័ន្ធច្បាស់លាស់ ងាយស្រួលយល់ និងងាយស្រួលក្នុងការថែទាំ ឬពង្រីកមុខងារបន្ថែមទៅថ្ងៃអនាគត។",
      u:"ម៉ាង សីហា", plan:"ការធ្វើផែនការ និងការវិភាគ",plan1:"ការធ្វើផែនការ និងការវិភាគ", sek:"ឈុន សូផាត",
      x:"តួនាទី៖ Product Planning & Systems Analyst (អ្នកជំនាញរៀបចំផែនការផលិតផល និងវិភាគប្រព័ន្ធ) ការអប់រំ៖ បរិញ្ញាបត្រជាន់ខ្ពស់ (Master's Degree) ផ្នែកវិទ្យាសាស្ត្រកុំព្យូទ័រ ឬបច្ចេកវិទ្យាគមនាគមន៍និងព័ត៌មាន បទពិសោធន៍៖ ៨ ឆ្នាំក្នុងវិស័យបច្ចេកវិទ្យា (ការគ្រប់គ្រងគម្រោង, ការវិភាគប្រព័ន្ធ និងការធានាគុណភាព QA) ជំនាញ និងបទពិសោធន៍លេចធ្លោ (Core Competencies) 1. ការវិភាគប្រព័ន្ធ និងតម្រូវការអាជីវកម្ម (Business & Systems Analysis) ការប្រមូល និងវិភាគតម្រូវការ (Requirements Gathering): ស្រាវជ្រាវ និងវិភាគលើតម្រូវការរបស់អតិថិជន និងគោលដៅអាជីវកម្ម រួចបំប្លែងវាទៅជាឯកសារបច្ចេកទេស (Functional Specifications) យ៉ាងលម្អិត សម្រាប់ឱ្យក្រុមរចនា (UX/UI) និងក្រុមអ្នកអភិវឌ្ឍន៍/សរសេរកូដ (Development Teams) យកទៅអនុវត្តបន្ត។ ការវិភាគលទ្ធភាពបច្ចេកទេស (Feasibility Analysis): វាយតម្លៃលើចន្លោះប្រហោងនៃប្រព័ន្ធ លទ្ធភាពផ្នែកបច្ចេកទេស និងហានិភ័យដែលអាចកើតមានចំពោះគម្រោង មុនពេលចាប់ផ្តើមដំណើរការ (Project Kickoff) ដើម្បីកាត់បន្ថយការខាតបង់ពេលវេលាក្នុងការអភិវឌ្ឍ និងកាត់បន្ថយកំហុសឆ្គង (Bugs) ក្រោយពេលដាក់ឱ្យដំណើរការ។",
      x1:"តួនាទី៖ Product Planning & Systems Analyst (អ្នកជំនាញរៀបចំផែនការផលិតផល និងវិភាគប្រព័ន្ធ) ការអប់រំ៖ បរិញ្ញាបត្រជាន់ខ្ពស់ (Master's Degree) ផ្នែកវិទ្យាសាស្ត្រកុំព្យូទ័រ ឬបច្ចេកវិទ្យាគមនាគមន៍និងព័ត៌មាន បទពិសោធន៍៖ ៩ ឆ្នាំក្នុងវិស័យបច្ចេកវិទ្យា (ការគ្រប់គ្រងគម្រោង, ការវិភាគប្រព័ន្ធ និងការធានាគុណភាព QA) ជំនាញ និងបទពិសោធន៍លេចធ្លោ (Core Competencies) 1. ការវិភាគប្រព័ន្ធ និងតម្រូវការអាជីវកម្ម (Business & Systems Analysis) ការប្រមូល និងវិភាគតម្រូវការ (Requirements Gathering): ស្រាវជ្រាវ និងវិភាគលើតម្រូវការរបស់អតិថិជន និងគោលដៅអាជីវកម្ម រួចបំប្លែងវាទៅជាឯកសារបច្ចេកទេស (Functional Specifications) យ៉ាងលម្អិត សម្រាប់ឱ្យក្រុមរចនា (UX/UI) និងក្រុមអ្នកអភិវឌ្ឍន៍/សរសេរកូដ (Development Teams) យកទៅអនុវត្តបន្ត។ ការវិភាគលទ្ធភាពបច្ចេកទេស (Feasibility Analysis): វាយតម្លៃលើចន្លោះប្រហោងនៃប្រព័ន្ធ លទ្ធភាពផ្នែកបច្ចេកទេស និងហានិភ័យដែលអាចកើតមានចំពោះគម្រោង មុនពេលចាប់ផ្តើមដំណើរការ (Project Kickoff) ដើម្បីកាត់បន្ថយការខាតបង់ពេលវេលាក្នុងការអភិវឌ្ឍ និងកាត់បន្ថយកំហុសឆ្គង (Bugs) ក្រោយពេលដាក់ឱ្យដំណើរការ។",
      y:"2. ការរៀបចំផែនការ និងយុទ្ធសាស្ត្រផលិតផល (Product Planning & Strategy) ការរៀបចំផែនការយុទ្ធសាស្ត្រ (Roadmap Planning): រៀបចំផែនការការងារ និងបែងចែកដំណាក់កាលនៃគម្រោង (Project Timelines, Phases, & Milestones) ឱ្យស្របទៅនឹងធនធានរបស់ក្រុមហ៊ុន និងពេលវេលាកំណត់ដែលបានគ្រោងទុក យ៉ាងត្រឹមត្រូវបំផុត។ ការគ្រប់គ្រងលំហូរការងារ និងដំណើរការអភិវឌ្ឍ (Sprint & Process Optimization): រៀបចំ និងសម្របសម្រួលកិច្ចការងារប្រចាំថ្ងៃរបស់ក្រុមការងារ ដោយប្រើប្រាស់វិធីសាស្ត្របែបទំនើប (Agile/Scrum) ដើម្បីធានាបាននូវការបញ្ចេញផលិតផលប្រកបដោយប្រសិទ្ធភាព មានគុណភាពខ្ពស់ និងទាន់ពេលវេលា។",
      y1:"2. ការរៀបចំផែនការ និងយុទ្ធសាស្ត្រផលិតផល (Product Planning & Strategy) ការរៀបចំផែនការយុទ្ធសាស្ត្រ (Roadmap Planning): រៀបចំផែនការការងារ និងបែងចែកដំណាក់កាលនៃគម្រោង (Project Timelines, Phases, & Milestones) ឱ្យស្របទៅនឹងធនធានរបស់ក្រុមហ៊ុន និងពេលវេលាកំណត់ដែលបានគ្រោងទុក យ៉ាងត្រឹមត្រូវបំផុត។ ការគ្រប់គ្រងលំហូរការងារ និងដំណើរការអភិវឌ្ឍ (Sprint & Process Optimization): រៀបចំ និងសម្របសម្រួលកិច្ចការងារប្រចាំថ្ងៃរបស់ក្រុមការងារ ដោយប្រើប្រាស់វិធីសាស្ត្របែបទំនើប (Agile/Scrum) ដើម្បីធានាបាននូវការបញ្ចេញផលិតផលប្រកបដោយប្រសិទ្ធភាព មានគុណភាពខ្ពស់ និងទាន់ពេលវេលា។",
      z:"ជាតិ ឡាងហួត", eff:"ប្រសិទ្ធភាពនៃគេហទំព័រ",com:"ការទំនាក់ទំនងរហ័ស", enda:"គេហទំព័រ (Websites) ជួយសម្រួលដល់ការទំនាក់ទំនង និងអនុញ្ញាតឱ្យអ្នកប្រើប្រាស់អាចស្វែងរក ឬចូលទៅពិនិត្យព័ត៌មានបានយ៉ាងរហ័ស និងមានប្រសិទ្ធភាព។",
      build:"ការបង្កើតភាពជឿជាក់", well:"គេហទំព័រដែលបានរចនាយ៉ាងល្អ ជួយជម្រុញនូវភាពគួរឱ្យជឿជាក់ និងកសាងទំនុកចិត្តដល់អតិថិជន", cus:"ការបង្កើតគេហទំព័រតាមតម្រូវការជាក់ស្តែង", design:"យើងរចនា និងអភិវឌ្ឍគេហទំព័រព្រមទាំងកម្មវិធី web (Web Applications) បែបទំនើប ដែលត្រូវបានកែច្នៃឡើងយ៉ាងសម្រិតសម្រាំងទៅតាមតម្រូវការអាជីវកម្មរបស់អ្នក",
      t1:"២. ការតេស្តសាកល្បង និងការធានាគុណភាព (Software Testing & QA) ការស្វែងរកកំហុសឆ្គង (Bug Detection): ធ្វើការតេស្តសាកល្បងទៅលើប្រព័ន្ធ (Manual Testing) ដើម្បីរុករកចន្លោះប្រហោង ភាពមិនប្រក្រតី និងចំណុចខ្សោយនានា មុនពេលផលិតផលត្រូវដាក់ឱ្យអតិថិជនប្រើប្រាស់ពិតប្រាកដ។ ការតេស្តដោយស្វ័យប្រវត្តិ (Automation Testing): បង្កើត និងសរសេរកូដសម្រាប់តេស្តប្រព័ន្ធដោយស្វ័យប្រវត្តិ (Automation Scripts) ដើម្បីជួយសន្សំសំចៃពេលវេលា បង្កើនល្បឿនការងារ និងធានាបាននូវភាពត្រឹមត្រូវកម្រិតខ្ពស់",
      choose:"ការរចនា UX/UI",
      mkoo:"តួនាទី៖ UX/UI Designer / Product Designer (អ្នករចនាបទពិសោធន៍ និងផ្ទៃកម្មវិធី / អ្នករចនាផលិតផលឌីជីថល) ការអប់រំ៖ បរិញ្ញាបត្រជាន់ខ្ពស់ (Master's Degree) ផ្នែកវិទ្យាសាស្ត្រកុំព្យូទ័រ ឬបច្ចេកវិទ្យាគមនាគមន៍និងព័ត៌មាន បទពិសោធន៍៖ ៦ ឆ្នាំក្នុងវិស័យបច្ចេកវិទ្យា (ការអភិវឌ្ឍប្រព័ន្ធ, ការធានាគុណភាព QA, កូដស្វ័យប្រវត្តិកម្ម និងការរចនា UX/UI) ជំនាញ និងបទពិសោធន៍លេចធ្លោ (Core Competencies) ១. ការស្រាវជ្រាវ និងការរចនាបទពិសោធន៍អ្នកប្រើប្រាស់ (User Experience - UX Research & Design) ការវិភាគចំណុចខ្សោយរបស់អ្នកប្រើប្រាស់ (User Pain Point Analysis)៖ ប្រើប្រាស់ជំនាញវិភាគដ៏ម៉ត់ចត់ ដែលទទួលបានពីបទពិសោធន៍ផ្នែកការធានាគុណភាព (QA) និងការតេស្តសាកល្បងប្រព័ន្ធ (Software Testing) ដើម្បីស្វែងរកចំណុចរអាក់រអួល ភាពស្ទះដំណើរការ និងចន្លោះប្រហោងនៃការប្រើប្រាស់នៅលើកម្មវិធីទូរស័ព្ទ និងគេហទំព័រ។ លំហូរការងារ និងរចនាសម្ព័ន្ធព័ត៌មាន (User Flows & Information Architecture)៖ រចនាលំហូរនៃការប្រើប្រាស់ (User Journeys) ឱ្យមានភាពងាយស្រួល មិនស្មុគស្មាញ និងរៀបចំរចនាសម្ព័ន្ធទិន្នន័យផ្អែកលើការស្រាវជ្រាវជាក់ស្តែង ដើម្បីបង្កើនការពេញចិត្ត និងប្រសិទ្ធភាពក្នុងការប្រើប្រាស់ខ្ពស់បំផុត។",
      utp:"២. ការរចនាសោភ័ណភាព និងគំរូសាកល្បង (Visual Design & Prototyping)៖ បង្កើតទម្រង់រចនាដែលមានភាពលម្អិត និងសោភ័ណភាពខ្ពស់ (High-fidelity), ប្លង់ព្រាងស្អាតៗ (Clean Wireframes) ព្រមទាំងគំរូសាកល្បងដែលអាចចុចបញ្ជាបាន និងមានចលនារស់រវើក (Interactive, Dynamic Prototypes) ដើម្បីធ្វើឱ្យគំនិតច្នៃប្រឌិតឌីជីថលក្លាយជារូបរាងពិតជាក់ស្តែង។",
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
    set("Our", t.our);
    set("St", t.st);
    set("Height", t.height);
    set("ST1", t.st1)
    set("ExPre", t.expre);
    set("Brand", t.brand);
    set("De", t.de); set("Em", t.em); set("U", t.u); 
    set("N", t.n); set("A", t.a); set("B", t.b); set("C", t.c); set("D", t.d);
    set("E", t.e); set("F", t.f); set("G", t.g); set("H", t.h); set("I", t.i);
    set("J", t.j); set("K", t.k); set("L", t.l); set("M", t.m); set("Tes", t.tes); set("Build", t.build);
    set("O", t.o); set("P", t.p); set("Q", t.q); set("R", t.r); set("S", t.s); set("T", t.t); set("U", t.u);
    set:("V", t.v); set("Plan", t.plan); set("Plan1", t.plan1); set("Sek", t.sek); set("X", t.x); set("Y", t.y); set("Z", t.z);
    set("X1", t.x1); set("Y1", t.y1); set("Eff", t.eff); set("Com", t.com); set("Enda", t.enda); set("Bbuild", t.build); set("Well", t.well);
    set("Cus", t.cus); set("Design", t.design); set("T1", t.t1);
    set("Choose", t.choose);
    set("MKoo", t.mkoo);
    set("UTP", t.utp);
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
        "Our",
        "St",
        "ST1",
        "ExPre",
        "Height",
        "Brand",
        "De",
        "N","Em", 
        "A","B", "C", "D", "E", "F", "G", "H","I", "J", "K", "L", "M", "Tes", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
         "Pi","Plan","Plan1", "Sek","W", "X","Y", "X1", "Y1", "Eff", "Com", "Enda", "Bbuild", "Well", "cus", "Design", "T1",
       "Choose",
       "MKoo",
       "UTP",
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


// AOS Animation
AOS.init({
    duration: 1200,
    delay: 100,
    once: false,
    offset: 120,
    easing: 'ease-in-out'
});