(() => {
  // Safe final helper: connects the site icon and patches review content only.
  const ICON_PATH = "assets/icon.png";

  const reviewTranslations = {
    uz: {
      firstText: "GLOBUS’dagi aniq reja va muntazam mashqlar SAT natijamni oshirishga yordam berdi.",
      secondText: "IELTS tayyorgarligida speaking va writing bo‘yicha berilgan feedback menga juda foydali bo‘ldi."
    },
    ru: {
      firstText: "Чёткий план и регулярная практика в GLOBUS помогли мне улучшить результат по SAT.",
      secondText: "Подготовка к IELTS была очень полезной: особенно помогли feedback по speaking и writing."
    },
    en: {
      firstText: "The clear study plan and regular practice at GLOBUS helped me improve my SAT score.",
      secondText: "IELTS preparation was very useful, especially the feedback on speaking and writing."
    }
  };

  function getLanguage() {
    return localStorage.getItem("siteLanguage") || document.getElementById("languageSwitcher")?.value || "uz";
  }

  function upsertLink(selector, attributes) {
    let link = document.head.querySelector(selector);
    if (!link) {
      link = document.createElement("link");
      document.head.appendChild(link);
    }

    Object.entries(attributes).forEach(([key, value]) => {
      link.setAttribute(key, value);
    });
  }

  function connectSiteIcon() {
    upsertLink('link[rel="icon"]', {
      rel: "icon",
      type: "image/png",
      href: ICON_PATH
    });

    upsertLink('link[rel="shortcut icon"]', {
      rel: "shortcut icon",
      type: "image/png",
      href: ICON_PATH
    });

    upsertLink('link[rel="apple-touch-icon"]', {
      rel: "apple-touch-icon",
      href: ICON_PATH
    });
  }

  function patchReviews() {
    const cards = document.querySelectorAll("#reviews .review-card");
    if (cards.length < 2) return;

    const dictionary = reviewTranslations[getLanguage()] || reviewTranslations.uz;

    const first = cards[0];
    const firstText = first.querySelector("p");
    const firstName = first.querySelector("strong");
    const firstResult = first.querySelector("span:not(.section__eyebrow)") || first.querySelector("span");

    if (firstText) firstText.textContent = dictionary.firstText;
    if (firstName) firstName.textContent = "Sobirjon Akramov";
    if (firstResult) firstResult.textContent = "SAT 1300";

    const second = cards[1];
    second.classList.remove("review-card--empty");
    const secondText = second.querySelector("p");
    const secondName = second.querySelector("strong");
    const secondResult = second.querySelector("span:not(.section__eyebrow)") || second.querySelector("span");

    if (secondText) secondText.textContent = dictionary.secondText;
    if (secondName) secondName.textContent = "Abdurahmanov Farhod";
    if (secondResult) secondResult.textContent = "IELTS 7.0";
  }

  function init() {
    connectSiteIcon();
    patchReviews();
    document.getElementById("languageSwitcher")?.addEventListener("change", () => {
      window.setTimeout(patchReviews, 80);
      window.setTimeout(patchReviews, 300);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
