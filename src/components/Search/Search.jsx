import styles from './Search.module.css'
import api from "../../api/api"; // TODO поменять везде кавычки на одинаковые
import searchIcon from '../../assets/images/searc-icon.png';
 // TODO задезейблить форму, елси пустая строка
const Search = (props) => {
  const onInputChange = (e) => {
    const value = e.target.value;
    props.setSearchString(value);
  };

  const onCategoryChange = (e) => {
    const value = e.target.value;
    props.setSearchCategory(value);
  };

  const onSortByChange = (e) => {
    const value = e.target.value;
    props.setSearchSortBy(value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    props.toggleIsFetching(true);
    api.getSearchResult(props.searchString, props.sortBy, props.maxResults)
      .then(data =>{
        props.setSearchResult(data);
        props.toggleIsFetching(false);
        props.setStartIndex(props.startIndex, props.maxResults);
        props.toggleIsSearched(true);
      });
  };

  return (
    <div className={styles.searchBlock}>
      <form className={styles.searchForm} onSubmit={onFormSubmit}>
        <h1>Search for books</h1>
        <p className={styles.searchInput}>
          <input type="text" id="search-input" value={props.searchString} onChange={onInputChange} />
          <button type="submit">
            <img src={searchIcon} width="20" alt="Кнопка поиска"/>
          </button>
        </p>
        <div className={styles.wrapParams}>
          <p className={styles.searchParam}>
            <label htmlFor="categories-select">Categories</label>
            <select name="categories" id="categories-select" value={props.category} onChange={onCategoryChange}>
              <option value="all">all</option>
              <option value="art">art</option>
              <option value="biography">biography</option>
              <option value="computers">computers</option>
              <option value="history">history</option>
              <option value="medical">medical</option>
              <option value="poetry">poetry</option>
            </select>
          </p>
          <p className={styles.searchParam}>
            <label htmlFor="sorting-select">Sorting by</label>
            <select name="sorting" id="sorting-select" value={props.sortBy} onChange={onSortByChange}>
              <option value="relevance">relevance</option>
              <option value="newest">newest</option>
            </select>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Search
