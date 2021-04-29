import gallery from './gallery-items.js';
console.log(gallery);

const galleryEl = document.querySelector('.js-gallery');
const lightboxEl = document.querySelector('.js-lightbox');


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