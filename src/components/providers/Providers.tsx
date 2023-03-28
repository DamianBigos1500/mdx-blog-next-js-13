'use client';

import { ThemeProvider } from 'next-themes';
import { FC, ReactNode } from 'react';

interface ProvidersProps {
  children: ReactNode;
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <ThemeProvider
      disableTransitionOnChange={false}
      defaultTheme="system"
      enableSystem={true}
    >
      {children}
    </ThemeProvider>
  );
};

export default Providers;
