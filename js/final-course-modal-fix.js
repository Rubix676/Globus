(() => {
  const CACHE_VERSION = "v20260506-final2";
  const HISTORY_URL = `assets/course-media/history.png?${CACHE_VERSION}`;
  const MATH_SVG = `
    <svg viewBox="0 0 280 240" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Mathematics board">
      <rect width="280" height="240" fill="#0c614d"></rect>
      <g fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M24 55 L108 18 L108 55 Z"></path>
        <path d="M55 171 L104 148 L153 173 L153 221 L104 236 L55 212 Z M104 148 V192 M55 171 L104 192 L153 173 M104 192 V236"></path>
        <path d="M210 28 v52 h48"></path>
        <path d="M224 70 v-20 M238 70 v-33 M252 70 v-48"></path>
      </g>
      <g fill="#fff" font-family="Trebuchet MS, Arial, sans-serif" font-weight="700">
        <text x="118" y="54" font-size="28">π=3.14</text>
        <text x="74" y="120" font-size="52">ABC</text>
        <text x="205" y="122" font-size="42">?</text>
        <text x="122" y="182" font-size="40">1+1=2</text>
        <text x="18" y="214" font-size="26">H₂O</text>
        <text x="100" y="226" font-size="23">(a+b)²</text>
        <text x="187" y="228" font-size="24">∫x dx</text>
      </g>
    </svg>
  `;

  function ensureFinalStyle() {
    if (document.getElementById("final-course-modal-fix-style")) return;

    const style = document.createElement("style");
    style.id = "final-course-modal-fix-style";
    style.textContent = `
      .course-card[data-course="math"]::before,
      .course-card[data-course="history"]::before {
        content: none !important;
        display: none !important;
      }

      .course-card[data-course="math"] .course-card__flag,
      .course-card[data-course="history"] .course-card__flag {
        position: absolute !important;
        inset: 0 0 150px !important;
        display: block !important;
        opacity: 1 !important;
        visibility: visible !important;
        overflow: hidden !important;
        padding: 0 !important;
        border-radius: 54px 54px 20px 20px !important;
        background-repeat: no-repeat !important;
        background-position: center !important;
        background-size: cover !important;
        z-index: 0 !important;
      }

      .course-card[data-course="math"] .course-card__flag {
        background: #0c614d !important;
      }

      .course-card[data-course="math"] .course-card__flag svg {
        display: block !important;
        width: 100% !important;
        height: 100% !important;
        opacity: 1 !important;
        visibility: visible !important;
      }

      .course-card[data-course="history"] .course-card__flag {
        background-color: #5c8791 !important;
        background-image: url("${HISTORY_URL}") !important;
      }

      .course-card[data-course="history"] .course-card__flag * {
        display: none !important;
      }

      @media (min-width: 761px) and (max-width: 1180px) {
        .course-card[data-course="math"] .course-card__flag,
        .course-card[data-course="history"] .course-card__flag {
          bottom: 110px !important;
          border-radius: 34px 34px 18px 18px !important;
        }
      }

      @media (max-width: 760px) {
        .course-card[data-course="math"] .course-card__flag,
        .course-card[data-course="history"] .course-card__flag {
          bottom: 140px !important;
          border-radius: 42px 42px 22px 22px !important;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function ensureFlag(card) {
    let flag = card.querySelector(".course-card__flag");
    if (!flag) {
      flag = document.createElement("span");
      flag.className = "course-card__flag";
      card.prepend(flag);
    }
    return flag;
  }

  function applyCourseMedia() {
    const mathCard = document.querySelector('.course-card[data-course="math"]');
    const historyCard = document.querySelector('.course-card[data-course="history"]');

    if (mathCard) {
      const flag = ensureFlag(mathCard);
      flag.removeAttribute("style");
      flag.innerHTML = MATH_SVG;
    }

    if (historyCard) {
      const flag = ensureFlag(historyCard);
      flag.innerHTML = "";
      flag.style.cssText = `background-color:#5c8791!important;background-image:url("${HISTORY_URL}")!important;background-position:center!important;background-size:cover!important;background-repeat:no-repeat!important;`;
    }
  }

  function closeCourseModal(event) {
    const modal = document.getElementById("courseModal");
    if (!modal) return;

    if (event) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation?.();
    }

    modal.classList.remove("course-modal--open", "open", "active", "is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
  }

  function bindModalClose() {
    document.addEventListener("click", (event) => {
      const closeTarget = event.target.closest?.("[data-course-close], .course-modal__close, .course-modal__backdrop");
      if (!closeTarget) return;
      closeCourseModal(event);
    }, true);

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeCourseModal();
    }, true);
  }

  function init() {
    ensureFinalStyle();
    applyCourseMedia();
    bindModalClose();

    window.setTimeout(applyCourseMedia, 100);
    window.setTimeout(applyCourseMedia, 400);
    window.setTimeout(applyCourseMedia, 1000);

    document.addEventListener("click", () => window.setTimeout(applyCourseMedia, 80), true);
    document.addEventListener("change", () => window.setTimeout(applyCourseMedia, 80), true);

    const track = document.querySelector(".course-cards");
    if (track && window.MutationObserver) {
      new MutationObserver(() => applyCourseMedia()).observe(track, { childList: true, subtree: true });
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
