'use client';

import { FC } from 'react';

interface SignInFormProps {}

const SignInForm: FC<SignInFormProps> = ({}) => {
  return (
    <form className="form">
      <h2 className="title">Login</h2>

      <div className="group">
        <label>name</label>
        <input placeholder={'...'} />
      </div>

      <div className="group">
        <label>email</label>
        <input placeholder={'...'} />
      </div>
      <div className="group">
        <label>password</label>
        <input placeholder={'...'} />
      </div>
      <div className="group">
        <label>password confirmation</label>
        <input placeholder={'...'} />
      </div>
    </form>
  );
};

export default SignInForm;
