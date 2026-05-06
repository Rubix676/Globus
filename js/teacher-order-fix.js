(() => {
  const ASSET = "assets/teachers";
  const DIPLOMA = "assets/diplomas";

  const teachers = [
    { id: "teacher1", name: "Yusupov Numonjon", course: "english", subject: { uz: "Ingliz tili / IELTS / CEFR", ru: "Английский / IELTS / CEFR", en: "English / IELTS / CEFR" }, image: `${ASSET}/teacher2.png`, textKey: "teachers.teacher1Text", text: { uz: "IELTS va CEFR bo‘yicha natijaga yo‘naltirilgan darslar.", ru: "Подготовка к IELTS и CEFR с фокусом на результат.", en: "IELTS and CEFR preparation focused on results." }, schedule: ["пн, ср, пт 14:00 - 15:30", "вт, чт, сб 14:00 - 15:30", "пн, ср, пт 15:30 - 17:00", "вт, чт, сб 17:30 - 18:30"] },
    { id: "teacher2", name: "Muattarxon Shavkatmirzayeva", course: "english", subject: { uz: "Ingliz tili", ru: "Английский язык", en: "English" }, image: `${ASSET}/teacher1.png`, textKey: "teachers.teacher2Text", text: { uz: "Ingliz tilini bosqichma-bosqich va amaliy o‘rgatadi.", ru: "Пошагово и практично обучает английскому языку.", en: "Teaches English step by step through practice." }, schedule: ["пн, ср, пт 13:00 - 15:00", "пн, ср, пт 8:30 - 10:00"] },
    { id: "teacher3", name: "Mehribonu Nazirova", course: "english", subject: { uz: "Ingliz tili", ru: "Английский язык", en: "English" }, image: `${ASSET}/teacher3.png`, textKey: "teachers.teacher3Text", text: { uz: "Grammar va speaking bo‘yicha amaliy darslar olib boradi.", ru: "Проводит практические уроки по grammar и speaking.", en: "Runs practical grammar and speaking lessons." }, schedule: ["пн, ср, пт 14:00 - 15:30", "вт, чт, сб 15:30 - 17:00"] },
    { id: "teacher4", name: "Avazbek Muhammadqosimov", course: "english", subject: { uz: "Ingliz tili", ru: "Английский язык", en: "English" }, image: `${ASSET}/teacher4.png`, textKey: "teachers.teacher4Text", text: { uz: "General English va imtihon tayyorgarligida tizimli yondashuv.", ru: "Системный подход к General English и подготовке к экзаменам.", en: "A structured approach to General English and exam preparation." }, schedule: ["пн, ср, пт 8:30 - 10:00", "пн, ср, пт 10:00 - 11:30", "пн, ср, пт 14:00 - 15:30", "пн, ср, пт 15:30 - 17:00", "вт, чт, сб 14:00 - 15:30"] },
    { id: "teacher5", name: "Avazbekova Sarvinoz", course: "russian", subject: { uz: "Rus tili", ru: "Русский язык", en: "Russian" }, image: `${ASSET}/teacher8.png`, textKey: "teachers.teacher5Text", text: { uz: "Rus tili bo‘yicha aniq va tushunarli darslar.", ru: "Понятные и структурированные уроки русского языка.", en: "Clear and structured Russian lessons." }, schedule: ["пн, ср, пт 14:00 - 15:30", "вт, чт, сб 14:00 - 15:00"] },
    { id: "teacher6", name: "Asadbek Qobulov", course: "math", subject: { uz: "Matematika", ru: "Математика", en: "Mathematics" }, image: `${ASSET}/teacher5.png`, textKey: "teachers.teacher6Text", text: { uz: "Matematikani sodda va tizimli tarzda tushuntiradi.", ru: "Объясняет математику просто и системно.", en: "Explains mathematics clearly and systematically." }, schedule: ["вт, чт, сб 8:30 - 10:00", "пн, ср, пт 13:00 - 14:30", "пн, ср, пт 15:00 - 16:30", "вт, чт, сб 15:00 - 16:30"] },
    { id: "teacher7", name: "Abdulvohidova Oydinoy", course: "native", subject: { uz: "Ona tili", ru: "Родной язык", en: "Native language" }, image: `${ASSET}/teacher6.png`, textKey: "teachers.teacher7Text", text: { uz: "Ona tili bo‘yicha savodxonlik va test ko‘nikmalarini rivojlantiradi.", ru: "Развивает грамотность и навыки тестирования по родному языку.", en: "Develops literacy and test-taking skills." }, schedule: ["пн, ср, пт 10:30 - 12:00", "пн, ср, пт 14:30 - 16:00", "пн, ср, пт 16:00 - 17:30"] },
    { id: "teacher8", name: "Muhammadjon Sobirov", course: "native", subject: { uz: "Ona tili", ru: "Родной язык", en: "Native language" }, image: `${ASSET}/teacher7.png`, textKey: "teachers.teacher8Text", text: { uz: "Davlat sertifikati formatiga tayyorlaydi.", ru: "Готовит к формату государственного сертификата.", en: "Prepares students for the state certificate format." }, schedule: ["вт, чт, сб 14:00 - 15:30"] },
    { id: "teacher9", name: "Mashura Mamasoliyeva", course: "german", subject: { uz: "Nemis tili", ru: "Немецкий язык", en: "German" }, image: `${ASSET}/teacher9.png`, textKey: "teachers.teacher9Text", text: { uz: "Nemis tilida mustahkam baza yaratishga yordam beradi.", ru: "Помогает создать крепкую базу в немецком языке.", en: "Helps build a strong foundation in German." }, schedule: ["пн, ср, пт 12:00 - 13:00"] },
    { id: "teacher10", name: "Abdusamatova Moxchexraxon", course: "korean", subject: { uz: "Koreys tili", ru: "Корейский язык", en: "Korean" }, image: `${ASSET}/teacher10.png`, textKey: "teachers.teacher10Text", text: { uz: "Koreys tilini bosqichma-bosqich va amaliy o‘rgatadi.", ru: "Обучает корейскому языку пошагово и практично.", en: "Teaches Korean step by step through practice." }, schedule: ["пн, ср, пт 11:30 - 13:00", "пн, ср, пт 14:30 - 16:00"] },
    { id: "teacher11", name: "Rasulberdiyev Abdulhoshim", course: "history", subject: { uz: "Tarix", ru: "История", en: "History" }, image: `${ASSET}/teacher11.png`, textKey: "teachers.teacher11Text", text: { uz: "Tarix bo‘yicha tizimli va tushunarli tayyorgarlik.", ru: "Системная и понятная подготовка по истории.", en: "Structured and clear history lessons." }, schedule: ["пн, ср, пт 14:00 - 15:30"] }
  ];

  const courseInfo = {
    english: { title: { uz: "Ingliz tili IELTS/CEFR", ru: "Английский IELTS/CEFR", en: "English IELTS/CEFR" }, short: { uz: "General English, IELTS va CEFR tayyorgarligi.", ru: "General English, подготовка к IELTS и CEFR.", en: "General English, IELTS and CEFR preparation." } },
    russian: { title: { uz: "Rus tili", ru: "Русский язык", en: "Russian language" }, short: { uz: "Grammatika, so‘zlashuv va imtihon tayyorgarligi.", ru: "Грамматика, разговорная практика и подготовка к экзаменам.", en: "Grammar, speaking and exam preparation." } },
    math: { title: { uz: "Matematika", ru: "Математика", en: "Mathematics" }, short: { uz: "SAT va mental arifmetika.", ru: "SAT и ментальная арифметика.", en: "SAT and mental arithmetic." } },
    german: { title: { uz: "Nemis tili", ru: "Немецкий язык", en: "German" }, short: { uz: "Imtihonlarga bosqichma-bosqich tayyorgarlik.", ru: "Пошаговая подготовка к экзаменам.", en: "Step-by-step exam preparation." } },
    korean: { title: { uz: "Koreys tili", ru: "Корейский язык", en: "Korean" }, short: { uz: "TOPIK va koreys tili imtihonlariga tayyorgarlik.", ru: "Подготовка к TOPIK и экзаменам по корейскому.", en: "TOPIK and Korean exam preparation." } },
    native: { title: { uz: "Ona tili", ru: "Родной язык", en: "Native language" }, short: { uz: "Davlat sertifikati uchun tayyorgarlik.", ru: "Подготовка к государственному сертификату.", en: "Preparation for the state certificate." } },
    history: { title: { uz: "Tarix", ru: "История", en: "History" }, short: { uz: "Tarix fanidan imtihonlarga tayyorgarlik.", ru: "Подготовка к экзаменам по истории.", en: "History exam preparation." } }
  };

  const courseTeachers = teachers.reduce((acc, teacher) => {
    acc[teacher.course] ||= [];
    acc[teacher.course].push({ value: teacher.id, label: teacher.name });
    return acc;
  }, {});

  const courseIcons = {
    history: `<svg viewBox="0 0 300 200" preserveAspectRatio="xMidYMid slice" role="img" aria-label="History"><rect width="300" height="200" fill="#8b5e34"/><path d="M45 42h130c24 0 40 16 40 40v76H82c-22 0-37-15-37-37V42Z" fill="#d8b680"/><path d="M82 42h135c20 0 36 16 36 36v80H118c-20 0-36-16-36-36V42Z" fill="#f2d7a5"/><path d="M113 72h96M113 99h91M113 126h68" stroke="#8b5e34" stroke-width="8" stroke-linecap="round"/><circle cx="57" cy="53" r="22" fill="#6b3df4"/><text x="51" y="63" font-family="Arial" font-size="27" font-weight="900" fill="#fff">H</text></svg>`
  };

  function lang() {
    return localStorage.getItem("siteLanguage") || document.getElementById("languageSwitcher")?.value || "uz";
  }

  function text(value) {
    return typeof value === "string" ? value : value?.[lang()] || value?.uz || value?.ru || value?.en || "";
  }

  function teacherCardHtml(teacher, index) {
    return `
      <article class="teacher-card" data-teacher-id="${teacher.id}" role="button" tabindex="0">
        <div class="teacher-card__photo">
          <img src="${teacher.image}" alt="${teacher.name}" class="teacher-card__image" />
          <span class="teacher-card__fallback">${index + 1}</span>
        </div>
        <h3>${teacher.name}</h3>
        <p data-i18n="${teacher.textKey}">${text(teacher.text)}</p>
      </article>
    `;
  }

  function renderTeacherCards() {
    const track = document.getElementById("teachersTrack");
    if (!track) return;
    track.innerHTML = teachers.map(teacherCardHtml).join("");
    track.querySelectorAll(".teacher-card__image").forEach((img) => {
      img.addEventListener("error", () => { img.style.display = "none"; });
    });
  }

  function ensureHistoryCourseCard() {
    const track = document.querySelector(".course-cards");
    if (!track || track.querySelector('[data-course="history"]')) return;
    const card = document.createElement("button");
    card.className = "course-card";
    card.type = "button";
    card.dataset.course = "history";
    card.innerHTML = `
      <span class="course-card__flag">${courseIcons.history}</span>
      <h3 data-course-i18n="course.history.title">${text(courseInfo.history.title)}</h3>
      <p data-course-i18n="course.history.short">${text(courseInfo.history.short)}</p>
      <span class="course-card__more" data-course-i18n="course.more">Batafsil</span>
    `;
    track.appendChild(card);
  }

  function injectCss() {
    if (document.getElementById("teacher-schedule-2026-style")) return;
    const style = document.createElement("style");
    style.id = "teacher-schedule-2026-style";
    style.textContent = `
      .teacher-card__image[style*="display: none"] + .teacher-card__fallback { opacity: .55; }
      .course-card[data-course="history"] .course-card__flag { inset: 0 0 150px !important; display: block !important; background:#8b5e34 !important; }
      .course-card[data-course="history"] .course-card__flag svg { display:block !important; width:100% !important; height:100% !important; opacity:1 !important; }
      .course-card[data-course="history"] .course-card__tag { display:none !important; }
      .teacher-modal__schedule { margin-top: 24px; padding: 18px 20px; border-radius: 18px; background: rgba(255,255,255,.08); border: 1px solid rgba(255,255,255,.14); }
      .teacher-modal__schedule h4 { margin: 0 0 12px; color:#fff; font-size:20px; }
      .teacher-modal__schedule ul { margin:0; padding-left:20px; color: rgba(255,255,255,.86); line-height:1.7; }
      @media (min-width: 761px) and (max-width:1180px){ .course-card[data-course="history"] .course-card__flag{bottom:110px!important;border-radius:34px 34px 18px 18px!important;} }
      @media (max-width:760px){ .course-card[data-course="history"] .course-card__flag{bottom:140px!important;border-radius:42px 42px 22px 22px!important;} }
    `;
    document.head.appendChild(style);
  }

  function applyTranslations() {
    const map = {
      uz: {
        "courses.subtitle": "Asosiy yo‘nalishlar: ingliz tili, IELTS/CEFR, rus tili, matematika, ona tili, nemis, koreys va tarix.",
        "course.history.title": "Tarix", "course.history.short": "Tarix fanidan imtihonlarga tayyorgarlik.",
        "teachers.subtitle": "Har bir o‘qituvchi haqida qisqa ma’lumot, dars vaqtlari va diplomlar.",
        "teachers.teacher1Text": teachers[0].text.uz, "teachers.teacher2Text": teachers[1].text.uz, "teachers.teacher3Text": teachers[2].text.uz, "teachers.teacher4Text": teachers[3].text.uz, "teachers.teacher5Text": teachers[4].text.uz, "teachers.teacher6Text": teachers[5].text.uz, "teachers.teacher7Text": teachers[6].text.uz, "teachers.teacher8Text": teachers[7].text.uz, "teachers.teacher9Text": teachers[8].text.uz, "teachers.teacher10Text": teachers[9].text.uz, "teachers.teacher11Text": teachers[10].text.uz
      },
      ru: {
        "courses.subtitle": "Основные направления: английский, IELTS/CEFR, русский, математика, родной язык, немецкий, корейский и история.",
        "course.history.title": "История", "course.history.short": "Подготовка к экзаменам по истории.",
        "teachers.subtitle": "Краткая информация о преподавателях, расписание занятий и дипломы.",
        "teachers.teacher1Text": teachers[0].text.ru, "teachers.teacher2Text": teachers[1].text.ru, "teachers.teacher3Text": teachers[2].text.ru, "teachers.teacher4Text": teachers[3].text.ru, "teachers.teacher5Text": teachers[4].text.ru, "teachers.teacher6Text": teachers[5].text.ru, "teachers.teacher7Text": teachers[6].text.ru, "teachers.teacher8Text": teachers[7].text.ru, "teachers.teacher9Text": teachers[8].text.ru, "teachers.teacher10Text": teachers[9].text.ru, "teachers.teacher11Text": teachers[10].text.ru
      },
      en: {
        "courses.subtitle": "Main directions: English, IELTS/CEFR, Russian, mathematics, native language, German, Korean and history.",
        "course.history.title": "History", "course.history.short": "History exam preparation.",
        "teachers.subtitle": "Short information about teachers, class times and diplomas.",
        "teachers.teacher1Text": teachers[0].text.en, "teachers.teacher2Text": teachers[1].text.en, "teachers.teacher3Text": teachers[2].text.en, "teachers.teacher4Text": teachers[3].text.en, "teachers.teacher5Text": teachers[4].text.en, "teachers.teacher6Text": teachers[5].text.en, "teachers.teacher7Text": teachers[6].text.en, "teachers.teacher8Text": teachers[7].text.en, "teachers.teacher9Text": teachers[8].text.en, "teachers.teacher10Text": teachers[9].text.en, "teachers.teacher11Text": teachers[10].text.en
      }
    }[lang()] || {};
    document.querySelectorAll("[data-i18n], [data-course-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n") || el.getAttribute("data-course-i18n");
      if (map[key]) el.textContent = map[key];
    });
  }

  function ensureScheduleBox() {
    const panel = document.querySelector(".course-modal__panel");
    const select = document.getElementById("courseTeacherSelect");
    if (!panel || !select) return null;
    let box = document.getElementById("courseScheduleBox");
    if (!box) {
      box = document.createElement("div");
      box.id = "courseScheduleBox";
      box.className = "course-modal__schedule";
      panel.insertBefore(box, panel.querySelector(".course-modal__note"));
    }
    return box;
  }

  function renderCourseSchedule() {
    const select = document.getElementById("courseTeacherSelect");
    const box = ensureScheduleBox();
    const teacher = teachers.find((item) => item.id === select?.value);
    if (!box || !teacher) return;
    const title = { uz: "Dars vaqtlari", ru: "Время занятий", en: "Class times" }[lang()] || "Dars vaqtlari";
    box.innerHTML = `<h4>${title}</h4><ul>${teacher.schedule.map((item) => `<li>${item}</li>`).join("")}</ul>`;
  }

  function setCourseTeachers(courseName) {
    const select = document.getElementById("courseTeacherSelect");
    if (!select || !courseTeachers[courseName]) return;
    select.innerHTML = courseTeachers[courseName].map((teacher) => `<option value="${teacher.value}">${teacher.label}</option>`).join("");
    renderCourseSchedule();
  }

  function openPatchedCourse(courseName) {
    const modal = document.getElementById("courseModal");
    if (!modal) return;
    const title = document.getElementById("courseModalTitle");
    const desc = document.getElementById("courseModalDescription");
    const features = document.getElementById("courseModalFeatures");
    const info = courseInfo[courseName];
    if (title && info) title.textContent = text(info.title);
    if (desc && info) desc.textContent = text(info.short);
    if (features) features.innerHTML = "";
    setCourseTeachers(courseName);
    modal.classList.add("course-modal--open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function bindCourseCards() {
    document.querySelectorAll("[data-course]").forEach((card) => {
      card.addEventListener("click", () => window.setTimeout(() => {
        const course = card.dataset.course;
        if (course === "history") openPatchedCourse(course);
        else setCourseTeachers(course);
      }, 0));
    });
    document.getElementById("courseTeacherSelect")?.addEventListener("change", renderCourseSchedule);
  }

  function setupCourseSlider() {
    const track = document.querySelector(".course-cards");
    const slider = track?.closest(".course-slider");
    if (!track || !slider) return;
    let index = 0;
    const prevOld = slider.querySelector("[data-course-prev]");
    const nextOld = slider.querySelector("[data-course-next]");
    const prev = prevOld?.cloneNode(true); const next = nextOld?.cloneNode(true);
    if (prevOld && prev) prevOld.replaceWith(prev);
    if (nextOld && next) nextOld.replaceWith(next);
    const update = () => {
      const cards = Array.from(track.querySelectorAll(".course-card"));
      const visible = window.matchMedia("(max-width:760px)").matches ? 1 : Math.min(4, cards.length);
      const max = Math.max(0, cards.length - visible);
      index = Math.max(0, Math.min(index, max));
      const gap = parseFloat(getComputedStyle(track).gap || "0") || 0;
      const step = (cards[0]?.getBoundingClientRect().width || 0) + gap;
      if (!window.matchMedia("(max-width:760px)").matches) track.style.transform = `translateX(${-index * step}px)`;
      if (prev) prev.disabled = index === 0;
      if (next) next.disabled = index >= max;
    };
    prev?.addEventListener("click", () => { index -= 1; update(); });
    next?.addEventListener("click", () => { index += 1; update(); });
    window.addEventListener("resize", update);
    update();
  }

  function init() {
    injectCss();
    ensureHistoryCourseCard();
    renderTeacherCards();
    applyTranslations();
    bindCourseCards();
    setupCourseSlider();
    document.getElementById("languageSwitcher")?.addEventListener("change", () => setTimeout(() => { renderTeacherCards(); ensureHistoryCourseCard(); applyTranslations(); }, 0));
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();

  window.GlobusTeachers = { teachers, courseTeachers };
})();
