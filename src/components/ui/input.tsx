import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  name?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
}

/**
 * Input component for consistent form styling
 */
const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  name,
  required = false,
  disabled = false,
  className = '',
  ...props
}) => {
  const baseClasses = 'w-full px-4 py-3 text-[var(--text-primary)] bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/30 focus:border-[var(--primary)]/50 placeholder-[var(--text-disabled)] disabled:opacity-50 disabled:cursor-not-allowed';

  const classes = `${baseClasses} ${className}`;

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      required={required}
      disabled={disabled}
      className={classes}
      {...props}
    />
  );
};

export default Input;
