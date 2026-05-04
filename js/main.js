const burger = document.getElementById("burger");
const nav = document.getElementById("nav");
const languageSwitcher = document.getElementById("languageSwitcher");
const teachersTrack = document.getElementById("teachersTrack");
const teacherPrevButton = document.querySelector("[data-teacher-prev]");
const teacherNextButton = document.querySelector("[data-teacher-next]");

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

if (teachersTrack && teacherPrevButton && teacherNextButton) {
  const scrollTeachers = (direction) => {
    const firstCard = teachersTrack.querySelector(".teacher-card");
    const cardWidth = firstCard ? firstCard.offsetWidth : 320;
    const gap = 24;

    teachersTrack.scrollBy({
      left: direction * (cardWidth + gap),
      behavior: "smooth"
    });
  };

  teacherPrevButton.addEventListener("click", () => scrollTeachers(-1));
  teacherNextButton.addEventListener("click", () => scrollTeachers(1));
}

const translations = {
  uz: {
    "common.more": "Batafsil",

    "nav.home": "Bosh sahifa",
    "nav.about": "Biz haqimizda",
    "nav.courses": "Kurslar",
    "nav.teachers": "O‘qituvchilar",
    "nav.schedule": "Dars jadvali",
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

    "teachers.eyebrow": "O‘qituvchilar",
    "teachers.title": "Bizning o‘qituvchilar",
    "teachers.subtitle": "Har bir o‘qituvchi haqida qisqa ma’lumot va o‘quvchilarga naputstven so‘zlar.",
    "teachers.teacher1Text": "Til o‘rganishda eng muhimi — doimiylik va ishonch.",
    "teachers.teacher2Text": "Har bir dars sizni natijaga bir qadam yaqinlashtiradi.",
    "teachers.teacher3Text": "Xatolardan qo‘rqmang — ular o‘sishning bir qismi.",
    "teachers.teacher4Name": "O‘qituvchi 4",
    "teachers.teacher4Text": "Bu yerga o‘qituvchining qisqa so‘zi yoziladi.",
    "teachers.teacher5Name": "O‘qituvchi 5",
    "teachers.teacher5Text": "Bu yerga o‘qituvchining qisqa so‘zi yoziladi.",
    "teachers.teacher6Name": "O‘qituvchi 6",
    "teachers.teacher6Text": "Bu yerga o‘qituvchining qisqa so‘zi yoziladi.",
    "teachers.teacher7Name": "O‘qituvchi 7",
    "teachers.teacher7Text": "Bu yerga o‘qituvchining qisqa so‘zi yoziladi.",

    "schedule.eyebrow": "Dars jadvali",
    "schedule.title": "Asosiy jadval va LC-UP Student",
    "schedule.text": "Bu yerda asosiy dars jadvali bo‘ladi. O‘quvchilar esa LC-UP Student ilovasida aktual jadval, guruh va boshqa ma’lumotlarni ko‘rishadi.",
    "schedule.appText": "O‘quvchi uchun shaxsiy jadval, dars ma’lumotlari va markaz yangiliklari.",
    "schedule.appButton": "Maslahat olish",

    "reviews.eyebrow": "Fikrlar",
    "reviews.title": "O‘quvchilar fikri",
    "reviews.subtitle": "Keyinchalik bu yerga o‘quvchilar fotosurati va real fikrlari qo‘shiladi.",
    "reviews.text": "IELTS bo‘yicha aniq reja menga juda yordam berdi.",
    "reviews.emptyText": "Yangi o‘quvchi fikri uchun joy.",
    "reviews.emptyName": "O‘quvchi ismi",
    "reviews.emptyResult": "Natija / kurs",

    "stats.experience": "yillik tajriba",
    "stats.students": "o‘quvchilar",
    "stats.lessons": "darslar",
    "stats.directions": "yo‘nalishlar",

    "contacts.eyebrow": "Aloqa",
    "contacts.title": "Biz bilan bog‘laning",
    "contacts.text": "Ariza qoldiring, biz sizga mos kursni tanlashga yordam beramiz.",
    "contacts.address": "Pakhtaabad, O‘zbekiston",
    "contacts.hours": "Dushanba - Shanba: 08:30 - 18:30",
    "contacts.button": "Bog‘lanish",

    "form.name": "Ismingiz",
    "form.namePlaceholder": "Ismingiz",
    "form.phone": "Telefon",
    "form.phonePlaceholder": "+998",
    "form.message": "Xabar",
    "form.messagePlaceholder": "Xabaringiz",
    "form.button": "Yuborish",

    "footer.text": "GLOBUS — zamonaviy tillar markazi. Ingliz, IELTS, nemis va koreys tillarini ishonchli o‘rganing.",
    "footer.linksTitle": "Havolalar",
    "footer.navTitle": "Navigatsiya",
    "footer.coursesTitle": "Kurslar",
    "footer.contactsTitle": "Kontaktlar",
    "footer.rights": "Barcha huquqlar himoyalangan."
  },

  ru: {
    "common.more": "Подробнее",

    "nav.home": "Главная",
    "nav.about": "О нас",
    "nav.courses": "Курсы",
    "nav.teachers": "Преподаватели",
    "nav.schedule": "Расписание",
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

    "teachers.eyebrow": "Преподаватели",
    "teachers.title": "Наши преподаватели",
    "teachers.subtitle": "Короткая информация о каждом преподавателе и напутственные слова для учеников.",
    "teachers.teacher1Text": "Самое важное в изучении языка — регулярность и уверенность.",
    "teachers.teacher2Text": "Каждый урок приближает вас к результату на один шаг.",
    "teachers.teacher3Text": "Не бойтесь ошибок — они часть роста.",
    "teachers.teacher4Name": "Преподаватель 4",
    "teachers.teacher4Text": "Здесь будут короткие слова преподавателя.",
    "teachers.teacher5Name": "Преподаватель 5",
    "teachers.teacher5Text": "Здесь будут короткие слова преподавателя.",
    "teachers.teacher6Name": "Преподаватель 6",
    "teachers.teacher6Text": "Здесь будут короткие слова преподавателя.",
    "teachers.teacher7Name": "Преподаватель 7",
    "teachers.teacher7Text": "Здесь будут короткие слова преподавателя.",

    "schedule.eyebrow": "Расписание",
    "schedule.title": "Основное расписание и LC-UP Student",
    "schedule.text": "Здесь будет основное расписание занятий. Ученики смогут видеть актуальное расписание, группу и другую информацию в приложении LC-UP Student.",
    "schedule.appText": "Личное расписание ученика, информация об уроках и новости центра.",
    "schedule.appButton": "Получить консультацию",

    "reviews.eyebrow": "Отзывы",
    "reviews.title": "Отзывы учеников",
    "reviews.subtitle": "Позже здесь появятся фотографии учеников и реальные отзывы.",
    "reviews.text": "Чёткий план подготовки к IELTS очень помог мне.",
    "reviews.emptyText": "Место для нового отзыва ученика.",
    "reviews.emptyName": "Имя ученика",
    "reviews.emptyResult": "Результат / курс",

    "stats.experience": "лет опыта",
    "stats.students": "учеников",
    "stats.lessons": "уроков",
    "stats.directions": "направления",

    "contacts.eyebrow": "Контакты",
    "contacts.title": "Свяжитесь с нами",
    "contacts.text": "Оставьте заявку, и мы поможем подобрать подходящий курс.",
    "contacts.address": "Пахтаабад, Узбекистан",
    "contacts.hours": "Понедельник - Суббота: 08:30 - 18:30",
    "contacts.button": "Связаться",

    "form.name": "Ваше имя",
    "form.namePlaceholder": "Ваше имя",
    "form.phone": "Телефон",
    "form.phonePlaceholder": "+998",
    "form.message": "Сообщение",
    "form.messagePlaceholder": "Сообщение",
    "form.button": "Отправить",

    "footer.text": "GLOBUS — современный языковой центр. Изучайте английский, IELTS, немецкий и корейский уверенно.",
    "footer.linksTitle": "Ссылки",
    "footer.navTitle": "Навигация",
    "footer.coursesTitle": "Курсы",
    "footer.contactsTitle": "Контакты",
    "footer.rights": "Все права защищены."
  },

  en: {
    "common.more": "Learn more",

    "nav.home": "Home",
    "nav.about": "About us",
    "nav.courses": "Courses",
    "nav.teachers": "Teachers",
    "nav.schedule": "Schedule",
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

    "teachers.eyebrow": "Teachers",
    "teachers.title": "Our teachers",
    "teachers.subtitle": "Short information about every teacher and encouraging words for students.",
    "teachers.teacher1Text": "The most important things in language learning are consistency and confidence.",
    "teachers.teacher2Text": "Every lesson brings you one step closer to your result.",
    "teachers.teacher3Text": "Do not be afraid of mistakes — they are part of growth.",
    "teachers.teacher4Name": "Teacher 4",
    "teachers.teacher4Text": "A short message from the teacher will be written here.",
    "teachers.teacher5Name": "Teacher 5",
    "teachers.teacher5Text": "A short message from the teacher will be written here.",
    "teachers.teacher6Name": "Teacher 6",
    "teachers.teacher6Text": "A short message from the teacher will be written here.",
    "teachers.teacher7Name": "Teacher 7",
    "teachers.teacher7Text": "A short message from the teacher will be written here.",

    "schedule.eyebrow": "Schedule",
    "schedule.title": "Main schedule and LC-UP Student",
    "schedule.text": "The main lesson schedule will be shown here. Students will see the current schedule, group and other information in the LC-UP Student app.",
    "schedule.appText": "A personal student schedule, lesson information and centre updates.",
    "schedule.appButton": "Get consultation",

    "reviews.eyebrow": "Reviews",
    "reviews.title": "Student feedback",
    "reviews.subtitle": "Student photos and real reviews will be added here later.",
    "reviews.text": "A clear IELTS preparation plan helped me a lot.",
    "reviews.emptyText": "Space for a new student review.",
    "reviews.emptyName": "Student name",
    "reviews.emptyResult": "Result / course",

    "stats.experience": "years of experience",
    "stats.students": "students",
    "stats.lessons": "lessons",
    "stats.directions": "directions",

    "contacts.eyebrow": "Contacts",
    "contacts.title": "Contact us",
    "contacts.text": "Leave a request and we will help you choose the right course.",
    "contacts.address": "Pakhtaabad, Uzbekistan",
    "contacts.hours": "Monday - Saturday: 08:30 - 18:30",
    "contacts.button": "Contact us",

    "form.name": "Your name",
    "form.namePlaceholder": "Your name",
    "form.phone": "Phone",
    "form.phonePlaceholder": "+998",
    "form.message": "Message",
    "form.messagePlaceholder": "Message",
    "form.button": "Send",

    "footer.text": "GLOBUS is a modern language centre. Learn English, IELTS, German and Korean with confidence.",
    "footer.linksTitle": "Links",
    "footer.navTitle": "Navigation",
    "footer.coursesTitle": "Courses",
    "footer.contactsTitle": "Contacts",
    "footer.rights": "All rights reserved."
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

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.getAttribute("data-i18n-placeholder");

    if (selectedTranslations[key]) {
      element.setAttribute("placeholder", selectedTranslations[key]);
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
