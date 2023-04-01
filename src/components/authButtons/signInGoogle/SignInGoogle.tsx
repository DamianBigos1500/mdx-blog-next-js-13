'use client';

import { FC, useState } from 'react';
import { signIn } from 'next-auth/react';

const SignInGoogle: FC = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loginHandler = async () => {
    await signIn('google');
  };

  const githubHandler = async () => {
    await signIn('github');
  };

  return (
    <div>
      <button onClick={loginHandler}>Google</button>
      <button onClick={githubHandler}>Github</button>
    </div>
  );
};

export default SignInGoogle;
