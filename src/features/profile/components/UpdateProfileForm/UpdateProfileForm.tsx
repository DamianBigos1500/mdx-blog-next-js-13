'use client';

import {
  Dispatch,
  FC,
  FormEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import styles from './updateProfileForm.module.scss';
import { useRouter } from 'next/navigation';
import axios from '@/lib/axios';
import Axios from 'axios';
import { IUser } from '@/types/User';
import { Validate } from '@/class/Validate';
import { updateProfileRules } from '@/utils/validationRules';
import useImageFileReader from '@/hooks/useImageFileReader';

interface UpdateProfileFormProps {
  currentUser: IUser;
  setIsEditMode: (e: boolean) => void;
  setServerResponse: any;
  setUpdatedImageUrl: Dispatch<any>;
}

const UpdateProfileForm: FC<UpdateProfileFormProps> = ({
  currentUser,
  setIsEditMode,
  setServerResponse,
  setUpdatedImageUrl,
}) => {
  const router = useRouter();
  const nameRef = useRef<HTMLInputElement>(null);
  const surnameRef = useRef<HTMLInputElement>(null);
  const [errors, setErrors] = useState<any>();
  // const [loading, setLoading] = useState(false);
  const [handleImage, image, imageForm] = useImageFileReader();

  const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors([]);
    setServerResponse(null);

    let validateData: any = {
      email: currentUser.email,
      name: nameRef.current?.value,
      surname: surnameRef.current?.value,
    };

    const validated = new Validate(validateData, updateProfileRules);

    //image upload
    if (imageForm) {
      const formData = new FormData();
      formData.append('file', imageForm);
      formData.append('upload_preset', 'next-blog');

      try {
        const imgRes: any = await Axios.post(
          'https://api.cloudinary.com/v1_1/doqevddgq/image/upload',
          formData
        );

        if (imgRes.data.url) {
          validateData.image = imgRes.data.url;
        }
      } catch (error) {}
    }

    if (validated.hasError) {
      setErrors(validated.errors);
      return;
    }

    try {
      await axios.post('api/update-profile', validateData);
      setServerResponse({ message: 'Settings updated succesfully', code: 200 });
    } catch (error: any) {
      if (error.response.status === 422) {
        setErrors(error.response.data.errors);
      }
      setServerResponse({ message: 'Could not update settings', code: 500 });
    }

    setIsEditMode(false);
    router.refresh();
  }, []);

  useEffect(() => {
    changeImage();
  }, [image]);

  const changeImage = useCallback(() => {
    setUpdatedImageUrl(image);
  }, [image]);

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form_groups">
        <div className={'group'}>
          <input type="file" onChange={handleImage} />
          <label>Input</label>
        </div>

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
