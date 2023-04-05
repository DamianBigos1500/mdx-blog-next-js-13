'use client';

import styles from '@/styles/components/navigation/navigation.module.scss';
import Link from 'next/link';
import ThemeToggle from '../themeToggle/ThemeToggle';
import SignInModal from '../signInModal/SignInModal';
import UserInfo from '../userInfo/UserInfo';
import { FC, useState } from 'react';
import MobileNavbar from '../mobileNavbar/MobileNavbar';
import { navItems } from '@/data/navItems';

interface MobileNavbarProps {
  currentUser: any | null;
}

const Navigation: FC<MobileNavbarProps> = ({ currentUser }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`${styles.nav} shadow`}>
      <Link href="/">
        <span className={styles.nav__logo}>D</span>
      </Link>

      <div className={styles.nav__right}>
        <ul className={styles.nav__links}>
          {/* Theme toggle */}
          <li className={styles.nav__item}>
            <ThemeToggle />
          </li>

          {/* Links */}
          {navItems.map((item) => (
            <li key={item.name} className={styles.nav__item}>
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}

          {/* User */}
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

        <div className={styles.nav__mobile_nav}>
          <MobileNavbar currentUser={currentUser} />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
