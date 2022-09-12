import { ChatWpp } from '@components/ChatWpp';
import { Footer } from '@components/Footer';
import Header from '@components/Header';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

import '../styles/global.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Header />
      <Component {...pageProps} />
      <ChatWpp />
      <Footer />
    </ThemeProvider>
  );
}
