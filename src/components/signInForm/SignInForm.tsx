'use client';

import { FC, FormEvent, useRef, useState } from 'react';
import styles from '@/styles/components/signInForm/signInForm.module.scss';
import { signIn } from 'next-auth/react';
import { Validate } from 'src/class/Validate';
import { signUpRules } from '@/data/validationRules/validationRules';
import axios from '@/lib/axios';
interface SignInFormProps {}

const SignInForm: FC<SignInFormProps> = ({}) => {
  const nameInputRef = useRef<any>();
  const emailInputRef = useRef<any>();
  const passwordInputRef = useRef<any>();
  const passwordCfInputRef = useRef<any>();

  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<any>();
  const [serverResponse, setServerResponse] = useState<any>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors([]);
    setServerResponse(null);
    setLoading(true);

    const enteredName = nameInputRef.current?.value;
    const enteredEmail = emailInputRef.current?.value;
    const enteredPassword = passwordInputRef.current?.value;
    const enteredPasswordCf = passwordCfInputRef.current?.value;

    if (!isLogin) {
      //register
      const formData = {
        name: enteredName,
        email: enteredEmail,
        password: enteredPassword,
        password_confirmation: enteredPasswordCf,
      };

      const validated = new Validate(formData, signUpRules);

      if (validated.hasError) {
        setErrors(validated.errors);
        setLoading(false);
        return;
      }

      try {
        await axios.post('api/signup', formData);
      } catch (error: any) {
        if (error.response.status === 422) {
          setErrors(error.response?.data?.errors);
        }
        setServerResponse({ message: 'Could not create user', code: 500 });
        setLoading(false);
        return;
      }
    }

    //login
    try {
      const result = await signIn('credentials', {
        redirect: false,
        email: enteredEmail,
        password: enteredPassword,
      });

      if (result?.error) {
        setServerResponse({ message: 'Invalid credentials ', code: 401 });
        setLoading(false);
        return;
      }
      setServerResponse({ message: 'Logged in succesfully', code: 200 });
    } catch (error) {
      console.log(error);
      setServerResponse({ message: 'Could not log you in', code: 200 });
    }

    setLoading(false);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <span className="text-sm">Demo email:w@w.com password: 12345678</span>
      <h2 className="title">{isLogin ? 'Login' : 'Register'}</h2>
      <div className="form_groups">
        {serverResponse && (
          <div
            className={`text-sm ${
              serverResponse.code === 200 ? 'text-success' : 'text-error'
            }`}
          >
            {serverResponse.message}
          </div>
        )}

        {!isLogin && (
          <div className="group">
            <input placeholder="" id="name" ref={nameInputRef} />
            <label htmlFor="name">name</label>
            <div className="text-error text-sm">{errors?.name}</div>
          </div>
        )}

        <div className="group">
          <input placeholder="" id="email" type="email" ref={emailInputRef} />
          <label htmlFor="email">email</label>
          <div className="text-error text-sm">{errors?.email}</div>
        </div>

        <div className="group">
          <input
            placeholder=""
            id="password"
            ref={passwordInputRef}
            type="password"
          />
          <label htmlFor="password">password</label>
          <div className="text-error text-sm">{errors?.password}</div>
        </div>

        {!isLogin && (
          <div className="group">
            <input
              placeholder=""
              id="password_confirmation"
              ref={passwordCfInputRef}
              type="password"
            />
            <label htmlFor="password_confirmation">password confirmation</label>
            <div className="text-error text-sm">
              {errors?.password_confirmation}
            </div>
          </div>
        )}

        {loading && <span>is Loading</span>}

        <div className="group">
          <button type="submit" className="btn btn-green">
            Log in
          </button>
        </div>
      </div>

      <span
        onClick={() => setIsLogin((prev) => !prev)}
        className={`text-sm ${styles.change_mode}`}
      >
        {isLogin ? <span>Register here</span> : <span>Login here</span>}
      </span>
    </form>
  );
};

export default SignInForm;
