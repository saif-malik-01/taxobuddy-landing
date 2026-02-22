import React, { HTMLAttributes } from 'react';

type CardVariant = 'default' | 'light' | 'darker';
type CardPadding = 'none' | 'small' | 'default' | 'large';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: CardVariant;
  className?: string;
  padding?: CardPadding;
}

/**
 * Card component for consistent container styling
 */
const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  className = '',
  padding = 'default',
  ...props
}) => {
  const baseClasses = 'bg-gradient-radial-dark border border-gray-900/30 rounded-5xl overflow-hidden';

  const variantClasses: Record<CardVariant, string> = {
    default: '',
    light: 'bg-gradient-radial-dark-light',
    darker: 'bg-gradient-radial-darker'
  };

  const paddingClasses: Record<CardPadding, string> = {
    none: '',
    small: 'p-4',
    default: 'p-8',
    large: 'p-16'
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${paddingClasses[padding]} ${className}`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Card;
