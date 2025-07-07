

import React from 'react';
import styles from '@/styles/components/Input.module.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

/**
 *
 * @param label - label
 * @param error - error
 * @param props input html attr
 * @returns JSX.Element
 */
const FormInput = ({ label, error, ...props }:InputProps) => (
  <div className={styles.inputWrapper}>
    {label && <label className={styles.label}>{label}</label>}
    <input className={styles.input} {...props} />
    {error && <span className={styles.error}>{error}</span>}
  </div>
);

export default FormInput;
