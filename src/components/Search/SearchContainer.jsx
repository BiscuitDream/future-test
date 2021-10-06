import {connect} from 'react-redux';
import Search from './Search';
import {
  setSearchCategory,
  setSearchResult,
  setSearchSortBy,
  setSearchString, setStartIndex,
  toggleIsFetching, toggleIsSearched
} from "../../redux/search-reducer";

const mapStateToProps = (state) => {
  return {
    searchString: state.search.form.searchString,
    category: state.search.form.category,
    sortBy: state.search.form.sortBy,
    startIndex: state.search.startIndex,
    maxResults: state.search.maxResults
  };
};

const SearchContainer = connect(mapStateToProps, {
  setSearchString,
  setSearchCategory,
  setSearchSortBy,
  setSearchResult,
  toggleIsFetching,
  setStartIndex,
  toggleIsSearched
})(Search);

export default SearchContainer;
