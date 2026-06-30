// menu use bootstrap js
function toggleMode() {
  document.getElementById("body").classList.toggle("dark-mode");
}




// slider for header
window.addEventListener("load", () => {
    document.getElementById("section").classList.add("active");
});
/* FILTER ACTIVE */
document.addEventListener("DOMContentLoaded", () => {
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                // បើចង់ឲ្យលោតតែម្ដង (recommended)
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });
    reveals.forEach(el => observer.observe(el));
});


// AOS FOR TITLE
AOS.init({
    duration: 800,
    once: true,
    offset: 100
});

//all Insightss
  // Toggle text
document.querySelectorAll(".btn-toggle").forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".content");
    const text = card.querySelector(".text");
    text.classList.toggle("expanded");
    // optional: change button text
    if (text.classList.contains("expanded")) {
      btn.innerText = "Show Less";
    } else {
      btn.innerText = "Read More";
    }
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

// important
document.addEventListener("DOMContentLoaded", () => {
    const uiFeatureElements = document.querySelectorAll(".feature-item");
    if (!("IntersectionObserver" in window)) {
        uiFeatureElements.forEach(el => el.classList.add("active"));
        return;
    }

    const uiScrollRevealEngine = new IntersectionObserver((entryList) => {
        entryList.forEach((entry) => {
            if (entry.isIntersecting) {
                const elementIndex = [...uiFeatureElements].indexOf(entry.target);
                setTimeout(() => {
                    entry.target.classList.add("active");
                }, elementIndex * 250);
                uiScrollRevealEngine.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });
    uiFeatureElements.forEach((element) => {
        uiScrollRevealEngine.observe(element);
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
      in:"Insights",
      stay:" Stay updated with the latest trends, innovations, and digital insights to help your business grow and succeed online.",
      fea:"Featured",
      how:"How Design Drives Digital Growth",
      design:"UI/UX design helps businesses grow faster in digital world.",
      projects: "Projects",
      inauguration:"Inauguration ceremony of the 'Digital Room'",
      num1:"26.11.2025",
      room:"The Digital Room or Digital Tech Center at Chea Sim University of Kamchaymear (CSUK) is a brand-new achievement that was officially inaugurated on November 26, 2025. The center was established under a cooperation framework between the Ministry of Post and Telecommunications (MPTC) and the university to promote digital education. Key Features and Functions: Modern Infrastructure: The room is equipped with technological devices, computers, and a high-speed internet connection to facilitate students' learning and research. Verify.gov.kh Document Verification Platform: It serves as a hub for implementing the use of the official digital platform to verify the authenticity of various documents. Digital Management System: It assists the university in organizing its learning management system and data more efficiently. Education and Training: It serves the purpose of training in Information Technology (IT) majors and developing digital skills for students and educational staff. The creation of this digital room is also part of the Cambodia Cyber University Network (CCUN), which consists of 12 member higher education institutions in Cambodia that share learning resources and joint online training programs.",
      more:"Read More",
      ceremony:"Inauguration ceremony of the 'Digital Room'",
      num2:"26.11.2025",
      digi:"The Digital Room or Digital Tech Center at Chea Sim University of Kamchaymear (CSUK) is a brand-new achievement that was officially inaugurated on November 26, 2025. The center was established under a cooperation framework between the Ministry of Post and Telecommunications (MPTC) and the university to promote digital education. Key Features and Functions: Modern Infrastructure: The room is equipped with technological devices, computers, and a high-speed internet connection to facilitate students' learning and research. Verify.gov.kh Document Verification Platform: It serves as a hub for implementing the use of the official digital platform to verify the authenticity of various documents. Digital Management System: It assists the university in organizing its learning management system and data more efficiently. Education and Training: It serves the purpose of training in Information Technology (IT) majors and developing digital skills for students and educational staff. The creation of this digital room is also part of the Cambodia Cyber University Network (CCUN), which consists of 12 member higher education institutions in Cambodia that share learning resources and joint online training programs.",
      read: "Read More",
      of: "Inauguration ceremony of the 'Digital Room'",
      time: "26.11.2025", 
      past:"The Digital Room or Digital Tech Center at Chea Sim University of Kamchaymear (CSUK) is a brand-new achievement that was officially inaugurated on November 26, 2025. The center was established under a cooperation framework between the Ministry of Post and Telecommunications (MPTC) and the university to promote digital education. Key Features and Functions: Modern Infrastructure: The room is equipped with technological devices, computers, and a high-speed internet connection to facilitate students' learning and research. Verify.gov.kh Document Verification Platform: It serves as a hub for implementing the use of the official digital platform to verify the authenticity of various documents. Digital Management System: It assists the university in organizing its learning management system and data more efficiently. Education and Training: It serves the purpose of training in Information Technology (IT) majors and developing digital skills for students and educational staff. The creation of this digital room is also part of the Cambodia Cyber University Network (CCUN), which consists of 12 member higher education institutions in Cambodia that share learning resources and joint online training programs.",
      btt: "Read More",
      ai:"AI Ready ASEAN Training on Mar 15, 2026",
      mar:"15, 03, 2026",
      aiready:"The AI Ready ASEAN project is an initiative aimed at empowering educators, students, and parents across Southeast Asia, especially in countries such as Cambodia, to understand and effectively use Artificial Intelligence (AI) in education and daily life. The project focuses on building digital literacy, promoting responsible AI usage, and encouraging regional collaboration through training programs.",
      oo:"Read More",
      ro:"Inauguration ceremony of the 'Digital Room'",
      cal:"26.11.2025",
      was:"The Digital Room or Digital Tech Center at Chea Sim University of Kamchaymear (CSUK) is a brand-new achievement that was officially inaugurated on November 26, 2025. The center was established under a cooperation framework between the Ministry of Post and Telecommunications (MPTC) and the university to promote digital education. Key Features and Functions: Modern Infrastructure: The room is equipped with technological devices, computers, and a high-speed internet connection to facilitate students' learning and research. Verify.gov.kh Document Verification Platform: It serves as a hub for implementing the use of the official digital platform to verify the authenticity of various documents. Digital Management System: It assists the university in organizing its learning management system and data more efficiently. Education and Training: It serves the purpose of training in Information Technology (IT) majors and developing digital skills for students and educational staff. The creation of this digital room is also part of the Cambodia Cyber University Network (CCUN), which consists of 12 member higher education institutions in Cambodia that share learning resources and joint online training programs.",
      mr:"Read More",
      com: "Chea Sim Komchaymear Education and Training Center",
      kam:"The inauguration of the Hun Sen Kamchaymear Kindergarten on July 11, 2024, is located directly within the campus of Chea Sim University of Kamchaymear (Thnal Kaeng Village, Smaong Khang Cheung Commune). Integrating a kindergarten into this university campus is a strategy called the 'Chea Sim Kamchaymear Education and TrainingCenter,' which features the following highlights: All-in-One Complete Education: It creates an educational system ranging from kindergarten, primary school, and high school up to university level within the same area. Convenience for Staff and the Community: It provides convenience for civil servants, professors, and staff working at the university to send their young children to school near their workplace, as well as for the residents of Smaong Khang Cheung Commune. Human Resource Training: This kindergarten is the very first foundation aiming to transform the Kamchaymear area, which was previously a battlefield, into an important 'Education and Human Resource Training Zone' for Prey Veng Province and the nation. During the inauguration ceremony, Samdech Kralahom Sar Kheng also emphasized that the construction of this kindergarten is a supplementary addition to enrich the educational infrastructure within Chea Sim University of Kamchaymear.",
      re:"Read More",
      tech:"Chea Sim Komchaymear Education and Training Center.",
      kal:"11.07.2024",
      edu:"The inauguration of the Hun Sen Kamchaymear Kindergarten on July 11, 2024, is located directly within the campus of Chea Sim University of Kamchaymear (Thnal Kaeng Village, Smaong Khang Cheung Commune). Integrating a kindergarten into this university campus is a strategy called the 'Chea Sim Kamchaymear Education and TrainingCenter,' which features the following highlights: All-in-One Complete Education: It creates an educational system ranging from kindergarten, primary school, and high school up to university level within the same area. Convenience for Staff and the Community: It provides convenience for civil servants, professors, and staff working at the university to send their young children to school near their workplace, as well as for the residents of Smaong Khang Cheung Commune. Human Resource Training: This kindergarten is the very first foundation aiming to transform the Kamchaymear area, which was previously a battlefield, into an important 'Education and Human Resource Training Zone' for Prey Veng Province and the nation. During the inauguration ceremony, Samdech Kralahom Sar Kheng also emphasized that the construction of this kindergarten is a supplementary addition to enrich the educational infrastructure within Chea Sim University of Kamchaymear.",
      ko:"Read More",
      light:"Inauguration ceremony of the 'Digital Room'",
      pel:"26.11.2025",
      text:"The Digital Room or Digital Tech Center at Chea Sim University of Kamchaymear (CSUK) is a brand-new achievement that was officially inaugurated on November 26, 2025. The center was established under a cooperation framework between the Ministry of Post and Telecommunications (MPTC) and the university to promote digital education. Key Features and Functions: Modern Infrastructure: The room is equipped with technological devices, computers, and a high-speed internet connection to facilitate students' learning and research. Verify.gov.kh Document Verification Platform: It serves as a hub for implementing the use of the official digital platform to verify the authenticity of various documents. Digital Management System: It assists the university in organizing its learning management system and data more efficiently. Education and Training: It serves the purpose of training in Information Technology (IT) majors and developing digital skills for students and educational staff. The creation of this digital room is also part of the Cambodia Cyber University Network (CCUN), which consists of 12 member higher education institutions in Cambodia that share learning resources and joint online training programs.",
      pade:"Read More",
      why: "Why Choose Our Studio?",
      create: "Creative Design • Web Development • Digital Solutions",
      sing: "Design",
      poster: "Creative Poster Design",
      high: "High-quality modern posters for branding and marketing.",
      tall: "Digital",
      art:"Digital Artwork",
      un:"Unique visuals for social media and branding.",
      mo:"Modern UI Design",
      clean:"Clean and modern interfaces for websites and apps.",
      web:"Web",
      website:"Website Development",
      responsive:"Responsive websites that work on all devices.",
      app:"App",
      application:"Web Applications",
      interactive:"Interactive web apps with smooth performance.",
      speed:"Speed",
      op:"Optimized Performance",
      fast:"Fast, SEO-friendly and optimized websites.",
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
      in:"ព័ត៌មាន",
      stay:"តាមដានព័ត៌មានទាន់ហេតុការណ៍អំពីនិន្នាការថ្មីៗ ការច្នៃប្រឌិត និងការយល់ដឹងពីប្រព័ន្ធឌីជីថល ដើម្បីជួយឱ្យអាជីវកម្មរបស់អ្នករីកចម្រើន និងជោគជ័យតាមប្រព័ន្ធអនឡាញ",
      fea:"លក្ខណៈពិសេស",
      how:"របៀបដែលការរចនាជំរុញការលូតលាស់ផ្នែកឌីជីថលរបស់អ្នក",
      design:"ការរចនា UI/UX ជួយអាជីវកម្មរីកចម្រើនលឿនជាងមុនក្នុងពិភពឌីជីថល។",
      projects: "គម្រោង",
      inauguration:"ពិធីសម្ភោធមជ្ឈបណ្ឌលបច្ចេកវិទ្យាឌីជីថល",
      num1:"២៦.១១.២០២៥",
      room:"បន្ទប់ឌីជីថល ឬ មជ្ឈមណ្ឌលបច្ចេកវិទ្យាឌីជីថល (Digital Tech Center) នៅក្នុងសាកលវិទ្យាល័យជាតិ ជាស៊ីម កំចាយមារ (ស.ជ.ជ.ក.) គឺជាសមិទ្ធផលថ្មីស្រឡាងមួយដែលត្រូវបានសម្ពោធដាក់ឱ្យប្រើប្រាស់កាលពីថ្ងៃទី ២៦ ខែវិច្ឆិកា ឆ្នាំ២០២៥។ មជ្ឈមណ្ឌលនេះត្រូវបានបង្កើតឡើងក្រោមក្របខណ្ឌនៃកិច្ចសហប្រតិបត្តិការរវាង ក្រសួងប្រៃសណីយ៍និងទូរគមនាគមន៍ (ក.ប.ទ.) និងសាកលវិទ្យាល័យ ដើម្បីជំរុញការអប់រំបែបឌីជីថល។លក្ខណៈពិសេស និងមុខងារសំខាន់ៗ៖ហេដ្ឋារចនាសម្ព័ន្ធទំនើប៖ បន្ទប់នេះត្រូវបានបំពាក់ដោយឧបករណ៍បច្ចេកវិទ្យា កុំព្យូទ័រ និងការតភ្ជាប់អ៊ីនធឺណិតល្បឿនលឿន ដើម្បីផ្តល់ភាពងាយស្រួលដល់ការសិក្សា និងការស្រាវជ្រាវរបស់និស្សិត។ថ្នាលផ្ទៀងផ្ទាត់ឯកសារ Verify.gov.kh៖ វាជាមជ្ឈមណ្ឌលសម្រាប់អនុវត្តការប្រើប្រាស់ថ្នាលឌីជីថលផ្លូវការ ដើម្បីផ្ទៀងផ្ទាត់ភាពត្រឹមត្រូវនៃឯកសារនានា។ប្រព័ន្ធគ្រប់គ្រងឌីជីថល៖ ជួយដល់សាកលវិទ្យាល័យក្នុងការរៀបចំប្រព័ន្ធគ្រប់គ្រងការសិក្សា និងទិន្នន័យឱ្យកាន់តែមានប្រសិទ្ធភាព។ការអប់រំ និងបណ្តុះបណ្តាល៖ បម្រើដល់ការបណ្តុះបណ្តាលមុខជំនាញបច្ចេកវិទ្យាព័ត៌មាន (IT) និងការអភិវឌ្ឍជំនាញឌីជីថលដល់និស្សិត និងបុគ្គលិកអប់រំ។ការបង្កើតបន្ទប់ឌីជីថលនេះ ក៏ជាផ្នែកមួយនៃបណ្តាញ សាកលវិទ្យាល័យសាយប័រកម្ពុជា (Cambodia Cyber University Network - CCUN) ដែលកម្ពុជាមានគ្រឹះស្ថានឧត្តមសិក្សាចំនួន ១២ ជាសមាជិក ដើម្បីចែករំលែកធនធានសិក្សា និងការបណ្តុះបណ្តាលតាមអនឡាញរួមគ្នា",
      more:"អានបន្ថែម",
      ceremony:"ពិធីសម្ភោធមជ្ឈបណ្ឌលបច្ចេកវិទ្យាឌីជីថល",
      num2:"២៦.១១.២០២៥",
      digi:"បន្ទប់ឌីជីថល ឬ មជ្ឈមណ្ឌលបច្ចេកវិទ្យាឌីជីថល (Digital Tech Center) នៅក្នុងសាកលវិទ្យាល័យជាតិ ជាស៊ីម កំចាយមារ (ស.ជ.ជ.ក.) គឺជាសមិទ្ធផលថ្មីស្រឡាងមួយដែលត្រូវបានសម្ពោធដាក់ឱ្យប្រើប្រាស់កាលពីថ្ងៃទី ២៦ ខែវិច្ឆិកា ឆ្នាំ២០២៥។ មជ្ឈមណ្ឌលនេះត្រូវបានបង្កើតឡើងក្រោមក្របខណ្ឌនៃកិច្ចសហប្រតិបត្តិការរវាង ក្រសួងប្រៃសណីយ៍និងទូរគមនាគមន៍ (ក.ប.ទ.) និងសាកលវិទ្យាល័យ ដើម្បីជំរុញការអប់រំបែបឌីជីថល។លក្ខណៈពិសេស និងមុខងារសំខាន់ៗ៖ហេដ្ឋារចនាសម្ព័ន្ធទំនើប៖ បន្ទប់នេះត្រូវបានបំពាក់ដោយឧបករណ៍បច្ចេកវិទ្យា កុំព្យូទ័រ និងការតភ្ជាប់អ៊ីនធឺណិតល្បឿនលឿន ដើម្បីផ្តល់ភាពងាយស្រួលដល់ការសិក្សា និងការស្រាវជ្រាវរបស់និស្សិត។ថ្នាលផ្ទៀងផ្ទាត់ឯកសារ Verify.gov.kh៖ វាជាមជ្ឈមណ្ឌលសម្រាប់អនុវត្តការប្រើប្រាស់ថ្នាលឌីជីថលផ្លូវការ ដើម្បីផ្ទៀងផ្ទាត់ភាពត្រឹមត្រូវនៃឯកសារនានា។ប្រព័ន្ធគ្រប់គ្រងឌីជីថល៖ ជួយដល់សាកលវិទ្យាល័យក្នុងការរៀបចំប្រព័ន្ធគ្រប់គ្រងការសិក្សា និងទិន្នន័យឱ្យកាន់តែមានប្រសិទ្ធភាព។ការអប់រំ និងបណ្តុះបណ្តាល៖ បម្រើដល់ការបណ្តុះបណ្តាលមុខជំនាញបច្ចេកវិទ្យាព័ត៌មាន (IT) និងការអភិវឌ្ឍជំនាញឌីជីថលដល់និស្សិត និងបុគ្គលិកអប់រំ។ការបង្កើតបន្ទប់ឌីជីថលនេះ ក៏ជាផ្នែកមួយនៃបណ្តាញ សាកលវិទ្យាល័យសាយប័រកម្ពុជា (Cambodia Cyber University Network - CCUN) ដែលកម្ពុជាមានគ្រឹះស្ថានឧត្តមសិក្សាចំនួន ១២ ជាសមាជិក ដើម្បីចែករំលែកធនធានសិក្សា និងការបណ្តុះបណ្តាលតាមអនឡាញរួមគ្នា",
      read: "អានបន្ថែម",
      of:"ពិធីសម្ពោធ ពិធីសម្ភោធមជ្ឈបណ្ឌលបច្ចេកវិទ្យាឌីជីថល",
      time:"២៦.១១.២០២៥",
      past:"បន្ទប់ឌីជីថល ឬ មជ្ឈមណ្ឌលបច្ចេកវិទ្យាឌីជីថល (Digital Tech Center) នៅក្នុងសាកលវិទ្យាល័យជាតិ ជាស៊ីម កំចាយមារ (ស.ជ.ជ.ក.) គឺជាសមិទ្ធផលថ្មីស្រឡាងមួយដែលត្រូវបានសម្ពោធដាក់ឱ្យប្រើប្រាស់កាលពីថ្ងៃទី ២៦ ខែវិច្ឆិកា ឆ្នាំ២០២៥។ មជ្ឈមណ្ឌលនេះត្រូវបានបង្កើតឡើងក្រោមក្របខណ្ឌនៃកិច្ចសហប្រតិបត្តិការរវាង ក្រសួងប្រៃសណីយ៍និងទូរគមនាគមន៍ (ក.ប.ទ.) និងសាកលវិទ្យាល័យ ដើម្បីជំរុញការអប់រំបែបឌីជីថល។លក្ខណៈពិសេស និងមុខងារសំខាន់ៗ៖ហេដ្ឋារចនាសម្ព័ន្ធទំនើប៖ បន្ទប់នេះត្រូវបានបំពាក់ដោយឧបករណ៍បច្ចេកវិទ្យា កុំព្យូទ័រ និងការតភ្ជាប់អ៊ីនធឺណិតល្បឿនលឿន ដើម្បីផ្តល់ភាពងាយស្រួលដល់ការសិក្សា និងការស្រាវជ្រាវរបស់និស្សិត។ថ្នាលផ្ទៀងផ្ទាត់ឯកសារ Verify.gov.kh៖ វាជាមជ្ឈមណ្ឌលសម្រាប់អនុវត្តការប្រើប្រាស់ថ្នាលឌីជីថលផ្លូវការ ដើម្បីផ្ទៀងផ្ទាត់ភាពត្រឹមត្រូវនៃឯកសារនានា។ប្រព័ន្ធគ្រប់គ្រងឌីជីថល៖ ជួយដល់សាកលវិទ្យាល័យក្នុងការរៀបចំប្រព័ន្ធគ្រប់គ្រងការសិក្សា និងទិន្នន័យឱ្យកាន់តែមានប្រសិទ្ធភាព។ការអប់រំ និងបណ្តុះបណ្តាល៖ បម្រើដល់ការបណ្តុះបណ្តាលមុខជំនាញបច្ចេកវិទ្យាព័ត៌មាន (IT) និងការអភិវឌ្ឍជំនាញឌីជីថលដល់និស្សិត និងបុគ្គលិកអប់រំ។ការបង្កើតបន្ទប់ឌីជីថលនេះ ក៏ជាផ្នែកមួយនៃបណ្តាញ សាកលវិទ្យាល័យសាយប័រកម្ពុជា (Cambodia Cyber University Network - CCUN) ដែលកម្ពុជាមានគ្រឹះស្ថានឧត្តមសិក្សាចំនួន ១២ ជាសមាជិក ដើម្បីចែករំលែកធនធានសិក្សា និងការបណ្តុះបណ្តាលតាមអនឡាញរួមគ្នា",
      btt: "អានបន្ថែម",
      ai:"ការបណ្តុះបណ្តាល AI Ready ASEAN នៅថ្ងៃទី ១៥ ខែមីនា ឆ្នាំ២០២៦",
      mar:"១៥, ០៣, ២០២៦",
      aiready:"គម្រោង AI Ready ASEAN គឺជាគំនិតផ្តួចផ្តើមមួយដែលមានគោលបំណងបង្កើនសមត្ថភាពដល់អ្នកអប់រំ សិស្សានុសិស្ស និងមាតាបិតានៅទូទាំងតំបន់អាស៊ីអាគ្នេយ៍ ជាពិសេសនៅក្នុងបណ្តាប្រទេសនានាដូចជា ប្រទេសកម្ពុជា ជាដើម ដើម្បីឱ្យយល់ដឹង និងប្រើប្រាស់បញ្ញាសិប្បនិម្មិត (AI) ប្រកបដោយប្រសិទ្ធភាពក្នុងវិស័យអប់រំ និងក្នុងជីវភាពរស់នៅប្រចាំថ្ងៃ។ គម្រោងនេះផ្តោតសំខាន់លើការកសាងចំណេះដឹងផ្នែកឌីជីថល ការលើកកម្ពស់ការប្រើប្រាស់ AI ដោយការទទួលខុសត្រូវ និងការជំរុញកិច្ចសហប្រតិបត្តិការក្នុងតំបន់តាមរយៈកម្មវិធីបណ្តុះបណ្តាលនានា។", 
      oo:"អានបន្ថែម",
      ro:"ពិធីសម្ភោធមជ្ឈបណ្ឌលបច្ចេកវិទ្យាឌីជីថល",
      cal:"២៦.១១.២០២៥",
      was:"បន្ទប់ឌីជីថល ឬ មជ្ឈមណ្ឌលបច្ចេកវិទ្យាឌីជីថល (Digital Tech Center) នៅក្នុងសាកលវិទ្យាល័យជាតិ ជាស៊ីម កំចាយមារ (ស.ជ.ជ.ក.) គឺជាសមិទ្ធផលថ្មីស្រឡាងមួយដែលត្រូវបានសម្ពោធដាក់ឱ្យប្រើប្រាស់កាលពីថ្ងៃទី ២៦ ខែវិច្ឆិកា ឆ្នាំ២០២៥។ មជ្ឈមណ្ឌលនេះត្រូវបានបង្កើតឡើងក្រោមក្របខណ្ឌនៃកិច្ចសហប្រតិបត្តិការរវាង ក្រសួងប្រៃសណីយ៍និងទូរគមនាគមន៍ (ក.ប.ទ.) និងសាកលវិទ្យាល័យ ដើម្បីជំរុញការអប់រំបែបឌីជីថល។លក្ខណៈពិសេស និងមុខងារសំខាន់ៗ៖ហេដ្ឋារចនាសម្ព័ន្ធទំនើប៖ បន្ទប់នេះត្រូវបានបំពាក់ដោយឧបករណ៍បច្ចេកវិទ្យា កុំព្យូទ័រ និងការតភ្ជាប់អ៊ីនធឺណិតល្បឿនលឿន ដើម្បីផ្តល់ភាពងាយស្រួលដល់ការសិក្សា និងការស្រាវជ្រាវរបស់និស្សិត។ថ្នាលផ្ទៀងផ្ទាត់ឯកសារ Verify.gov.kh៖ វាជាមជ្ឈមណ្ឌលសម្រាប់អនុវត្តការប្រើប្រាស់ថ្នាលឌីជីថលផ្លូវការ ដើម្បីផ្ទៀងផ្ទាត់ភាពត្រឹមត្រូវនៃឯកសារនានា។ប្រព័ន្ធគ្រប់គ្រងឌីជីថល៖ ជួយដល់សាកលវិទ្យាល័យក្នុងការរៀបចំប្រព័ន្ធគ្រប់គ្រងការសិក្សា និងទិន្នន័យឱ្យកាន់តែមានប្រសិទ្ធភាព។ការអប់រំ និងបណ្តុះបណ្តាល៖ បម្រើដល់ការបណ្តុះបណ្តាលមុខជំនាញបច្ចេកវិទ្យាព័ត៌មាន (IT) និងការអភិវឌ្ឍជំនាញឌីជីថលដល់និស្សិត និងបុគ្គលិកអប់រំ។ការបង្កើតបន្ទប់ឌីជីថលនេះ ក៏ជាផ្នែកមួយនៃបណ្តាញ សាកលវិទ្យាល័យសាយប័រកម្ពុជា (Cambodia Cyber University Network - CCUN) ដែលកម្ពុជាមានគ្រឹះស្ថានឧត្តមសិក្សាចំនួន ១២ ជាសមាជិក ដើម្បីចែករំលែកធនធានសិក្សា និងការបណ្តុះបណ្តាលតាមអនឡាញរួមគ្នា",
      mr:"អានបន្ថែម",
      com: "មជ្ឈមណ្ឌលអប់រំ និងបណ្ដុះបណ្ដាល ជា ស៊ីម កំចាយមារ",
      kam:"ការសម្ពោធសាលាមត្តេយ្យសិក្សា ហ៊ុន សែន កំចាយមារ កាលពីថ្ងៃទី១១ ខែកក្កដា ឆ្នាំ២០២៤ គឺស្ថិតនៅក្នុងបរិវេណ សាកលវិទ្យាល័យជាតិ ជាស៊ីម កំចាយមារ (ភូមិថ្នល់កែង ឃុំស្មោងខាងជើង) ផ្ទាល់តែម្តង។ការដាក់បញ្ចូលសាលាមត្តេយ្យនៅក្នុងបរិវេណសាកលវិទ្យាល័យនេះ គឺជាយុទ្ធសាស្ត្រមួយដែលគេហៅថា 'មជ្ឈមណ្ឌលអប់រំ និងបណ្តុះបណ្តាល ជា ស៊ីម កំចាយមារ' ដែលមានចំណុចពិសេសដូចជា៖ការអប់រំពេញលេញមួយកន្លែង៖ វាបង្កើតឱ្យមានប្រព័ន្ធអប់រំតាំងពីថ្នាក់មត្តេយ្យ បឋមសិក្សា វិទ្យាល័យ រហូតដល់ថ្នាក់សាកលវិទ្យាល័យ នៅក្នុងតំបន់តែមួយ។ភាពងាយស្រួលដល់បុគ្គលិក និងសហគមន៍៖ ផ្តល់ភាពងាយស្រួលដល់មន្ត្រីរាជការ សាស្ត្រាចារ្យ និងបុគ្គលិកដែលបម្រើការងារក្នុងសាកលវិទ្យាល័យ អាចបញ្ជូនកូនតូចៗឱ្យមករៀននៅក្បែរកន្លែងធ្វើការ និងសម្រាប់ប្រជាពលរដ្ឋក្នុងឃុំស្មោងខាងជើងផងដែរ។ការបណ្តុះបណ្តាលធនធានមនុស្ស៖ សាលាមត្តេយ្យនេះគឺជាគ្រឹះដំបូងគេបង្អស់ ក្នុងគោលដៅប្រែក្លាយតំបន់កំចាយមារ ដែលពីមុនជាសមរភូមិ ឱ្យទៅជា 'តំបន់អប់រំ និងបណ្តុះបណ្តាលធនធានមនុស្ស' ដ៏សំខាន់សម្រាប់ខេត្តព្រៃវែង និងប្រទេសជាតិ។ក្នុងពិធីសម្ពោធនោះ សម្តេចក្រឡាហោម ស ខេង ក៏បានសង្កត់ធ្ងន់ថា ការកសាងសាលាមត្តេយ្យនេះ គឺជាការបំពេញបន្ថែមនូវរចនាសម្ព័ន្ធអប់រំឱ្យកាន់តែសម្បូរបែបនៅក្នុងសាកលវិទ្យាល័យជាតិ ជា ស៊ីម កំចាយមារ",
      re:"អានបន្ថែម",
      tech:"មជ្ឈមណ្ឌលអប់រំ និងបណ្ដុះបណ្ដាល ជា ស៊ីម កំចាយមារ",
      kal:"១១.០៧.២០២៤",
      edu:"ការសម្ពោធសាលាមត្តេយ្យសិក្សា ហ៊ុន សែន កំចាយមារ កាលពីថ្ងៃទី១១ ខែកក្កដា ឆ្នាំ២០២៤ គឺស្ថិតនៅក្នុងបរិវេណ សាកលវិទ្យាល័យជាតិ ជាស៊ីម កំចាយមារ (ភូមិថ្នល់កែង ឃុំស្មោងខាងជើង) ផ្ទាល់តែម្តង។ការដាក់បញ្ចូលសាលាមត្តេយ្យនៅក្នុងបរិវេណសាកលវិទ្យាល័យនេះ គឺជាយុទ្ធសាស្ត្រមួយដែលគេហៅថា 'មជ្ឈមណ្ឌលអប់រំ និងបណ្តុះបណ្តាល ជា ស៊ីម កំចាយមារ' ដែលមានចំណុចពិសេសដូចជា៖ការអប់រំពេញលេញមួយកន្លែង៖ វាបង្កើតឱ្យមានប្រព័ន្ធអប់រំតាំងពីថ្នាក់មត្តេយ្យ បឋមសិក្សា វិទ្យាល័យ រហូតដល់ថ្នាក់សាកលវិទ្យាល័យ នៅក្នុងតំបន់តែមួយ។ភាពងាយស្រួលដល់បុគ្គលិក និងសហគមន៍៖ ផ្តល់ភាពងាយស្រួលដល់មន្ត្រីរាជការ សាស្ត្រាចារ្យ និងបុគ្គលិកដែលបម្រើការងារក្នុងសាកលវិទ្យាល័យ អាចបញ្ជូនកូនតូចៗឱ្យមករៀននៅក្បែរកន្លែងធ្វើការ និងសម្រាប់ប្រជាពលរដ្ឋក្នុងឃុំស្មោងខាងជើងផងដែរ។ការបណ្តុះបណ្តាលធនធានមនុស្ស៖ សាលាមត្តេយ្យនេះគឺជាគ្រឹះដំបូងគេបង្អស់ ក្នុងគោលដៅប្រែក្លាយតំបន់កំចាយមារ ដែលពីមុនជាសមរភូមិ ឱ្យទៅជា 'តំបន់អប់រំ និងបណ្តុះបណ្តាលធនធានមនុស្ស' ដ៏សំខាន់សម្រាប់ខេត្តព្រៃវែង និងប្រទេសជាតិ។ក្នុងពិធីសម្ពោធនោះ សម្តេចក្រឡាហោម ស ខេង ក៏បានសង្កត់ធ្ងន់ថា ការកសាងសាលាមត្តេយ្យនេះ គឺជាការបំពេញបន្ថែមនូវរចនាសម្ព័ន្ធអប់រំឱ្យកាន់តែសម្បូរបែបនៅក្នុងសាកលវិទ្យាល័យជាតិ ជា ស៊ីម កំចាយមារ",
      ko:"អានបន្ថែម",
      light:"ពិធីសម្ភោធមជ្ឈបណ្ឌលបច្ចេកវិទ្យាឌីជីថល",
      pel:"២៦.១១.២០២៥",
      text:"បន្ទប់ឌីជីថល ឬ មជ្ឈមណ្ឌលបច្ចេកវិទ្យាឌីជីថល (Digital Tech Center) នៅក្នុងសាកលវិទ្យាល័យជាតិ ជាស៊ីម កំចាយមារ (ស.ជ.ជ.ក.) គឺជាសមិទ្ធផលថ្មីស្រឡាងមួយដែលត្រូវបានសម្ពោធដាក់ឱ្យប្រើប្រាស់កាលពីថ្ងៃទី ២៦ ខែវិច្ឆិកា ឆ្នាំ២០២៥។ មជ្ឈមណ្ឌលនេះត្រូវបានបង្កើតឡើងក្រោមក្របខណ្ឌនៃកិច្ចសហប្រតិបត្តិការរវាង ក្រសួងប្រៃសណីយ៍និងទូរគមនាគមន៍ (ក.ប.ទ.) និងសាកលវិទ្យាល័យ ដើម្បីជំរុញការអប់រំបែបឌីជីថល។លក្ខណៈពិសេស និងមុខងារសំខាន់ៗ៖ហេដ្ឋារចនាសម្ព័ន្ធទំនើប៖ បន្ទប់នេះត្រូវបានបំពាក់ដោយឧបករណ៍បច្ចេកវិទ្យា កុំព្យូទ័រ និងការតភ្ជាប់អ៊ីនធឺណិតល្បឿនលឿន ដើម្បីផ្តល់ភាពងាយស្រួលដល់ការសិក្សា និងការស្រាវជ្រាវរបស់និស្សិត។ថ្នាលផ្ទៀងផ្ទាត់ឯកសារ Verify.gov.kh៖ វាជាមជ្ឈមណ្ឌលសម្រាប់អនុវត្តការប្រើប្រាស់ថ្នាលឌីជីថលផ្លូវការ ដើម្បីផ្ទៀងផ្ទាត់ភាពត្រឹមត្រូវនៃឯកសារនានា។ប្រព័ន្ធគ្រប់គ្រងឌីជីថល៖ ជួយដល់សាកលវិទ្យាល័យក្នុងការរៀបចំប្រព័ន្ធគ្រប់គ្រងការសិក្សា និងទិន្នន័យឱ្យកាន់តែមានប្រសិទ្ធភាព។ការអប់រំ និងបណ្តុះបណ្តាល៖ បម្រើដល់ការបណ្តុះបណ្តាលមុខជំនាញបច្ចេកវិទ្យាព័ត៌មាន (IT) និងការអភិវឌ្ឍជំនាញឌីជីថលដល់និស្សិត និងបុគ្គលិកអប់រំ។ការបង្កើតបន្ទប់ឌីជីថលនេះ ក៏ជាផ្នែកមួយនៃបណ្តាញ សាកលវិទ្យាល័យសាយប័រកម្ពុជា (Cambodia Cyber University Network - CCUN) ដែលកម្ពុជាមានគ្រឹះស្ថានឧត្តមសិក្សាចំនួន ១២ ជាសមាជិក ដើម្បីចែករំលែកធនធានសិក្សា និងការបណ្តុះបណ្តាលតាមអនឡាញរួមគ្នា",
      pade:"អានបន្ថែម",
      why:"ហេតុអ្វីបានជាគួរជ្រើសរើសស្ទូឌីយោរបស់យើង?",
      create:"ការរចនាប្រកបដោយការច្នៃប្រឌិត • ការអភិវឌ្ឍគេហទំព័រ • ដំណោះស្រាយឌីជីថល",
      sing:"ការរចនា",
      poster:"ការរចនាផ្ទាំងរូបភាពប្រកបដោយការច្នៃប្រឌិត",
      high:"ផ្ទាំងរូបភាពទំនើបមានគុណភាពខ្ពស់ សម្រាប់ការកសាងម៉ាកយីហោ និងការផ្សព្វផ្សាយពាណិជ្ជកម្ម",
      tall:"ឌីជីថល",
      art:"ស្នាដៃសិល្បៈឌីជីថល",
      un:"រូបភាពប្លែកៗមិនចម្លងគេ សម្រាប់បណ្តាញសង្គម និងការកសាងម៉ាកយីហោ",
      mo:"ការរចនា UI ទំនើប",
      clean:"ចំណុចប្រទាក់ស្អាតៗ និងទំនើប សម្រាប់គេហទំព័រ និងកម្មវិធីទូរស័ព្ទ",
      web:"គេហទំព័រ",
      website:"ការអភិវឌ្ឍគេហទំព័រ",
      responsive:"គេហទំព័រដែលរៀបចំទម្រង់ស្វ័យប្រវត្ត និងដំណើរការលើគ្រប់ឧបករណ៍",
      app:"កម្មវិធី",
      application:"ការអភិវឌ្ឍកម្មវិធី",
      interactive:"កម្មវិធីវេបអន្តរកម្ម ដែលមានដំណើរការរលូនឥតទាក់។",
      speed:"ល្បឿន",
      op:"សមត្ថភាពដំណើរការខ្ពស់បំផុត",
      fast:"គេហទំព័រដំណើរការលឿន ងាយស្រួលដល់ប្រព័ន្ធ SEO និងមានសមត្ថភាពខ្ពស់បំផុត",
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
    set("In", t.in); 
    set("Stay", t.stay);
    set("Fea", t.fea);
    set("How", t.how);
    set("Design", t.design);
    set("Projects", t.projects);
    set("Inauguration", t.inauguration);
    set("num1", t.num1);
    set("Room", t.room);
    set("More", t.more);
    set("Ceremony", t.ceremony);
    set("num2", t.num2);
    set("Digi", t.digi);
    set("Read", t.read);
    set("Of", t.of);
    set("Time", t.time);
    set("Past", t.past);
    set("Btt", t.btt);
    set("Ai", t.ai);
    set("Mar", t.mar);
    set("AiReady", t.aiready);
    set("Oo", t.oo);
    set("Ro", t.ro);
    set("Call", t.cal);
    set("Was", t.was);
    set("Mr", t.mr);
    set("Com", t.com);
    set("Kam", t.kam);
    set("Re", t.re);
    set("Tech", t.tech);
    set("Kal", t.kal);
    set("Edu", t.edu);
    set("Ko", t.ko);
    set("Light", t.light);
    set("Pel", t.pel);
    set("Text", t.text);
    set("Pade", t.pade);
    set("Why", t.why);
    set("Create", t.create);
    set("Sing", t.sing);
    set("Poster", t.poster);
    set("High", t.high);
    set("Tall", t.tall);
    set("Art", t.art);
    set("Un", t.un);
    set("Mo", t.mo);
    set("Clean", t.clean);
    set("Web", t.web);
    set("Website", t.website);
    set("Responsive", t.responsive);
    set("App", t.app);
    set("Application", t.application);
    set("Interactive", t.interactive);
    set("Speed", t.speed);
    set("Op", t.op);
    set("Fast", t.fast);
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
        "Fea",
        "How",
        "Design",
        "Projects",
        "Inauguration",
        "num1",
        "Room",
        "Ceremony",
        "num2",
        "Digi",
        "Read",
        "Of",
        "Time",
        "Past",
        "Btt",  
        "Ai",    
        "Mar",  
        "AiReady",
        "Oo",
        "Ro",
        "Call",
        "Was",
        "Mr",
        "Com",
        "Kam",
        "Re",
        "Tech",
        "Kal",
        "Edu",
        "Ko",
        "Light",
        "Pel",
        "Text",
        "Pade",
        "Why",
        "Create",
        "Sing",
        "Poster",
        "High",
        "Tall",
        "Art",
        "Un",
        "Mo",
        "Clean",
        "Web",
        "Website",
        "Responsive",
        "App",
        "Application",
        "Interactive",
        "Speed",
        "Op",
        "Fast",
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