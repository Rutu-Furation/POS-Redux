import React from "react";
import "./Settings_Button.css";

const Settings_Button = ({
  btnTxt,
  type,
  toggle,
  target,
  onClick,
  dismiss,
  disabled,
  children,
  loading,
}) => {
  return (
    <>
      <button
        className={`w-100 form-control settingButton ${
          disabled ? "disabled" : ""
        }`}
        type={type}
        data-bs-toggle={toggle}
        data-bs-target={target}
        data-bs-dismiss={dismiss}
        onClick={onClick}
        disabled={loading || disabled} // Disable the button when loading is true
      >
        {children}
        {!loading && btnTxt}
      </button>
    </>
  );
};

export default Settings_Button;
