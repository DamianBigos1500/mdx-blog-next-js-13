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
import dropdownStyles from '@/styles/components/dropdownMenu/dropdownMenu.module.scss';

interface ThemeToggleProps {}

const ThemeToggle: FC<ThemeToggleProps> = ({}) => {
  const { setTheme } = useTheme();

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger
          asChild
          className={dropdownStyles.dropdown__trigger}
        >
          <span className={styles.dropdown__theme}>
            <Icons.Sun className={styles.dropdown__theme_sun} />
            <Icons.Moon className={styles.dropdown__theme_moon} />
          </span>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          forceMount
          sideOffset={5}
          className={dropdownStyles.dropdown__content}
        >
          <DropdownMenuItem
            onClick={() => setTheme('light')}
            className={dropdownStyles.dropdown__item}
          >
            <Icons.Sun className={dropdownStyles.dropdown__item_icon} />
            <span>Light</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => setTheme('dark')}
            className={dropdownStyles.dropdown__item}
          >
            <Icons.Moon className={dropdownStyles.dropdown__item_icon} />
            <span>Dark</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => setTheme('system')}
            className={dropdownStyles.dropdown__item}
          >
            <Icons.Laptop className={dropdownStyles.dropdown__item_icon} />
            <span>System</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default ThemeToggle;
