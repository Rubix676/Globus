(() => {
  const SUPABASE_PROJECT_ID = "fznuetpfezgpfxrmzlus";
  const SUPABASE_URL = `https://${SUPABASE_PROJECT_ID}.supabase.co`;
  const SUPABASE_KEY = "sb_publishable_PBZiBQdtedUooWwjUtrUfg_6MkXJgH8";
  const APPLICATIONS_ENDPOINT = `${SUPABASE_URL}/rest/v1/applications`;

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

  function init() {
    injectStatusStyles();
    bindContactForm();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
