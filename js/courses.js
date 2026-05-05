const courseModal = document.getElementById("courseModal");
const courseModalTitle = document.getElementById("courseModalTitle");
const courseModalDescription = document.getElementById("courseModalDescription");
const courseModalFeatures = document.getElementById("courseModalFeatures");
const courseCards = document.querySelectorAll("[data-course]");
const courseCloseButtons = document.querySelectorAll("[data-course-close]");

const courseTranslations = {
  uz: {
    "courses.eyebrow": "Mashhur kurslar",
    "courses.title": "Kursni tanlang",
    "courses.subtitle": "Asosiy yo‘nalishlar: ingliz tili, IELTS/CEFR, matematika, nemis, koreys va ona tili.",
    "course.more": "Batafsil",

    "course.english.title": "Ingliz tili IELTS/CEFR",
    "course.english.short": "General English, IELTS va CEFR tayyorgarligi.",
    "course.english.description": "Ingliz tilini umumiy darajadan imtihon tayyorgarligigacha o‘rganing. Sinov darsi orqali darajangiz aniqlanadi va mos yo‘nalish tavsiya qilinadi.",
    "course.english.feature1": "IELTS va CEFR imtihonlariga tayyorgarlik",
    "course.english.feature2": "Speaking, grammar, listening, reading va writing bo‘yicha mashg‘ulotlar",
    "course.english.feature3": "Darajaga qarab guruh yoki individual yondashuv",

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
    "courses.subtitle": "Основные направления: английский, IELTS/CEFR, математика, немецкий, корейский и родной язык.",
    "course.more": "Подробнее",

    "course.english.title": "Английский IELTS/CEFR",
    "course.english.short": "General English, подготовка к IELTS и CEFR.",
    "course.english.description": "Изучайте английский от общего уровня до подготовки к экзаменам. На пробном уроке мы определим ваш уровень и подберём подходящее направление.",
    "course.english.feature1": "Подготовка к IELTS и CEFR",
    "course.english.feature2": "Speaking, grammar, listening, reading и writing",
    "course.english.feature3": "Групповой или индивидуальный подход по уровню",

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
    "courses.subtitle": "Main directions: English, IELTS/CEFR, mathematics, German, Korean and native language.",
    "course.more": "Learn more",

    "course.english.title": "English IELTS/CEFR",
    "course.english.short": "General English, IELTS and CEFR preparation.",
    "course.english.description": "Learn English from general level to exam preparation. A trial lesson helps us identify your level and recommend the right direction.",
    "course.english.feature1": "IELTS and CEFR exam preparation",
    "course.english.feature2": "Speaking, grammar, listening, reading and writing practice",
    "course.english.feature3": "Group or individual approach based on your level",

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
  math: "course.math",
  german: "course.german",
  korean: "course.korean",
  native: "course.native"
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

if (languageSwitcher) {
  languageSwitcher.addEventListener("change", (event) => {
    translateCourseElements(event.target.value);
  });
}
