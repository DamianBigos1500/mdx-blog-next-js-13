'use client';

import { FC, useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTrigger,
} from '../ui/Dialog';
import styles from '@/styles/components/mobileNavbar/mobileNavbar.module.scss';
import { navItems } from '@/data/navItems';
import Link from 'next/link';
import Icons from '../icons/Icons';
import SignInModal from '../signInModal/SignInModal';
import { User } from '@/utils/types';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { signOut } from 'next-auth/react';

interface MobileNavbarProps {
  currentUser: User | null;
}

const MobileNavbar: FC<MobileNavbarProps> = ({ currentUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  }, [pathname]);

  const getSignInOpenValue = (isSignInOpen: boolean) => {
    console.log(isSignInOpen);
    if (isSignInOpen) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  return (
    <Dialog onOpenChange={(isOpened) => setIsOpen(isOpened)} open={isOpen}>
      <DialogTrigger className={styles.dialog__triger}>
        <Icons.Menu />
      </DialogTrigger>
      <DialogPortal className={styles.dialog__portal}>
        <DialogOverlay className={styles.dialog__overlay} />
        <DialogContent
          className={styles.dialog__content}
          style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 300ms' }}
        >
          <div className={styles.mobile_nav}>
            <li className={styles.mobile_nav__navigation}>
              {navItems.map((item) => (
                <ul key={item.name} className={styles.mobile_nav__item}>
                  <Link href={item.href}>{item.name}</Link>
                </ul>
              ))}
            </li>

            <div className={styles.mobile_nav__user}>
              {currentUser ? (
                <>
                  <Link
                    href={'/profile'}
                    className={styles.mobile_nav__user_data}
                  >
                    <Image
                      className={styles.mobile_nav__user_image}
                      src={currentUser.image!}
                      alt={'Profile image'}
                      width={60}
                      height={60}
                    />
                    <span>
                      <span>{currentUser?.name} </span>
                      <span>{currentUser?.surname}</span>
                    </span>

                    <span
                      onClick={() => {
                        signOut();
                      }}
                    >
                      <Icons.LogOut />
                    </span>
                  </Link>
                </>
              ) : (
                <div className={styles.mobile_nav__sign_in}>
                  <SignInModal getOpenValue={getSignInOpenValue} />
                </div>
              )}
            </div>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};

export default MobileNavbar;
