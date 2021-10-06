import styles from './Result.module.css'
import BookCard from './BookCard/BookCard';
import Preloader from '../common/Preloader/Preloader';

const Result = (props) => {
  const books = props.searchResult.map((book) => {
    return (
      <li className={styles.card} key={book.id}>
        <BookCard {...book} />
      </li>
    );
  });

  const onLoadMoreClick = () => {
    props.loadMore(props.searchString, props.sortBy, props.category, props.maxResults, props.startIndex);
  };

  return (
    <div className={styles.resultBlock}>
      <div className={styles.totalCountWrapper}>
        <p>{props.isSearched ? `Found ${props.totalItems} results` : null}</p>
      </div>
      <ul className={styles.booksList}>
        {books}
      </ul>
      {props.isFetching ? <Preloader /> : null}
      {(props.isSearched && props.searchResult.length < props.totalItems)
        ? <button className={styles.loadMore} type="button" onClick={onLoadMoreClick}>Load more</button>
        : null}
    </div>
  );
};

export default Result;
