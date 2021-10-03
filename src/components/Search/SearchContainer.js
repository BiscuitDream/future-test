import {connect} from 'react-redux';
import Search from './Search';
import {setSearchCategory, setSearchSortBy, setSearchString} from "../../redux/search-reducer";

const mapStateToProps = (state) => {
  return {
    searchString: state.search.searchString,
    category: state.search.category,
    sortBy: state.search.sortBy
  };
};

const SearchContainer = connect(mapStateToProps, {
  setSearchString,
  setSearchCategory,
  setSearchSortBy
})(Search);

export default SearchContainer;
