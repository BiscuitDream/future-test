import axios from 'axios';

const mappingDataItem = (data) => {
  const {
    id,
    volumeInfo: {
      title = null,
      authors = null,
      categories = null,
      description = null,
      imageLinks: {
        smallThumbnail = null,
        thumbnail = null
      } = {
        smallThumbnail: null,
        thumbnail: null
      }
    }
  } = data;

  return {
    id,
    title,
    authors,
    categories,
    description,
    imageLinks: {
      smallThumbnail,
      thumbnail
    }
  };
};

const axiosInstance = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1/volumes',
});

const api = {
  getBooks(searchString, sortBy, category, maxResults, startIndex = 0) {
    const subject = (category === 'all') ? '' : `+subject:${category}`;
    return axiosInstance
      .get(`?q=${searchString}${subject}&orderBy=${sortBy}&startIndex=${startIndex}&maxResults=${maxResults}`)
      .then(response => {
        const totalItemsCount = response.data.totalItems;
        const items = !response.data.items
          ? []
          : response.data.items.map((item) => mappingDataItem(item));
        return {items, totalItemsCount};
      });
  },
  getBook(id) {
    return axiosInstance
      .get(`${id}`)
      .then(response => mappingDataItem(response.data));
  }
};

export default api;
