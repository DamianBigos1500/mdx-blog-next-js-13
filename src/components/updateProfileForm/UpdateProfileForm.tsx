'use client';

import { User } from '@/utils/types';
import { FC, FormEvent, useRef, useState } from 'react';
import styles from '@/styles/components/updateProfileForm/updateProfileForm.module.scss';
import axios from '@/lib/axios';
import { useRouter } from 'next/navigation';
import { Validate } from 'src/class/Validate';
import { updateProfileRules } from '@/data/validationRules/validationRules';

interface UpdateProfileFormProps {
  currentUser: User;
  setIsEditMode: (e: boolean) => void;
  setServerResponse: any;
}

const UpdateProfileForm: FC<UpdateProfileFormProps> = ({
  currentUser,
  setIsEditMode,
  setServerResponse,
}) => {
  const router = useRouter();
  const nameRef = useRef<HTMLInputElement>(null);
  const surnameRef = useRef<HTMLInputElement>(null);
  const [errors, setErrors] = useState<any>();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors([]);
    setServerResponse(null);

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
      await axios.post('api/update-profile', formData);
      setServerResponse({ message: 'Settings updated succesfully', code: 200 });
    } catch (error: any) {
      if (error.response.status === 422) {
        setErrors(error.response.data.errors);
      }
      setServerResponse({ message: 'Could not update settings', code: 500 });
    }
    setIsEditMode(false);

    router.refresh();
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form_groups">
        <div className={'group'}>
          <input defaultValue={currentUser.email!} disabled />
          <label>Email</label>
        </div>

        <div className={'group'}>
          <input
            placeholder=""
            ref={nameRef}
            defaultValue={currentUser.name!}
            id="name"
          />
          <label htmlFor="name">Name</label>
          <div className="text-error text-sm">{errors?.name}</div>
        </div>

        <div className={'group'}>
          <input
            placeholder=""
            ref={surnameRef}
            defaultValue={currentUser.surname!}
            id="surname"
          />
          <label htmlFor="surname">Surname</label>
          <div className="text-error text-sm">{errors?.surname}</div>
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
      </div>
    </form>
  );
};

export default UpdateProfileForm;
