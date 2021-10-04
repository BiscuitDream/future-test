import {connect} from 'react-redux';
import Search from './Search';
import {setSearchCategory, setSearchResult, setSearchSortBy, setSearchString} from "../../redux/search-reducer";

const mapStateToProps = (state) => {
  return {
    searchString: state.search.form.searchString,
    category: state.search.form.category,
    sortBy: state.search.form.sortBy
  };
};

const SearchContainer = connect(mapStateToProps, {
  setSearchString,
  setSearchCategory,
  setSearchSortBy,
  setSearchResult
})(Search);

export default SearchContainer;
