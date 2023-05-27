import React from 'react';
import styles from './Route.module.scss';

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
      <h5>{title}</h5>
      <span>{description}</span>
      {listRoute.map((item, key) => (
        <div key={key}>{item}</div>
      ))}
    </div>
  );
}

export default Route;
