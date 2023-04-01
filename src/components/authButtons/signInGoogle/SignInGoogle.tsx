'use client';

import { FC, useState } from 'react';
import { signIn } from 'next-auth/react';

const SignInGoogle: FC = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loginHandler = async () => {
    try {
      await signIn('google');
    } catch (error) {
      console.log(error);
    }
  };

  const githubHandler = async () => {
    try {
      await signIn('github');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button onClick={loginHandler}>Google</button>
      <button onClick={githubHandler}>Github</button>
    </div>
  );
};

export default SignInGoogle;
