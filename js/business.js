(() => {
  // ====== ЗАПОЛНИТЬ ПЕРЕД РАБОТОЙ ======
  // Публичный адрес API после деплоя на VPS (без слэша в конце):
  const API_BASE = "https://api.globusedu.uz";
  // =====================================
  const ENDPOINT = API_BASE + "/public/business-inquiries";

  const T = {
    uz: {
      navBtn: "Biznes uchun",
      eyebrow: "Biznes",
      title: "O‘quv markazingiz uchun GlobusEdu CRM",
      text: "O‘quvchilar, guruhlar, to‘lovlar, davomat, o‘qituvchi maoshlari va hisobotlar — hammasi bitta tizimda. Hamkorlik uchun ma’lumotlaringizni qoldiring, biz bog‘lanamiz.",
      labelName: "Ism / Markaz",
      labelEmail: "Email",
      labelPhone: "Telefon",
      labelTelegram: "Telegram",
      labelMessage: "Xabar",
      namePh: "Ismingiz yoki markaz nomi",
      emailPh: "Email",
      phonePh: "+998",
      telegramPh: "@username",
      messagePh: "Xabaringiz",
      button: "Yuborish",
      sending: "Yuborilmoqda...",
      success: "Rahmat! Tez orada siz bilan bog‘lanamiz.",
      error: "Xatolik yuz berdi. Keyinroq urinib ko‘ring.",
      required: "Kamida bitta aloqa qoldiring: email, telefon yoki telegram."
    },
    ru: {
      navBtn: "Для бизнеса",
      eyebrow: "Бизнес",
      title: "GlobusEdu CRM для вашего учебного центра",
      text: "Ученики, группы, оплаты, посещаемость, зарплаты преподавателей и отчёты — всё в одной системе. Оставьте контакты для сотрудничества, и мы свяжемся с вами.",
      labelName: "Имя / Центр",
      labelEmail: "Email",
      labelPhone: "Телефон",
      labelTelegram: "Telegram",
      labelMessage: "Сообщение",
      namePh: "Ваше имя или название центра",
      emailPh: "Email",
      phonePh: "+998",
      telegramPh: "@username",
      messagePh: "Ваше сообщение",
      button: "Отправить",
      sending: "Отправляем...",
      success: "Спасибо! Мы скоро свяжемся с вами.",
      error: "Произошла ошибка. Попробуйте позже.",
      required: "Оставьте хотя бы один контакт: email, телефон или telegram."
    },
    en: {
      navBtn: "For business",
      eyebrow: "Business",
      title: "GlobusEdu CRM for your education center",
      text: "Students, groups, payments, attendance, teacher salaries and reports — all in one system. Leave your contacts and we will get in touch.",
      labelName: "Name / Center",
      labelEmail: "Email",
      labelPhone: "Phone",
      labelTelegram: "Telegram",
      labelMessage: "Message",
      namePh: "Your name or center name",
      emailPh: "Email",
      phonePh: "+998",
      telegramPh: "@username",
      messagePh: "Your message",
      button: "Send",
      sending: "Sending...",
      success: "Thank you! We will contact you soon.",
      error: "Something went wrong. Please try later.",
      required: "Leave at least one contact: email, phone or telegram."
    }
  };

  function lang() {
    const sw = document.getElementById("languageSwitcher");
    const l = localStorage.getItem("siteLanguage") || (sw && sw.value) || "uz";
    return T[l] ? l : "uz";
  }

  function injectButtonStyle() {
    if (document.getElementById("biz-btn-style")) return;
    const s = document.createElement("style");
    s.id = "biz-btn-style";
    s.textContent =
      ".btn-business{display:inline-flex;align-items:center;justify-content:center;" +
      "padding:12px 18px;border-radius:14px;background:#111;color:#fff;font-weight:800;" +
      "text-decoration:none;white-space:nowrap;transition:background .2s ease,transform .2s ease}" +
      ".btn-business:hover{background:#4b2bbf;transform:translateY(-2px)}" +
      "@media(max-width:760px){.btn-business{padding:10px 14px;font-size:14px}}";
    document.head.appendChild(s);
  }

  function injectNavButton() {
    const actions = document.querySelector(".header__actions");
    if (!actions || document.getElementById("bizNavBtn")) return;
    const btn = document.createElement("a");
    btn.id = "bizNavBtn";
    btn.href = "#business";
    btn.className = "btn-business";
    btn.textContent = T[lang()].navBtn;
    btn.addEventListener("click", (e) => {
      const target = document.getElementById("business");
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
    actions.appendChild(btn);
  }

  function applyText() {
    const t = T[lang()];
    const btn = document.getElementById("bizNavBtn");
    if (btn) btn.textContent = t.navBtn;
    document.querySelectorAll("#business [data-biz-i18n]").forEach((el) => {
      const k = el.getAttribute("data-biz-i18n");
      if (t[k]) el.textContent = t[k];
    });
    document.querySelectorAll("#business [data-biz-ph]").forEach((el) => {
      const k = el.getAttribute("data-biz-ph");
      if (t[k]) el.setAttribute("placeholder", t[k]);
    });
  }

  function statusEl(form) {
    let s = form.querySelector(".contact-form__status");
    if (!s) {
      s = document.createElement("p");
      s.className = "contact-form__status";
      s.setAttribute("aria-live", "polite");
      form.appendChild(s);
    }
    return s;
  }

  function bindForm() {
    const form = document.getElementById("businessForm");
    if (!form) return;
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const t = T[lang()];
      const fd = new FormData(form);
      const payload = {
        name: String(fd.get("name") || "").trim(),
        email: String(fd.get("email") || "").trim(),
        phone: String(fd.get("phone") || "").trim(),
        telegram: String(fd.get("telegram") || "").trim(),
        message: String(fd.get("message") || "").trim(),
        hp: String(fd.get("hp") || "").trim()
      };
      const s = statusEl(form);

      if (!payload.email && !payload.phone && !payload.telegram) {
        s.dataset.type = "error";
        s.textContent = t.required;
        return;
      }

      const btn = form.querySelector('button[type="submit"]');
      if (btn) btn.disabled = true;
      s.dataset.type = "info";
      s.textContent = t.sending;

      try {
        const res = await fetch(ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });
        if (!res.ok) throw new Error("status " + res.status);
        s.dataset.type = "success";
        s.textContent = t.success;
        form.reset();
      } catch (err) {
        s.dataset.type = "error";
        s.textContent = t.error;
      } finally {
        if (btn) btn.disabled = false;
      }
    });
  }

  function init() {
    injectButtonStyle();
    injectNavButton();
    applyText();
    bindForm();
    const sw = document.getElementById("languageSwitcher");
    if (sw) sw.addEventListener("change", () => window.setTimeout(applyText, 60));
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
