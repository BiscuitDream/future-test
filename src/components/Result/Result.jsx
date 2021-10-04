import styles from './Result.module.css'
import BookCard from './BookCard/BookCard';

const Result = (props) => {
  const books = props.searchResult.map((book) => {
    return (
      <li key={book.id}>
        <BookCard {...book} />
      </li>
    );
  });

  return (
    <div>
      <h1>Блок результата поиска</h1>
      <ul className={styles.booksList}>
        {books}
      </ul>
    </div>

  );
};

export default Result;
