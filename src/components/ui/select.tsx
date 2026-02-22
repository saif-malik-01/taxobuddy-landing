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
  const baseClasses = 'w-full px-4 py-3 text-white bg-transparent border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed';

  const classes = `${baseClasses} ${className}`;

  return (
    <select
      value={value}
      onChange={onChange}
      name={name}
      required={required}
      disabled={disabled}
      className={classes}
      {...props}
    >
      <option value="" disabled>{placeholder}</option>
      {options.map((option, index) => {
        const optionValue = typeof option === 'string' ? option : option.value;
        const optionLabel = typeof option === 'string' ? option : option.label;

        return (
          <option key={index} value={optionValue} className="bg-gray-900 text-white">
            {optionLabel}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
