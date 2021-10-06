import styles from './Preloader.module.css';
import {ReactComponent as PreloaderImage} from './preloader.svg';

const Preloader = () => {
  return (
    <div className={styles.preloaderWrapper}>
      <PreloaderImage className={styles.preloader} />
    </div>
  );
};

export default Preloader;
