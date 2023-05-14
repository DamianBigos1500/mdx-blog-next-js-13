'use client';

import { FC, useState } from 'react';
import styles from './postOptions.module.scss';
import Icons from '@/components/UI/Icons/Icons';
import { IUser } from '@/types/User';
import postService from '../../services/post.service';
import { useRouter } from 'next/navigation';

interface PostOptionsProps {
  pinnedId: string | null | number;
  postSlug: string;
  currentUser?: IUser | null;
}

const PostOptions: FC<PostOptionsProps> = ({
  pinnedId,
  postSlug,
  currentUser,
}) => {
  const router = useRouter();
  const [isLiked, setIsLiked] = useState(pinnedId ? true : false);

  const clickPin = async () => {
    if (isLiked) {
      setIsLiked(false);
      try {
        await postService.unlikePost(pinnedId);
      } catch (error) {}
    } else {
      setIsLiked(true);
      try {
        await postService.likePost(postSlug);
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
