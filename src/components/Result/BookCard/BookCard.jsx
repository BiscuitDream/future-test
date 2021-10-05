import styles from './BookCard.module.css';

const BookCard = (props) => {
  const title = Boolean(props.title) ? props.title : ' ';
  const authors = Boolean(props.authors) ? props.authors.join(', ') : ' ';
  const categories = Boolean(props.categories) ? props.categories[0] : ' ';
  const linkAddress = `/${props.id}`;
  const coverSrc = props.imageLinks.thumbnail;

  return (
    <div className={styles.bookCard}>
      <a href={linkAddress}><img className={styles.cover} src={coverSrc} width="" alt="book cover"/></a>
      <p>{categories}</p>
      <a href={linkAddress}><h3>{title}</h3></a>
      <p className={styles.authors}>{authors}</p>
    </div>
  );
};

export default BookCard;
