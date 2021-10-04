import styles from './BookCard.module.css';

const BookCard = (props) => {
  const title = props.title;
  const authors = props.authors;
  const category = props.category;
  const imgSource = props.imageLinks.smallThumbnail;

  return (
    <div>
      <img className={styles.cover} width="200px" alt="book cover"/>
      <h2>{title}</h2>
      <p>{Boolean(authors) ? authors.join(', ') : ''}</p>
      <p>{category}</p>
    </div>
  );
};

export default BookCard;
