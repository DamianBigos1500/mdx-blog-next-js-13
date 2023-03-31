'use client';

import { FC } from 'react';
import { signOut } from 'next-auth/react';

const SignOut: FC = ({}) => {
  return <div onClick={() => signOut()}>signOut</div>;
};

export default SignOut;
