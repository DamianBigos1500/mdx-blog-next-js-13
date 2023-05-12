import { FC } from 'react';
import styles from './loadingSpinner.module.scss';

interface LoadingSpinnerProps {
  width: number;
  height: number;
}

const LoadingSpinner: FC<LoadingSpinnerProps> = ({ width, height }) => {
  return <span className={styles.loader} style={{ width, height }}></span>;
};

export default LoadingSpinner;
