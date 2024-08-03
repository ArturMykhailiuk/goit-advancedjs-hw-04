export const createGalleryCardTemplate = hit => {
  return `
  <li class="gallery-card">

  <a class="gallery-link" href="${hit.largeImageURL}">
    <img class="gallery-img" src="${hit.webformatURL}" alt="${hit.tags}" />
  </a>

    <div class="gallery-card-info">
      <div class="image-info">
        <p class="image-info-label">Likes:</p>
        <p class="image-info-counter">${hit.likes}</p>
      </div>
      <div class="image-info">
        <p class="image-info-label">Comments:</p>
        <p class="image-info-counter">${hit.comments}</p>
      </div>
      <div class="image-info">  
        <p class="image-info-label">Views:</p>
        <p class="image-info-counter">${hit.views}</p>
      </div>
      <div class="image-info">
        <p class="image-info-label">Dowloads:</p>
        <p class="image-info-counter">${hit.downloads}</p>
      </div>
    </div>
  </li>
  `;
};

export const addProgressBar = () => {
  const loaderSpan = document.createElement('div');
  loaderSpan.classList.add('loader');

  const targetElement = document.querySelector('.js-search-form');
  targetElement.insertAdjacentElement('afterend', loaderSpan);
};

export const removeProgressBar = () => {
  const elementToRemove = document.querySelector('.loader');
  elementToRemove.remove();
};
