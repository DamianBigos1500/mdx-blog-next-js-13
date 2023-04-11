'use client';

import { FC } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/DropdownMenu';
import styles from '@/styles/components/themeToggle/themeToggle.module.scss';

interface DownloadReceipeProps {}

const DownloadReceipe: FC<DownloadReceipeProps> = ({}) => {
  const handleDownload = (downloadMethod: string) => {
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className={styles.dropdown__trigger}>
        <span className={styles.dropdown__theme}>Download Receipe</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        forceMount
        sideOffset={5}
        className={styles.dropdown__content}
      >
        <DropdownMenuItem
          onClick={() => handleDownload('light')}
          className={styles.dropdown__item}
        >
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleDownload('dark')}
          className={styles.dropdown__item}
        >
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleDownload('system')}
          className={styles.dropdown__item}
        >
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DownloadReceipe;
