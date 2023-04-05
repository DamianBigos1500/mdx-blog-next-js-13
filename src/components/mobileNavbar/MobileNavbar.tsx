import { User } from '@prisma/client';
import { FC } from 'react';
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

interface MobileNavbarProps {
  currentUser: User;
}

const MobileNavbar: FC<MobileNavbarProps> = ({ currentUser }) => {
  return (
    <Dialog>
      <DialogTrigger className={styles.dialog__triger}>
        <Icons.Menu />
      </DialogTrigger>
      <DialogPortal className={styles.dialog__portal}>
        <DialogOverlay className={styles.dialog__overlay} />
        <DialogContent className={styles.dialog__content}>
          <div className={styles.mobile_nav}>
            <li className={styles.mobile_nav__navigation}>
              {navItems.map((item) => (
                <ul className={styles.mobile_nav__item}>
                  <Link href={item.href}>{item.name}</Link>
                </ul>
              ))}
            </li>

            <div className={styles.mobile_nav__user}>User Name</div>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};

export default MobileNavbar;
