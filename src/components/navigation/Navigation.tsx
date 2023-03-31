import styles from '@/styles/components/navigation/navigation.module.scss';
import Link from 'next/link';
import ThemeToggle from '../themeToggle/ThemeToggle';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/server/auth';
import SignInGoogle from '../authButtons/signInGoogle/SignInGoogle';
import SignOut from '../authButtons/signInGoogle/signOut/SignOut';

const Navigation = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);

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
        {session ? (
          <li className={styles.nav__item}>
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
