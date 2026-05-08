document.addEventListener("DOMContentLoaded", () => {
  const footerBottom = document.querySelector(".footer__bottom");

  if (!footerBottom || document.querySelector(".metrika-informer")) {
    return;
  }

  const informer = document.createElement("a");
  informer.className = "metrika-informer";
  informer.href = "https://metrika.yandex.ru/stat/?id=109103174&from=informer";
  informer.target = "_blank";
  informer.rel = "nofollow noopener noreferrer";
  informer.setAttribute("aria-label", "Yandex Metrika informer");

  const image = document.createElement("img");
  image.src = "https://informer.yandex.ru/informer/109103174/1_1_FFFFFFFF_EFEFEFFF_0_uniques";
  image.alt = "Yandex Metrika";
  image.title = "Yandex Metrika: unique visitors";
  image.width = 80;
  image.height = 15;
  image.style.border = "0";
  image.style.opacity = "0.72";
  image.style.display = "block";

  informer.appendChild(image);
  footerBottom.appendChild(informer);
});
