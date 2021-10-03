import Result from "./Result";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
  return {
    searchResult: state.search.searchResult
  }
}

const ResultContainer = connect(mapStateToProps)(Result);

export default ResultContainer;
