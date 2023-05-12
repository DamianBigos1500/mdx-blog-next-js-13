'use client';

import { FC } from 'react';
// import styles from '@/styles/components/navigation/navigation.module.scss';
import Link from 'next/link';
// import SignInModal from '../signInModal/SignInModal';
// import UserInfo from '../userInfo/UserInfo';
// import MobileNavbar from '../mobileNavbar/MobileNavbar';
import { navLinks } from '@/data/navLinks';
import Logo from '../Logo/Logo';
import { IUser } from '@/types/User';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import styles from './navbar.module.scss';
import SignInModal from '@/features/auth/components/SignInModal/SignInModal';

interface MobileNavbarProps {
  currentUser: IUser | null;
}

const Navbar: FC<MobileNavbarProps> = ({ currentUser }) => {
  return (
    <nav className={`${styles.nav} shadow`}>
      <Link href="/">
        <Logo />
      </Link>

      <div className={styles.nav__right}>
        <ul className={styles.nav__links}>
          {/* Theme toggle */}
          <li className={styles.nav__item}>
            <ThemeToggle />
          </li>

          {/* Links */}
          {navLinks.map((item) => (
            <li key={item.name} className={styles.nav__item}>
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}

          {/* User */}
          {currentUser ? (
            <li className={styles.nav__item}>
              {/* <UserInfo currentUser={currentUser} /> */}
            </li>
          ) : (
            <li className={styles.nav__item}>
              <SignInModal getOpenValue={null} />
            </li>
          )}
        </ul>

        <div className={styles.nav__mobile_nav}>
          {/* <MobileNavbar currentUser={currentUser} /> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
