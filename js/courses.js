const courseModal = document.getElementById("courseModal");
const courseModalTitle = document.getElementById("courseModalTitle");
const courseModalDescription = document.getElementById("courseModalDescription");
const courseModalFeatures = document.getElementById("courseModalFeatures");
const courseTeacherSelect = document.getElementById("courseTeacherSelect");
const courseCardsTrack = document.querySelector(".course-cards");
const courseCards = document.querySelectorAll("[data-course]");
const courseCloseButtons = document.querySelectorAll("[data-course-close]");

const courseTranslations = {
  uz: {
    "courses.eyebrow": "Mashhur kurslar",
    "courses.title": "Kursni tanlang",
    "courses.subtitle": "Asosiy yo‘nalishlar: ingliz tili, IELTS/CEFR, rus tili, matematika, nemis, koreys va ona tili.",
    "course.more": "Batafsil",

    "course.english.title": "Ingliz tili IELTS/CEFR",
    "course.english.short": "General English, IELTS va CEFR tayyorgarligi.",
    "course.english.description": "Ingliz tilini umumiy darajadan imtihon tayyorgarligigacha o‘rganing. Sinov darsi orqali darajangiz aniqlanadi va mos yo‘nalish tavsiya qilinadi.",
    "course.english.feature1": "IELTS va CEFR imtihonlariga tayyorgarlik",
    "course.english.feature2": "Speaking, grammar, listening, reading va writing bo‘yicha mashg‘ulotlar",
    "course.english.feature3": "Darajaga qarab guruh yoki individual yondashuv",

    "course.russian.title": "Rus tili",
    "course.russian.short": "Rus tili grammatikasi, so‘zlashuv va imtihon tayyorgarligi.",
    "course.russian.description": "Rus tili kursida o‘quvchilar grammatikani mustahkamlaydi, nutq ko‘nikmalarini rivojlantiradi va kerakli imtihon yoki sertifikatga tayyorlanadi.",
    "course.russian.feature1": "Grammatika va savodxonlik bo‘yicha tizimli darslar",
    "course.russian.feature2": "So‘zlashuv, o‘qish va yozish ko‘nikmalarini rivojlantirish",
    "course.russian.feature3": "Sinov darsi orqali darajani aniqlash",

    "course.math.title": "Matematika SAT",
    "course.math.short": "SAT va mental arifmetika.",
    "course.math.description": "Matematika yo‘nalishida SAT tayyorgarligi, mantiqiy fikrlash va mental arifmetika bo‘yicha darslar tashkil qilinadi.",
    "course.math.feature1": "SAT math va asosiy matematik ko‘nikmalar",
    "course.math.feature2": "Mental arifmetika va tez hisoblash mashqlari",
    "course.math.feature3": "Sinov darsi orqali boshlang‘ich darajani aniqlash",

    "course.german.title": "Nemis tili",
    "course.german.short": "Imtihonlarga bosqichma-bosqich tayyorgarlik.",
    "course.german.description": "Nemis tili darslari imtihon va real muloqotga tayyorlashga yo‘naltiriladi. Darslar darajaga qarab tuziladi.",
    "course.german.feature1": "A1 dan yuqori darajalargacha bosqichma-bosqich o‘qitish",
    "course.german.feature2": "Imtihon formatlari va amaliy topshiriqlar",
    "course.german.feature3": "Talaffuz, grammatika va so‘z boyligini rivojlantirish",

    "course.korean.title": "Koreys tili",
    "course.korean.short": "TOPIK va koreys tili imtihonlariga tayyorgarlik.",
    "course.korean.description": "Koreys tili kursida TOPIK tayyorgarligi, asosiy grammatika, lug‘at va kundalik muloqot ko‘nikmalari o‘rgatiladi.",
    "course.korean.feature1": "TOPIK imtihoniga tayyorgarlik",
    "course.korean.feature2": "Koreys alifbosi, grammatika va lug‘at",
    "course.korean.feature3": "Kundalik muloqot va amaliy mashqlar",

    "course.native.title": "Ona tili",
    "course.native.short": "Davlat sertifikati uchun tayyorgarlik.",
    "course.native.description": "Ona tili kursi davlat sertifikati uchun tayyorgarlik, savodxonlik va test ko‘nikmalarini rivojlantirishga qaratilgan.",
    "course.native.feature1": "Davlat sertifikati formatiga mos tayyorgarlik",
    "course.native.feature2": "Grammatika, imlo va matn bilan ishlash",
    "course.native.feature3": "Sinov darsi orqali darajani aniqlash",

    "modal.chooseTeacher": "O‘qituvchini tanlang",
    "modal.teacherLabel": "O‘qituvchi",
    "modal.teacher1": "O‘qituvchi 1",
    "modal.teacher4": "O‘qituvchi 4",
    "modal.teacher5": "O‘qituvchi 5",
    "modal.teacher6": "O‘qituvchi 6",
    "modal.teacher7": "O‘qituvchi 7",
    "modal.trialNote": "Narxlar hozircha ko‘rsatilmaydi. Avval sinov darsi orqali darajangiz aniqlanadi, keyin sizga mos guruh tavsiya qilinadi.",
    "modal.trialButton": "Sinov darsiga yozilish",
    "modal.teachersButton": "O‘qituvchilarni ko‘rish"
  },

  ru: {
    "courses.eyebrow": "Популярные курсы",
    "courses.title": "Выберите курс",
    "courses.subtitle": "Основные направления: английский, IELTS/CEFR, русский, математика, немецкий, корейский и родной язык.",
    "course.more": "Подробнее",

    "course.english.title": "Английский IELTS/CEFR",
    "course.english.short": "General English, подготовка к IELTS и CEFR.",
    "course.english.description": "Изучайте английский от общего уровня до подготовки к экзаменам. На пробном уроке мы определим ваш уровень и подберём подходящее направление.",
    "course.english.feature1": "Подготовка к IELTS и CEFR",
    "course.english.feature2": "Speaking, grammar, listening, reading и writing",
    "course.english.feature3": "Групповой или индивидуальный подход по уровню",

    "course.russian.title": "Русский язык",
    "course.russian.short": "Грамматика, разговорная практика и подготовка к экзаменам.",
    "course.russian.description": "Курс русского языка помогает укрепить грамматику, развить разговорную речь и подготовиться к нужному экзамену или сертификату.",
    "course.russian.feature1": "Системные уроки по грамматике и грамотности",
    "course.russian.feature2": "Развитие разговорной речи, чтения и письма",
    "course.russian.feature3": "Пробный урок для определения уровня",

    "course.math.title": "Математика SAT",
    "course.math.short": "SAT и ментальная арифметика.",
    "course.math.description": "Направление включает подготовку к SAT, развитие логического мышления и занятия по ментальной арифметике.",
    "course.math.feature1": "SAT math и базовые математические навыки",
    "course.math.feature2": "Ментальная арифметика и быстрый счёт",
    "course.math.feature3": "Пробный урок для определения стартового уровня",

    "course.german.title": "Немецкий язык",
    "course.german.short": "Пошаговая подготовка к экзаменам.",
    "course.german.description": "Курс немецкого языка направлен на подготовку к экзаменам и реальному общению. Программа строится по уровню ученика.",
    "course.german.feature1": "Пошаговое обучение от A1 и выше",
    "course.german.feature2": "Экзаменационные форматы и практические задания",
    "course.german.feature3": "Произношение, грамматика и словарный запас",

    "course.korean.title": "Корейский язык",
    "course.korean.short": "Подготовка к TOPIK и экзаменам по корейскому.",
    "course.korean.description": "Курс корейского языка включает подготовку к TOPIK, грамматику, лексику и навыки повседневного общения.",
    "course.korean.feature1": "Подготовка к TOPIK",
    "course.korean.feature2": "Корейский алфавит, грамматика и лексика",
    "course.korean.feature3": "Повседневное общение и практические задания",

    "course.native.title": "Родной язык",
    "course.native.short": "Подготовка к государственному сертификату.",
    "course.native.description": "Курс родного языка направлен на подготовку к государственному сертификату, грамотность и развитие тестовых навыков.",
    "course.native.feature1": "Подготовка по формату государственного сертификата",
    "course.native.feature2": "Грамматика, орфография и работа с текстом",
    "course.native.feature3": "Пробный урок для определения уровня",

    "modal.chooseTeacher": "Выберите преподавателя",
    "modal.teacherLabel": "Преподаватель",
    "modal.teacher1": "Преподаватель 1",
    "modal.teacher4": "Преподаватель 4",
    "modal.teacher5": "Преподаватель 5",
    "modal.teacher6": "Преподаватель 6",
    "modal.teacher7": "Преподаватель 7",
    "modal.trialNote": "Цены пока не показываем. Сначала пробный урок, чтобы определить ваш уровень, затем мы предложим подходящую группу.",
    "modal.trialButton": "Записаться на пробный урок",
    "modal.teachersButton": "Посмотреть преподавателей"
  },

  en: {
    "courses.eyebrow": "Popular courses",
    "courses.title": "Choose a course",
    "courses.subtitle": "Main directions: English, IELTS/CEFR, Russian, mathematics, German, Korean and native language.",
    "course.more": "Learn more",

    "course.english.title": "English IELTS/CEFR",
    "course.english.short": "General English, IELTS and CEFR preparation.",
    "course.english.description": "Learn English from general level to exam preparation. A trial lesson helps us identify your level and recommend the right direction.",
    "course.english.feature1": "IELTS and CEFR exam preparation",
    "course.english.feature2": "Speaking, grammar, listening, reading and writing practice",
    "course.english.feature3": "Group or individual approach based on your level",

    "course.russian.title": "Russian language",
    "course.russian.short": "Grammar, speaking practice and exam preparation.",
    "course.russian.description": "The Russian course helps students strengthen grammar, improve speaking skills and prepare for the required exam or certificate.",
    "course.russian.feature1": "Structured grammar and literacy lessons",
    "course.russian.feature2": "Speaking, reading and writing skills development",
    "course.russian.feature3": "Trial lesson to determine your level",

    "course.math.title": "Mathematics SAT",
    "course.math.short": "SAT and mental arithmetic.",
    "course.math.description": "This direction includes SAT preparation, logical thinking development and mental arithmetic lessons.",
    "course.math.feature1": "SAT math and core mathematics skills",
    "course.math.feature2": "Mental arithmetic and fast calculation practice",
    "course.math.feature3": "Trial lesson to determine your starting level",

    "course.german.title": "German",
    "course.german.short": "Step-by-step exam preparation.",
    "course.german.description": "German lessons are focused on exam preparation and real communication. The programme is built around the student’s level.",
    "course.german.feature1": "Step-by-step learning from A1 and above",
    "course.german.feature2": "Exam formats and practical tasks",
    "course.german.feature3": "Pronunciation, grammar and vocabulary development",

    "course.korean.title": "Korean",
    "course.korean.short": "TOPIK and Korean exam preparation.",
    "course.korean.description": "The Korean course includes TOPIK preparation, grammar, vocabulary and everyday communication practice.",
    "course.korean.feature1": "TOPIK preparation",
    "course.korean.feature2": "Korean alphabet, grammar and vocabulary",
    "course.korean.feature3": "Everyday communication and practical exercises",

    "course.native.title": "Native language",
    "course.native.short": "Preparation for the state certificate.",
    "course.native.description": "The native language course focuses on state certificate preparation, literacy and test skills.",
    "course.native.feature1": "Preparation for the state certificate format",
    "course.native.feature2": "Grammar, spelling and text analysis",
    "course.native.feature3": "Trial lesson to determine your level",

    "modal.chooseTeacher": "Choose a teacher",
    "modal.teacherLabel": "Teacher",
    "modal.teacher1": "Teacher 1",
    "modal.teacher4": "Teacher 4",
    "modal.teacher5": "Teacher 5",
    "modal.teacher6": "Teacher 6",
    "modal.teacher7": "Teacher 7",
    "modal.trialNote": "Prices are not shown yet. First, we offer a trial lesson to determine your level, then recommend a suitable group.",
    "modal.trialButton": "Book a trial lesson",
    "modal.teachersButton": "View teachers"
  }
};

