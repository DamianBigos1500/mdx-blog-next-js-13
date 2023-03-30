'use client';

import { MDXProvider } from '@mdx-js/react';
import { ThemeProvider } from 'next-themes';
import { FC, ReactNode } from 'react';

interface ProvidersProps {
  children: ReactNode;
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <MDXProvider>
      <ThemeProvider
        disableTransitionOnChange={false}
        defaultTheme="system"
        enableSystem={true}
      >
        {children}
      </ThemeProvider>
    </MDXProvider>
  );
};

export default Providers;
