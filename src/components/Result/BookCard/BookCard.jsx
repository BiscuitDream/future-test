import styles from './BookCard.module.css';
import defaultCover from '../../../assets/images/book-cover-template.jpg'

const BookCard = (props) => {
  const title = Boolean(props.title) ? props.title : ' ';
  const authors = Boolean(props.authors) ? props.authors.join(', ') : ' ';
  const categories = Boolean(props.categories) ? props.categories[0] : ' ';
  const linkAddress = `/${props.id}`;
  const coverSrc = (props.imageLinks.thumbnail) ? props.imageLinks.thumbnail : defaultCover;

  return (
    <div className={styles.bookCard}>
      <a href={linkAddress}>
        <div className={styles.coverWrapper}>
          <img className={styles.cover} src={coverSrc} alt="book cover"/>
        </div>
      </a>
      <p>{categories}</p>
      <a href={linkAddress}><h3>{title}</h3></a>
      <p className={styles.authors}>{authors}</p>
    </div>
  );
};

export default BookCard;