const courseKeys = {
  english: "course.english",
  russian: "course.russian",
  math: "course.math",
  german: "course.german",
  korean: "course.korean",
  native: "course.native"
};

const courseTeachers = {
  english: [
    { value: "teacher1", translationKey: "modal.teacher1" },
    { value: "teacher2", label: "Yusupov Nomudjon" },
    { value: "teacher3", label: "Yakubov Azizillo" }
  ],
  russian: [{ value: "teacher8", label: "Avazbekova Sarvinoz" }],
  math: [{ value: "teacher4", translationKey: "modal.teacher4" }],
  german: [{ value: "teacher5", translationKey: "modal.teacher5" }],
  korean: [{ value: "teacher6", translationKey: "modal.teacher6" }],
  native: [{ value: "teacher7", translationKey: "modal.teacher7" }]
};

function getCurrentCourseLanguage() {
  return localStorage.getItem("siteLanguage") || languageSwitcher?.value || "uz";
}

function translateCourseElements(language = getCurrentCourseLanguage()) {
  const selectedTranslations = courseTranslations[language] || courseTranslations.uz;

  document.querySelectorAll("[data-course-i18n]").forEach((element) => {
    const key = element.getAttribute("data-course-i18n");

    if (selectedTranslations[key]) {
      element.textContent = selectedTranslations[key];
    }
  });
}

