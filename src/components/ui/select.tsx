import React, { SelectHTMLAttributes } from 'react';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options?: (string | SelectOption)[];
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  name?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
}

/**
 * Select component for consistent form dropdown styling
 */
const Select: React.FC<SelectProps> = ({
  options = [],
  value,
  onChange,
  name,
  placeholder = 'Select an option',
  required = false,
  disabled = false,
  className = '',
  ...props
}) => {
  const baseClasses = 'w-full px-4 py-3 text-[var(--text-primary)] bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/30 focus:border-[var(--primary)]/50 disabled:opacity-50 disabled:cursor-not-allowed appearance-none';

  const classes = `${baseClasses} ${className}`;

  return (
    <div className="relative">
      <select
        value={value}
        onChange={onChange}
        name={name}
        required={required}
        disabled={disabled}
        className={classes}
        {...props}
      >
        <option value="" disabled className="bg-[var(--bg-base)] text-[var(--text-tertiary)]">{placeholder}</option>
        {options.map((option, index) => {
          const optionValue = typeof option === 'string' ? option : option.value;
          const optionLabel = typeof option === 'string' ? option : option.label;

          return (
            <option key={index} value={optionValue} className="bg-[var(--bg-base)] text-[var(--text-primary)]">
              {optionLabel}
            </option>
          );
        })}
      </select>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--text-tertiary)]">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
      </div>
    </div>
  );
};

export default Select;
