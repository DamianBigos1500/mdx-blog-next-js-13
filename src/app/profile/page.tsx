import ChangeThemeSettings from '@/components/ChangeThemeSettings/ChangeThemeSettings';
import getCurrentUser from '@/features/auth/utils/getCurrentSession';
import SavedPosts from '@/features/profile/components/SavedPosts/SavedPosts';
import UserProfileData from '@/features/profile/components/UserProfileData/UserProfileData';
import getUserLikedPosts from '@/features/profile/utils/getUserLikedPosts';
import styles from '@/styles/pages/profile/profile.module.scss';
import { redirect } from 'next/navigation';

export const revalidate = 1;

async function getData() {
  const currentUser = await getCurrentUser();
  const likedPosts = await getUserLikedPosts();

  return { currentUser, likedPosts };
}

export default async function page() {
  const { currentUser, likedPosts } = await getData();

  if (!currentUser) redirect('/');

  return (
    <section className={styles.container}>
      <UserProfileData currentUser={currentUser} />
      <ChangeThemeSettings />
      <SavedPosts likedPosts={likedPosts} />
    </section>
  );
}
