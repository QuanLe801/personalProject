'use client';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.scss';
import { MdOutlineKeyboardArrowDown, MdSmartToy } from 'react-icons/md';
import { FaDatabase } from 'react-icons/fa';
import { HiOutlineCursorClick } from 'react-icons/hi';
import { FaUserCircle, FaLaptopCode } from 'react-icons/fa';
import { FcSmartphoneTablet } from 'react-icons/fc';
import { FiSearch } from 'react-icons/fi';
import { BsCodeSlash } from 'react-icons/bs';
import { useState, useEffect } from 'react';

const menu = [
  {
    title: 'Lập trình BackEnd',
    des: 'Bootcamp - Lập trình BackEnd từ Zero đến có việc',
    icon: FaDatabase,
    href: '/',
  },
  {
    title: 'Thiết kế web',
    des: 'Bootcamp - Từ Zero đến có việc',
    icon: HiOutlineCursorClick,
    href: '/',
  },
  {
    title: 'Lập trình di động ',
    des: 'Bootcamp - Lập trình di động từ Zero đến có việc',
    icon: FcSmartphoneTablet,
    href: '/',
  },
  {
    title: 'Lập trình Front End',
    des: 'Bootcamp - Lập trình Front End từ Zero đến có việc',
    icon: BsCodeSlash,
    href: '/',
  },
  {
    title: 'Lập trình Full Stack',
    des: 'Bootcamp - Lập trình Full Stack từ Zero đến có việc',
    icon: FaLaptopCode,
    href: '/',
  },
  {
    title: 'Tư duy lập trình',
    des: 'Bootcamp - Tư duy lập trình từ Zero đến có việc',
    icon: MdSmartToy,
    href: '/',
  },
];
function Header() {
  const [isMenu, setIsMenu] = useState(false);
  const isLogin = true;
  useEffect(() => {
    // effect
    document.body.addEventListener('click', () => {
      console.log('click');
      setIsMenu(false);
    });
    return () => {
      // cleanup
      document.body.removeEventListener('click', () => {
        setIsMenu(false);
      });
    };
  }, []);
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div>
          <Link href={'/'}>
            <Image
              src="https://demo2.cybersoft.edu.vn/logo.png"
              alt="lỗi"
              width={105}
              height={32}
            />
          </Link>
        </div>
        <div>
          <ul className={styles.listNav}>
            <li
              className={isMenu ? styles.show : ''}
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
              }}
            >
              <button
                className={styles.navItem + ' ' + styles.link}
                onClick={(e) => {
                  setIsMenu(true);
                }}
              >
                Danh mục <MdOutlineKeyboardArrowDown />
              </button>

              <ul className={styles['drop-downlist']}>
                {menu.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <li key={index} className={styles['drop-downlist-item']}>
                      <Link
                        href={item.href}
                        className={styles['drop-downlist-item-link']}
                      >
                        <div className={styles['item-icon']}>
                          <Icon />
                        </div>
                        <div className={styles['item-info']}>
                          <h4>{item.title}</h4>
                          <p>{item.des}</p>
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
            <li>
              <Link className={styles.navItem + ' ' + styles.link} href={'/'}>
                Khóa học
              </Link>
            </li>
            <li>
              <Link className={styles.navItem + ' ' + styles.link} href={'/'}>
                Blog
              </Link>
            </li>
            <li>
              <Link className={styles.navItem + ' ' + styles.link} href={'/'}>
                Thông tin
              </Link>
            </li>
          </ul>
        </div>
        {isLogin ? (
          <div>
            <button>
              {/* <img src={'/no_avata.jpg'} width={32} height={32} alt="lỗi" /> */}
            </button>
            <ul>
              <li>
                <Link href="/">Hồ sơ</Link>
              </li>
              <li>
                <Link href="/">Cài đặt</Link>
              </li>
              <li>
                <Link href="/">Đăng Xuất</Link>
              </li>
            </ul>
          </div>
        ) : (
          <div className={styles.actionsUsers}>
            <Link
              className={styles.link + ' ' + styles['btn-action-user']}
              href={'/'}
            >
              <FaUserCircle className={styles['actions-users-icon']} /> Đăng
              nhập
            </Link>
            <Link
              className={styles.link + ' ' + styles['btn-action-user']}
              href={'/'}
            >
              <FaUserCircle className={styles['actions-users-icon']} />
              Đăng ký
            </Link>
          </div>
        )}

        <div className={styles.search}>
          <input className={styles['sreach-input']} placeholder="tìm kiếm..." />
          <button className={styles['btn-sraech']}>
            <FiSearch />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
