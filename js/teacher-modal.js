(() => {
  const TEACHERS = [
    {
      name: "Yusupov Numonjon",
      subject: "English IELTS/CEFR",
      image: "assets/teachers/teacher2.png",
      short: "Каждый урок приближает вас к результату на один шаг.",
      bullets: [
        "Преподаватель английского языка и IELTS/CEFR подготовки.",
        "Помогает ученикам выстроить понятный план обучения и регулярно видеть прогресс.",
        "Делает акцент на практике, уверенности в речи и системной работе над ошибками."
      ]
    },
    {
      name: "O‘qituvchi 2",
      subject: "English IELTS/CEFR",
      image: "assets/teachers/teacher1.png",
      short: "Самое важное в изучении языка — регулярность и уверенность.",
      bullets: [
        "Проводит занятия по английскому языку для разных уровней.",
        "Помогает ученикам развивать словарный запас, грамматику и speaking.",
        "Объясняет материал простым языком и закрепляет его на практике."
      ]
    },
    {
      name: "O‘qituvchi 3",
      subject: "English IELTS/CEFR",
      image: "assets/teachers/teacher3.png",
      short: "Не бойтесь ошибок — они часть роста.",
      bullets: [
        "Работает с учениками над уверенностью и стабильным прогрессом.",
        "Помогает исправлять типичные ошибки в речи и письме.",
        "Использует понятные задания и регулярную обратную связь."
      ]
    },
    {
      name: "Avazbekova Sarvinoz",
      subject: "Русский язык",
      image: "assets/teachers/teacher8.png",
      short: "Русский язык можно изучать понятно и системно.",
      bullets: [
        "Преподаватель русского языка.",
        "Помогает ученикам развивать грамотность, речь и понимание текста.",
        "Готовит к экзаменам и объясняет сложные темы простыми словами."
      ]
    },
    {
      name: "O‘qituvchi 5",
      subject: "Математика SAT",
      image: "assets/teachers/teacher4.png",
      short: "Математику можно объяснить простым языком.",
      bullets: [
        "Проводит занятия по математике и SAT-направлению.",
        "Разбирает задачи пошагово и помогает понять логику решений.",
        "Делает упор на практику, скорость и точность выполнения заданий."
      ]
    },
    {
      name: "O‘qituvchi 6",
      subject: "Немецкий язык",
      image: "assets/teachers/teacher5.png",
      short: "В немецком языке важна крепкая база.",
      bullets: [
        "Преподаватель немецкого языка.",
        "Помогает ученикам выстроить базу грамматики, словаря и произношения.",
        "Готовит к постепенному переходу от простых тем к уверенной коммуникации."
      ]
    },
    {
      name: "O‘qituvchi 7",
      subject: "Корейский язык",
      image: "assets/teachers/teacher6.png",
      short: "Корейский язык изучаем системно и практически.",
      bullets: [
        "Преподаватель корейского языка.",
        "Помогает ученикам готовиться к TOPIK и базовой коммуникации.",
        "Объясняет материал поэтапно: алфавит, грамматика, лексика и практика."
      ]
    },
    {
      name: "O‘qituvchi 8",
      subject: "Оna tili",
      image: "assets/teachers/teacher7.png",
      short: "Развиваем грамотность и навыки работы с тестами.",
      bullets: [
        "Преподаватель родного языка.",
        "Помогает ученикам развивать грамотность и уверенность в письменной речи.",
        "Готовит к государственному сертификату и тестовым заданиям."
      ]
    }
  ];

  let activeIndex = 0;

  function createModal() {
    const modal = document.createElement("div");
    modal.className = "teacher-modal";
    modal.setAttribute("aria-hidden", "true");
    modal.innerHTML = `
      <div class="teacher-modal__backdrop" data-teacher-modal-close></div>
      <div class="teacher-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="teacherModalName">
        <button class="teacher-modal__close" type="button" aria-label="Close" data-teacher-modal-close>‹</button>
        <div class="teacher-modal__main">
          <div class="teacher-modal__photo-wrap">
            <img class="teacher-modal__photo" src="" alt="" />
          </div>
          <div class="teacher-modal__info">
            <span class="teacher-modal__subject"></span>
            <h3 id="teacherModalName"></h3>
            <p class="teacher-modal__short"></p>
            <ul class="teacher-modal__bullets"></ul>
          </div>
        </div>
        <div class="teacher-modal__bottom">
          <h4>Другие преподаватели</h4>
          <div class="teacher-modal__thumbs"></div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    return modal;
  }

  function fillModal(modal, index) {
    activeIndex = index;
    const teacher = TEACHERS[index];
    if (!teacher) return;

    const photo = modal.querySelector(".teacher-modal__photo");
    const subject = modal.querySelector(".teacher-modal__subject");
    const name = modal.querySelector("#teacherModalName");
    const short = modal.querySelector(".teacher-modal__short");
    const bullets = modal.querySelector(".teacher-modal__bullets");
    const thumbs = modal.querySelector(".teacher-modal__thumbs");

    photo.src = teacher.image;
    photo.alt = teacher.name;
    subject.textContent = teacher.subject;
    name.textContent = teacher.name;
    short.textContent = teacher.short;
    bullets.innerHTML = teacher.bullets.map((item) => `<li>${item}</li>`).join("");
    thumbs.innerHTML = TEACHERS.map((item, itemIndex) => `
      <button class="teacher-modal__thumb${itemIndex === index ? " teacher-modal__thumb--active" : ""}" type="button" data-teacher-thumb="${itemIndex}">
        <img src="${item.image}" alt="${item.name}" />
        <span>${item.name}</span>
      </button>
    `).join("");
  }

  function openModal(modal, index) {
    fillModal(modal, index);
    modal.classList.add("teacher-modal--open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeModal(modal) {
    modal.classList.remove("teacher-modal--open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  function bindTeacherCards(modal) {
    document.querySelectorAll("#teachersTrack .teacher-card").forEach((card, index) => {
      card.setAttribute("role", "button");
      card.setAttribute("tabindex", "0");
      card.setAttribute("aria-label", `Open information about ${TEACHERS[index]?.name || "teacher"}`);

      card.addEventListener("click", () => openModal(modal, index));
      card.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openModal(modal, index);
        }
      });
    });
  }

  function bindModal(modal) {
    modal.addEventListener("click", (event) => {
      const closeButton = event.target.closest("[data-teacher-modal-close]");
      const thumb = event.target.closest("[data-teacher-thumb]");

      if (closeButton) {
        closeModal(modal);
        return;
      }

      if (thumb) {
        fillModal(modal, Number(thumb.dataset.teacherThumb));
      }
    });

    document.addEventListener("keydown", (event) => {
      if (!modal.classList.contains("teacher-modal--open")) return;

      if (event.key === "Escape") closeModal(modal);
      if (event.key === "ArrowRight") fillModal(modal, (activeIndex + 1) % TEACHERS.length);
      if (event.key === "ArrowLeft") fillModal(modal, (activeIndex - 1 + TEACHERS.length) % TEACHERS.length);
    });
  }

  function init() {
    const track = document.getElementById("teachersTrack");
    if (!track) return;

    const modal = createModal();
    bindTeacherCards(modal);
    bindModal(modal);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => window.setTimeout(init, 0));
  } else {
    window.setTimeout(init, 0);
  }
})();
