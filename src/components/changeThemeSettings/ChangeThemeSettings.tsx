'use client';

import { FC } from 'react';
import styles from '@/styles/components/changeThemeSettings/changeThemeSettings.module.scss';
import { useTheme } from 'next-themes';

interface ChangeThemeSettingsProps {}

const ChangeThemeSettings: FC<ChangeThemeSettingsProps> = ({}) => {
  const { setTheme } = useTheme();

  return (
    <div className={styles.theme_settings}>
      <h3>Change Theme</h3>
      <div className={styles.themes}>
        <div className={styles.theme_item} onClick={() => setTheme('light')}>
          Light
        </div>
        <div className={styles.theme_item} onClick={() => setTheme('dark')}>
          Dark
        </div>
        <div className={styles.theme_item} onClick={() => setTheme('system')}>
          System
        </div>
      </div>
    </div>
  );
};

export default ChangeThemeSettings;
