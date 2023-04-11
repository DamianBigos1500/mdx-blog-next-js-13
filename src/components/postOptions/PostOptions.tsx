'use client';

import { FC, useState } from 'react';
import styles from '@/styles/components/postOptions/postOptions.module.scss';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu';
import PDFFile from '../PDF/PDFFile';
import Icons from '../icons/Icons';
import axios from '@/lib/axios';
import { User } from '@/utils/types';

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
  const [isLiked, setIsLiked] = useState(pinnedId ? true : false);

  const clickPin = async () => {

    if (isLiked) {
      setIsLiked(false);
      try {
        await axios.post('/api/unlike-blog', {
          pinnedId: pinnedId,
        });
      } catch (error) {
      }
    } else {
      setIsLiked(true);
      try {
        await axios.post('/api/like-blog', {
          blogSlug: blogSlug,
        });
      } catch (error) {
      }
    }
  };

  return (
    <div className={styles.post_options}>
      {currentUser && (
        <span className={styles.post_options__pin} onClick={clickPin}>
          {!isLiked ? <span>Save</span> : <span>Unsave</span>}
          {!isLiked ? <Icons.Pin /> : <Icons.PinOff />}
        </span>
      )}

      {/* <DropdownMenu>
        <DropdownMenuTrigger>Open download</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem className={styles.dropdown__item}>
            <span onClick={downloadHandle}>Download PDF</span>
          </DropdownMenuItem>
          <DropdownMenuItem className={styles.dropdown__item}>
            <span>Download PDF No images</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu> */}
    </div>
  );
};

export default PostOptions;
