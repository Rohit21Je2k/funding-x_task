import React from "react";

import "./Input.css";
export default function Input(props) {
  const {
    id,
    className,
    name,
    type,
    label,
    values,
    placeholder,
    required,
    description,
    onClick,
    onBlur,
    onChange,
  } = props;

  const { value, error, isValid, isTouched } = values;
  return (
    <div className="form__input-field">
      <div className="form__input-field__header">
        <label htmlFor={name} className="form__input-field__label">
          {label}
        </label>
        {required && <span className="form__input-field__asterisk">*</span>}
        {description && (
          <p className="form__input-field__description">{description}</p>
        )}
      </div>
      <div className="form__input-field__container">
        <input
          id={id}
          className={`form__input-field__input ${className}`}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          required={required}
          onClick={onClick}
          onBlur={onBlur}
          onChange={onChange}
          autoComplete="off"
        />
      </div>
      {error && !isValid && isTouched && (
        <div className="form__input-field__message">{error}</div>
      )}
    </div>
  );
}
