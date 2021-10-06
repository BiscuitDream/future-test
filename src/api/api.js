import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1/volumes',
});

const api = { // TODO обе загрузки одно и то же. убрать дублирование
  getBooks(searchString, sortBy, maxResults, startIndex = 0) {
    return axiosInstance
      .get(`?q=${searchString}&orderBy=${sortBy}&startIndex=${startIndex}&maxResults=${maxResults}`) // +subject:${props.category}
      .then(response => {
        const items = response.data.items.map((item) => {
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
          } = item;
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
        });

        return items;
      });
  },
  getBook(id) {
    return axiosInstance
      .get(`${id}`)
      .then(response => {
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
        } = response.data;

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
      });
  }
};

export default api;
