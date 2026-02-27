import React, { ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'outline' | 'ghost';
type ButtonSize = 'small' | 'default' | 'large';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

/**
 * Button component for consistent styling across the application
 */
const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'default',
  className = '',
  disabled = false,
  type = 'button',
  ...props
}) => {
  const baseClasses = 'inline-block font-medium rounded-full transition duration-300 focus:ring-4 focus:ring-opacity-40 disabled:opacity-50 disabled:cursor-not-allowed';

  const variantClasses: Record<ButtonVariant, string> = {
    primary: 'px-8 py-4 tracking-tighter bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-black focus:ring-[var(--primary)]/40',
    outline: 'px-8 py-4 text-[var(--text-primary)] hover:text-black tracking-tighter hover:bg-[var(--primary)] border-2 border-[var(--text-primary)] focus:border-[var(--primary)]/40 hover:border-[var(--primary)] focus:ring-[var(--primary)]/40',
    ghost: 'px-4 py-2 text-[var(--text-primary)] hover:text-[var(--primary)] hover:bg-[var(--bg-surface)] focus:ring-[var(--primary)]/40'
  };

  const sizeClasses: Record<ButtonSize, string> = {
    small: 'px-4 py-2 text-sm',
    default: 'px-8 py-4',
    large: 'px-12 py-6 text-lg'
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <button
      className={classes}
      disabled={disabled}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
