'use client';

import { FC, useState } from 'react';
import { signIn } from 'next-auth/react';

const SignInGoogle: FC = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loginHandler = async () => {
    await signIn('google');
  };

  return (
    <button onClick={loginHandler}>
      <span>Google Login</span>
    </button>
  );
};

export default SignInGoogle;
