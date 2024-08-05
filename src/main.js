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

  const searchedValue = event.target.elements.user_query.value.trim();
  

  event.target.elements.user_query.value = '';

  addProgressBar();



  if (searchedValue.length !== 0) {
    fetchPhotos(searchedValue)
      .then(({ hits }) => {
        if (hits.length === 0) {
          galleryEl.innerHTML = '';

          removeProgressBar();

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

        removeProgressBar();

        const lightbox = new SimpleLightbox('.gallery-card a', {
          captionsData: 'alt',
          captionDelay: 250,
        });

        lightbox.refresh();
      })
      .catch(err => {
        console.log(err);
      });
  }else{
    removeProgressBar();
  }
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
