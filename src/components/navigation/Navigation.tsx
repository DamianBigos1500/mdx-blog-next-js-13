'use client';

import styles from '@/styles/components/navigation/navigation.module.scss';
import Link from 'next/link';
import ThemeToggle from '../themeToggle/ThemeToggle';
import SignInGoogle from '../authButtons/signInGoogle/SignInGoogle';
import SignOut from '../authButtons/signInGoogle/signOut/SignOut';

const Navigation = ({ currentUser }: any) => {
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
          <Link href="/about">About</Link>
        </li>
        {currentUser ? (
          <li className={styles.nav__item}>
            <img
              src={`${currentUser.image}`}
              style={{ width: '40px', height: '40px' }}
              alt={''}
            />
            <SignOut />
          </li>
        ) : (
          <li className={styles.nav__item}>
            <SignInGoogle />
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
