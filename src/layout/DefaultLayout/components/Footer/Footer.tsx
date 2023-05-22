import Image from 'next/image';
import Link from 'next/link';

import {
  AiOutlineTwitter,
  AiFillFacebook,
  AiFillGithub,
  AiFillYoutube,
} from 'react-icons/ai';

import styles from './Footer.module.scss';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.body}>
        <div>
          <Image src="/logo.png" alt="" width={250} height={76} />
          <div className={styles['group-icons']}>
            <Link href="/" className={styles.icon}>
              <AiOutlineTwitter />
            </Link>
            <Link href="/" className={styles.icon}>
              <AiFillFacebook />
            </Link>
            <Link href="/" className={styles.icon}>
              <AiFillGithub />
            </Link>
            <Link href="/" className={styles.icon}>
              <AiFillYoutube />
            </Link>
          </div>
        </div>
        <div className={styles['group-link']}>
          <div className={styles['link-route']}>
            <header>Liên kết</header>
            <ul>
              <li>
                <Link href="/">Trang chủ</Link>
              </li>
              <li>
                <Link href="/">Dịch vụ</Link>
              </li>
              <li>
                <Link href="/">Nhóm</Link>
              </li>
              <li>
                <Link href="/">Blog</Link>
              </li>
            </ul>
          </div>
          <div>
            <header>Khóa học</header>
            <ul>
              <li>
                <Link href="/">Front End</Link>
              </li>
              <li>
                <Link href="/">Back End</Link>
              </li>
              <li>
                <Link href="/">Java</Link>
              </li>
              <li>
                <Link href="/">.Net</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className={styles.by}>
        <Link href="/">Copyright © 2023 CyberSoft</Link>
      </div>
    </div>
  );
}

export default Footer;
