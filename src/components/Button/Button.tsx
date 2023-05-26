import React from 'react';
import styles from './Button.module.scss';

interface ButtonInterface {
  title: string;
  variant: 'default' | 'primary';
}

function Button({ title, variant }: ButtonInterface) {
  return (
    <div
      className={
        variant == 'default' ? styles.button_default : styles.button_primary
      }
    >
      {title}
    </div>
  );
}

export default Button;
