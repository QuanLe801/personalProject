import DefaultLayout from '@/layout/DefaultLayout';
import './globals.css';
import { Roboto_Flex } from 'next/font/google';

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
        <DefaultLayout>{children}</DefaultLayout>
      </body>
    </html>
  );
}
