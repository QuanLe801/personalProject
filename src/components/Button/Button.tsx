import React from 'react';
import styles from './Button.module.scss';

interface ButtonInterface {
  variant: 'default' | 'primary';
  children?: React.ReactNode;
}

function Button({ variant, children }: ButtonInterface) {
  return (
    <div
      className={
        variant == 'default' ? styles.button_default : styles.button_primary
      }
    >
      {children}
    </div>
  );
}

export default Button;
