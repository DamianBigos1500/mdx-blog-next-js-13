'use client';

import { FC, useState } from 'react';
import styles from '@/styles/components/postOptions/postOptions.module.scss';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PDFFile from '../PDF/PDFFile';
import Icons from '../icons/Icons';

interface PostOptionsProps {
  content: string;
  isPinned?: boolean;
}

const PostOptions: FC<PostOptionsProps> = ({ isPinned }) => {
  const [isLiked, setIsLiked] = useState(isPinned);

  return (
    <div className={styles.post_options}>
      <span className={styles.post_options__pin}>
        {!isLiked ? <span>Save</span> : <span>Unsave</span>}
        {!isLiked ? <Icons.Pin /> : <Icons.PinOff />}
      </span>

      {/* <DropdownMenu>
        <DropdownMenuTrigger>Open download</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem className={styles.dropdown__item}>
            <PDFDownloadLink document={<PDFFile/>} fileName='download'>Download PDF</PDFDownloadLink>
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
