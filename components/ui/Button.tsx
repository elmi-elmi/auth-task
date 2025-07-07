import React from 'react';
import styles from '@/styles/components/Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}


/**
 *
 * @param children React node
 * @param props html button tag attribute
 * @returns JSX.Element
 */
const Button = ({ children, ...props }:ButtonProps) => (
  <button className={styles.button} {...props}>
    {children}
  </button>
);

export default Button;
