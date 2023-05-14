'use client';

import { FC } from 'react';
import styles from './savedPosts.module.scss';
import SavedPostCard from '../SavedPostCard/SavedPostCard';

interface SavedBlogsProps {
  likedPosts: any;
}

const SavedBlogs: FC<SavedBlogsProps> = ({ likedPosts }) => {
  if (!likedPosts)
    return (
      <div className="text-center">
        <h3>You have not saved blogs</h3>
      </div>
    );

  return (
    <div className={styles.saved_blogs}>
      <div>Saved Posts:</div>

      {likedPosts.map((blog: any, index: number) => (
        <SavedPostCard key={index} blog={blog} />
      ))}
    </div>
  );
};

export default SavedBlogs;
