const burger = document.getElementById("burger");
const nav = document.getElementById("nav");
const languageSwitcher = document.getElementById("languageSwitcher");

if (burger && nav) {
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav--open");
    const isOpen = nav.classList.contains("nav--open");
    burger.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("nav--open");
      burger.setAttribute("aria-expanded", "false");
    });
  });
}

const translations = {
  uz: {
    "nav.home": "Bosh sahifa",
    "nav.about": "Biz haqimizda",
    "nav.courses": "Kurslar",
    "nav.reviews": "Fikrlar",
    "nav.contacts": "Kontaktlar",
    "header.cta": "Ro‘yxatdan o‘tish",

    "hero.badge": "Tillar dunyoni ochadi",
    "hero.title": "Chet tillarini GLOBUS bilan ishonchli o‘rganing",
    "hero.text": "Ingliz, nemis, koreys tillari va IELTS tayyorgarligi. Online va offline formatda zamonaviy ta’lim.",
    "hero.primaryBtn": "Kursga yozilish",
    "hero.secondaryBtn": "Kurslarni ko‘rish",
    "hero.statExperience": "yillik tajriba",
    "hero.statStudents": "talaba",
    "hero.statLanguages": "til",

    "courses.eyebrow": "Mashhur kurslar",
    "courses.title": "Kursni tanlang",
    "courses.subtitle": "Ingliz tili, IELTS, nemis va koreys tili.",
    "courses.english": "Ingliz tili",
    "courses.englishText": "General English va speaking.",
    "courses.ielts": "IELTS",
    "courses.ieltsText": "Mock test va feedback.",
    "courses.german": "Nemis tili",
    "courses.germanText": "A1-C1 darslari.",
    "courses.korean": "Koreys tili",
    "courses.koreanText": "TOPIK tayyorgarligi.",

    "about.eyebrow": "Nima uchun GLOBUS?",
    "about.title": "Qulay va natijaga yo‘naltirilgan ta’lim",
    "about.subtitle": "Zamonaviy metodika va aniq progress.",
    "about.teachersTitle": "Tajribali o‘qituvchilar",
    "about.teachersText": "Darslar sodda va amaliy.",
    "about.scheduleTitle": "Qulay jadval",
    "about.scheduleText": "Online yoki offline.",
    "about.methodTitle": "Zamonaviy metodika",
    "about.methodText": "Real-life practice.",
    "about.resultTitle": "Aniq natija",
    "about.resultText": "Feedback va progress.",

    "reviews.eyebrow": "Fikrlar",
    "reviews.title": "O‘quvchilar fikri",
    "reviews.text": "IELTS bo‘yicha aniq reja menga juda yordam berdi.",

    "stats.experience": "yillik tajriba",
    "stats.students": "o‘quvchilar",
    "stats.lessons": "darslar",
    "stats.directions": "yo‘nalishlar",

    "contacts.eyebrow": "Aloqa",
    "contacts.title": "Bepul maslahatga yoziling",
    "contacts.text": "Mos kursni tanlashga yordam beramiz.",
    "contacts.button": "Bog‘lanish",

    "footer.text": "GLOBUS - zamonaviy tillar markazi.",
    "footer.linksTitle": "Havolalar"
  },

  ru: {
    "nav.home": "Главная",
    "nav.about": "О нас",
    "nav.courses": "Курсы",
    "nav.reviews": "Отзывы",
    "nav.contacts": "Контакты",
    "header.cta": "Записаться",

    "hero.badge": "Языки открывают мир",
    "hero.title": "Изучайте языки уверенно вместе с GLOBUS",
    "hero.text": "Английский, немецкий, корейский и подготовка к IELTS. Современное обучение онлайн и офлайн.",
    "hero.primaryBtn": "Записаться на курс",
    "hero.secondaryBtn": "Посмотреть курсы",
    "hero.statExperience": "лет опыта",
    "hero.statStudents": "студентов",
    "hero.statLanguages": "языка",

    "courses.eyebrow": "Популярные курсы",
    "courses.title": "Выберите курс",
    "courses.subtitle": "Английский, IELTS, немецкий и корейский язык.",
    "courses.english": "Английский язык",
    "courses.englishText": "General English и разговорная практика.",
    "courses.ielts": "IELTS",
    "courses.ieltsText": "Пробные тесты и обратная связь.",
    "courses.german": "Немецкий язык",
    "courses.germanText": "Занятия уровней A1-C1.",
    "courses.korean": "Корейский язык",
    "courses.koreanText": "Подготовка к TOPIK.",

    "about.eyebrow": "Почему GLOBUS?",
    "about.title": "Удобное обучение с фокусом на результат",
    "about.subtitle": "Современная методика и понятный прогресс.",
    "about.teachersTitle": "Опытные преподаватели",
    "about.teachersText": "Уроки простые, понятные и практичные.",
    "about.scheduleTitle": "Удобное расписание",
    "about.scheduleText": "Онлайн или офлайн.",
    "about.methodTitle": "Современная методика",
    "about.methodText": "Практика на реальных ситуациях.",
    "about.resultTitle": "Понятный результат",
    "about.resultText": "Обратная связь и прогресс.",

    "reviews.eyebrow": "Отзывы",
    "reviews.title": "Отзывы учеников",
    "reviews.text": "Чёткий план подготовки к IELTS очень помог мне.",

    "stats.experience": "лет опыта",
    "stats.students": "учеников",
    "stats.lessons": "уроков",
    "stats.directions": "направления",

    "contacts.eyebrow": "Контакты",
    "contacts.title": "Запишитесь на бесплатную консультацию",
    "contacts.text": "Мы поможем подобрать подходящий курс.",
    "contacts.button": "Связаться",

    "footer.text": "GLOBUS — современный языковой центр.",
    "footer.linksTitle": "Ссылки"
  },

  en: {
    "nav.home": "Home",
    "nav.about": "About us",
    "nav.courses": "Courses",
    "nav.reviews": "Reviews",
    "nav.contacts": "Contacts",
    "header.cta": "Sign up",

    "hero.badge": "Languages open the world",
    "hero.title": "Learn languages confidently with GLOBUS",
    "hero.text": "English, German, Korean and IELTS preparation. Modern online and offline learning.",
    "hero.primaryBtn": "Join a course",
    "hero.secondaryBtn": "View courses",
    "hero.statExperience": "years of experience",
    "hero.statStudents": "students",
    "hero.statLanguages": "languages",

    "courses.eyebrow": "Popular courses",
    "courses.title": "Choose a course",
    "courses.subtitle": "English, IELTS, German and Korean.",
    "courses.english": "English",
    "courses.englishText": "General English and speaking practice.",
    "courses.ielts": "IELTS",
    "courses.ieltsText": "Mock tests and feedback.",
    "courses.german": "German",
    "courses.germanText": "A1-C1 lessons.",
    "courses.korean": "Korean",
    "courses.koreanText": "TOPIK preparation.",

    "about.eyebrow": "Why GLOBUS?",
    "about.title": "Convenient learning focused on results",
    "about.subtitle": "Modern methodology and clear progress.",
    "about.teachersTitle": "Experienced teachers",
    "about.teachersText": "Simple, practical and clear lessons.",
    "about.scheduleTitle": "Flexible schedule",
    "about.scheduleText": "Online or offline.",
    "about.methodTitle": "Modern methodology",
    "about.methodText": "Real-life practice.",
    "about.resultTitle": "Clear result",
    "about.resultText": "Feedback and progress tracking.",

    "reviews.eyebrow": "Reviews",
    "reviews.title": "Student feedback",
    "reviews.text": "A clear IELTS preparation plan helped me a lot.",

    "stats.experience": "years of experience",
    "stats.students": "students",
    "stats.lessons": "lessons",
    "stats.directions": "directions",

    "contacts.eyebrow": "Contacts",
    "contacts.title": "Book a free consultation",
    "contacts.text": "We will help you choose the right course.",
    "contacts.button": "Contact us",

    "footer.text": "GLOBUS is a modern language centre.",
    "footer.linksTitle": "Links"
  }
};

function setLanguage(language) {
  const selectedTranslations = translations[language] || translations.uz;

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