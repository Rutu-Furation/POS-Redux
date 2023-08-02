import React, { useState } from "react";

import {
  SettingsInput,
  SettingsSelect,
  Settings_Button,
} from "../../../components/index";

const AddKitchen = () => {
  const [formData, setFormData] = useState({
    name: "",
    printer: "",
    category: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: fieldValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Make your post request with the formData here
    console.log(formData);
  };

  return (
    <>
      <div>
        <div className="p-3">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="mb-3 col-sm-12 col-md-4 col-lg-4">
                <SettingsInput
                  inputId="Name"
                  labelFor="Name"
                  labelText="Name (Just to identify easily)"
                  name="name"
                  placeholder="eg: Indian Kitchen, BBQ Kitchen etc.."
                  required
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>

              <div className="mb-3 col-sm-12 col-md-4 col-lg-4">
                <SettingsSelect
                  selectId="printer"
                  labelFor="printer"
                  labelText="Printer"
                  value={formData.printer}
                  onChange={handleInputChange}
                />
              </div>

              <div className="row">
                <label
                  htmlFor="checkDiv"
                  className="form-label"
                  style={{ fontSize: "12px" }}
                >
                  Categories
                </label>
                <div className="mb-3 col-sm-12 col-md-4 col-lg-4" id="checkDiv">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={formData.category}
                      id="check"
                      name="category"
                      onChange={handleInputChange}
                    />
                    <label className="form-check-label" htmlFor="check">
                      Default checkbox
                    </label>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-12 col-md-2 col-lg-2">
                  <Settings_Button btnTxt="Submit" type="submit" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddKitchen;
