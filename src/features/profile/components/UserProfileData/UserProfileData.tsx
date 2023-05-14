'use client';

import { IUser } from '@/types/User';
import { FC, useState } from 'react';
import styles from './userProfileData.module.scss';
import Icons from '@/components/UI/Icons/Icons';
import UpdateProfileForm from '../UpdateProfileForm/UpdateProfileForm';
import UserProfileCurrentData from '../UserProfileCurrentData/UserProfileCurrentData';

interface UserProfileDataProps {
  currentUser: IUser;
}

const UserProfileData: FC<UserProfileDataProps> = ({ currentUser }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [serverResponse, setServerResponse] = useState<any>({});
  const [updatedImageUrl, setUpdatedImageUrl] = useState<any>(null);

  return (
    <div className={styles.user_profile}>
      <div className={styles.user_profile__left}>
        {currentUser.image && (
          <img
            src={updatedImageUrl ?? currentUser.image}
            className={styles.user_profile__image}
            alt={''}
          />
        )}
        <h3 className={styles.user_profile__user_name}>{currentUser.name}</h3>
      </div>

      <div className={styles.user_profile__right}>
        <h2 className={styles.user_profile__information}>
          <span>Profile information</span>
          <span className={styles.user_profile__edit_icon}>
            {!isEditMode ? (
              <Icons.Pencil onClick={() => setIsEditMode(!isEditMode)} />
            ) : (
              <Icons.X onClick={() => setIsEditMode(!isEditMode)} />
            )}
          </span>
        </h2>

        <div className={styles.user_profile__profile_information}>
          {!isEditMode ? (
            <UserProfileCurrentData
              currentUser={currentUser}
              serverResponse={serverResponse}
            />
          ) : (
            <UpdateProfileForm
              currentUser={currentUser}
              setIsEditMode={setIsEditMode}
              setServerResponse={setServerResponse}
              setUpdatedImageUrl={setUpdatedImageUrl}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfileData;
