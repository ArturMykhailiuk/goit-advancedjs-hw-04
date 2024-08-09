import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

export const fetchPhotos = (query, page) => {
  const axiosConfigs = {
    params: {
      key: '45247125-03c336e2130b29d2672f4e8a7',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: page,
      per_page: 15,
    },
  };
  return axios.get(`/`, axiosConfigs);
};
