import React, { useState } from "react";
import "./settings_input.css";

const SettingsInput = ({
  labelText,
  labelFor,
  type,
  inputId,
  required,
  tooltip,
  placeholder,
  onChange,
  name,
  errorMsg,
  pattern,
}) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <>
      <label htmlFor={labelFor} className="form-label settings_input_label">
        {labelText} {required && "*"} {tooltip && <span>?</span>}
      </label>
      <input
        style={{ height: "36px!important" }}
        type={type}
        className="form-control settings_input"
        id={inputId}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
       
        pattern={pattern}
        onBlur={handleFocus}
        focused={focused.toString()}
     
      />
      {errorMsg && <span className="errorMsg">{errorMsg}</span>}
    </>
  );
};

export default SettingsInput;
