'use client';

import { FC, useState } from 'react';
import { signIn } from 'next-auth/react';
import { BsGoogle, BsGithub } from 'react-icons/bs';
import styles from './signInButtons.module.scss';

const SignInButtons: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loginHandler = async (providerName: string) => {
    try {
      await signIn(providerName);
    } catch (error) {}
  };

  return (
    <div className={styles.providers}>
      <button
        className={styles.google}
        onClick={() => loginHandler('google')}
        style={{ background: '#E04A32' }}
      >
        <span className={styles.providers__icon}>
          <BsGoogle size={20} />
        </span>
        <span className={styles.providers_text}>Login with Google</span>
      </button>

      <button
        className={styles.github}
        onClick={() => loginHandler('github')}
        style={{ background: '#202020' }}
      >
        <span className={styles.providers__icon}>
          <BsGithub size={20} />
        </span>
        <span className={styles.providers_text}>Login with Github</span>
      </button>
    </div>
  );
};

export default SignInButtons;
