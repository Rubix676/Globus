(() => {
  const courseTeacherMap = {
    english: [
      { value: "teacher1", label: "Yusupov Nomudjon" },
      { value: "teacher2", label: "O‘qituvchi 2" },
      { value: "teacher3", label: "O‘qituvchi 3" }
    ],
    russian: [{ value: "teacher4", label: "Avazbekova Sarvinoz" }],
    math: [{ value: "teacher5", label: "O‘qituvchi 5" }],
    german: [{ value: "teacher6", label: "O‘qituvchi 6" }],
    korean: [{ value: "teacher7", label: "O‘qituvchi 7" }],
    native: [{ value: "teacher8", label: "O‘qituvchi 8" }]
  };

  const scheduleMap = {
    teacher1: [
      "пн, ср, пт 14:00 - 15:30 — подготовка к CEFR",
      "вт, чт, сб 14:00 - 15:30 — подготовка к IELTS",
      "пн, ср, пт 15:30 - 17:00 — подготовка к CEFR",
      "вт, чт, сб 17:30 - 18:30 — подготовка к IELTS"
    ],
    teacher2: ["14:00 - 15:30"],
    teacher3: ["14:00 - 15:30"],
    teacher4: ["14:00 - 15:30"],
    teacher5: ["14:00 - 15:30"],
    teacher6: ["14:00 - 15:30"],
    teacher7: ["14:00 - 15:30"],
    teacher8: ["14:00 - 15:30"]
  };

  const teacherCards = [
    { img: "assets/teacher2.png", alt: "Yusupov Nomudjon", title: "Yusupov Nomudjon", fallback: "1", textKey: "teachers.teacher2Text", text: "Har bir dars sizni natijaga bir qadam yaqinlashtiradi." },
    { img: "assets/teacher1.png", alt: "Teacher 2", title: "O‘qituvchi 2", fallback: "2", textKey: "teachers.teacher1Text", text: "Til o‘rganishda eng muhimi — doimiylik va ishonch." },
    { img: "assets/teacher3.png", alt: "Teacher 3", title: "O‘qituvchi 3", fallback: "3", textKey: "teachers.teacher3Text", text: "Xatolardan qo‘rqmang — ular o‘sishning bir qismi." },
    { img: "assets/teacher8.png", alt: "Avazbekova Sarvinoz", title: "Avazbekova Sarvinoz", fallback: "4", textKey: "teachers.teacher8Text", text: "Rus tili bo‘yicha aniq va tushunarli darslar." },
    { img: "assets/teacher4.png", alt: "Teacher 5", title: "O‘qituvchi 5", fallback: "5", textKey: "teachers.teacher4Text", text: "Bu yerga o‘qituvchining qisqa so‘zi yoziladi." },
    { img: "assets/teacher5.png", alt: "Teacher 6", title: "O‘qituvchi 6", fallback: "6", textKey: "teachers.teacher5Text", text: "Bu yerga o‘qituvchining qisqa so‘zi yoziladi." },
    { img: "assets/teacher6.png", alt: "Teacher 7", title: "O‘qituvchi 7", fallback: "7", textKey: "teachers.teacher6Text", text: "Bu yerga o‘qituvchining qisqa so‘zi yoziladi." },
    { img: "assets/teacher7.png", alt: "Teacher 8", title: "O‘qituvchi 8", fallback: "8", textKey: "teachers.teacher7Text", text: "Bu yerga o‘qituvchining qisqa so‘zi yoziladi." }
  ];

  function renderSchedule(select) {
    const box = document.getElementById("courseScheduleBox");
    if (!box || !select) return;

    const schedule = scheduleMap[select.value] || ["14:00 - 15:30"];
    const title = box.querySelector("h4")?.textContent || "Dars vaqtlari";

    box.innerHTML = `
      <h4>${title}</h4>
      <ul>${schedule.map((item) => `<li>${item}</li>`).join("")}</ul>
    `;
  }

  function updateCourseSelect(courseName) {
    const select = document.getElementById("courseTeacherSelect");
    const teachers = courseTeacherMap[courseName];

    if (!select || !teachers) return;

    select.innerHTML = "";

    teachers.forEach((teacher) => {
      const option = document.createElement("option");
      option.value = teacher.value;
      option.textContent = teacher.label;
      select.appendChild(option);
    });

    renderSchedule(select);
  }

  function normalizeTeacherCards() {
    const track = document.getElementById("teachersTrack");
    if (!track) return;

    track.querySelectorAll(".teacher-card").forEach((card, index) => {
      const data = teacherCards[index];
      if (!data) return;

      const image = card.querySelector(".teacher-card__image");
      const fallback = card.querySelector(".teacher-card__fallback");
      const title = card.querySelector("h3");
      const text = card.querySelector("p");

      if (image) {
        image.src = data.img;
        image.alt = data.alt;
      }

      if (fallback) {
        fallback.textContent = data.fallback;
      }

      if (title) {
        title.removeAttribute("data-i18n");
        title.textContent = data.title;
      }

      if (text) {
        text.setAttribute("data-i18n", data.textKey);
        if (!text.textContent.trim()) {
          text.textContent = data.text;
        }
      }
    });
  }

  function bindCourseCards() {
    document.querySelectorAll("[data-course]").forEach((card) => {
      card.addEventListener("click", () => {
        const courseName = card.dataset.course;
        window.setTimeout(() => updateCourseSelect(courseName), 0);
      });
    });

    const select = document.getElementById("courseTeacherSelect");
    if (select) {
      select.addEventListener("change", () => renderSchedule(select));
    }
  }

  function init() {
    normalizeTeacherCards();
    bindCourseCards();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
