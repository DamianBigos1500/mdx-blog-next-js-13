import { FC } from 'react';
import styles from './logo.module.scss';

interface LogoProps {}

const Logo: FC<LogoProps> = ({}) => {
  return <h1 className={styles.logo}>Chocolate Lover&apos;s</h1>;
};

export default Logo;
