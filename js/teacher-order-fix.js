(() => {
  const TEACHER_ASSET_PATH = "assets/teachers";

  const teacherCards = [
    {
      img: `${TEACHER_ASSET_PATH}/teacher2.png`,
      alt: "Yusupov Numonjon",
      title: "Yusupov Numonjon",
      fallback: "1",
      textKey: "teachers.teacher1Text"
    },
    {
      img: `${TEACHER_ASSET_PATH}/teacher1.png`,
      alt: "Teacher 2",
      title: "O‘qituvchi 2",
      fallback: "2",
      textKey: "teachers.teacher2Text"
    },
    {
      img: `${TEACHER_ASSET_PATH}/teacher3.png`,
      alt: "Teacher 3",
      title: "O‘qituvchi 3",
      fallback: "3",
      textKey: "teachers.teacher3Text"
    },
    {
      img: `${TEACHER_ASSET_PATH}/teacher8.png`,
      alt: "Avazbekova Sarvinoz",
      title: "Avazbekova Sarvinoz",
      fallback: "4",
      textKey: "teachers.teacher4Text"
    },
    {
      img: `${TEACHER_ASSET_PATH}/teacher4.png`,
      alt: "Teacher 5",
      title: "O‘qituvchi 5",
      fallback: "5",
      textKey: "teachers.teacher5Text"
    },
    {
      img: `${TEACHER_ASSET_PATH}/teacher5.png`,
      alt: "Teacher 6",
      title: "O‘qituvchi 6",
      fallback: "6",
      textKey: "teachers.teacher6Text"
    },
    {
      img: `${TEACHER_ASSET_PATH}/teacher6.png`,
      alt: "Teacher 7",
      title: "O‘qituvchi 7",
      fallback: "7",
      textKey: "teachers.teacher7Text"
    },
    {
      img: `${TEACHER_ASSET_PATH}/teacher7.png`,
      alt: "Teacher 8",
      title: "O‘qituvchi 8",
      fallback: "8",
      textKey: "teachers.teacher8Text"
    }
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
    teacher1: [
      "пн, ср, пт 14:00 - 15:30 — CEFR",
      "вт, чт, сб 14:00 - 15:30 — IELTS",
      "пн, ср, пт 15:30 - 17:00 — CEFR",
      "вт, чт, сб 17:30 - 18:30 — IELTS"
    ],
    teacher2: ["14:00 - 15:30"],
    teacher3: ["14:00 - 15:30"],
    teacher4: ["14:00 - 15:30"],
    teacher5: ["14:00 - 15:30"],
    teacher6: ["14:00 - 15:30"],
    teacher7: ["14:00 - 15:30"],
    teacher8: ["14:00 - 15:30"]
  };

  const translationPatch = {
    uz: {
      "courses.subtitle": "Asosiy yo‘nalishlar: ingliz tili, IELTS/CEFR, rus tili, matematika, nemis, koreys va ona tili.",
      "courses.english": "Ingliz tili IELTS/CEFR",
      "courses.ielts": "Matematika SAT",
      "teachers.subtitle": "Har bir o‘qituvchi haqida qisqa ma’lumot va o‘quvchilarga motivatsion so‘zlar.",
      "teachers.teacher1Text": "Har bir dars sizni natijaga bir qadam yaqinlashtiradi.",
      "teachers.teacher2Text": "Til o‘rganishda eng muhimi — doimiylik va ishonch.",
      "teachers.teacher3Text": "Xatolardan qo‘rqmang — ular o‘sishning bir qismi.",
      "teachers.teacher4Text": "Rus tili bo‘yicha aniq va tushunarli darslar.",
      "teachers.teacher5Text": "Matematikani sodda usulda tushunish mumkin.",
      "teachers.teacher6Text": "Nemis tilida mustahkam baza eng muhim qadamdir.",
      "teachers.teacher7Text": "Koreys tilini tizimli va amaliy o‘rganamiz.",
      "teachers.teacher8Text": "Ona tili bo‘yicha savodxonlik va test ko‘nikmalarini rivojlantiramiz.",
      "reviews.text": "Tayyorlov rejasi aniq va tushunarli bo‘lgani uchun natijaga erishish osonroq bo‘ldi.",
      "footer.text": "GLOBUS — zamonaviy tillar markazi. Ingliz, IELTS/CEFR, rus tili, matematika, nemis va koreys tillarini ishonchli o‘rganing.",
      "modal.teachersButton": "O‘qituvchilarni ko‘rish"
    },
    ru: {
      "courses.subtitle": "Основные направления: английский, IELTS/CEFR, русский, математика, немецкий, корейский и родной язык.",
      "courses.english": "Английский IELTS/CEFR",
      "courses.ielts": "Математика SAT",
      "teachers.teacher1Text": "Каждый урок приближает вас к результату на один шаг.",
      "teachers.teacher2Text": "Самое важное в изучении языка — регулярность и уверенность.",
      "teachers.teacher3Text": "Не бойтесь ошибок — они часть роста.",
      "teachers.teacher4Text": "Русский язык можно изучать понятно и системно.",
      "teachers.teacher5Text": "Математику можно объяснить простым языком.",
      "teachers.teacher6Text": "В немецком языке важна крепкая база.",
      "teachers.teacher7Text": "Корейский язык изучаем системно и практически.",
      "teachers.teacher8Text": "Развиваем грамотность и навыки работы с тестами.",
      "reviews.text": "Чёткий план подготовки помог мне быстрее увидеть результат.",
      "footer.text": "GLOBUS — современный языковой центр. Изучайте английский, IELTS/CEFR, русский, математику, немецкий и корейский уверенно.",
      "modal.teachersButton": "Посмотреть преподавателей"
    },
    en: {
      "courses.subtitle": "Main directions: English, IELTS/CEFR, Russian, mathematics, German, Korean and native language.",
      "courses.english": "English IELTS/CEFR",
      "courses.ielts": "Mathematics SAT",
      "teachers.teacher1Text": "Every lesson brings you one step closer to your result.",
      "teachers.teacher2Text": "The most important things in language learning are consistency and confidence.",
      "teachers.teacher3Text": "Do not be afraid of mistakes — they are part of growth.",
      "teachers.teacher4Text": "Russian lessons are clear, structured and practical.",
      "teachers.teacher5Text": "Mathematics can be explained in a simple way.",
      "teachers.teacher6Text": "A strong foundation is the key to learning German.",
      "teachers.teacher7Text": "We learn Korean step by step and through practice.",
      "teachers.teacher8Text": "We develop literacy and test-taking skills.",
      "reviews.text": "A clear preparation plan helped me see progress faster.",
      "footer.text": "GLOBUS is a modern language centre. Learn English, IELTS/CEFR, Russian, mathematics, German and Korean with confidence.",
      "modal.teachersButton": "View teachers"
    }
  };

  function currentLanguage() {
    return localStorage.getItem("siteLanguage") || document.getElementById("languageSwitcher")?.value || "uz";
  }

  function injectUtilityCss() {
    if (document.getElementById("globus-utility-fixes-style")) return;

    const style = document.createElement("style");
    style.id = "globus-utility-fixes-style";
    style.textContent = `
      html { scroll-behavior: smooth; }
      [id] { scroll-margin-top: 92px; }
      .course-card h3, .course-card p { pointer-events: none; }
      @media (max-width: 760px) {
        [id] { scroll-margin-top: 74px; }
        .course-slider__viewport { touch-action: pan-x pan-y; }
      }
    `;
    document.head.appendChild(style);
  }

  function applyTranslationPatch(language = currentLanguage()) {
    const dictionary = translationPatch[language] || translationPatch.uz;

    document.querySelectorAll("[data-i18n], [data-course-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n") || element.getAttribute("data-course-i18n");
      if (dictionary[key]) element.textContent = dictionary[key];
    });
  }

  function renderSchedule(select = document.getElementById("courseTeacherSelect")) {
    const box = document.getElementById("courseScheduleBox");
    if (!box || !select) return;

    const schedule = scheduleMap[select.value] || ["14:00 - 15:30"];
    const title = box.querySelector("h4")?.textContent || "Dars vaqtlari";

    box.innerHTML = `<h4>${title}</h4><ul>${schedule.map((item) => `<li>${item}</li>`).join("")}</ul>`;
  }

  function updateCourseSelect(courseName) {
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

    renderSchedule(select);
  }

  function normalizeTeacherCards() {
    const track = document.getElementById("teachersTrack");
    if (!track) return;

    track.querySelectorAll(".teacher-card").forEach((card, index) => {
      const data = teacherCards[index];
      if (!data) return;

      const image = card.querySelector(".teacher-card__image");
      const fallback = card.querySelector(".teacher-card__fallback");
      const title = card.querySelector("h3");
      const text = card.querySelector("p");

      if (image) {
        image.src = data.img;
        image.alt = data.alt;
      }

      if (fallback) fallback.textContent = data.fallback;

      if (title) {
        title.removeAttribute("data-i18n");
        title.textContent = data.title;
      }

      if (text) text.setAttribute("data-i18n", data.textKey);
    });
  }

  function bindCourseCards() {
    document.querySelectorAll("[data-course]").forEach((card) => {
      card.addEventListener("click", () => {
        window.setTimeout(() => updateCourseSelect(card.dataset.course), 0);
      });
    });

    document.getElementById("courseTeacherSelect")?.addEventListener("change", (event) => {
      renderSchedule(event.target);
    });
  }

  function bindLanguagePatch() {
    document.getElementById("languageSwitcher")?.addEventListener("change", (event) => {
      window.setTimeout(() => {
        applyTranslationPatch(event.target.value);
        renderSchedule();
      }, 0);
    });
  }

  function bindAnchorNavigation() {
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener("click", (event) => {
        const target = document.querySelector(link.getAttribute("href"));
        if (!target) return;

        event.preventDefault();
        document.querySelector(".course-modal--open")?.classList.remove("course-modal--open");
        document.body.style.overflow = "";
        document.getElementById("nav")?.classList.remove("nav--open");
        document.getElementById("burger")?.setAttribute("aria-expanded", "false");
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }

  function init() {
    injectUtilityCss();
    normalizeTeacherCards();
    applyTranslationPatch();
    bindCourseCards();
    bindLanguagePatch();
    bindAnchorNavigation();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
