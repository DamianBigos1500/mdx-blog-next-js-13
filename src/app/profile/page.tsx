import React from 'react';
import styles from '@/styles/components/profile/profile.module.scss';
import getCurrentUser from '@/utils/getCurrentUser';
import UserProfileData from '@/components/userProfileData/UserProfileData';
import ChangeThemeSettings from '@/components/changeThemeSettings/ChangeThemeSettings';
import { redirect } from 'next/navigation';
import getUserFavouritBlog from '@/utils/getUserFavouritBlog';

export default async function page() {
  const currentUser = await getCurrentUser();
  const favouritBlogs = await getUserFavouritBlog();

  console.log(favouritBlogs)

  if (!currentUser) redirect('/');

  return (
    <section className={styles.container}>
      <UserProfileData currentUser={currentUser} />
      <ChangeThemeSettings />
      {/* <Saved  */}
    </section>
  );
}