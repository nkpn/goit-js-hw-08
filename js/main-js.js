import gallery from './gallery-items.js';

const galleryEl = document.querySelector('.js-gallery');
const lightboxEl = document.querySelector('.lightbox__content');
const modalEl = document.querySelector('[data-modal]');
const btnCloseEl = document.querySelector('.lightbox__button');
const backdropEl = document.querySelector('.lightbox__overlay')

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
  //* Подмена src у img элемента
  document.querySelector('.lightbox__image').src = event.target.dataset.source;

  window.addEventListener('keydown', onEscKeyPress);
}

//* всем по слушателю!
const imagesEl = document.querySelectorAll('.gallery__link');
imagesEl.forEach((image) => {
    image.addEventListener('click', openModal);
});

btnCloseEl.addEventListener('click', closeModal);
backdropEl.addEventListener('click', closeModalByBackdrop);

//* закрытие модального окна и очистка img src
function closeModal(event) {
  modalEl.classList.remove('is-open');
  lightboxEl.classList.remove('is-open');
  //* очистка img src
  document.querySelector('.lightbox__image').src = '';
}

//* закрытие через Backdrop
function closeModalByBackdrop(event) {
  if (event.currentTarget === event.target) {
    closeModal();
  }
}

function onEscKeyPress(event) {
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = event.code === ESC_KEY_CODE;
  if (isEscKey) {
    closeModal();
  }
}



