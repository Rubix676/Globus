(() => {
  const translationFixes = {
    uz: {
      "courses.subtitle": "Asosiy yo‘nalishlar: ingliz tili, IELTS/CEFR, rus tili, matematika, nemis, koreys va ona tili.",
      "teachers.subtitle": "Har bir o‘qituvchi haqida qisqa ma’lumot va o‘quvchilarga motivatsion so‘zlar.",
      "reviews.text": "Tayyorlov rejasi aniq va tushunarli bo‘lgani uchun natijaga erishish osonroq bo‘ldi.",
      "footer.text": "GLOBUS — zamonaviy tillar markazi. Ingliz, IELTS/CEFR, rus tili, matematika, nemis va koreys tillarini ishonchli o‘rganing.",
      "modal.teachersButton": "O‘qituvchilarni ko‘rish",
      "teachers.teacher1Text": "Har bir dars sizni natijaga bir qadam yaqinlashtiradi.",
      "teachers.teacher2Text": "Til o‘rganishda eng muhimi — doimiylik va ishonch.",
      "teachers.teacher3Text": "Xatolardan qo‘rqmang — ular o‘sishning bir qismi.",
      "teachers.teacher4Text": "Rus tili bo‘yicha aniq va tushunarli darslar.",
      "teachers.teacher5Text": "Matematikani sodda usulda tushunish mumkin.",
      "teachers.teacher6Text": "Nemis tilida mustahkam baza eng muhim qadamdir.",
      "teachers.teacher7Text": "Koreys tilini tizimli va amaliy o‘rganamiz.",
      "teachers.teacher8Text": "Ona tili bo‘yicha savodxonlik va test ko‘nikmalarini rivojlantiramiz."
    },
    ru: {
      "courses.subtitle": "Основные направления: английский, IELTS/CEFR, русский, математика, немецкий, корейский и родной язык.",
      "teachers.subtitle": "Короткая информация о каждом преподавателе и напутственные слова для учеников.",
      "reviews.text": "Чёткий план подготовки помог мне быстрее увидеть результат.",
      "footer.text": "GLOBUS — современный языковой центр. Изучайте английский, IELTS/CEFR, русский, математику, немецкий и корейский уверенно.",
      "modal.teachersButton": "Посмотреть преподавателей",
      "teachers.teacher1Text": "Каждый урок приближает вас к результату на один шаг.",
      "teachers.teacher2Text": "Самое важное в изучении языка — регулярность и уверенность.",
      "teachers.teacher3Text": "Не бойтесь ошибок — они часть роста.",
      "teachers.teacher4Text": "Русский язык можно изучать понятно и системно.",
      "teachers.teacher5Text": "Математику можно объяснить простым языком.",
      "teachers.teacher6Text": "В немецком языке важна крепкая база.",
      "teachers.teacher7Text": "Корейский язык изучаем системно и практически.",
      "teachers.teacher8Text": "Развиваем грамотность и навыки работы с тестами."
    },
    en: {
      "courses.subtitle": "Main directions: English, IELTS/CEFR, Russian, mathematics, German, Korean and native language.",
      "teachers.subtitle": "Short information about every teacher and encouraging words for students.",
      "reviews.text": "A clear preparation plan helped me see progress faster.",
      "footer.text": "GLOBUS is a modern language centre. Learn English, IELTS/CEFR, Russian, mathematics, German and Korean with confidence.",
      "modal.teachersButton": "View teachers",
      "teachers.teacher1Text": "Every lesson brings you one step closer to your result.",
      "teachers.teacher2Text": "The most important things in language learning are consistency and confidence.",
      "teachers.teacher3Text": "Do not be afraid of mistakes — they are part of growth.",
      "teachers.teacher4Text": "Russian lessons are clear, structured and practical.",
      "teachers.teacher5Text": "Mathematics can be explained in a simple way.",
      "teachers.teacher6Text": "A strong foundation is the key to learning German.",
      "teachers.teacher7Text": "We learn Korean step by step and through practice.",
      "teachers.teacher8Text": "We develop literacy and test-taking skills."
    }
  };

  const teacherData = [
    { img: "assets/teacher2.png", alt: "Yusupov Numonjon", title: "Yusupov Numonjon", fallback: "1", textKey: "teachers.teacher1Text" },
    { img: "assets/teacher1.png", alt: "Teacher 2", title: "O‘qituvchi 2", fallback: "2", textKey: "teachers.teacher2Text" },
    { img: "assets/teacher3.png", alt: "Teacher 3", title: "O‘qituvchi 3", fallback: "3", textKey: "teachers.teacher3Text" },
    { img: "assets/teacher8.png", alt: "Avazbekova Sarvinoz", title: "Avazbekova Sarvinoz", fallback: "4", textKey: "teachers.teacher4Text" },
    { img: "assets/teacher4.png", alt: "Teacher 5", title: "O‘qituvchi 5", fallback: "5", textKey: "teachers.teacher5Text" },
    { img: "assets/teacher5.png", alt: "Teacher 6", title: "O‘qituvchi 6", fallback: "6", textKey: "teachers.teacher6Text" },
    { img: "assets/teacher6.png", alt: "Teacher 7", title: "O‘qituvchi 7", fallback: "7", textKey: "teachers.teacher7Text" },
    { img: "assets/teacher7.png", alt: "Teacher 8", title: "O‘qituvchi 8", fallback: "8", textKey: "teachers.teacher8Text" }
  ];

  const courseTeacherMap = {
    english: [
      { value: "teacher1", label: "Yusupov Numonjon" },
      { value: "teacher2", label: "O‘qituvchi 2" },
      { value: "teacher3", label: "O‘qituvchi 3" }
    ],
    russian: [{ value: "teacher4", label: "Avazbekova Sarvinoz" }],
    math: [{ value: "teacher5", label: "O‘qituvchi 5" }],
    german: [{ value: "teacher6", label: "O‘qituvchi 6" }],
    korean: [{ value: "teacher7", label: "O‘qituvchi 7" }],
    native: [{ value: "teacher8", label: "O‘qituvchi 8" }]
  };

  const scheduleMap = {
    teacher1: ["пн, ср, пт 14:00 - 15:30 — CEFR", "вт, чт, сб 14:00 - 15:30 — IELTS", "пн, ср, пт 15:30 - 17:00 — CEFR", "вт, чт, сб 17:30 - 18:30 — IELTS"],
    teacher2: ["14:00 - 15:30"],
    teacher3: ["14:00 - 15:30"],
    teacher4: ["14:00 - 15:30"],
    teacher5: ["14:00 - 15:30"],
    teacher6: ["14:00 - 15:30"],
    teacher7: ["14:00 - 15:30"],
    teacher8: ["14:00 - 15:30"]
  };

  const visuals = {
    math: `<svg viewBox="0 0 280 240" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Mathematics board"><rect width="280" height="240" fill="#0c614d"/><g fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"><path d="M24 55 L108 18 L108 55 Z"/><path d="M55 171 L104 148 L153 173 L153 221 L104 236 L55 212 Z M104 148 V192 M55 171 L104 192 L153 173 M104 192 V236"/><path d="M210 28 v52 h48"/><path d="M224 70 v-20 M238 70 v-33 M252 70 v-48"/></g><g fill="#fff" font-family="Trebuchet MS, Arial, sans-serif" font-weight="700"><text x="118" y="54" font-size="28">π=3.14</text><text x="74" y="120" font-size="52">ABC</text><text x="205" y="122" font-size="42">?</text><text x="122" y="182" font-size="40">1+1=2</text><text x="18" y="214" font-size="26">H₂O</text><text x="100" y="226" font-size="23">(a+b)²</text><text x="187" y="228" font-size="24">∫x dx</text></g></svg>`,
    korean: `<svg viewBox="0 0 300 200" preserveAspectRatio="xMidYMid meet" role="img" aria-label="South Korea flag"><rect width="300" height="200" fill="#fff"/><g transform="translate(150 100) rotate(33.69)"><path fill="#cd2e3a" d="M0-38a38 38 0 0 1 0 76a19 19 0 0 1 0-38a19 19 0 0 0 0-38"/><path fill="#0047a0" d="M0 38a38 38 0 0 1 0-76a19 19 0 0 1 0 38a19 19 0 0 0 0 38"/></g><g fill="#000"><g transform="translate(63 58) rotate(-56.31)"><rect x="-24" y="-16" width="48" height="8"/><rect x="-24" y="-4" width="48" height="8"/><rect x="-24" y="8" width="48" height="8"/></g><g transform="translate(236 58) rotate(56.31)"><rect x="-24" y="-16" width="18" height="8"/><rect x="6" y="-16" width="18" height="8"/><rect x="-24" y="-4" width="48" height="8"/><rect x="-24" y="8" width="18" height="8"/><rect x="6" y="8" width="18" height="8"/></g><g transform="translate(63 142) rotate(56.31)"><rect x="-24" y="-16" width="48" height="8"/><rect x="-24" y="-4" width="18" height="8"/><rect x="6" y="-4" width="18" height="8"/><rect x="-24" y="8" width="48" height="8"/></g><g transform="translate(236 142) rotate(-56.31)"><rect x="-24" y="-16" width="18" height="8"/><rect x="6" y="-16" width="18" height="8"/><rect x="-24" y="-4" width="18" height="8"/><rect x="6" y="-4" width="18" height="8"/><rect x="-24" y="8" width="18" height="8"/><rect x="6" y="8" width="18" height="8"/></g></g></svg>`,
    native: `<svg viewBox="0 0 1200 600" preserveAspectRatio="none" role="img" aria-label="Uzbekistan flag"><rect width="1200" height="600" fill="#1eb53a"/><rect width="1200" height="200" fill="#1eb6e7"/><rect y="220" width="1200" height="160" fill="#fff"/><rect y="200" width="1200" height="20" fill="#ce1126"/><rect y="380" width="1200" height="20" fill="#ce1126"/><circle cx="145" cy="100" r="58" fill="#fff"/><circle cx="170" cy="100" r="58" fill="#1eb6e7"/><g fill="#fff"><circle cx="270" cy="55" r="10"/><circle cx="320" cy="55" r="10"/><circle cx="370" cy="55" r="10"/><circle cx="420" cy="55" r="10"/><circle cx="245" cy="95" r="10"/><circle cx="295" cy="95" r="10"/><circle cx="345" cy="95" r="10"/><circle cx="395" cy="95" r="10"/><circle cx="220" cy="135" r="10"/><circle cx="270" cy="135" r="10"/><circle cx="320" cy="135" r="10"/><circle cx="370" cy="135" r="10"/></g></svg>`
  };

  const lang = () => localStorage.getItem("siteLanguage") || document.getElementById("languageSwitcher")?.value || "uz";

  function applyTranslationFixes(language = lang()) {
    const dictionary = translationFixes[language] || translationFixes.uz;

    document.querySelectorAll("[data-i18n], [data-course-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n") || element.getAttribute("data-course-i18n");
      if (dictionary[key]) element.textContent = dictionary[key];
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      const key = element.getAttribute("data-i18n-placeholder");
      if (dictionary[key]) element.setAttribute("placeholder", dictionary[key]);
    });
  }

  function setFlag(courseName, svg) {
    const card = document.querySelector(`[data-course="${courseName}"]`);
    if (!card) return;

    let flag = card.querySelector(".course-card__flag");
    if (!flag) {
      flag = document.createElement("span");
      flag.className = "course-card__flag";
      card.prepend(flag);
    }
    flag.innerHTML = svg;
  }

  function fixVisuals() {
    setFlag("math", visuals.math);
    setFlag("korean", visuals.korean);
    setFlag("native", visuals.native);
  }

  function normalizeTeachers() {
    document.querySelectorAll("#teachersTrack .teacher-card").forEach((card, index) => {
      const data = teacherData[index];
      if (!data) return;

      const img = card.querySelector(".teacher-card__image");
      const fallback = card.querySelector(".teacher-card__fallback");
      const title = card.querySelector("h3");
      const text = card.querySelector("p");

      if (img) {
        img.src = data.img;
        img.alt = data.alt;
      }
      if (fallback) fallback.textContent = data.fallback;
      if (title) {
        title.removeAttribute("data-i18n");
        title.textContent = data.title;
      }
      if (text) text.setAttribute("data-i18n", data.textKey);
    });
  }

  function renderSchedule() {
    const select = document.getElementById("courseTeacherSelect");
    const box = document.getElementById("courseScheduleBox");
    if (!select || !box) return;

    const title = { uz: "Dars vaqtlari", ru: "Время занятий", en: "Class times" }[lang()] || "Dars vaqtlari";
    const schedule = scheduleMap[select.value] || ["14:00 - 15:30"];
    box.innerHTML = `<h4>${title}</h4><ul>${schedule.map((item) => `<li>${item}</li>`).join("")}</ul>`;
  }

  function setCourseTeachers(courseName) {
    const select = document.getElementById("courseTeacherSelect");
    const teachers = courseTeacherMap[courseName];
    if (!select || !teachers) return;

    select.innerHTML = "";
    teachers.forEach((teacher) => {
      const option = document.createElement("option");
      option.value = teacher.value;
      option.textContent = teacher.label;
      select.appendChild(option);
    });
    renderSchedule();
  }

  function bindNavigation() {
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener("click", (event) => {
        const target = document.querySelector(link.getAttribute("href"));
        if (!target) return;
        event.preventDefault();
        document.querySelector(".course-modal--open")?.classList.remove("course-modal--open");
        document.body.style.overflow = "";
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }

  function bindCourseModals() {
    document.querySelectorAll("[data-course]").forEach((card) => {
      card.addEventListener("click", () => setTimeout(() => setCourseTeachers(card.dataset.course), 0));
    });
    document.getElementById("courseTeacherSelect")?.addEventListener("change", renderSchedule);
  }

  function bindLanguageSwitch() {
    document.getElementById("languageSwitcher")?.addEventListener("change", (event) => {
      setTimeout(() => {
        applyTranslationFixes(event.target.value);
        renderSchedule();
      }, 0);
    });
  }

  function init() {
    normalizeTeachers();
    fixVisuals();
    applyTranslationFixes();
    bindNavigation();
    bindCourseModals();
    bindLanguageSwitch();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
