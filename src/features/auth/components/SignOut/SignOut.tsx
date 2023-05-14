'use client';

import { FC } from 'react';
import { signOut } from 'next-auth/react';

const SignOut: FC = ({}) => {
  return <div onClick={() => signOut()}>Sign out</div>;
};

export default SignOut;
