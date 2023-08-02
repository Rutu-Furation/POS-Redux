import React, { useState } from "react";
import "./settings_select.css";
import Select from "react-select";

const SettingsSelect = ({
  labelText,
  labelFor,
  selectId,
  required,
  tooltip,
  options,
  onChange,
  value,
  // label,
  error,
  placeholder,
}) => {
  return (
    <>
      {/* {label && ( */}
      <label htmlFor={labelFor} className="form-label settings_select_label">
        {labelText} {required && "*"} {tooltip && <span>?</span>}
      </label>
      {/* )} */}

      <Select
        value={value}
        id={selectId}
        className="settings_select"
        options={options}
        isSearchable
        styles={{
          control: (provided) => ({
            ...provided,
            height: "36px",
            padding: "0px",
          }),
        }}
        onChange={onChange}
        // required={required}
        // label={label}
        placeholder={placeholder}
      />
      {error && <span className="errorSpan">{error}</span>}
    </>
  );
};

export default SettingsSelect;
