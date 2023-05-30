import React from 'react';
import styles from './Route.module.scss';
import Image from 'next/image';

interface RouteInterface {
  title: string;
  description: string;
  listRoute: Array<string>;
  bgColor: string;
  big?: boolean;
  marginBottom?: boolean;
}

function Route({ ...props }: RouteInterface) {
  const { title, description, listRoute, bgColor, big, marginBottom } = props;
  return (
    <div
      className={styles.route_block}
      style={{
        marginBottom: marginBottom ? '20px' : '0px',
        background: bgColor,
        height: big ? '100%' : '48.06%',
      }}
    >
      <h5 className={styles.title}>{title}</h5>
      <p className={styles.description}>{description}</p>
      {listRoute.map((item, key) => (
        <div key={key} style={{ marginTop: '10px' }}>
          <Image src="/tick-icon.svg" alt="" width={14} height={14} />
          <p className={styles.detail}>{item}</p>
        </div>
      ))}
    </div>
  );
}

export default Route;
