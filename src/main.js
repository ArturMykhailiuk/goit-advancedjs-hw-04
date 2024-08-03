import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { addProgressBar } from './js/render-functions.js';
import { removeProgressBar } from './js/render-functions.js';
import { createGalleryCardTemplate } from './js/render-functions.js';
import { fetchPhotos } from './js/pixabay-api.js';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');

const onSearchFormSubmit = event => {
  event.preventDefault();

  const searchedValue = event.target.elements.user_query.value;

  event.target.elements.user_query.value = '';

  addProgressBar();

  fetchPhotos(searchedValue)
    .then(({ hits }) => {
      if (hits.length === 0) {
        iziToast.show({
          title:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          color: 'red',
        });

        return;
      }

      const galleryCardsTemplate = hits
        .map(imgInfo => createGalleryCardTemplate(imgInfo))
        .join('');

      galleryEl.innerHTML = galleryCardsTemplate;

      const lightbox = new SimpleLightbox('.gallery-card a', {
        captionsData: 'alt',
        captionDelay: 250,
      });

      lightbox.refresh();
    })
    .catch(err => {
      console.log(err);
    });

  removeProgressBar();
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
