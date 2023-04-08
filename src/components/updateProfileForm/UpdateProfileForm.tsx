'use client';

import { User } from '@/utils/types';
import { FC, FormEvent, useRef, useState } from 'react';
import styles from '@/styles/components/updateProfileForm/updateProfileForm.module.scss';
import axios from '@/lib/axios';
import { useRouter } from 'next/navigation';
import { Validate } from 'src/class/Validate';
import { updateProfileRules } from '@/data/validationRules/updateProfileRules';

interface UpdateProfileFormProps {
  currentUser: User;
  setIsEditMode: (e: boolean) => void;
}

const UpdateProfileForm: FC<UpdateProfileFormProps> = ({
  currentUser,
  setIsEditMode,
}) => {
  const router = useRouter();
  const nameRef = useRef<HTMLInputElement>(null);
  const surnameRef = useRef<HTMLInputElement>(null);
  const [errors, setErrors] = useState<any>();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      email: currentUser.email,
      name: nameRef.current?.value,
      surname: surnameRef.current?.value,
    };

    const validated = new Validate(formData, updateProfileRules);

    if (validated.hasError) {
      setErrors(validated.errors);
      return;
    }

    try {
      await axios.post('http://localhost:3000/api/update-profile', formData);
    } catch (error: any) {
      if (error.response.data) setErrors(error.response.data.errors);
    }

    router.refresh();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.update_profile_form__group}>
        <label className={styles.update_profile_form__label}>Email: </label>
        <input
          className={styles.update_profile_form__input}
          defaultValue={currentUser.email!}
          disabled
        />
      </div>

      <div className={styles.update_profile_form__group}>
        <label className={styles.update_profile_form__label}>Name: </label>
        <input
          ref={nameRef}
          className={styles.update_profile_form__input}
          defaultValue={currentUser.name!}
        />
        <div className="error_text">{errors?.name}</div>
      </div>

      <div className={styles.update_profile_form__group}>
        <label className={styles.update_profile_form__label}>Surname: </label>
        <input
          ref={surnameRef}
          className={styles.update_profile_form__input}
          defaultValue={currentUser.surname!}
        />
        <div className="error_text">{errors?.surname}</div>
      </div>

      <div className={styles.update_profile_form__buttons}>
        <button className={`btn btn-green`} type="submit">
          Save
        </button>
        <button
          className={`btn btn-red`}
          type="button"
          onClick={() => setIsEditMode(false)}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default UpdateProfileForm;
