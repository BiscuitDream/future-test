import api from "../../api/api";

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
    api.getSearchResult(props.searchString, props.sortBy)
      .then(data =>{
        props.setSearchResult(data);
      });
  };

  return (
    <div>
      <h1>Блок поиска</h1>
      <form onSubmit={onFormSubmit}>
        <p>
          <label htmlFor="search-input">Строка поиска</label>
          <input type="text" id="search-input" value={props.searchString} onChange={onInputChange} />
        </p>
        <p>
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
        <p>
          <label htmlFor="sorting-select">Sorting by</label>
          <select name="sorting" id="sorting-select" value={props.sortBy} onChange={onSortByChange}>
            <option value="relevance">relevance</option>
            <option value="newest">newest</option>
          </select>
        </p>

      </form>
    </div>
  );
};

export default Search
