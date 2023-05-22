import Footer from './components/Footer';
import Header from './components/Header';
import styles from './DefaultLayout.module.scss';

interface defaultLayout {
  children: React.ReactNode;
}

function DefaultLayout({ children }: defaultLayout) {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.container}>{children}</div>
      <Footer />
    </main>
  );
}

export default DefaultLayout;
