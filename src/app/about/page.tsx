import { FC } from 'react';
import styles from '@/styles/pages/about.module.scss';

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className={styles.about}>
      <h1>About this website</h1>

      <p>This is website i create using Next.js for my portfolio in 2023</p>

      <h2>Tech I use on this website</h2>
      <ul className={styles.list}>
        <li>Next.js</li>
        <li>MongoDb / prisma (at the begining i use mysql)</li>
        <li>Radix ui</li>
        <li>Sass</li>
      </ul>

      <h2>Future of this website</h2>
      <p>
        I plan to fill this website with real cake&apos;s recipies, change home
        page and use it for my purposes
      </p>
    </div>
  );
};

export default page;
