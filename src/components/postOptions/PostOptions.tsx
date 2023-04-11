'use client';

import { FC, useState } from 'react';
import styles from '@/styles/components/postOptions/postOptions.module.scss';
import Icons from '../icons/Icons';
import axios from '@/lib/axios';
import { User } from '@/utils/types';
import { useRouter } from 'next/navigation';

interface PostOptionsProps {
  pinnedId?: string;
  blogSlug: string;
  currentUser?: User | null;
}

const PostOptions: FC<PostOptionsProps> = ({
  pinnedId,
  blogSlug,
  currentUser,
}) => {
  const router = useRouter();
  const [isLiked, setIsLiked] = useState(pinnedId ? true : false);

  const clickPin = async () => {
    if (isLiked) {
      setIsLiked(false);
      try {
        await axios.post('/api/unlike-blog', {
          pinnedId: pinnedId,
        });
      } catch (error) {}
    } else {
      setIsLiked(true);
      try {
        await axios.post('/api/like-blog', {
          blogSlug: blogSlug,
        });
      } catch (error) {}
    }
    
    router.refresh();
  };

  return (
    <div className={styles.post_options}>
      {currentUser && (
        <span className={styles.post_options__pin} onClick={clickPin}>
          {!isLiked ? <span>Save</span> : <span>Unsave</span>}
          {!isLiked ? <Icons.Pin /> : <Icons.PinOff />}
        </span>
      )}
    </div>
  );
};

export default PostOptions;
