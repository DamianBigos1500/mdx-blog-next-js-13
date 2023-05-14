import { IUser } from '@/types/User';
import { FC } from 'react';
import styles from './userProfileCurrentData.module.scss'

interface UserProfileCurrentDataProps {
  currentUser: IUser;
  serverResponse: any;
}

const UserProfileCurrentData: FC<UserProfileCurrentDataProps> = ({
  currentUser,
  serverResponse,
}) => {
  return (
    <>
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
    </>
  );
};

export default UserProfileCurrentData;
