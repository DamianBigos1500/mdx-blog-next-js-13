'use client';

import { FC, useEffect, useState } from 'react';
import styles from '@/styles/components/changeThemeSettings/changeThemeSettings.module.scss';
import { useTheme } from 'next-themes';

type ChangeEventHandler<T extends HTMLElement> = Event & {
  target: T;
};

interface ChangeThemeSettingsProps {}

const ChangeThemeSettings: FC<ChangeThemeSettingsProps> = ({}) => {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = (e: any) => {
    setTheme(e.target.id);
  };

  return (
    <div className={styles.theme_settings}>
      <h3>Change Theme</h3>
      <div className={styles.themes_list}>
        <div className={styles.theme_item}>
          <label htmlFor="light" className={styles.radio}>
            <input
              id="light"
              name="theme"
              type="radio"
              value="light"
              checked={theme === 'light'}
              onChange={handleThemeChange}
            />
            <span></span>
            Light
          </label>
        </div>
        <div className={styles.theme_item}>
          <label htmlFor="dark" className={styles.radio}>
            <input
              id="dark"
              name="theme"
              type="radio"
              checked={theme === 'dark'}
              value="dark"
              onChange={handleThemeChange}
            />
            <span></span>
            Dark
          </label>
        </div>
        <div className={styles.theme_item}>
          <label htmlFor="system" className={styles.radio}>
            <input
              id="system"
              name="theme"
              type="radio"
              checked={theme === 'system'}
              value="system"
              onChange={handleThemeChange}
            />
            <span></span>
            System
          </label>
        </div>
      </div>
    </div>
  );
};

export default ChangeThemeSettings;
