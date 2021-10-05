import styles from './Preloader.module.css';
import {ReactComponent as PreloaderImage} from './preloader.svg';

// TODO стилизовать нормально
const Preloader = () => {
  return (
    <div className={styles.overlay}>
      <PreloaderImage className={styles.preloader} />
    </div>
  );
};

export default Preloader;
