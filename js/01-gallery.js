import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallContainer = document.querySelector(".gallery");
const pictureMarkup = creatGallMarkup(galleryItems);

gallContainer.insertAdjacentHTML("afterbegin", pictureMarkup);
gallContainer.addEventListener("click", onClick);

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

let instance;

function onClick(event) {
  event.preventDefault();

  const urlSource = event.target.dataset.source;

  if (!urlSource) {
    return;
  }

  // бібліотека
  instance = basicLightbox.create(` 
	<img src="${urlSource}"></img>
`);
  instance.show();
}

// 3.Підключення скрипту і стилів бібліотеки модального вікна basicLightbox.
// Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані(.min) файли бібліотеки.

// 4. Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.

// 5. Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям.
// Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.

function closeModal(event) {
  if (event.key !== "Escape" || !instance) {
    return;
  }
  instance.close();
}

document.addEventListener("keydown", closeModal);
