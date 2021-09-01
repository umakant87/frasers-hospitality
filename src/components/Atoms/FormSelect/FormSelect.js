import React, { useState } from "react";
import "./FormSelect.scss";

const FormSelect = ({ id, name, modifiers, options, label }) => {
  const [selectState, setSelectState] = useState("Windows");

  const handleSelectTypeChange = (event) => {
    setSelectState(event.target.value);
    console.log(`selected value${selectState}`);
  };
  return (
    <div className={["c-form-select", modifiers].join(" ")}>
      <label for={name} className="c-form-select__label">
        {label}
      </label>
      <select
        id={id}
        name={name}
        onChange={(e) => handleSelectTypeChange(e)}
        aria-label="Default select example"
        className="c-form-select__select"
      >
        {options.map((option, index) => {
          return (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FormSelect;
