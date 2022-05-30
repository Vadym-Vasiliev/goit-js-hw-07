import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallContainer = document.querySelector(".gallery");
const gallLinks = document.querySelector(".gallery__link");
const pictureMarkup = creatGallMarkup(galleryItems);

gallContainer.insertAdjacentHTML("beforebegin", pictureMarkup);
gallLinks.addEventListener("click", onGallClick);

// 1. Створення і рендер розмітки по масиву данних galleryItems і представленому шаблону елемента галереї.

function creatGallMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
    <a class="gallery__link" target="_self" href="${original}" >
    <img
      
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

// 2. Реалізація делегіровання на div.gallery і отримання url великого зображення.

function onGallClick(evt) {
  evt.preventDefault();
  console.log();
  const isGallImageEl = evt.target.classList.contains("gallery__image");
  if (!isGallImageEl) {
    return;
  }
  const url = evt.target.dataset.source;
  console.log(url);
}
