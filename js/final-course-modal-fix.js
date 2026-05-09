(() => {
  // Safe final helper: only connects the site icon. It does not touch course cards, modals or layout.
  const ICON_PATH = "assets/icon.png";

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

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", connectSiteIcon);
  } else {
    connectSiteIcon();
  }
})();
