'use client';

import { useTheme } from 'next-themes';
import { FC } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/DropdownMenu';
import styles from '@/styles/components/themeToggle/themeToggle.module.scss';
import Icons from '@/components/icons/Icons';

interface ThemeToggleProps {}

const ThemeToggle: FC<ThemeToggleProps> = ({}) => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild className={styles.dropdown__trigger}>
          <span className={styles.dropdown__theme}>
            <Icons.Sun className={styles.dropdown__theme_sun} />
            <Icons.Moon className={styles.dropdown__theme_moon} />
          </span>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          forceMount
          className={styles.dropdown__content}
        >
          <DropdownMenuItem
            onClick={() => setTheme('light')}
            className={styles.dropdown__item}
          >
            <Icons.Sun className={styles.dropdown__item_icon} />
            <span>Light</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => setTheme('dark')}
            className={styles.dropdown__item}
          >
            <Icons.Moon className={styles.dropdown__item_icon} />
            <span>Dark</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => setTheme('system')}
            className={styles.dropdown__item}
          >
            <Icons.Laptop className={styles.dropdown__item_icon} />
            <span>System</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default ThemeToggle;
