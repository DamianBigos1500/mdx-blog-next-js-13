import { User } from '@prisma/client';
import { FC } from 'react';
import SignOut from '../authButtons/signInGoogle/signOut/SignOut';
import styles from '@/styles/components/userInfo/userInfo.module.scss';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '../ui/DropdownMenu';

interface UserInfoProps {
  currentUser: User;
}

const UserInfo: FC<UserInfoProps> = ({ currentUser }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={styles.user_info__trigger}>
        <img
          src={`${currentUser.image}`}
          className={styles.user_info__image}
          style={{ width: '40px', height: '40px' }}
          alt={''}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className={styles.user_info__content}>
        <SignOut />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserInfo;
