import React from 'react';
import {connect} from 'react-redux';
import api from '../../api/api';
import {withRouter} from 'react-router-dom';
import AboutBook from './AboutBook';
import {setCurrentBook} from "../../redux/search-reducer";

class AboutBookContainer extends React.Component {
  componentDidMount() {
    const bookId = this.props.match.params.bookId;
    api.getBook(bookId)
      .then(data => {
        setCurrentBook(data);
      });
  }

  render() {
    return (
      <AboutBook />
    );
  }
}

const AboutBookContainerWithRouter = withRouter(AboutBookContainer);

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps, {setCurrentBook})(AboutBookContainerWithRouter);
