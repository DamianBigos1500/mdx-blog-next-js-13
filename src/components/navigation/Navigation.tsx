import { FC } from 'react';
import styles from '@/styles/components/navigation/navigation.module.scss';
import Link from 'next/link';

interface NavigationProps {}

const Navigation: FC<NavigationProps> = ({}) => {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <span className={styles.nav__logo}>D</span>
      </Link>

      <ul className={styles.nav__links}>
        <li className={styles.nav__item} style={{}}>
          <Link href="/blogs">Blogs</Link>
        </li>

        <li className={styles.nav__item}>
          <Link href="/blogs">About</Link>
        </li>
        <li className={styles.nav__item}>
          <Link href="/blogs">Explore</Link>
        </li>
        <li className={styles.nav__item}>
          <Link href="/blogs">Resume</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
