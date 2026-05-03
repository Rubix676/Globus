const burger = document.getElementById("burger");
const nav = document.getElementById("nav");
const languageSwitcher = document.getElementById("languageSwitcher");

if (burger && nav) {
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav--open");
  });
}

const translations = {
  uz: {
    "nav.home": "Bosh sahifa",
    "nav.about": "Biz haqimizda",
    "nav.courses": "Kurslar",
    "nav.reviews": "Fikrlar",
    "nav.schedule": "Jadval",
    "nav.contacts": "Kontaktlar",

    "header.cta": "Ro‘yxatdan o‘tish",

    "courses.english": "Ingliz tili IELTS / CEFR",
    "courses.matematika": "Matematika",
    "courses.german": "Nemis tili",
    "courses.korean": "Koreys tili",
    "courses.ielts": "SAT",

    "hero.badge": " Tillar dunyoni ochadi",
    "hero.title": "Chet tillarini GLOBUS bilan ishonch bilan o‘rganing",
    "hero.text": "Ingliz, nemis, koreys tillari va IELTS/CEFR tayyorgarligi. Sizga qulay formatda online va offline ta’lim.",
    "hero.primaryBtn": "Kursga yozilish",
    "hero.secondaryBtn": "Kurslarni ko‘rish",
    "hero.statExperience": "yillik tajriba",
    "hero.statStudents": "talaba",
    "hero.statLanguages": "til"
  },

  ru: {
    "nav.home": "Главная",
    "nav.about": "О нас",
    "nav.courses": "Курсы",
    "nav.reviews": "Отзывы",
    "nav.schedule": "Расписание",
    "nav.contacts": "Контакты",

    "header.cta": "Записаться",

    "courses.english": "Английский язык IELTS / CEFR",
    "courses.matematika": "Математика",
    "courses.german": "Немецкий язык",
    "courses.korean": "Корейский язык",
    "courses.ielts": "SAT",

    "hero.badge": " Языки открывают мир",
    "hero.title": "Изучайте иностранные языки уверенно с GLOBUS",
    "hero.text": "Английский, немецкий, корейский и подготовка к IELTS/CEFR. Онлайн и офлайн обучение в удобном для вас формате.",
    "hero.primaryBtn": "Записаться на курс",
    "hero.secondaryBtn": "Смотреть курсы",
    "hero.statExperience": "лет опыта",
    "hero.statStudents": "студентов",
    "hero.statLanguages": "языков"
  },

  en: {
    "nav.home": "Home",
    "nav.about": "About us",
    "nav.courses": "Courses",
    "nav.reviews": "Reviews",
    "nav.schedule": "Schedule",
    "nav.contacts": "Contacts",

    "header.cta": "Sign up",

    "courses.english": "English",
    "courses.matematika": "Math",
    "courses.german": "German",
    "courses.korean": "Korean",
    "courses.ielts": "IELTS / CEFR",

    "hero.badge": " Languages open the world",
    "hero.title": "Learn foreign languages confidently with GLOBUS",
    "hero.text": "English, German, Korean and IELTS/CEFR preparation. Online and offline lessons in a format that suits you.",
    "hero.primaryBtn": "Join a course",
    "hero.secondaryBtn": "View courses",
    "hero.statExperience": "years of experience",
    "hero.statStudents": "students",
    "hero.statLanguages": "languages"
  }
};

function setLanguage(language) {
  const selectedTranslations = translations[language];

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");

    if (selectedTranslations[key]) {
      element.textContent = selectedTranslations[key];
    }
  });

  document.documentElement.lang = language;
  localStorage.setItem("siteLanguage", language);

  if (languageSwitcher) {
    languageSwitcher.value = language;
  }
}

const savedLanguage = localStorage.getItem("siteLanguage") || "uz";

setLanguage(savedLanguage);

if (languageSwitcher) {
  languageSwitcher.addEventListener("change", (event) => {
    setLanguage(event.target.value);
  });
}