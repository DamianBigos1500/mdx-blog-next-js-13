'use client';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';
import { FC, ReactNode } from 'react';

interface ProvidersProps {
  children: ReactNode;
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <SessionProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem={true}
      >
        {children}
      </ThemeProvider>
    </SessionProvider>
  );
};

export default Providers;
