import gallery from './gallery-items.js';

const galleryEl = document.querySelector('.js-gallery');
const lightboxEl = document.querySelector('.lightbox__content');
const modalEl = document.querySelector('[data-modal]');
const btnCloseEl = document.querySelector('.lightbox__button');

//* Загрузка картинок
const pictureUploadFunction = gallery.map(image => {
    return `<li class="gallery__item">
    <a
    class="gallery__link"
    href="${image.original}"
  >
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>
</li>`
}).join('');

galleryEl.insertAdjacentHTML('afterbegin', pictureUploadFunction);


//* Открытие модального окна
function openModal(event) {
    event.preventDefault(); //* убрали перезагрузку
    modalEl.classList.add('is-open');
    lightboxEl.classList.add('is-open');
}


//* каждой картинке по слушателю!
const imagesEl = document.querySelectorAll('.gallery__link');

imagesEl.forEach((image) => {
    image.addEventListener('click', openModal);
});



//* закрытие модального окна
function closeModal(event) {
    event.preventDefault();
    modalEl.classList.remove('is-open');
    lightboxEl.classList.remove('is-open');
}

btnCloseEl.addEventListener('click', closeModal);
