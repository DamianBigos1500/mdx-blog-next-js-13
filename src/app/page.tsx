'use client';

import { useTheme } from 'next-themes';

export default function Home() {
  const { setTheme } = useTheme();

  return (
    <main>
      <div className="">
        <button onClick={() => setTheme('light')}>light</button>
        <button onClick={() => setTheme('dark')}>dark</button>
        <button onClick={() => setTheme('system')}>system</button>
      </div>
    </main>
  );
}
