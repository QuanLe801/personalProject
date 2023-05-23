import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <div>
      <div className={styles.header}>
        Chào mừng đến với môi trường <span className="d-block">Vlearning</span>
      </div>
    </div>
  );
}
