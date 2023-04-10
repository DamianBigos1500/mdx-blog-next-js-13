'use client';

import { FC } from 'react';

interface SavedBlogsProps {
  favouritBlogs: any;
}

const SavedBlogs: FC<SavedBlogsProps> = ({ favouritBlogs }) => {
  if (!favouritBlogs || favouritBlogs.length < 1)
    return <h3>You have not saved blogs</h3>;

  return (
    <div>
      {favouritBlogs.map((blog: any, index: number) => (
        <div key={index}>{blog.title}</div>
      ))}
    </div>
  );
};

export default SavedBlogs;
