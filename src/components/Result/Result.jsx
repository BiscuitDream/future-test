import styles from './Result.module.css'
import BookCard from './BookCard/BookCard';
import Preloader from "../common/Preloader/Preloader";
import api from "../../api/api";

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
    api.loadMore(props.searchString, props.sortBy, props.maxResults, props.startIndex)
      .then(data => {
      props.setMoreBooks(data);
      props.toggleIsFetching(false);
      props.setStartIndex(props.startIndex, props.maxResults);
    });
  };
// TODO прелоадер поправить, мб перенести ниже и только блок книг скрывать
  return (
    <>
      {props.isFetching ? <Preloader /> : null}
      <div className={styles.resultBlock}>
        <ul className={styles.booksList}>
          {books}
        </ul>
        {props.isSearched
          ? <button className={styles.loadMore} type="button" onClick={onLoadMoreClick}>Load more</button>
          : null}
      </div>
    </>
  );
};

export default Result;
