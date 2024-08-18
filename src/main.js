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
const loadMoreBtnEl = document.querySelector('.js-load-more');

let currentPage = 1;
let totalHits = 0;
let searchedValue = '';

const onSearchFormSubmit = async event => {
  try {
    event.preventDefault();

    searchedValue = event.target.elements.user_query.value.trim();

    currentPage = 1;

    event.target.elements.user_query.value = '';

    addProgressBar('.js-search-form');

    if (searchedValue.length !== 0) {
      const { data } = await fetchPhotos(searchedValue, currentPage);

      if (data.hits.length === 0) {
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

      totalHits = data.hits.length;

      const galleryCardsTemplate = data.hits
        .map(imgInfo => createGalleryCardTemplate(imgInfo))
        .join('');

      galleryEl.innerHTML = galleryCardsTemplate;

      loadMoreBtnEl.classList.remove('is-hidden');

      removeProgressBar();

      const lightbox = new SimpleLightbox('.gallery-card a', {
        captionsData: 'alt',
        captionDelay: 250,
      });

      lightbox.refresh();
    } else {
      removeProgressBar();
    }
  } catch (err) {
    console.log(err);
  }
};

const onLoadMoreBtnClick = async event => {
  try {
    currentPage++;

    addProgressBar('.js-gallery');

    const { data } = await fetchPhotos(searchedValue, currentPage);

    totalHits += data.hits.length;

    const galleryCardsTemplate = data.hits
      .map(imgInfo => createGalleryCardTemplate(imgInfo))
      .join('');

    galleryEl.insertAdjacentHTML('beforeend', galleryCardsTemplate);

    let elem = document.querySelector('.gallery-card');
    let rect = elem.getBoundingClientRect();
    console.log(rect.height);
    window.scrollBy({
      top: 2 * rect.height,
      behavior: 'smooth',
    });

    const lightbox = new SimpleLightbox('.gallery-card a', {
      captionsData: 'alt',
      captionDelay: 250,
    });

    lightbox.refresh();

    removeProgressBar();

    if (totalHits >= data.totalHits) {
      loadMoreBtnEl.classList.add('is-hidden');

      iziToast.show({
        title: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
        color: 'grey',
      });
    }
  } catch (err) {
    console.log(err);
  }
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
loadMoreBtnEl.addEventListener('click', onLoadMoreBtnClick);
