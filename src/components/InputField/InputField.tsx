import React from "react";
import './InputField.scss'

type InputProps = {
  className?: string;
  name: string;
  label: string;
  type: string;
  required?: boolean;
  value?: string|number;
  inputChange?:any
};

export default function InputField({
  className,
  name,
  label,
  type,
  required,
  value,
  inputChange
}: InputProps) {
  return (
    <div className='InputField'>
      <label htmlFor={`${name}-input`} className={`label ${value ? "has-value" : ""}`}>
        {label}
      </label>
      <input
        id={`${name}-input`}
        type={type}
        className="input"
        name={name}
        required={required}
        value={value}

        onChange={(event: any) => inputChange(event)}
      />
    </div>
  );
};
