import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../context/AuthContext";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  Toaster,
  HeadNav,
  SideBar_Links,
  SideBar,
  callApi,
  Settings_Button,
  SettingsSelect,
  SettingsInput,
} from "../../../../components/index";

import useFormValidator from "../../../../utils";
import { addTable_schema } from "../../../../validations/itemsValidations";
const Add_Table = () => {
  const [inputValues, setInputValues] = useState("");
  const [selectedValues, setSelectedValues] = useState("");
  const [areas, setAreas] = useState("");
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);

  const newTable = {
    ...inputValues,
    ...selectedValues,
  };
  const { errors, validateForm } = useFormValidator(newTable, addTable_schema);
  useEffect(() => {
    const getAreaDetails = async () => {
      const res = await callApi("GET", "/setting/area/list");
      const areas = res.areas.map((item) => ({
        value: item._id,
        label: item.area_name,
      }));
      setAreas(areas);
    };

    getAreaDetails();
  }, []);

  //getting input values
  const handleInputs = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  console.log(inputValues);

  //getting select values
  const handleSelectChange = (value, key) => {
    setSelectedValues((prevState) => ({
      ...prevState,
      [key]: value.value,
    }));
  };
  console.log(selectedValues);

  const finalObj = {
    ...inputValues,
    ...selectedValues,
    user_id: user?._id,
    outlet_id: "649eb47b87c84bdfe10fe1cf",
    del_status: "Live",
  };

  console.log(finalObj);
  const playSoundEffect = () => {
    const scriptURL = new URL(import.meta.url);
    const soundURL = new URL(
      "../../../../assets/interface-124464.mp3",
      scriptURL
    ).toString();
    const audio = new Audio(soundURL);
    audio.play();
  };
  const addTable = async () => {
    const validationErrors = validateForm();
    if (!validationErrors) {
      try {
        setLoading(true);
        const res = await callApi("POST", "/setting/table/new", finalObj);
        console.log(res);
        toast.success("Table added successfully");
        playSoundEffect();
      } catch (error) {
        console.error(error);
        toast.error("Failed to add table");
      } finally {
        setLoading(false);
      }
    }
  };

  const formStructure = [
    {
      selectId: "tableAreaFloor",
      labelFor: "tableAreaFloor",
      labelText: "Area/Floor",
      required: true,
      onChange: (value) => handleSelectChange(value, "area_id"),

      options: areas,
      inputType: "select",
    },
    {
      inputId: "tableName",
      labelFor: "tableName",
      required: true,
      labelText: "Table Name",
      placeholder: "Table Name",
      type: "text",
      name: "name",
      onChange: handleInputs,
      errorMsg: "Table Name is Required",
      inputType: "input",
    },
    {
      inputId: "seatCapacity",
      labelFor: "seatCapacity",
      required: true,
      labelText: "Seat Capacity",
      placeholder: "Seat Capacity",
      type: "number",
      name: "sit_capacity",
      onChange: handleInputs,
      errorMsg: "sit capacity is Required",
      inputType: "input",
    },
    {
      inputId: "tablePosition",
      labelFor: "tablePosition",
      required: true,
      labelText: "Table Position",
      placeholder: "Table Position",
      type: "text",
      name: "position",
      onChange: handleInputs,
      errorMsg: "position is Required",
      inputType: "input",
    },
    {
      inputId: "tableDesc",
      labelFor: "tableDesc",
      required: true,
      labelText: "Description",
      placeholder: "Description",
      type: "text",
      name: "description",
      onChange: handleInputs,
      inputType: "input",
    },
  ];
  return (
    <>
      {
        <div className="d-flex">
          <SideBar />
          <div className="w-100">
            <HeadNav />
            <div className="d-flex">
              <SideBar_Links />
              <div className="w-100">
                <h5 className="headerName">Add Table</h5>
                <form
                  className="p-3"
                  onSubmit={(e) => {
                    e.preventDefault();

                    addTable();
                  }}
                >
                  <div className="row">
                    {formStructure.map((fields, index) => (
                      <div
                        className="mb-3 col-sm-12 col-md-4 col-lg-4"
                        key={index}
                      >
                        {fields.inputType === "select" && (
                          <SettingsSelect
                            selectId={fields.selectId}
                            labelFor={fields.labelFor}
                            labelText={fields.labelText}
                            required={fields.required}
                            onChange={fields.onChange}
                            options={fields.options}
                            error={errors.area_id}
                          />
                        )}

                        {fields.inputType === "input" && (
                          <SettingsInput
                            inputId={fields.inputId}
                            labelFor={fields.labelFor}
                            required={fields.required}
                            labelText={fields.labelText}
                            placeholder={fields.placeholder}
                            type={fields.type}
                            name={fields.name}
                            onChange={fields.onChange}
                            errorMsg={errors[fields.name]}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                  {/* <div className="mb-3 col-sm-12 col-md-4 col-lg-4">
                    <label
                      htmlFor="tableDesc"
                      style={{ fontSize: "12px" }}
                      className="form-label"
                    >
                      Description
                    </label>
                    <textarea
                      name="description"
                      style={{ height: "36px!important" }}
                      id="tableDesc"
                      className="form-control"
                      cols="30"
                      rows="1"
                      onChange={handleInputs}
                    ></textarea>
                  </div> */}
                  {/* <div className="row">
                    <div className="mb-3 col-sm-12 col-md-4 col-lg-4">
                      <SettingsSelect
                        labelFor="tableAreaFloor"
                        required
                        labelText="Area/Floor"
                        selectId="tableAreaFloor"
                        options={areas}
                        onChange={(value) =>
                          handleSelectChange(value, "area_id")
                        }
                        error={errors.area_id}
                      />
                    </div>

                    <div className="mb-3 col-sm-12 col-md-4 col-lg-4">
                      <SettingsInput
                        inputId="tableName"
                        labelFor="tableName"
                        labelText="Table Name"
                        required
                        placeholder="Table Name"
                        type="text"
                        name="name"
                        onChange={handleInputs}
                        errorMsg={errors.name}
                      />
                    </div>

                    <div className="mb-3 col-sm-12 col-md-4 col-lg-4">
                      <SettingsInput
                        inputId="seatCapacity"
                        labelFor="seatCapacity"
                        labelText="Seat Capacity"
                        required
                        placeholder="Seat Capacity"
                        type="number"
                        name="sit_capacity"
                        onChange={handleInputs}
                        errorMsg={errors.sit_capacity}
                      />
                    </div>
                  </div> */}

                  {/* <div className="row">
                    <div className="mb-3 col-sm-12 col-md-4 col-lg-4">
                      <SettingsInput
                        inputId="tablePosition"
                        labelFor="tablePosition"
                        labelText="Table Position"
                        placeholder="Table Position"
                        type="text"
                        name="position"
                        onChange={handleInputs}
                        errorMsg={errors.position}
                      />
                    </div>

                    <div className="mb-3 col-sm-12 col-md-4 col-lg-4">
                      <label
                        htmlFor="tableDesc"
                        style={{ fontSize: "12px" }}
                        className="form-label"
                      >
                        Description
                      </label>
                      <textarea
                        name="description"
                        style={{ height: "36px!important" }}
                        id="tableDesc"
                        className="form-control"
                        cols="30"
                        rows="1"
                        onChange={handleInputs}
                      ></textarea>
                    </div>
                  </div> */}

                  <div className="row">
                    <div className="mb-3 col-sm-12 col-md-4 col-lg-2">
                      <Settings_Button
                        type="submit"
                        btnTxt="Submit"
                        loading={loading}
                      >
                    
                        {loading ? (
                          <span
                            className="spinner-border spinner-border-sm"
                            role="status"
                            aria-hidden="true"
                          />
                        ) : null}
                      </Settings_Button>{" "}
                    </div>
                    <div className="mb-3 col-sm-12 col-md-4 col-lg-2">
                      <Settings_Button type="button" btnTxt="Back" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      }

      <Toaster />
    </>
  );
};

export default Add_Table;
