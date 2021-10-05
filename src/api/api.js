import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1/volumes',
});

const api = { // TODO обе загрузки одно и то же. убрать дублирование
  getSearchResult(searchString, sortBy, maxResults, startIndex = 0) {
    return axiosInstance
      .get(`?q=${searchString}&orderBy=${sortBy}&startIndex=${startIndex}&maxResults=${maxResults}`) // +subject:${props.category}
      .then(response => {
        const items = response.data.items.map((item) => {
          // const {title = null, authors = null, category = null, imageLinks: {smallThumbnail = null, thumbnail = null} } = item.volumeInfo;
          const {
            id,
            volumeInfo: {
              title = null,
              authors = null,
              categories = null,
              imageLinks: {
                smallThumbnail = null,
                thumbnail = null
              } = {
                smallThumbnail: null,
                thumbnail: null
              }
            }
          } = item;
          // const title = item.volumeInfo.title;
          // const authors = item.volumeInfo.authors;
          // const category = item.volumeInfo.categories;
          // const imageLinks = item.volumeInfo.imageLinks;
          return {
            id,
            title,
            authors,
            categories,
            imageLinks: {
              smallThumbnail,
              thumbnail
            }
          };
        });

        return items;
      });
  },
  loadMore(searchString, sortBy,  maxResults, startIndex) {
    return axiosInstance
      .get(`?q=${searchString}&orderBy=${sortBy}&startIndex=${startIndex}&maxResults=${maxResults}`)
      .then(response => {
        const items = response.data.items.map((item) => {
          const {
            id,
            volumeInfo: {
              title = null,
              authors = null,
              categories = null,
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
