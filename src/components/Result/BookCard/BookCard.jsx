import styles from './BookCard.module.css';

const BookCard = (props) => {
  console.log(props);
  return (
    <div>
      <img className={styles.cover} width="100px" height="200px" alt="book cover"/>
      <h2>{props.title}</h2>
      <p>{props.author}</p>
      <p>{props.category}</p>
    </div>
  );
};

export default BookCard;
