import React from 'react';
import {connect} from 'react-redux';
import {compose} from "redux";
import {withRouter} from 'react-router-dom';
import AboutBook from './AboutBook';
import {getBook} from '../../redux/search-reducer';

class AboutBookContainer extends React.Component {
  componentDidMount() {
    const bookId = this.props.match.params.bookId;
    this.props.getBook(bookId);
  }

  render() {
    return (
      <AboutBook {...this.props.currentBook} />
    );
  }
}

const mapStateToProps = (state) => ({
  currentBook: state.search.currentBook
});

export default compose(
  connect(mapStateToProps, {getBook}),
  withRouter
)(AboutBookContainer);
