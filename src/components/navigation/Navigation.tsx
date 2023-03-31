import styles from '@/styles/components/navigation/navigation.module.scss';
import Link from 'next/link';
import ThemeToggle from '../themeToggle/ThemeToggle';
import { getServerSession } from 'next-auth';

const Navigation = async () => {

  return (
    <nav className={styles.nav}>
      <Link href="/">
        <span className={styles.nav__logo}>D</span>
      </Link>

      <ul className={styles.nav__links}>
        <div className={styles.nav__item}>
          <ThemeToggle />
        </div>

        <li className={styles.nav__item}>
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
