import Result from './Result';
import {connect} from 'react-redux';
import {setMoreBooks, setStartIndex, toggleIsFetching} from "../../redux/search-reducer";

const mapStateToProps = (state) => {
  return {
    searchResult: state.search.searchResult,
    isFetching: state.search.isFetching,
    searchString: state.search.form.searchString,
    category: state.search.form.category,
    sortBy: state.search.form.sortBy,
    startIndex: state.search.startIndex,
    maxResults: state.search.maxResults
  }
}

const ResultContainer = connect(mapStateToProps, {
  setMoreBooks,
  toggleIsFetching,
  setStartIndex
})(Result);

export default ResultContainer;
