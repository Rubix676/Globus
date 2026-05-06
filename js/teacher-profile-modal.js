(() => {
  const TEACHER_ASSET_PATH = "assets/teachers";
  const DIPLOMA_ASSET_PATH = "assets/diplomas";

  const teachers = [
    {
      id: "teacher1",
      name: "Yusupov Numonjon",
      image: `${TEACHER_ASSET_PATH}/teacher2.png`,
      subject: { uz: "Ingliz tili / IELTS / CEFR", ru: "Английский язык / IELTS / CEFR", en: "English / IELTS / CEFR" },
      short: {
        uz: "Ingliz tili bo‘yicha natijaga yo‘naltirilgan darslar.",
        ru: "Занятия по английскому с фокусом на результат.",
        en: "English lessons focused on practical results."
      },
      bullets: {
        uz: ["IELTS va CEFR tayyorgarligi", "Grammar, speaking va writing bo‘yicha amaliy yondashuv", "O‘quvchining darajasiga qarab individual tavsiyalar"],
        ru: ["Подготовка к IELTS и CEFR", "Практический подход к grammar, speaking и writing", "Индивидуальные рекомендации по уровню ученика"],
        en: ["IELTS and CEFR preparation", "Practical approach to grammar, speaking and writing", "Individual recommendations based on student level"]
      },
      diplomas: [`${DIPLOMA_ASSET_PATH}/teacher1-1.png`, `${DIPLOMA_ASSET_PATH}/teacher1-2.png`]
    },
    {
      id: "teacher2",
      name: "O‘qituvchi 2",
      image: `${TEACHER_ASSET_PATH}/teacher1.png`,
      subject: { uz: "Ingliz tili", ru: "Английский язык", en: "English" },
      short: {
        uz: "Til o‘rganishda doimiylik va ishonchni shakllantirishga yordam beradi.",
        ru: "Помогает сформировать регулярность и уверенность в изучении языка.",
        en: "Helps build consistency and confidence in language learning."
      },
      bullets: {
        uz: ["General English darslari", "So‘z boyligi va talaffuz ustida ishlash", "Boshlang‘ich va o‘rta darajadagi o‘quvchilar bilan ishlash"],
        ru: ["General English", "Работа над словарём и произношением", "Работа с начинающими и средними уровнями"],
        en: ["General English lessons", "Vocabulary and pronunciation practice", "Works with beginner and intermediate learners"]
      },
      diplomas: [`${DIPLOMA_ASSET_PATH}/teacher2-1.png`, `${DIPLOMA_ASSET_PATH}/teacher2-2.png`]
    },
    {
      id: "teacher3",
      name: "O‘qituvchi 3",
      image: `${TEACHER_ASSET_PATH}/teacher3.png`,
      subject: { uz: "Ingliz tili", ru: "Английский язык", en: "English" },
      short: {
        uz: "Xatolardan qo‘rqmasdan gapirishni o‘rgatadi.",
        ru: "Помогает говорить без страха ошибок.",
        en: "Helps students speak without fear of mistakes."
      },
      bullets: {
        uz: ["Speaking practice", "Grammar asoslarini mustahkamlash", "O‘quvchilarni faol muloqotga chiqarish"],
        ru: ["Speaking practice", "Укрепление грамматической базы", "Вывод учеников в активное общение"],
        en: ["Speaking practice", "Strengthening grammar basics", "Encouraging active communication"]
      },
      diplomas: [`${DIPLOMA_ASSET_PATH}/teacher3-1.png`, `${DIPLOMA_ASSET_PATH}/teacher3-2.png`]
    },
    {
      id: "teacher4",
      name: "Avazbekova Sarvinoz",
      image: `${TEACHER_ASSET_PATH}/teacher8.png`,
      subject: { uz: "Rus tili", ru: "Русский язык", en: "Russian language" },
      short: {
        uz: "Rus tili bo‘yicha aniq va tushunarli darslar.",
        ru: "Понятные и структурированные уроки русского языка.",
        en: "Clear and structured Russian lessons."
      },
      bullets: {
        uz: ["Grammatika va savodxonlik", "So‘zlashuv va yozma nutq", "Imtihon va sertifikatga tayyorgarlik"],
        ru: ["Грамматика и грамотность", "Разговорная и письменная речь", "Подготовка к экзаменам и сертификатам"],
        en: ["Grammar and literacy", "Speaking and writing skills", "Exam and certificate preparation"]
      },
      diplomas: [`${DIPLOMA_ASSET_PATH}/teacher4-1.png`, `${DIPLOMA_ASSET_PATH}/teacher4-2.png`]
    },
    {
      id: "teacher5",
      name: "O‘qituvchi 5",
      image: `${TEACHER_ASSET_PATH}/teacher4.png`,
      subject: { uz: "Matematika SAT", ru: "Математика SAT", en: "SAT Mathematics" },
      short: {
        uz: "Matematikani sodda va tizimli tarzda tushuntiradi.",
        ru: "Объясняет математику просто и системно.",
        en: "Explains mathematics in a simple and structured way."
      },
      bullets: {
        uz: ["SAT math tayyorgarligi", "Mental arifmetika", "Mantiqiy fikrlash va tez hisoblash"],
        ru: ["Подготовка к SAT math", "Ментальная арифметика", "Логическое мышление и быстрый счёт"],
        en: ["SAT math preparation", "Mental arithmetic", "Logical thinking and fast calculation"]
      },
      diplomas: [`${DIPLOMA_ASSET_PATH}/teacher5-1.png`, `${DIPLOMA_ASSET_PATH}/teacher5-2.png`]
    },
    {
      id: "teacher6",
      name: "O‘qituvchi 6",
      image: `${TEACHER_ASSET_PATH}/teacher5.png`,
      subject: { uz: "Nemis tili", ru: "Немецкий язык", en: "German" },
      short: {
        uz: "Nemis tilida mustahkam baza yaratishga yordam beradi.",
        ru: "Помогает создать крепкую базу в немецком языке.",
        en: "Helps students build a strong foundation in German."
      },
      bullets: {
        uz: ["A1 va undan yuqori bosqichlar", "Grammatika va talaffuz", "Imtihon formatlariga tayyorgarlik"],
        ru: ["Уровни A1 и выше", "Грамматика и произношение", "Подготовка к экзаменационным форматам"],
        en: ["A1 level and above", "Grammar and pronunciation", "Preparation for exam formats"]
      },
      diplomas: [`${DIPLOMA_ASSET_PATH}/teacher6-1.png`, `${DIPLOMA_ASSET_PATH}/teacher6-2.png`]
    },
    {
      id: "teacher7",
      name: "O‘qituvchi 7",
      image: `${TEACHER_ASSET_PATH}/teacher6.png`,
      subject: { uz: "Koreys tili", ru: "Корейский язык", en: "Korean" },
      short: {
        uz: "Koreys tilini bosqichma-bosqich va amaliy o‘rgatadi.",
        ru: "Обучает корейскому языку пошагово и практично.",
        en: "Teaches Korean step by step through practice."
      },
      bullets: {
        uz: ["Hangul va asosiy grammatika", "TOPIK tayyorgarligi", "Kundalik muloqot amaliyoti"],
        ru: ["Хангыль и базовая грамматика", "Подготовка к TOPIK", "Практика повседневного общения"],
        en: ["Hangul and basic grammar", "TOPIK preparation", "Everyday communication practice"]
      },
      diplomas: [`${DIPLOMA_ASSET_PATH}/teacher7-1.png`, `${DIPLOMA_ASSET_PATH}/teacher7-2.png`]
    },
    {
      id: "teacher8",
      name: "O‘qituvchi 8",
      image: `${TEACHER_ASSET_PATH}/teacher7.png`,
      subject: { uz: "Ona tili", ru: "Родной язык", en: "Native language" },
      short: {
        uz: "Ona tili bo‘yicha savodxonlik va test ko‘nikmalarini rivojlantiradi.",
        ru: "Развивает грамотность и навыки работы с тестами по родному языку.",
        en: "Develops literacy and test-taking skills in the native language."
      },
      bullets: {
        uz: ["Davlat sertifikatiga tayyorgarlik", "Imlo va grammatika", "Matn bilan ishlash"],
        ru: ["Подготовка к государственному сертификату", "Орфография и грамматика", "Работа с текстом"],
        en: ["State certificate preparation", "Spelling and grammar", "Text analysis"]
      },
      diplomas: [`${DIPLOMA_ASSET_PATH}/teacher8-1.png`, `${DIPLOMA_ASSET_PATH}/teacher8-2.png`]
    }
  ];

  const lang = () => localStorage.getItem("siteLanguage") || document.getElementById("languageSwitcher")?.value || "uz";
  const t = {
    uz: { close: "Yopish", other: "Boshqa o‘qituvchilar", diplomas: "Diplom va sertifikatlar", placeholder: "Diplom qo‘shiladi" },
    ru: { close: "Закрыть", other: "Другие преподаватели", diplomas: "Дипломы и сертификаты", placeholder: "Диплом будет добавлен" },
    en: { close: "Close", other: "Other teachers", diplomas: "Diplomas and certificates", placeholder: "Diploma will be added" }
  };

  function ensureModal() {
    let modal = document.getElementById("teacherProfileModal");
    if (modal) return modal;

    modal = document.createElement("div");
    modal.className = "teacher-modal";
    modal.id = "teacherProfileModal";
    modal.setAttribute("aria-hidden", "true");
    modal.innerHTML = `
      <div class="teacher-modal__backdrop" data-teacher-profile-close></div>
      <div class="teacher-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="teacherProfileName">
        <button class="teacher-modal__close" type="button" aria-label="Close" data-teacher-profile-close>‹</button>
        <div class="teacher-modal__main">
          <div class="teacher-modal__photo-wrap">
            <img class="teacher-modal__photo" id="teacherProfilePhoto" alt="" />
          </div>
          <div class="teacher-modal__info">
            <span class="teacher-modal__subject" id="teacherProfileSubject"></span>
            <h3 id="teacherProfileName"></h3>
            <p class="teacher-modal__short" id="teacherProfileShort"></p>
            <ul class="teacher-modal__bullets" id="teacherProfileBullets"></ul>
          </div>
        </div>
        <div class="teacher-modal__bottom teacher-modal__diplomas-block">
          <h4 id="teacherProfileDiplomasTitle"></h4>
          <div class="teacher-modal__diplomas" id="teacherProfileDiplomas"></div>
        </div>
        <div class="teacher-modal__bottom">
          <h4 id="teacherProfileOtherTitle"></h4>
          <div class="teacher-modal__thumbs" id="teacherProfileThumbs"></div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    modal.querySelectorAll("[data-teacher-profile-close]").forEach((element) => {
      element.addEventListener("click", closeModal);
    });

    return modal;
  }

  function injectCss() {
    if (document.getElementById("teacher-profile-modal-style")) return;
    const style = document.createElement("style");
    style.id = "teacher-profile-modal-style";
    style.textContent = `
      .teacher-card { position: relative; }
      .teacher-card::after {
        content: "i";
        position: absolute;
        top: 26px;
        right: 26px;
        z-index: 3;
        width: 30px;
        height: 30px;
        display: grid;
        place-items: center;
        border-radius: 50%;
        background: rgba(0, 0, 0, 0.42);
        color: #fff;
        font-weight: 900;
        font-size: 16px;
        opacity: 0;
        transform: translateY(-4px);
        transition: opacity .2s ease, transform .2s ease;
      }
      .teacher-card:hover::after { opacity: 1; transform: translateY(0); }
      .teacher-modal__dialog { padding-top: 74px; }
      .teacher-modal__photo-wrap { border-radius: 0; }
      .teacher-modal__photo { max-height: 640px; object-position: center top; }
      .teacher-modal__diplomas {
        display: grid;
        grid-template-columns: repeat(3, minmax(180px, 1fr));
        gap: 18px;
      }
      .teacher-modal__diploma {
        position: relative;
        overflow: hidden;
        min-height: 150px;
        border: 1px solid rgba(255,255,255,.16);
        border-radius: 18px;
        background: rgba(255,255,255,.07);
        color: rgba(255,255,255,.72);
      }
      .teacher-modal__diploma img {
        display: block;
        width: 100%;
        height: 190px;
        object-fit: cover;
      }
      .teacher-modal__diploma-placeholder {
        min-height: 190px;
        display: grid;
        place-items: center;
        padding: 18px;
        text-align: center;
        font-weight: 800;
        border: 1px dashed rgba(255,255,255,.28);
        border-radius: 18px;
      }
      .teacher-modal__diploma img.is-missing { display: none; }
      .teacher-modal__thumb { border-radius: 14px; overflow: hidden; }
      .teacher-modal__thumb img { border-radius: 14px; }
      body.teacher-modal-lock { overflow: hidden; }
      @media (max-width: 760px) {
        .teacher-modal__dialog { width: min(100% - 22px, 560px); padding-top: 72px; }
        .teacher-modal__diplomas { grid-template-columns: 1fr; }
      }
    `;
    document.head.appendChild(style);
  }

  function localize(value) {
    if (typeof value === "string") return value;
    return value[lang()] || value.uz || value.ru || value.en || "";
  }

  function renderDiplomas(teacher) {
    const labels = t[lang()] || t.uz;
    const container = document.getElementById("teacherProfileDiplomas");
    if (!container) return;

    container.innerHTML = "";
    const diplomas = teacher.diplomas?.length ? teacher.diplomas : [];

    diplomas.forEach((src, index) => {
      const card = document.createElement("div");
      card.className = "teacher-modal__diploma";
      card.innerHTML = `
        <img src="${src}" alt="${teacher.name} diploma ${index + 1}" />
        <div class="teacher-modal__diploma-placeholder">${labels.placeholder} ${index + 1}</div>
      `;
      const img = card.querySelector("img");
      img.addEventListener("error", () => img.classList.add("is-missing"));
      img.addEventListener("load", () => card.querySelector(".teacher-modal__diploma-placeholder")?.remove());
      container.appendChild(card);
    });
  }

  function renderThumbs(activeId) {
    const container = document.getElementById("teacherProfileThumbs");
    if (!container) return;

    container.innerHTML = "";
    teachers.forEach((teacher, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `teacher-modal__thumb${teacher.id === activeId ? " teacher-modal__thumb--active" : ""}`;
      button.innerHTML = `<img src="${teacher.image}" alt="${teacher.name}" /><span>${teacher.name}</span>`;
      button.addEventListener("click", () => openTeacher(index));
      container.appendChild(button);
    });
  }

  function openTeacher(index) {
    const teacher = teachers[index];
    if (!teacher) return;

    const modal = ensureModal();
    const labels = t[lang()] || t.uz;
    const photo = document.getElementById("teacherProfilePhoto");
    const subject = document.getElementById("teacherProfileSubject");
    const name = document.getElementById("teacherProfileName");
    const short = document.getElementById("teacherProfileShort");
    const bullets = document.getElementById("teacherProfileBullets");
    const diplomasTitle = document.getElementById("teacherProfileDiplomasTitle");
    const otherTitle = document.getElementById("teacherProfileOtherTitle");

    photo.src = teacher.image;
    photo.alt = teacher.name;
    subject.textContent = localize(teacher.subject);
    name.textContent = teacher.name;
    short.textContent = localize(teacher.short);
    bullets.innerHTML = localize(teacher.bullets).map((item) => `<li>${item}</li>`).join("");
    diplomasTitle.textContent = labels.diplomas;
    otherTitle.textContent = labels.other;
    modal.querySelector(".teacher-modal__close")?.setAttribute("aria-label", labels.close);

    renderDiplomas(teacher);
    renderThumbs(teacher.id);

    modal.classList.add("teacher-modal--open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("teacher-modal-lock");
  }

  function closeModal() {
    const modal = document.getElementById("teacherProfileModal");
    if (!modal) return;
    modal.classList.remove("teacher-modal--open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("teacher-modal-lock");
  }

  function bindCards() {
    const cards = document.querySelectorAll("#teachersTrack .teacher-card");
    cards.forEach((card, index) => {
      card.setAttribute("role", "button");
      card.setAttribute("tabindex", "0");
      card.addEventListener("click", () => openTeacher(index));
      card.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openTeacher(index);
        }
      });
    });
  }

  function bindKeyboard() {
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeModal();
    });
  }

  function init() {
    injectCss();
    ensureModal();
    bindCards();
    bindKeyboard();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
