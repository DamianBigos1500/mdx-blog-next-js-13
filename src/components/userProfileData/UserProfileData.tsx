'use client';

import { User } from '@/utils/types';
import { FC, useState } from 'react';
import styles from '@/styles/components/userProfileData/userProfileData.module.scss';
import Icons from '../icons/Icons';
import UpdateProfileForm from '../updateProfileForm/UpdateProfileForm';

interface UserProfileDataProps {
  currentUser: User;
}

const UserProfileData: FC<UserProfileDataProps> = ({ currentUser }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [serverResponse, setServerResponse] = useState<any>({});

  return (
    <div className={styles.user_profile}>
      <div className={styles.user_profile__left}>
        {currentUser.image && (
          <img
            src={currentUser.image}
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

        {!isEditMode ? (
          <div className={styles.user_profile__profile_information}>
            <div>
              <span>Email: </span>
              <span>{currentUser.email}</span>
            </div>

            <div>
              <span>Name: </span>
              <span>{currentUser.name}</span>
            </div>

            <div>
              <span>Surname: </span>
              <span>{currentUser.surname}</span>
            </div>

            {serverResponse && (
              <div
                className={`text-sm ${
                  serverResponse.code === 200 ? 'text-success' : 'text-error'
                }`}
              >
                {serverResponse.message}
              </div>
            )}
          </div>
        ) : (
          <div className={styles.user_profile__profile_information}>
            <UpdateProfileForm
              currentUser={currentUser}
              setIsEditMode={setIsEditMode}
              setServerResponse={setServerResponse}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfileData;
