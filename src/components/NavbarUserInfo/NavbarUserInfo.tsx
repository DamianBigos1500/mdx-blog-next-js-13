import { FC } from 'react';
import styles from './navbarUserInfo.module.scss';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/UI/DropdownMenu/DropdownMenu';
import Image from 'next/image';
import Link from 'next/link';
import dropdownStyles from '@/styles/UI/customDropdown.module.scss';
import SignOut from '@/features/auth/components/SignOut/SignOut';

interface NavbarUserInfoProps {
  currentUser: any;
}

const NavbarUserInfo: FC<NavbarUserInfoProps> = ({ currentUser }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={styles.user_info__trigger}>
        <Image
          src={`${currentUser.image}`}
          className={styles.user_info__image}
          width={40}
          height={40}
          style={{ width: '40px', height: '40px' }}
          alt={currentUser.name + ' profile image'}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className={dropdownStyles.dropdown__content}>
        <DropdownMenuItem
          className={dropdownStyles.dropdown__item}
          style={{ cursor: 'pointer' }}
        >
          <Link href="/profile" className={styles.link}>
            Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem
          className={dropdownStyles.dropdown__item}
          style={{ cursor: 'pointer' }}
        >
          <SignOut />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavbarUserInfo;
