import styles from './AboutBook.module.css';

const AboutBook = (props) => {
  const title = Boolean(props.title) ? props.title : ' ';
  const authors = Boolean(props.authors) ? props.authors.join(', ') : ' ';
  const categories = Boolean(props.categories) ? props.categories.join(', ') : ' ';
  const description = Boolean(props.description) ? props.description : ' ';
  const coverSrc = props?.imageLinks?.thumbnail;

  return (
    <div className={styles.book}>
      <div>
        <img src={coverSrc} alt="Обложка книги"/>
      </div>
      <div className={styles.description}>
        <p>{categories}</p>
        <h3>{title}</h3>
        <p>{authors}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AboutBook;
