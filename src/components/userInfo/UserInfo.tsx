import { FC } from 'react';
import SignOut from '../authButtons/signInGoogle/signOut/SignOut';
import styles from '@/styles/components/userInfo/userInfo.module.scss';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '../ui/DropdownMenu';
import Image from 'next/image';

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