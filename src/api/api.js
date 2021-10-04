import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1/',
  params: {
    maxResults: 30
  }
});

const api = {
  getSearchResult(searchString, sortBy) {
    return axiosInstance
      .get(`volumes?q=${searchString}&orderBy=${sortBy}`) // +subject:${props.category}
      .then(response =>{
        const items = response.data.items.map((item) => {
          // const {title = null, authors = null, category = null, imageLinks: {smallThumbnail = null, thumbnail = null} } = item.volumeInfo;
          const {
            title = null,
            authors = null,
            category = null,
            imageLinks: {
              smallThumbnail = null,
              thumbnail = null
            } = {
              smallThumbnail: null,
              thumbnail: null
            }
          } = item.volumeInfo;
          // const title = item.volumeInfo.title;
          // const authors = item.volumeInfo.authors;
          // const category = item.volumeInfo.categories;
          // const imageLinks = item.volumeInfo.imageLinks;
          return {
            title,
            authors,
            category,
            imageLinks:  {
              smallThumbnail,
              thumbnail
            }
          };
        });

        return items;
      });
  }
};

export default api;
