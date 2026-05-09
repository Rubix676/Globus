(() => {
  const profileText = {
    teacher1: {
      subject: { uz: "Ingliz tili / IELTS / CEFR", ru: "Английский язык / IELTS / CEFR", en: "English / IELTS / CEFR" },
      short: { uz: "Ingliz tili bo‘yicha natijaga yo‘naltirilgan darslar.", ru: "Занятия по английскому с фокусом на результат.", en: "English lessons focused on practical results." },
      bullets: { uz: ["IELTS va CEFR tayyorgarligi", "Grammar, speaking va writing bo‘yicha amaliy yondashuv", "O‘quvchining darajasiga qarab individual tavsiyalar"], ru: ["Подготовка к IELTS и CEFR", "Практический подход к grammar, speaking и writing", "Индивидуальные рекомендации по уровню ученика"], en: ["IELTS and CEFR preparation", "Practical approach to grammar, speaking and writing", "Individual recommendations based on student level"] }
    },
    teacher2: { subject: { uz: "Ingliz tili", ru: "Английский язык", en: "English" } },
    teacher3: { subject: { uz: "Ingliz tili", ru: "Английский язык", en: "English" } },
    teacher4: { subject: { uz: "Ingliz tili", ru: "Английский язык", en: "English" } },
    teacher5: { subject: { uz: "Rus tili", ru: "Русский язык", en: "Russian language" } },
    teacher6: { subject: { uz: "Matematika", ru: "Математика", en: "Mathematics" } },
    teacher7: { subject: { uz: "Ona tili", ru: "Родной язык", en: "Native language" } },
    teacher8: { subject: { uz: "Ona tili", ru: "Родной язык", en: "Native language" } },
    teacher9: { subject: { uz: "Nemis tili", ru: "Немецкий язык", en: "German" } },
    teacher10: { subject: { uz: "Koreys tili", ru: "Корейский язык", en: "Korean" } },
    teacher11: { subject: { uz: "Tarix", ru: "История", en: "History" } }
  };

  const labels = {
    uz: { close: "Yopish", other: "Boshqa o‘qituvchilar" },
    ru: { close: "Закрыть", other: "Другие преподаватели" },
    en: { close: "Close", other: "Other teachers" }
  };

  const lang = () => localStorage.getItem("siteLanguage") || document.getElementById("languageSwitcher")?.value || "uz";
  const localize = (value) => typeof value === "string" ? value : value?.[lang()] || value?.uz || value?.ru || value?.en || "";

  function getTeacherCards() {
    return Array.from(document.querySelectorAll("#teachersTrack .teacher-card"));
  }

  function getTeacherFromCard(card, index) {
    const id = card.dataset.teacherId || `teacher${index + 1}`;
    const image = card.querySelector(".teacher-card__image")?.getAttribute("src") || "";
    const name = card.querySelector("h3")?.textContent?.trim() || `Teacher ${index + 1}`;
    const short = card.querySelector("p")?.textContent?.trim() || "";
    const text = profileText[id] || {};

    return {
      id,
      name,
      image,
      subject: text.subject || { uz: "O‘qituvchi", ru: "Преподаватель", en: "Teacher" },
      short: text.short || { uz: short, ru: short, en: short },
      bullets: text.bullets || { uz: [short].filter(Boolean), ru: [short].filter(Boolean), en: [short].filter(Boolean) }
    };
  }

  function ensureModal() {
    let modal = document.getElementById("teacherProfileModal");
    if (modal) return modal;

    modal = document.createElement("div");
    modal.className = "teacher-modal";
    modal.id = "teacherProfileModal";
    modal.setAttribute("aria-hidden", "true");
    modal.innerHTML = `
      <div class="teacher-modal__backdrop" data-teacher-profile-close></div>
      <div class="teacher-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="teacherProfileName">
        <button class="teacher-modal__close" type="button" aria-label="Close" data-teacher-profile-close>‹</button>
        <div class="teacher-modal__main">
          <div class="teacher-modal__photo-wrap">
            <img class="teacher-modal__photo" id="teacherProfilePhoto" alt="" />
          </div>
          <div class="teacher-modal__info">
            <span class="teacher-modal__subject" id="teacherProfileSubject"></span>
            <h3 id="teacherProfileName"></h3>
            <p class="teacher-modal__short" id="teacherProfileShort"></p>
            <ul class="teacher-modal__bullets" id="teacherProfileBullets"></ul>
          </div>
        </div>
        <div class="teacher-modal__bottom">
          <h4 id="teacherProfileOtherTitle"></h4>
          <div class="teacher-modal__thumbs" id="teacherProfileThumbs"></div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    modal.querySelectorAll("[data-teacher-profile-close]").forEach((element) => element.addEventListener("click", closeModal));
    return modal;
  }

  function injectCss() {
    if (document.getElementById("teacher-profile-modal-style")) return;
    const style = document.createElement("style");
    style.id = "teacher-profile-modal-style";
    style.textContent = `
      .teacher-card{position:relative;cursor:pointer}.teacher-card::after{content:"i";position:absolute;top:26px;right:26px;z-index:3;width:30px;height:30px;display:grid;place-items:center;border-radius:50%;background:rgba(0,0,0,.42);color:#fff;font-weight:900;font-size:16px;opacity:0;transform:translateY(-4px);transition:opacity .2s ease,transform .2s ease}.teacher-card:hover::after{opacity:1;transform:translateY(0)}.teacher-modal__dialog{padding-top:74px}.teacher-modal__photo-wrap{border-radius:0}.teacher-modal__photo{max-height:640px;object-position:center top}.teacher-modal__diplomas-block,.teacher-modal__diplomas,.teacher-modal__diploma,.teacher-modal__diploma-placeholder{display:none!important}.teacher-modal__thumb{border-radius:14px;overflow:hidden}.teacher-modal__thumb img{border-radius:14px}body.teacher-modal-lock{overflow:hidden}@media(max-width:760px){.teacher-modal__dialog{width:min(100% - 22px,560px);padding-top:72px}}
    `;
    document.head.appendChild(style);
  }

  function renderThumbs(activeId) {
    const container = document.getElementById("teacherProfileThumbs");
    if (!container) return;
    const teachers = getTeacherCards().map(getTeacherFromCard);
    container.innerHTML = "";
    teachers.forEach((teacher, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `teacher-modal__thumb${teacher.id === activeId ? " teacher-modal__thumb--active" : ""}`;
      button.innerHTML = `<img src="${teacher.image}" alt="${teacher.name}" /><span>${teacher.name}</span>`;
      button.addEventListener("click", () => openTeacher(index));
      container.appendChild(button);
    });
  }

  function openTeacher(index) {
    const card = getTeacherCards()[index];
    if (!card) return;
    const teacher = getTeacherFromCard(card, index);
    const modal = ensureModal();
    const label = labels[lang()] || labels.uz;

    document.getElementById("teacherProfilePhoto").src = teacher.image;
    document.getElementById("teacherProfilePhoto").alt = teacher.name;
    document.getElementById("teacherProfileSubject").textContent = localize(teacher.subject);
    document.getElementById("teacherProfileName").textContent = teacher.name;
    document.getElementById("teacherProfileShort").textContent = localize(teacher.short);
    const bullets = localize(teacher.bullets);
    document.getElementById("teacherProfileBullets").innerHTML = Array.isArray(bullets) ? bullets.map((item) => `<li>${item}</li>`).join("") : "";
    document.getElementById("teacherProfileOtherTitle").textContent = label.other;
    modal.querySelector(".teacher-modal__close")?.setAttribute("aria-label", label.close);

    renderThumbs(teacher.id);
    modal.classList.add("teacher-modal--open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("teacher-modal-lock");
  }

  function closeModal() {
    const modal = document.getElementById("teacherProfileModal");
    if (!modal) return;
    modal.classList.remove("teacher-modal--open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("teacher-modal-lock");
  }

  function bindDelegatedClicks() {
    document.addEventListener("click", (event) => {
      const card = event.target.closest("#teachersTrack .teacher-card");
      if (!card) return;
      const index = getTeacherCards().indexOf(card);
      openTeacher(index);
    });
    document.addEventListener("keydown", (event) => {
      const card = event.target.closest?.("#teachersTrack .teacher-card");
      if (!card || (event.key !== "Enter" && event.key !== " ")) return;
      event.preventDefault();
      openTeacher(getTeacherCards().indexOf(card));
    });
    document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeModal(); });
  }

  function prepareCards() {
    getTeacherCards().forEach((card) => {
      card.setAttribute("role", "button");
      card.setAttribute("tabindex", "0");
    });
  }

  function observeCards() {
    const track = document.getElementById("teachersTrack");
    if (!track || !window.MutationObserver) return;
    new MutationObserver(prepareCards).observe(track, { childList: true, subtree: true });
  }

  function init() {
    injectCss();
    ensureModal();
    prepareCards();
    observeCards();
    bindDelegatedClicks();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
