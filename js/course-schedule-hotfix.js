(() => {
  const schedules = {
    teacher1: ["пн, ср, пт 14:00 - 15:30", "вт, чт, сб 14:00 - 15:30", "пн, ср, пт 15:30 - 17:00", "вт, чт, сб 17:30 - 18:30"],
    teacher2: ["пн, ср, пт 13:00 - 15:00", "пн, ср, пт 8:30 - 10:00"],
    teacher3: ["пн, ср, пт 14:00 - 15:30", "вт, чт, сб 15:30 - 17:00"],
    teacher4: ["пн, ср, пт 8:30 - 10:00", "пн, ср, пт 10:00 - 11:30", "пн, ср, пт 14:00 - 15:30", "пн, ср, пт 15:30 - 17:00", "вт, чт, сб 14:00 - 15:30"],
    teacher5: ["пн, ср, пт 14:00 - 15:30", "вт, чт, сб 14:00 - 15:00"],
    teacher6: ["вт, чт, сб 8:30 - 10:00", "пн, ср, пт 13:00 - 14:30", "пн, ср, пт 15:00 - 16:30", "вт, чт, сб 15:00 - 16:30"],
    teacher7: ["пн, ср, пт 10:30 - 12:00", "пн, ср, пт 14:30 - 16:00", "пн, ср, пт 16:00 - 17:30"],
    teacher8: ["вт, чт, сб 14:00 - 15:30"],
    teacher9: ["пн, ср, пт 12:00 - 13:00"],
    teacher10: ["пн, ср, пт 11:30 - 13:00", "пн, ср, пт 14:30 - 16:00"],
    teacher11: ["пн, ср, пт 14:00 - 15:30"]
  };

  const courseTeachers = {
    english: [["teacher1", "Yusupov Numonjon"], ["teacher2", "Muattarxon Shavkatmirzayeva"], ["teacher3", "Mehribonu Nazirova"], ["teacher4", "Avazbek Muhammadqosimov"]],
    russian: [["teacher5", "Avazbekova Sarvinoz"]],
    math: [["teacher6", "Asadbek Qobulov"]],
    native: [["teacher7", "Abdulvohidova Oydinoy"], ["teacher8", "Muhammadjon Sobirov"]],
    german: [["teacher9", "Mashura Mamasoliyeva"]],
    korean: [["teacher10", "Abdusamatova Moxchexraxon"]],
    history: [["teacher11", "Rasulberdiyev Abdulhoshim"]]
  };

  const courseCopy = {
    history: {
      uz: { title: "Tarix", short: "Tarix fanidan imtihonlarga tayyorgarlik." },
      ru: { title: "История", short: "Подготовка к экзаменам по истории." },
      en: { title: "History", short: "History exam preparation." }
    }
  };

  let activeCourse = null;
  const lang = () => localStorage.getItem("siteLanguage") || document.getElementById("languageSwitcher")?.value || "uz";
  const scheduleTitle = () => ({ uz: "Dars vaqtlari", ru: "Время занятий", en: "Class times" }[lang()] || "Dars vaqtlari");

  function ensureStyle() {
    if (document.getElementById("globus-schedule-hotfix-style")) return;
    const style = document.createElement("style");
    style.id = "globus-schedule-hotfix-style";
    style.textContent = `
      .course-card[data-course="history"] .course-card__flag {
        inset: 0 0 150px !important;
        display: block !important;
        overflow: hidden !important;
        border-radius: 54px 54px 20px 20px !important;
        background-color: #5c8791 !important;
        background-image: url("assets/course-media/history.png") !important;
        background-position: center !important;
        background-size: cover !important;
        background-repeat: no-repeat !important;
      }
      .course-card[data-course="history"] .course-card__flag svg { display: none !important; opacity: 0 !important; }
      @media (min-width: 761px) and (max-width: 1180px) {
        .course-card[data-course="history"] .course-card__flag { bottom: 110px !important; border-radius: 34px 34px 18px 18px !important; }
      }
      @media (max-width: 760px) {
        .course-card[data-course="history"] .course-card__flag { bottom: 140px !important; border-radius: 42px 42px 22px 22px !important; }
      }
    `;
    document.head.appendChild(style);
  }

  function ensureHistoryCard() {
    const track = document.querySelector(".course-cards");
    if (!track) return;
    let card = track.querySelector('[data-course="history"]');
    if (!card) {
      card = document.createElement("button");
      card.type = "button";
      card.className = "course-card";
      card.dataset.course = "history";
      track.appendChild(card);
    }
    const tr = courseCopy.history[lang()] || courseCopy.history.uz;
    card.innerHTML = `<span class="course-card__flag"></span><h3 data-course-i18n="course.history.title">${tr.title}</h3><p data-course-i18n="course.history.short">${tr.short}</p><span class="course-card__more" data-course-i18n="course.more">${lang() === "ru" ? "Подробнее" : lang() === "en" ? "Learn more" : "Batafsil"}</span>`;
  }

  function ensureScheduleBox() {
    const panel = document.querySelector(".course-modal__panel");
    const select = document.getElementById("courseTeacherSelect");
    if (!panel || !select) return null;
    let box = document.getElementById("courseScheduleBox");
    if (!box) {
      box = document.createElement("div");
      box.id = "courseScheduleBox";
      box.className = "course-modal__schedule";
      const note = panel.querySelector(".course-modal__note");
      if (note) panel.insertBefore(box, note);
      else panel.appendChild(box);
    }
    return box;
  }

  function renderSchedule() {
    const select = document.getElementById("courseTeacherSelect");
    const box = ensureScheduleBox();
    if (!select || !box) return;
    const times = schedules[select.value] || [];
    box.innerHTML = `<h4>${scheduleTitle()}</h4><ul>${times.map((time) => `<li>${time}</li>`).join("")}</ul>`;
  }

  function setTeachers(course) {
    const select = document.getElementById("courseTeacherSelect");
    const list = courseTeachers[course];
    if (!select || !list) return;
    const current = select.value;
    select.innerHTML = list.map(([value, label]) => `<option value="${value}">${label}</option>`).join("");
    if (list.some(([value]) => value === current)) select.value = current;
    renderSchedule();
  }

  function patchHistoryModal() {
    const title = document.getElementById("courseModalTitle");
    const desc = document.getElementById("courseModalDescription");
    const features = document.getElementById("courseModalFeatures");
    const modal = document.getElementById("courseModal");
    const tr = courseCopy.history[lang()] || courseCopy.history.uz;
    if (title) title.textContent = tr.title;
    if (desc) desc.textContent = tr.short;
    if (features) features.innerHTML = "";
    setTeachers("history");
    if (modal) {
      modal.classList.add("course-modal--open");
      modal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    }
  }

  function refreshActiveCourse() {
    if (!activeCourse) return;
    if (activeCourse === "history") patchHistoryModal();
    else setTeachers(activeCourse);
  }

  function bind() {
    document.addEventListener("click", (event) => {
      const card = event.target.closest("[data-course]");
      if (!card) return;
      activeCourse = card.dataset.course;
      window.setTimeout(() => {
        if (activeCourse === "history") patchHistoryModal();
        else setTeachers(activeCourse);
      }, 60);
      window.setTimeout(refreshActiveCourse, 220);
    }, true);

    document.addEventListener("change", (event) => {
      if (event.target?.id === "courseTeacherSelect") renderSchedule();
      if (event.target?.id === "languageSwitcher") {
        window.setTimeout(() => { ensureHistoryCard(); refreshActiveCourse(); }, 80);
        window.setTimeout(refreshActiveCourse, 260);
        window.setTimeout(refreshActiveCourse, 600);
      }
    }, true);
  }

  function observeModal() {
    const target = document.getElementById("courseModal");
    if (!target || !window.MutationObserver) return;
    const observer = new MutationObserver(() => {
      if (target.classList.contains("course-modal--open")) window.setTimeout(refreshActiveCourse, 40);
    });
    observer.observe(target, { attributes: true, childList: true, subtree: true });
  }

  function init() {
    ensureStyle();
    ensureHistoryCard();
    bind();
    observeModal();
    window.setTimeout(renderSchedule, 100);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
