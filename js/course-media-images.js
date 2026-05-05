(() => {
  const media = {
    english: "assets/course-media/english.svg",
    russian: "assets/course-media/russian.svg",
    math: "assets/course-media/math.svg",
    german: "assets/course-media/de.svg",
    korean: "assets/course-media/korean.svg",
    native: "assets/course-media/native.svg"
  };

  function injectCss() {
    if (document.getElementById("globus-course-media-style")) return;
    const style = document.createElement("style");
    style.id = "globus-course-media-style";
    style.textContent = `
      .course-card::before { content: none !important; display: none !important; }
      .course-card .course-card__tag { display: none !important; }
      .course-card .course-card__flag {
        inset: 0 0 150px !important;
        display: block !important;
        overflow: hidden !important;
        border-radius: 54px 54px 20px 20px !important;
        background: #fff !important;
      }
      .course-card .course-card__flag svg { display: none !important; }
      .course-card .course-card__flag img {
        display: block !important;
        width: 100% !important;
        height: 100% !important;
        object-fit: cover !important;
      }
      .course-card[data-course="korean"] .course-card__flag img {
        object-fit: contain !important;
        background: #fff !important;
      }
      @media (min-width: 761px) and (max-width: 1180px) {
        .course-card .course-card__flag {
          bottom: 110px !important;
          border-radius: 34px 34px 18px 18px !important;
        }
      }
      @media (max-width: 760px) {
        .course-card .course-card__flag {
          bottom: 140px !important;
          border-radius: 42px 42px 22px 22px !important;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function setCourseImage(courseName, src) {
    const card = document.querySelector(`[data-course="${courseName}"]`);
    if (!card) return;
    let flag = card.querySelector(".course-card__flag");
    if (!flag) {
      flag = document.createElement("span");
      flag.className = "course-card__flag";
      card.prepend(flag);
    }
    flag.innerHTML = `<img src="${src}" alt="" loading="lazy">`;
  }

  function init() {
    injectCss();
    Object.entries(media).forEach(([courseName, src]) => setCourseImage(courseName, src));
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
