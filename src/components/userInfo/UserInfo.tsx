import { FC } from 'react';
import SignOut from '../authButtons/signInGoogle/signOut/SignOut';
import styles from '@/styles/components/userInfo/userInfo.module.scss';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/DropdownMenu';
import Image from 'next/image';
import Link from 'next/link';
import dropdownStyles from '@/styles/components/dropdownMenu/dropdownMenu.module.scss';

interface UserInfoProps {
  currentUser: any;
}

const UserInfo: FC<UserInfoProps> = ({ currentUser }) => {
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
          <Link href="/profile" className={styles.link}>Profile</Link>
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

export default UserInfo;
