import {connect} from 'react-redux';
import Search from './Search';
import {
  formSubmit,
  setSearchCategory,
  setSearchSortBy,
  setSearchString,
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

export default connect(mapStateToProps, {
  setSearchString,
  setSearchCategory,
  setSearchSortBy,
  formSubmit
})(Search);
