import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import theme from 'styles/Chakra';
import Head from 'next/head';
import Layout from 'components/Layout';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <SirkaHead />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
};

const SirkaHead = () => {
  const title = 'Sirka';
  const desc = 'Sirka';
  return (
    <Head>
      <meta name="description" content={desc} />
      <meta name="title" content={title} />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://sirka.io" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content="/referral/favicon/android-chrome-512x512.png" />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="#" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={desc} />
      <meta property="twitter:image" content="/referral/favicon/android-chrome-512x512.png" />

      <link rel="apple-touch-icon" sizes="180x180" href="/referral/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/referral/sirka.svg" />
      <link rel="icon" type="image/png" sizes="16x16" href="/referral/sirka.svg" />
      <link rel="mask-icon" href="/referral/favicon/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="apple-mobile-web-app-title" content={title} />
      <meta name="application-name" content={title} />
      <meta name="msapplication-TileColor" content="#2b5797" />
      <meta name="theme-color" content="#f1f3f6" />
    </Head>
  );
};

export default MyApp;
