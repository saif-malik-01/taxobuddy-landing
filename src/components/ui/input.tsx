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
  const baseClasses = 'w-full px-4 py-3 text-white bg-transparent border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent placeholder-gray-400 disabled:opacity-50 disabled:cursor-not-allowed';

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