function setCourseTeacherOptions(courseName, selectedTranslations) {
  if (!courseTeacherSelect) {
    return;
  }

  const teachers = courseTeachers[courseName] || [];
  courseTeacherSelect.innerHTML = "";

  teachers.forEach((teacher) => {
    const option = document.createElement("option");
    option.value = teacher.value;
    option.textContent = teacher.label || selectedTranslations[teacher.translationKey] || teacher.value;
    courseTeacherSelect.appendChild(option);
  });
}

function openCourseModal(courseName) {
  if (!courseModal || !courseModalTitle || !courseModalDescription || !courseModalFeatures) {
    return;
  }

  const language = getCurrentCourseLanguage();
  const selectedTranslations = courseTranslations[language] || courseTranslations.uz;
  const baseKey = courseKeys[courseName];

  if (!baseKey) {
    return;
  }

  courseModalTitle.textContent = selectedTranslations[`${baseKey}.title`] || "";
  courseModalDescription.textContent = selectedTranslations[`${baseKey}.description`] || "";
  courseModalFeatures.innerHTML = "";

  [1, 2, 3].forEach((number) => {
    const featureText = selectedTranslations[`${baseKey}.feature${number}`];

    if (featureText) {
      const item = document.createElement("li");
      item.textContent = featureText;
      courseModalFeatures.appendChild(item);
    }
  });

  setCourseTeacherOptions(courseName, selectedTranslations);

  courseModal.classList.add("course-modal--open");
  courseModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeCourseModal() {
  if (!courseModal) {
    return;
  }

  courseModal.classList.remove("course-modal--open");
  courseModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function renderFooterSocialIcons() {
  const footerSocials = document.querySelector(".footer__socials");

  if (!footerSocials) {
    return;
  }

  footerSocials.innerHTML = `
    <a href="https://www.instagram.com/globus_talim/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false">
        <path fill="currentColor" d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6Zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
      </svg>
    </a>
    <a href="https://t.me/GlobusEdu" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false">
        <path fill="currentColor" d="M21.7 4.3 18.4 20c-.25 1.1-.9 1.35-1.8.85l-5-3.7-2.4 2.35c-.27.27-.5.5-1.03.5l.37-5.1 9.28-8.38c.4-.36-.09-.56-.62-.2L5.74 13.55.8 12c-1.07-.34-1.1-1.07.22-1.58L20.3 3c.9-.34 1.68.2 1.4 1.3Z" />
      </svg>
    </a>
  `;
}

function setupCourseSliderControls() {
  if (!courseCardsTrack) {
    return;
  }

  const existingWrapper = courseCardsTrack.closest(".course-slider");

  if (!existingWrapper) {
    const wrapper = document.createElement("div");
    wrapper.className = "course-slider";
    courseCardsTrack.parentNode.insertBefore(wrapper, courseCardsTrack);
    wrapper.appendChild(courseCardsTrack);
  }

  const slider = courseCardsTrack.closest(".course-slider");

  if (!slider || slider.querySelector("[data-course-prev]") || slider.querySelector("[data-course-next]")) {
    return;
  }

  const prevButton = document.createElement("button");
  prevButton.type = "button";
  prevButton.className = "course-slider__btn course-slider__btn--prev";
  prevButton.setAttribute("aria-label", "Previous course");
  prevButton.setAttribute("data-course-prev", "");
  prevButton.textContent = "‹";

  const nextButton = document.createElement("button");
  nextButton.type = "button";
  nextButton.className = "course-slider__btn course-slider__btn--next";
  nextButton.setAttribute("aria-label", "Next course");
  nextButton.setAttribute("data-course-next", "");
  nextButton.textContent = "›";

  slider.insertBefore(prevButton, courseCardsTrack);
  slider.appendChild(nextButton);

  const scrollCourses = (direction) => {
    const firstCard = courseCardsTrack.querySelector(".course-card");
    const cardWidth = firstCard ? firstCard.offsetWidth : 280;
    const gap = 26;

    courseCardsTrack.scrollBy({
      left: direction * (cardWidth + gap),
      behavior: "smooth"
    });
  };

  prevButton.addEventListener("click", () => scrollCourses(-1));
  nextButton.addEventListener("click", () => scrollCourses(1));
}

courseCards.forEach((card) => {
  card.addEventListener("click", () => {
    openCourseModal(card.dataset.course);
  });
});

courseCloseButtons.forEach((button) => {
  button.addEventListener("click", closeCourseModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeCourseModal();
  }
});

translateCourseElements();
renderFooterSocialIcons();
setupCourseSliderControls();

if (languageSwitcher) {
  languageSwitcher.addEventListener("change", (event) => {
    translateCourseElements(event.target.value);
  });
}
