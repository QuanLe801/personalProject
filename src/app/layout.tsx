import './globals.css';
import { Roboto_Flex } from 'next/font/google';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './DefaultLayout.module.scss';

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
