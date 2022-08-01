import "../styles/global.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { ChatWpp } from "../components/ChatWpp";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Header />
      <Component {...pageProps} />
      <ChatWpp />
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
