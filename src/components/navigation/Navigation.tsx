import styles from '@/styles/components/navigation/navigation.module.scss';
import Link from 'next/link';
import ThemeToggle from '../themeToggle/ThemeToggle';
import getCurrentUser from '@/utils/getCurrentUser';
import SignInModal from '../signInModal/SignInModal';
import UserInfo from '../userInfo/UserInfo';

const Navigation = async () => {
  const currentUser = await getCurrentUser();

  return (
    <nav className={`${styles.nav} shadow`}>
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
            <UserInfo currentUser={currentUser} />
          </li>
        ) : (
          <li className={styles.nav__item}>
            <SignInModal />
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
