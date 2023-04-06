'use client';

import { FC } from 'react';
import styles from '@/styles/components/themeToggle/themeToggle.module.scss';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu';

interface PostOptionsProps {
  content: string;
}

const PostOptions: FC<PostOptionsProps> = ({}) => {
  const getMdxContent = () => {
 
  };

  return (
    <div className={styles.options}>
      <span>Like</span>
      <DropdownMenu>
        <DropdownMenuTrigger>Open download</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem className={styles.dropdown__item}>
            <span onClick={() => getMdxContent()}>Download PDF</span>
          </DropdownMenuItem>
          <DropdownMenuItem className={styles.dropdown__item}>
            <span>Download PDF No images</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default PostOptions;
