import React, { useState } from "react";
import "./FormInput.scss";

const FormInput = (props) => {
  props = props?.child ? props?.props : props;
  const {
    id,
    type,
    name,
    disabled,
    placeholder,
    modifiers,
    showLabel,
    readOnly,
    label,
  } = props;
  const readOnlyValue = readOnly ? true : false;
  const disbaledValue = disabled ? true : false;
  const [inputValue, setTextInput] = useState("");

  const handleChange = (event) => {
    setTextInput(event.target.value);
    console.log("test");
  };
  return (
    <div className={["c-form-input", modifiers].join(" ")}>
      {showLabel && (
        <label for={name} className="c-form-input__label">
          {label}
        </label>
      )}
      <input
        id={id}
        name={name}
        value={inputValue}
        placeholder={placeholder}
        type={type}
        readOnly={readOnlyValue}
        disabled={disbaledValue}
        className="c-form-input__input"
        onChange={handleChange}
      />
    </div>
  );
};

export default FormInput;
