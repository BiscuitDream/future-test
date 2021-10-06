import styles from './Result.module.css'
import BookCard from './BookCard/BookCard';
import Preloader from '../common/Preloader/Preloader';
import api from '../../api/api';

const Result = (props) => {
  const books = props.searchResult.map((book) => {
    return (
      <li className={styles.card} key={book.id}>
        <BookCard {...book} />
      </li>
    );
  });

  const onLoadMoreClick = () => {
    props.toggleIsFetching(true);
    api.getBooks(props.searchString, props.sortBy, props.category, props.maxResults, props.startIndex)
      .then(data => {
      props.setMoreBooks(data.items);
      props.toggleIsFetching(false);
      props.setStartIndex(props.startIndex, props.maxResults);
    });
  };

  return (
    <div className={styles.resultBlock}>
      <div className={styles.totalCountWrapper}>
        <p>{`Found ${props.totalItems} results`}</p>
      </div>
      <ul className={styles.booksList}>
        {books}
      </ul>
      {props.isFetching ? <Preloader /> : null}
      {props.isSearched
        ? <button className={styles.loadMore} type="button" onClick={onLoadMoreClick}>Load more</button>
        : null}
    </div>
  );
};

export default Result;
