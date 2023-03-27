import { FC } from 'react';
import styles from '../../styles/navigation/navigation.module.scss';

interface NavigationProps {}

const Navigation: FC<NavigationProps> = ({}) => {
  return (
    <nav className={styles.nav}>
      <span className={styles.nav__logo}>D</span>

      <ul className={styles.nav__links}>
        <li className={styles.nav__item}>Home</li>
        <li className={styles.nav__item}>About</li>
        <li className={styles.nav__item}>Explorer</li>
        <li className={styles.nav__item}>Resume</li>
      </ul>
    </nav>
  );
};

export default Navigation;
