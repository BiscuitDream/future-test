import Result from './Result';
import {connect} from 'react-redux';
import {loadMore} from '../../redux/search-reducer';

const mapStateToProps = (state) => {
  return {
    searchResult: state.search.searchResult,
    isFetching: state.search.isFetching,
    searchString: state.search.form.searchString,
    category: state.search.form.category,
    sortBy: state.search.form.sortBy,
    startIndex: state.search.startIndex,
    maxResults: state.search.maxResults,
    isSearched: state.search.isSearched,
    totalItems: state.search.totalItems
  }
}

export default connect(mapStateToProps, {loadMore})(Result);
