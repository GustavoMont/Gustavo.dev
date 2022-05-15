import type { AppProps } from "next/app";
import Head from "next/head";
import Footer from "../components/common/Footer";
import Menu from "../components/common/Menu";
import GlobalStyle from "../styles/Global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <link
          rel="shortcut icon"
          href="/images/favicon.ico"
          type="image/x-icon"
        />
      </Head>
      <Menu />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
