'use client';

import { FC } from 'react';
import styles from '@/styles/components/profile/savedBlogs.module.scss';
import SavedBlogsCard from '../savedBlogsCard/SavedBlogsCard';

interface SavedBlogsProps {
  favouritBlogs: any;
}

const SavedBlogs: FC<SavedBlogsProps> = ({ favouritBlogs }) => {
  if (!favouritBlogs || favouritBlogs.length < 1)
    return (
      <div className="text-center">
        <h3>You have not saved blogs</h3>
      </div>
    );

  return (
    <div className={styles.saved_blogs}>
      <div>Saved Posts:</div>

      {favouritBlogs.map((blog: any, index: number) => (
        <SavedBlogsCard key={index} blog={blog} />
      ))}
    </div>
  );
};

export default SavedBlogs;
