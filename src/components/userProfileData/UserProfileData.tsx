import { User } from '@/utils/types';
import { FC } from 'react';
import styles from '@/styles/components/userProfileData/userProfileData.module.scss';
import Image from 'next/image';

interface UserProfileDataProps {
  currentUser: User;
}

const UserProfileData: FC<UserProfileDataProps> = ({ currentUser }) => {
  return (
    <div className={styles.user_profile}>
      <div className={styles.user_profile__left}>
        {currentUser.image && (
          <Image
            src={currentUser.image}
            className={styles.user_profile__image}
            alt={''}
            width={200}
            height={200}
          />
        )}
        <h3 className={styles.user_profile__user_name}>{currentUser.name}</h3>
      </div>
      <div className={styles.user_profile__right}>
        <h2 className={styles.user_profile__information}>
          Profile information
        </h2>
        <div className={styles.user_profile__profile_information}>
          <div>
            <span>Name: </span>
            <span>{currentUser.name}</span>
          </div>
          <div>
            <span>Surname: </span>
            <span>{currentUser.name}</span>
          </div>
          <div>
            <span>Email: </span>
            <span>{currentUser.email}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileData;
