import './globals.css';
import { Roboto_Flex } from 'next/font/google';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './DefaultLayout.module.scss';
import Head from 'next/head';

const roboto = Roboto_Flex({ subsets: ['latin'] });

export const metadata = {
  title: 'Personal Project',
  description: 'A Project made by 2 people',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <body className={roboto.className}>
        <main className={styles.main}>
          <Header />
          <div className={styles.container}>{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
