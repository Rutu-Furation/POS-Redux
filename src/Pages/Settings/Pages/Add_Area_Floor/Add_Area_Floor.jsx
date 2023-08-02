import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import {
  SettingsInput,
  Settings_Button,
  SettingsSelect,
  callApi,
  HeadNav,
  SideBar,
  SideBar_Links,
  Toaster,
  Main_Layout,
} from "../../../../components/index";
import useFormValidator from "../../../../utils";
import { addArea_schema } from "../../../../validations/itemsValidations";
import { addAreaData } from "../../../../redux/AddArea/addArea.action";
import { useDispatch } from "react-redux";

const Content = () => {
  const [inputValues, setInputValues] = useState("");
  const [selectedValues, setSelectedValues] = useState("");
  const [allOutlets, setAllOutlets] = useState([]);
  const [loading, setLoading] = useState(false);
  const id = "64ababaac632b42ec95f6297";

  useEffect(() => {
    const getOutlets = async () => {
      const res = await callApi(
        "GET",
        `/company/64ababaac632b42ec95f6297/outlets`
      );
      // http://localhost:8080/company/64ababaac632b42ec95f6297/outlets
      console.log("outlet", res.company);
      const outlets = res.company.outlets?.map((outlet) => ({
        value: outlet._id,
        label: outlet.outlet_name,
      }));
      console.log(outlets);
      setAllOutlets(outlets);
    };
    getOutlets();
  }, []);

  const newTable = {
    ...inputValues,
    ...selectedValues,
  };
  const { errors, validateForm } = useFormValidator(newTable, addArea_schema);

  //getting input values
  const handleInputs = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  // getting select values
  const handleSelectChange = (value, key) => {
    setSelectedValues((prevState) => ({
      ...prevState,
      [key]: value.value,
    }));
  };

  const finalObj = {
    ...inputValues,
    ...selectedValues,
  };
  // ========================
  // const  { isLoading,
  //   isError,
  //   AreaData,} = useSelector((store)=>store.addArea)
  
    const disPatch = useDispatch()
     
    // console.log(TableListData)
  // ======================
  console.log(finalObj);

  const handleSubmit = async () => {
    
    const validationErrors = validateForm();
    if (!validationErrors) {
      // try {
      //   setLoading(true);
      //   const res = await callApi("POST", "/setting/area/new", finalObj);
      //   console.log(res);
      //   toast.success("Area/Floor added successfully");
      // } catch (error) {
      //   console.error(error);
      //   toast.error("Failed to add Area/Floor");
      // } finally {
      //   setLoading(false);
      // }
      disPatch(addAreaData(finalObj))
    }
  };
  const formStructure = [
    {
      selectId: "outlet",
      labelFor: "outlet",
      labelText: "Outlet",
      required: true,
      onChange: (value) => handleSelectChange(value, "outlet_id"),
      options: allOutlets,
      inputType: "select",
    },
    {
      inputId: "areaFloorName",
      labelFor: "areaFloorName",
      required: true,
      labelText: "Area/Floor Name",
      placeholder: "Area/Floor Name",
      type: "text",
      name: "area_name",
      onChange: handleInputs,
      errorMsg: "Area/Floor Name is Required",
      inputType: "input",
    },
    {
      inputId: "areaFloorDesc",
      labelFor: "areaFloorDesc",
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
      <form
        className="p-3"
        onSubmit={(e) => {
          e.preventDefault();

          handleSubmit();
        }}
      >
        <div className="row">
          {formStructure.map((fields, index) => (
            <div className="mb-3 col-sm-12 col-md-4 col-lg-4" key={index}>
              {fields.inputType === "select" && (
                <SettingsSelect
                  selectId={fields.selectId}
                  labelFor={fields.labelFor}
                  labelText={fields.labelText}
                  required={fields.required}
                  onChange={fields.onChange}
                  options={fields.options}
                  error={errors.outlet_id}
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

        <div className="row">
          <div className="col-sm-12 col-md-2 col-md-2">
            <Settings_Button type="submit" btnTxt="Submit" loading={loading}>
              {/* Show the spinner when loading is true */}
              {loading ? (
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                />
              ) : null}
            </Settings_Button>{" "}
          </div>
        </div>
      </form>

      <Toaster />
    </>
  );
};

const Add_Area_Floor = () => {
  return (
    <>
      <Main_Layout Content={Content} heading="Add Area/Floor" />
    </>
  );
};

export default Add_Area_Floor;
