export const fetchPhotos = query => {
  return fetch(
    `https://pixabay.com/api/?key=45247125-03c336e2130b29d2672f4e8a7&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};
