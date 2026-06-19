/* GLOBUS Edu 2026 — app logic (renders sections, i18n, modals, lead form, UX). */
(() => {
  "use strict";
  const D = window.GLOBUS_DATA;
  if (!D) return;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

  /* ---------- extra i18n for the new sections ---------- */
  const EXTRA = {
    uz: {
      "nav.reviews": "Fikrlar",
      "hero.badge": "Pakhtaabaddagi o‘quv markaz",
      "hero.card1Label": "O‘rtacha natija", "hero.card2Label": "Faol o‘quvchilar",
      "why.eyebrow": "Nega GLOBUS?", "why.title": "Nima uchun bizni tanlashadi",
      "process.eyebrow": "Jarayon", "process.title": "Qanday boshlanadi",
      "faq.eyebrow": "Savol-javob", "faq.title": "Tez-tez beriladigan savollar",
      "cta.title": "Sinov darsiga yoziling", "cta.text": "Ariza qoldiring — biz bog‘lanib, darajangizni aniqlaymiz va mos yo‘nalishni tavsiya qilamiz.",
      "stats.students": "o‘quvchi", "stats.groups": "guruh", "stats.satisfaction": "mamnunlik", "stats.teachers": "o‘qituvchi",
      "courses.open": "Batafsil", "modal.teachersFor": "O‘qituvchilar"
    },
    ru: {
      "nav.reviews": "Отзывы",
      "hero.badge": "Учебный центр в Пахтаабаде",
      "hero.card1Label": "Средний результат", "hero.card2Label": "Активные ученики",
      "why.eyebrow": "Почему GLOBUS?", "why.title": "Почему выбирают нас",
      "process.eyebrow": "Процесс", "process.title": "Как всё начинается",
      "faq.eyebrow": "Вопросы и ответы", "faq.title": "Частые вопросы",
      "cta.title": "Запишитесь на пробный урок", "cta.text": "Оставьте заявку — мы свяжемся, определим ваш уровень и подберём направление.",
      "stats.students": "учеников", "stats.groups": "групп", "stats.satisfaction": "довольны", "stats.teachers": "преподавателей",
      "courses.open": "Подробнее", "modal.teachersFor": "Преподаватели"
    },
    en: {
      "nav.reviews": "Reviews",
      "hero.badge": "Learning centre in Pakhtaabad",
      "hero.card1Label": "Average result", "hero.card2Label": "Active students",
      "why.eyebrow": "Why GLOBUS?", "why.title": "Why students choose us",
      "process.eyebrow": "Process", "process.title": "How it starts",
      "faq.eyebrow": "Q&A", "faq.title": "Frequently asked questions",
      "cta.title": "Book a trial lesson", "cta.text": "Leave a request — we'll contact you, assess your level and recommend a direction.",
      "stats.students": "students", "stats.groups": "groups", "stats.satisfaction": "satisfaction", "stats.teachers": "teachers",
      "courses.open": "Learn more", "modal.teachersFor": "Teachers"
    }
  };
  Object.keys(EXTRA).forEach((l) => Object.assign(D.I18N[l], EXTRA[l]));

  const STATS = [
    { value: "1000+", key: "stats.students" },
    { value: "50+", key: "stats.groups" },
    { value: "95%", key: "stats.satisfaction" },
    { value: "12+", key: "stats.teachers" }
  ];

  const COURSE_ICON = {
    english: "M4 5h10v14H6a2 2 0 0 1-2-2V5Zm10 0h6v12a2 2 0 0 1-2 2h-4V5Z",
    ielts: "M12 2l3 3-3 3-3-3 3-3Zm0 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z",
    russian: "M4 4h16v12H7l-3 4V4Z",
    math: "M5 5h14M9 5v14M5 12h14",
    korean: "M12 3a9 9 0 1 0 9 9 9 9 0 0 0-9-9Zm0 4v10",
    german: "M5 5h14v4H5Zm0 6h14v4H5Zm0 6h14",
    compit: "M8 9l-3 3 3 3m8-6l3 3-3 3M13 6l-2 12",
    native: "M5 19l7-14 7 14M8 13h8"
  };
  // 8 course cards (reuse COURSES content where available)
  const COURSE_CARDS = [
    { key: "english", course: "english" },
    { key: "ielts", course: "english", title: { uz: "IELTS tayyorgarlik", ru: "Подготовка к IELTS", en: "IELTS preparation" },
      short: { uz: "Maqsadli band uchun intensiv IELTS dasturi.", ru: "Интенсивная программа IELTS под целевой балл.", en: "Intensive IELTS program for your target band." } },
    { key: "russian", course: "russian" },
    { key: "math", course: "math" },
    { key: "korean", course: "korean" },
    { key: "german", course: "german" },
    { key: "compit", course: "compit", title: { uz: "Kompyuter / IT", ru: "Компьютер / IT", en: "Computer / IT" } },
    { key: "native", course: "native" }
  ];

  const BENTO = [
    { size: "b-2c b-2r", t: { uz: "Tajribali o‘qituvchilar", ru: "Опытные преподаватели", en: "Experienced teachers" }, d: { uz: "Natijaga yo‘naltirilgan, har bir o‘quvchiga individual yondashadigan jamoa.", ru: "Команда, нацеленная на результат и индивидуальный подход к каждому.", en: "A result-driven team with an individual approach to every student." } },
    { size: "", t: { uz: "Individual yondashuv", ru: "Индивидуальный подход", en: "Individual approach" }, d: { uz: "Daraja va maqsadga mos reja.", ru: "План под уровень и цель.", en: "A plan for your level and goal." } },
    { size: "", t: { uz: "Zamonaviy metodika", ru: "Современная методика", en: "Modern methodology" }, d: { uz: "Amaliy, jonli darslar.", ru: "Практичные, живые занятия.", en: "Practical, lively lessons." } },
    { size: "b-2c", t: { uz: "Natijaga yo‘naltirilgan ta'lim", ru: "Обучение на результат", en: "Result-oriented learning" }, d: { uz: "Imtihon, sertifikat yoki amaliy maqsad — aniq natijaga ishlaymiz.", ru: "Экзамен, сертификат или практическая цель — работаем на конкретный результат.", en: "Exam, certificate or practical goal — we work toward a concrete result." } },
    { size: "", t: { uz: "Qulay jadval", ru: "Удобный график", en: "Flexible schedule" }, d: { uz: "Ertalabki va kunduzgi guruhlar.", ru: "Утренние и дневные группы.", en: "Morning and daytime groups." } },
    { size: "", t: { uz: "Sinov darsi", ru: "Пробный урок", en: "Trial lesson" }, d: { uz: "Avval ko‘ramiz, keyin tavsiya qilamiz.", ru: "Сначала смотрим, потом рекомендуем.", en: "First we assess, then we recommend." } }
  ];

  const PROCESS = [
    { t: { uz: "Ariza qoldirasiz", ru: "Оставляете заявку", en: "You leave a request" }, d: { uz: "Ism, telefon va yo‘nalish.", ru: "Имя, телефон и направление.", en: "Name, phone and direction." } },
    { t: { uz: "Daraja aniqlanadi", ru: "Определяем уровень", en: "We assess your level" }, d: { uz: "Sinov darsi orqali.", ru: "Через пробный урок.", en: "Through a trial lesson." } },
    { t: { uz: "Mos guruh tanlanadi", ru: "Подбираем группу", en: "We pick a group" }, d: { uz: "Daraja va jadvalga qarab.", ru: "По уровню и графику.", en: "Based on level and schedule." } },
    { t: { uz: "Darslar boshlanadi", ru: "Начинаются занятия", en: "Lessons begin" }, d: { uz: "Aniq reja bilan.", ru: "С чётким планом.", en: "With a clear plan." } }
  ];

  const FAQ = [
    { q: { uz: "Sinov darsi pullikmi?", ru: "Пробный урок платный?", en: "Is the trial lesson paid?" }, a: { uz: "Sinov darsida darajangizni aniqlaymiz va mos yo‘nalishni tavsiya qilamiz. Tafsilotlarni telefon orqali aytamiz.", ru: "На пробном уроке определяем уровень и подбираем направление. Детали уточняем по телефону.", en: "In the trial lesson we assess your level and recommend a direction. Details are confirmed by phone." } },
    { q: { uz: "Qanday yo‘nalishlar bor?", ru: "Какие есть направления?", en: "What directions do you offer?" }, a: { uz: "Ingliz tili, IELTS, rus tili, matematika, koreys, nemis, IT va ona tili.", ru: "Английский, IELTS, русский, математика, корейский, немецкий, IT и родной язык.", en: "English, IELTS, Russian, mathematics, Korean, German, IT and native language." } },
    { q: { uz: "Guruhlar qancha kishidan iborat?", ru: "Сколько человек в группе?", en: "How large are the groups?" }, a: { uz: "Guruhlar ixcham, har bir o‘quvchiga e'tibor qaratiladi. Individual format ham mavjud.", ru: "Группы небольшие, внимание каждому ученику. Есть и индивидуальный формат.", en: "Groups are small with attention to each student. Individual format is also available." } },
    { q: { uz: "Dars jadvali qanday?", ru: "Какое расписание?", en: "What is the schedule?" }, a: { uz: "Ertalabki va kunduzgi guruhlar. Aniq vaqt maslahatdan keyin kelishiladi.", ru: "Утренние и дневные группы. Точное время согласуем после консультации.", en: "Morning and daytime groups. Exact time is agreed after a consultation." } },
    { q: { uz: "Noldan boshlash mumkinmi?", ru: "Можно начать с нуля?", en: "Can I start from zero?" }, a: { uz: "Ha, har qanday darajadan boshlash mumkin. Sinov darsi boshlang‘ich nuqtani ko‘rsatadi.", ru: "Да, можно начать с любого уровня. Пробный урок покажет стартовую точку.", en: "Yes, you can start from any level. The trial lesson shows your starting point." } },
    { q: { uz: "Markaz qayerda joylashgan?", ru: "Где находится центр?", en: "Where is the centre located?" }, a: { uz: "Pakhtaabad, O‘zbekiston. Manzil va mo‘ljalni telefon orqali aytamiz.", ru: "Пахтаабад, Узбекистан. Адрес и ориентир подскажем по телефону.", en: "Pakhtaabad, Uzbekistan. We'll share the exact address by phone." } }
  ];

  const EXTRA_REVIEWS = [
    { name: "Dilnoza Rahimova", result: { uz: "Koreys tili · TOPIK", ru: "Корейский · TOPIK", en: "Korean · TOPIK" }, stars: 5,
      text: { uz: "O‘qituvchining sabri va aniq metodikasi natija berdi.", ru: "Терпение преподавателя и чёткая методика дали результат.", en: "The teacher's patience and clear method paid off." } },
    { name: "Bekzod Tursunov", result: { uz: "IT · Frontend", ru: "IT · Frontend", en: "IT · Frontend" }, stars: 5,
      text: { uz: "Amaliy loyihalar bilan o‘rgandim, bu juda muhim bo‘ldi.", ru: "Учился на практических проектах — это было ключевым.", en: "I learned through practical projects, which was key." } }
  ];

  /* ---------- i18n ---------- */
  const langOf = () => localStorage.getItem("globusLang") || "uz";
  const t = (key) => (D.I18N[langOf()] && D.I18N[langOf()][key]) || key;
  const L = (obj) => (obj ? (obj[langOf()] || obj.uz) : "");

  function applyI18n() {
    const dict = D.I18N[langOf()] || {};
    $$("[data-i18n]").forEach((el) => { const v = dict[el.getAttribute("data-i18n")]; if (v != null) el.textContent = v; });
    $$("[data-i18n-ph]").forEach((el) => { const v = dict[el.getAttribute("data-i18n-ph")]; if (v != null) el.placeholder = v; });
    document.documentElement.lang = langOf();
  }

  function buildLangSwitch(container) {
    if (!container) return;
    container.innerHTML = ["uz", "ru", "en"].map((l) =>
      `<button class="lang-btn ${l === langOf() ? "active" : ""}" data-lang="${l}">${l.toUpperCase()}</button>`).join("");
    $$("[data-lang]", container).forEach((b) => b.addEventListener("click", () => {
      localStorage.setItem("globusLang", b.getAttribute("data-lang"));
      renderAll();
    }));
  }

  /* ---------- renderers ---------- */
  function renderStats() {
    $("#statsGrid").innerHTML = STATS.map((s, i) => `
      <div class="reveal glass-card rounded-3xl p-7 hover:shadow-2xl hover:shadow-brand-700/15 hover:-translate-y-1 transition" data-delay="${i % 4}">
        <div class="text-4xl font-extrabold bg-gradient-to-br from-brand-700 to-brand-500 bg-clip-text text-transparent">${s.value}</div>
        <div class="mt-2 text-slate-500 font-medium">${t(s.key)}</div>
      </div>`).join("");
  }

  function courseTitle(card) {
    if (card.title) return L(card.title);
    const c = D.COURSES[card.course];
    return c ? L(c.title) : card.key;
  }
  function courseShort(card) {
    if (card.short) return L(card.short);
    const c = D.COURSES[card.course];
    return c ? L(c.short) : "";
  }
  function renderCourses() {
    $("#coursesGrid").innerHTML = COURSE_CARDS.map((card, i) => `
      <button class="course-card reveal text-left glass-card rounded-3xl p-6 flex flex-col gap-4" data-delay="${i % 4}" data-course="${card.key}">
        <span class="w-12 h-12 grid place-items-center rounded-2xl bg-brand-50 text-brand-700">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="${COURSE_ICON[card.key] || COURSE_ICON.english}"/></svg>
        </span>
        <div>
          <h3 class="text-lg font-bold text-ink">${courseTitle(card)}</h3>
          <p class="mt-1.5 text-sm text-slate-500 leading-relaxed">${courseShort(card)}</p>
        </div>
        <span class="mt-auto text-sm font-semibold text-brand-700 inline-flex items-center gap-1">${t("courses.open")} →</span>
      </button>`).join("");
    $$("#coursesGrid [data-course]").forEach((b) => b.addEventListener("click", () => openCourse(b.getAttribute("data-course"))));
  }

  function renderBento() {
    $("#bento").innerHTML = BENTO.map((b, i) => `
      <div class="reveal ${b.size} glass-card rounded-3xl p-7 flex flex-col justify-end ${b.size.includes("b-2r") ? "bg-gradient-to-br from-brand-700 to-brand-500 text-white" : ""}" data-delay="${i % 4}">
        <h3 class="text-xl font-bold ${b.size.includes("b-2r") ? "text-white" : "text-ink"}">${L(b.t)}</h3>
        <p class="mt-2 text-sm ${b.size.includes("b-2r") ? "text-white/85" : "text-slate-500"} leading-relaxed">${L(b.d)}</p>
      </div>`).join("");
  }

  function renderTimeline() {
    $("#timeline").innerHTML = PROCESS.map((p, i) => `
      <div class="reveal relative" data-delay="${i % 4}">
        <div class="relative z-10 w-[76px] h-[76px] grid place-items-center rounded-2xl bg-white border border-slate-200 shadow-lg text-2xl font-extrabold text-brand-700">${i + 1}</div>
        <h3 class="mt-5 text-lg font-bold">${L(p.t)}</h3>
        <p class="mt-2 text-sm text-slate-500 leading-relaxed">${L(p.d)}</p>
      </div>`).join("");
  }

  function teacherImg(tc, big) {
    if (tc.image) return `<img src="${tc.image}" alt="${tc.name}" class="t-img w-full h-full object-cover object-top" loading="lazy" />`;
    const ltr = (tc.name || "?").trim()[0] || "?";
    return `<div class="t-img w-full h-full grid place-items-center bg-gradient-to-br from-brand-100 to-brand-50 text-brand-700 font-extrabold" style="font-size:${big ? 96 : 48}px">${ltr}</div>`;
  }
  function renderTeachers() {
    const feat = D.TEACHERS[0];
    const rest = D.TEACHERS.slice(1);
    $("#teacherFeatured").innerHTML = `
      <button class="teacher-card reveal w-full grid md:grid-cols-2 gap-0 rounded-[28px] overflow-hidden bg-white border border-slate-200 text-left" data-teacher="${feat.id}">
        <div class="relative h-72 md:h-auto bg-brand-50 overflow-hidden">${teacherImg(feat, true)}</div>
        <div class="p-8 flex flex-col justify-center">
          <span class="inline-flex w-fit items-center rounded-full bg-brand-50 text-brand-700 px-3 py-1 text-xs font-bold">${L(feat.subject)}</span>
          <h3 class="mt-4 text-2xl font-extrabold">${feat.name}</h3>
          <p class="mt-3 text-slate-500 leading-relaxed">${L(feat.short)}</p>
          <ul class="mt-4 flex flex-col gap-2 text-sm text-slate-600">${L(feat.bullets).map((x) => `<li class="flex gap-2"><span class="text-brand-600">✓</span>${x}</li>`).join("")}</ul>
        </div>
      </button>`;
    $("#teachersGrid").innerHTML = rest.map((tc, i) => `
      <button class="teacher-card reveal rounded-3xl overflow-hidden bg-white border border-slate-200 text-left" data-delay="${i % 4}" data-teacher="${tc.id}">
        <div class="relative h-56 bg-brand-50 overflow-hidden">
          ${teacherImg(tc, false)}
          <div class="t-overlay absolute inset-0 bg-gradient-to-t from-brand-700/85 via-brand-700/30 to-transparent p-4 flex flex-col justify-end text-white">
            <p class="text-sm leading-snug">${L(tc.short)}</p>
          </div>
        </div>
        <div class="p-4">
          <h3 class="font-bold text-ink leading-tight">${tc.name}</h3>
          <p class="mt-1 text-xs text-brand-700 font-semibold">${L(tc.subject)}</p>
        </div>
      </button>`).join("");
    $$("[data-teacher]").forEach((b) => b.addEventListener("click", () => openTeacher(b.getAttribute("data-teacher"))));
  }

  function starSvg(n) { let s = ""; for (let i = 0; i < n; i++) s += D.ICONS.star; return `<span class="stars">${s}</span>`; }
  function renderReviews() {
    const all = D.REVIEWS.concat(EXTRA_REVIEWS);
    $("#reviewsMasonry").innerHTML = all.map((r) => `
      <div class="float-soft glass-card rounded-3xl p-6">
        <div class="flex items-center gap-3">
          <div class="w-11 h-11 grid place-items-center rounded-full bg-gradient-to-br from-brand-700 to-brand-500 text-white font-bold">${r.name.trim()[0]}</div>
          <div><div class="font-bold text-ink leading-tight">${r.name}</div><div class="text-xs text-slate-500">${L(r.result)}</div></div>
        </div>
        ${starSvg(r.stars)}
        <p class="mt-3 text-slate-600 leading-relaxed">${L(r.text)}</p>
      </div>`).join("");
  }

  function renderFaq() {
    $("#faqList").innerHTML = FAQ.map((f) => `
      <div class="faq-item reveal">
        <button class="faq-q" aria-expanded="false"><span>${L(f.q)}</span><span class="faq-ic">+</span></button>
        <div class="faq-a"><div>${L(f.a)}</div></div>
      </div>`).join("");
    $$("#faqList .faq-q").forEach((q) => q.addEventListener("click", () => {
      const item = q.closest(".faq-item");
      const open = item.classList.contains("open");
      $$("#faqList .faq-item").forEach((it) => { it.classList.remove("open"); it.querySelector(".faq-q").setAttribute("aria-expanded", "false"); });
      if (!open) { item.classList.add("open"); q.setAttribute("aria-expanded", "true"); }
    }));
  }

  function renderFooterSocials() {
    const w = $("#footerSocials");
    if (!w) return;
    w.innerHTML = `
      <a href="${D.INSTAGRAM_URL}" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="w-10 h-10 grid place-items-center rounded-full bg-brand-50 text-brand-700 hover:bg-brand-700 hover:text-white transition">${D.ICONS.instagram}</a>
      <a href="${D.TELEGRAM_URL}" target="_blank" rel="noopener noreferrer" aria-label="Telegram" class="w-10 h-10 grid place-items-center rounded-full bg-brand-50 text-brand-700 hover:bg-brand-700 hover:text-white transition">${D.ICONS.telegram}</a>
      <a href="mailto:${D.CONTACT_EMAIL}" aria-label="Email" class="w-10 h-10 grid place-items-center rounded-full bg-brand-50 text-brand-700 hover:bg-brand-700 hover:text-white transition">${D.ICONS.mail}</a>`;
    $$("#footerSocials svg").forEach((s) => { s.setAttribute("width", "18"); s.setAttribute("height", "18"); });
  }

  /* ---------- modals ---------- */
  function openModal(id) { const m = $(id); m.classList.add("open"); m.setAttribute("aria-hidden", "false"); document.body.classList.add("lock"); }
  function closeModals() { $$(".modal").forEach((m) => { m.classList.remove("open"); m.setAttribute("aria-hidden", "true"); }); document.body.classList.remove("lock"); }
  $$(".modal [data-close]").forEach((b) => b.addEventListener("click", closeModals));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModals(); });

  let curCourse = null, curTeacher = null;
  function openCourse(key) {
    const card = COURSE_CARDS.find((c) => c.key === key) || { key, course: key };
    const c = D.COURSES[card.course];
    curCourse = key;
    const teachers = D.TEACHERS.filter((tt) => tt.course === card.course);
    const feats = c ? L(c.features) : [];
    $("#courseModalBody").innerHTML = `
      <span class="inline-flex items-center rounded-full bg-brand-50 text-brand-700 px-3 py-1 text-xs font-bold">${t("courses.eyebrow")}</span>
      <h3 class="mt-4 text-2xl font-extrabold">${courseTitle(card)}</h3>
      <p class="mt-3 text-slate-600 leading-relaxed">${c ? L(c.desc) : courseShort(card)}</p>
      ${feats.length ? `<ul class="mt-4 flex flex-col gap-2 text-sm text-slate-600">${feats.map((x) => `<li class="flex gap-2"><span class="text-brand-600">✓</span>${x}</li>`).join("")}</ul>` : ""}
      ${teachers.length ? `<div class="mt-6"><div class="text-sm font-semibold text-slate-500 mb-2">${t("modal.teachersFor")}</div><div class="flex flex-wrap gap-2">${teachers.map((tt) => `<button class="px-3 py-1.5 rounded-full bg-slate-100 hover:bg-brand-50 hover:text-brand-700 text-sm font-medium" data-go-teacher="${tt.id}">${tt.name}</button>`).join("")}</div></div>` : ""}
      <a href="#contact" class="mt-7 inline-flex items-center rounded-xl bg-brand-700 px-6 py-3.5 font-semibold text-white hover:bg-brand-600 transition" data-close>${t("modal.trialButton")}</a>`;
    $$("#courseModalBody [data-go-teacher]").forEach((b) => b.addEventListener("click", () => { closeModals(); openTeacher(b.getAttribute("data-go-teacher")); }));
    openModal("#courseModal");
  }

  function openTeacher(id) {
    const tc = D.TEACHERS.find((x) => x.id === id);
    if (!tc) return;
    curTeacher = id;
    $("#teacherModalBody").innerHTML = `
      <div class="flex items-center gap-4">
        <div class="w-20 h-20 rounded-2xl overflow-hidden bg-brand-50 shrink-0">${teacherImg(tc, false)}</div>
        <div><h3 class="text-xl font-extrabold">${tc.name}</h3><p class="text-sm text-brand-700 font-semibold">${L(tc.subject)}</p></div>
      </div>
      <p class="mt-4 text-slate-600 leading-relaxed">${L(tc.short)}</p>
      <ul class="mt-4 flex flex-col gap-2 text-sm text-slate-600">${L(tc.bullets).map((x) => `<li class="flex gap-2"><span class="text-brand-600">✓</span>${x}</li>`).join("")}</ul>
      <a href="#contact" class="mt-7 inline-flex items-center rounded-xl bg-brand-700 px-6 py-3.5 font-semibold text-white hover:bg-brand-600 transition" data-close>${t("modal.trialButton")}</a>`;
    $$("#teacherModalBody [data-close]").forEach((b) => b.addEventListener("click", closeModals));
    openModal("#teacherModal");
  }

  /* ---------- lead form ---------- */
  function bindLead() {
    const form = $("#leadForm");
    if (!form || form.dataset.bound) return;
    form.dataset.bound = "1";
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const msgs = D.formMessages[langOf()] || D.formMessages.uz;
      const status = $("#leadStatus");
      const name = form.name.value.trim(), phone = form.phone.value.trim();
      const interest = form.interest.value, message = form.message.value.trim();
      if (form.hp.value) return;
      if (!name || !phone) { status.className = "form-status err"; status.textContent = msgs.required; return; }
      status.className = "form-status"; status.textContent = msgs.sending;
      try {
        const res = await fetch(D.LEADS_ENDPOINT, {
          method: "POST", headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, phone, interest, message, tenantSlug: D.TENANT_SLUG, hp: "" })
        });
        if (!res.ok) throw new Error();
        status.className = "form-status ok"; status.textContent = msgs.success; form.reset();
      } catch (_) { status.className = "form-status err"; status.textContent = msgs.error; }
    });
  }

  /* ---------- UX: navbar, burger, reveal ---------- */
  function bindUX() {
    const nav = $("#nav");
    const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 20);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    const burger = $("#burger"), mob = $("#mobileNav");
    burger && burger.addEventListener("click", () => mob.classList.toggle("hidden-nav"));
    $$("#mobileNav a").forEach((a) => a.addEventListener("click", () => mob.classList.add("hidden-nav")));
  }
  let io;
  function observeReveal() {
    if (io) io.disconnect();
    if (!("IntersectionObserver" in window)) { $$(".reveal").forEach((el) => el.classList.add("in")); return; }
    io = new IntersectionObserver((entries) => entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }), { threshold: 0.12 });
    $$(".reveal:not(.in)").forEach((el) => io.observe(el));
  }

  /* ---------- boot ---------- */
  function renderAll() {
    buildLangSwitch($("#langSwitch"));
    buildLangSwitch($("#langSwitchMobile"));
    applyI18n();
    renderStats(); renderCourses(); renderBento(); renderTimeline();
    renderTeachers(); renderReviews(); renderFaq(); renderFooterSocials();
    observeReveal();
    // re-localize open modal
    if ($("#courseModal").classList.contains("open") && curCourse) openCourse(curCourse);
    if ($("#teacherModal").classList.contains("open") && curTeacher) openTeacher(curTeacher);
  }

  document.addEventListener("DOMContentLoaded", () => { renderAll(); bindLead(); bindUX(); });
  if (document.readyState !== "loading") { renderAll(); bindLead(); bindUX(); }
})();
