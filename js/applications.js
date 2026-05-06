(() => {
  const SUPABASE_PROJECT_ID = "fznuetpfezgpfxrmzlus";
  const SUPABASE_URL = `https://${SUPABASE_PROJECT_ID}.supabase.co`;
  const SUPABASE_KEY = "sb_publishable_PBZiBQdtedUooWwjUtrUfg_6MkXJgH8";
  const APPLICATIONS_ENDPOINT = `${SUPABASE_URL}/rest/v1/applications`;

  const CONTACT_PHONE = "+998941055885";
  const CONTACT_PHONE_LABEL = "+998 94 105 58 85";
  const CONTACT_EMAIL = "info@globus.uz";
  const INSTAGRAM_URL = "https://www.instagram.com/globus_talim/";
  const TELEGRAM_URL = "https://t.me/GlobusEdu";

  const uiIcons = {
    phone: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.56 0 1 .44 1 1V20c0 .56-.44 1-1 1C10.61 21 3 13.39 3 4c0-.56.44-1 1-1h3.5c.56 0 1 .44 1 1 0 1.24.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2Z"/></svg>`,
    mail: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z"/></svg>`,
    instagram: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6Zm8.9 2.1a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"/></svg>`,
    telegram: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21.7 4.3 18.5 19c-.2 1-.8 1.2-1.6.8l-4.8-3.5-2.3 2.2c-.3.3-.5.5-1 .5l.3-4.9 8.9-8c.4-.3-.1-.5-.6-.2L6.4 12.8 1.7 11.3c-1-.3-1-1 .2-1.5l18.4-7.1c.9-.3 1.7.2 1.4 1.6Z"/></svg>`,
    location: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z"/></svg>`,
    clock: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 10.2 3.7 2.2-1 1.7-4.7-2.8V6h2v6.2Z"/></svg>`
  };

  const messages = {
    uz: {
      required: "Iltimos, ism va telefon raqamingizni kiriting.",
      sending: "Yuborilmoqda...",
      success: "Arizangiz yuborildi. Tez orada siz bilan bog‘lanamiz.",
      error: "Arizani yuborishda xatolik yuz berdi. Iltimos, keyinroq qayta urinib ko‘ring.",
      config: "Supabase kaliti sozlanmagan.",
      button: "Yuborish"
    },
    ru: {
      required: "Пожалуйста, введите имя и номер телефона.",
      sending: "Отправляем...",
      success: "Заявка отправлена. Мы скоро свяжемся с вами.",
      error: "Ошибка при отправке заявки. Пожалуйста, попробуйте позже.",
      config: "Supabase key не настроен.",
      button: "Отправить"
    },
    en: {
      required: "Please enter your name and phone number.",
      sending: "Sending...",
      success: "Your application has been sent. We will contact you soon.",
      error: "There was an error sending your application. Please try again later.",
      config: "Supabase key is not configured.",
      button: "Send"
    }
  };

  function currentLanguage() {
    return localStorage.getItem("siteLanguage") || document.getElementById("languageSwitcher")?.value || "uz";
  }

  function getDictionary() {
    return messages[currentLanguage()] || messages.uz;
  }

  function createStatusElement(form) {
    let status = form.querySelector(".contact-form__status");

    if (!status) {
      status = document.createElement("p");
      status.className = "contact-form__status";
      status.setAttribute("aria-live", "polite");
      form.appendChild(status);
    }

    return status;
  }

  function setStatus(form, type, text) {
    const status = createStatusElement(form);
    status.textContent = text;
    status.dataset.type = type;
  }

  function setSubmitting(form, isSubmitting) {
    const button = form.querySelector('button[type="submit"]');
    const dictionary = getDictionary();

    if (!button) return;

    button.disabled = isSubmitting;
    button.textContent = isSubmitting ? dictionary.sending : dictionary.button;
  }

  function getFormData(form) {
    const formData = new FormData(form);

    return {
      full_name: String(formData.get("name") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      message: String(formData.get("message") || "").trim()
    };
  }

  async function submitApplication(payload) {
    const response = await fetch(APPLICATIONS_ENDPOINT, {
      method: "POST",
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal"
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorText = await response.text().catch(() => "");
      throw new Error(errorText || `Supabase request failed with status ${response.status}`);
    }
  }

  function bindContactForm() {
    const form = document.querySelector(".contact-form");
    if (!form) return;

    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const dictionary = getDictionary();
      const payload = getFormData(form);

      if (SUPABASE_KEY === "PASTE_SUPABASE_PUBLISHABLE_KEY_HERE") {
        setStatus(form, "error", dictionary.config);
        return;
      }

      if (!payload.full_name || !payload.phone) {
        setStatus(form, "error", dictionary.required);
        return;
      }

      try {
        setSubmitting(form, true);
        setStatus(form, "info", dictionary.sending);
        await submitApplication(payload);
        form.reset();
        setStatus(form, "success", dictionary.success);
      } catch (error) {
        console.error("Application submit error:", error);
        setStatus(form, "error", dictionary.error);
      } finally {
        setSubmitting(form, false);
      }
    });
  }

  function injectStatusStyles() {
    if (document.getElementById("applications-status-style")) return;

    const style = document.createElement("style");
    style.id = "applications-status-style";
    style.textContent = `
      .contact-form__status {
        width: 100%;
        margin: 10px 0 0;
        padding: 14px 16px;
        border-radius: 14px;
        font-weight: 800;
        line-height: 1.4;
      }

      .contact-form__status[data-type="success"] {
        background: rgba(25, 195, 125, 0.16);
        color: #ffffff;
        border: 1px solid rgba(25, 195, 125, 0.42);
      }

      .contact-form__status[data-type="error"] {
        background: rgba(255, 80, 80, 0.16);
        color: #ffffff;
        border: 1px solid rgba(255, 80, 80, 0.42);
      }

      .contact-form__status[data-type="info"] {
        background: rgba(255, 255, 255, 0.12);
        color: #ffffff;
        border: 1px solid rgba(255, 255, 255, 0.22);
      }

      .contact-form button:disabled {
        cursor: not-allowed;
        opacity: 0.72;
      }
    `;
    document.head.appendChild(style);
  }

  function injectCourseMediaLastStyles() {
    if (document.getElementById("course-media-last-style")) return;

    const style = document.createElement("style");
    style.id = "course-media-last-style";
    style.textContent = `
      .course-card[data-course="math"]::before {
        content: "" !important;
        display: block !important;
        position: absolute !important;
        left: 0 !important;
        right: 0 !important;
        top: 0 !important;
        bottom: 150px !important;
        z-index: 0 !important;
        overflow: hidden !important;
        border-radius: 54px 54px 20px 20px !important;
        background: #0c614d url("assets/course-media/math.png") center / cover no-repeat !important;
      }

      .course-card[data-course="math"] .course-card__flag {
        display: none !important;
      }

      @media (min-width: 761px) and (max-width: 1180px) {
        .course-card[data-course="math"]::before {
          bottom: 110px !important;
          border-radius: 34px 34px 18px 18px !important;
        }
      }

      @media (max-width: 760px) {
        .course-card[data-course="math"]::before {
          bottom: 140px !important;
          border-radius: 42px 42px 22px 22px !important;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function injectFooterLayoutStyles() {
    if (document.getElementById("footer-layout-final-style")) return;

    const style = document.createElement("style");
    style.id = "footer-layout-final-style";
    style.textContent = `
      .footer__brand .footer__socials {
        display: none !important;
      }

      .footer__brand-details {
        display: grid;
        gap: 12px;
        margin-top: 22px;
      }

      .footer-detail,
      .footer-contact-link {
        display: inline-flex !important;
        align-items: center;
        gap: 10px;
        color: inherit;
        text-decoration: none;
        line-height: 1.45;
      }

      .footer-detail__icon,
      .footer-contact-icon,
      .footer-social-icon {
        width: 34px;
        height: 34px;
        display: inline-grid;
        place-items: center;
        flex: 0 0 34px;
        border-radius: 50%;
        background: #2b1163;
        color: #fff;
      }

      .footer-detail__icon svg,
      .footer-contact-icon svg,
      .footer-social-icon svg {
        width: 17px;
        height: 17px;
        fill: currentColor;
      }

      .footer-socials--contacts {
        display: flex;
        align-items: center;
        gap: 12px;
        margin: 0 0 18px;
      }

      .footer-socials--contacts a {
        text-decoration: none;
      }

      .footer-contact-link:hover,
      .footer-socials--contacts a:hover {
        color: #4b2bbf;
      }

      .footer-contact-link:hover .footer-contact-icon,
      .footer-socials--contacts a:hover .footer-social-icon {
        background: #4b2bbf;
      }

      .footer-contact-meta {
        display: none !important;
      }
    `;
    document.head.appendChild(style);
  }

  function ensureFooterLayout() {
    const brand = document.querySelector(".footer__brand");
    const contactCol = Array.from(document.querySelectorAll(".footer__col")).find((col) => col.querySelector('[data-i18n="footer.contactsTitle"]'));
    if (!brand || !contactCol) return;

    const contactItems = Array.from(contactCol.querySelectorAll("p"));
    const phoneItem = contactItems.find((item) => item.textContent.includes("+998"));
    const emailItem = contactItems.find((item) => item.textContent.includes("@"));
    const addressItem = contactItems.find((item) => item.hasAttribute("data-i18n") && item.getAttribute("data-i18n") === "contacts.address");
    const hoursItem = contactItems.find((item) => item.hasAttribute("data-i18n") && item.getAttribute("data-i18n") === "contacts.hours");

    if (!contactCol.querySelector(".footer-socials--contacts")) {
      const socials = document.createElement("div");
      socials.className = "footer-socials--contacts";
      socials.innerHTML = `
        <a href="${INSTAGRAM_URL}" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram"><span class="footer-social-icon">${uiIcons.instagram}</span></a>
        <a href="${TELEGRAM_URL}" target="_blank" rel="noopener noreferrer" aria-label="Telegram" title="Telegram"><span class="footer-social-icon">${uiIcons.telegram}</span></a>
      `;
      const title = contactCol.querySelector("h3");
      if (title) title.insertAdjacentElement("afterend", socials);
      else contactCol.prepend(socials);
    }

    if (phoneItem && !phoneItem.querySelector(".footer-contact-link")) {
      const label = phoneItem.textContent.trim();
      phoneItem.innerHTML = `<a class="footer-contact-link" href="tel:${CONTACT_PHONE}"><span class="footer-contact-icon">${uiIcons.phone}</span><span>${label}</span></a>`;
    }

    if (emailItem && !emailItem.querySelector(".footer-contact-link")) {
      const label = emailItem.textContent.trim();
      emailItem.innerHTML = `<a class="footer-contact-link" href="mailto:${CONTACT_EMAIL}"><span class="footer-contact-icon">${uiIcons.mail}</span><span>${label}</span></a>`;
    }

    let details = brand.querySelector(".footer__brand-details");
    if (!details) {
      details = document.createElement("div");
      details.className = "footer__brand-details";
      const socials = brand.querySelector(".footer__socials");
      if (socials) brand.insertBefore(details, socials);
      else brand.appendChild(details);
    }

    details.innerHTML = "";

    if (addressItem) {
      addressItem.classList.add("footer-contact-meta");
      const address = document.createElement("div");
      address.className = "footer-detail footer-detail--address";
      address.innerHTML = `<span class="footer-detail__icon">${uiIcons.location}</span><span data-i18n="contacts.address">${addressItem.textContent.trim()}</span>`;
      details.appendChild(address);
    }

    if (hoursItem) {
      hoursItem.classList.add("footer-contact-meta");
      const hours = document.createElement("div");
      hours.className = "footer-detail footer-detail--hours";
      hours.innerHTML = `<span class="footer-detail__icon">${uiIcons.clock}</span><span data-i18n="contacts.hours">${hoursItem.textContent.trim()}</span>`;
      details.appendChild(hours);
    }
  }

  function init() {
    injectStatusStyles();
    injectCourseMediaLastStyles();
    injectFooterLayoutStyles();
    bindContactForm();
    ensureFooterLayout();
    window.setTimeout(ensureFooterLayout, 120);
    window.setTimeout(ensureFooterLayout, 500);

    document.getElementById("languageSwitcher")?.addEventListener("change", () => {
      window.setTimeout(ensureFooterLayout, 120);
      window.setTimeout(ensureFooterLayout, 500);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
