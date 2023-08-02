import React, { useContext, useEffect, useState } from "react";

import { addIngredient } from "../../../api/ingredientsApi";
import { FoodContext } from "../../../context/FoodContext";

import {
  Main_Layout,
  HeadNav,
  SideBar_Links,
  callApi,
  SideBar,
  Settings_Button,
  SettingsSelect,
  SettingsInput,
  toast,
  Toaster,
} from "../../../components/index";
import useFormValidator from "../../../utils/formValidator.js";
import { addOutLet_schema } from "../../../validations/itemsValidations.js";
const Content = () => {
  const { units } = useContext(FoodContext);

  // STATE FOR INGREDIENT CATEGORIES
  const [ingredientCategories, setIngredientCategories] = useState([]);

  //States of inputs and select components
  const [inputValues, setInputValues] = useState("");
  const [selectedValues, setSelectedValues] = useState({});

  const newOutlet = {
    ...inputValues,
    ...selectedValues,
  };
  const { errors, validateForm } = useFormValidator(
    newOutlet,
    addOutLet_schema
  );

  const handleInputChange = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (value, key) => {
    setSelectedValues((prevState) => ({
      ...prevState,
      [key]: value.value,
    }));
  };

  useEffect(() => {
    // fetchUnits();

    const fetchCategories = async () => {
      const res = await callApi("GET", "/setting/ingredientCategory/list");
      console.log(res);
      const formatted = res.ingredientCategory.map((item) => ({
        value: item._id,
        label: item.ingredientCategory_name,
      }));

      setIngredientCategories(formatted);
    };

    fetchCategories();
  }, []);

  const formattedUnits = units?.ingredientUnit?.map((item) => ({
    value: item._id,
    label: item.ingredientUnit_name,
  }));
  // console.log(units);

  //final ingredient object
  const newIngredient = {
    ...inputValues,
    ...selectedValues,
  };

  console.log("new", newIngredient);

  const handleAddIngredient = async () => {
    const validationErrors = validateForm();
    if (!validationErrors) {
      try {
        const res = await callApi("POST", addIngredient, newIngredient);
        toast.success("Modifier Added successfully");
      } catch (err) {
        console.log("err", err);
        toast.error("Failed to Add Modifer");
      } finally {
      }
      alert(res.message);
    }
  };

  return (
    <>
      <div className="d-flex">
        <div className="w-100">
          <form
            className="p-3"
            onSubmit={(e) => {
              e.preventDefault();

              handleAddIngredient();
            }}
          >
            <div className="row">
              <div className="mb-3 col-sm-12 col-md-4 col-lg-4">
                <SettingsInput
                  inputId="ingredientName"
                  labelFor="ingredientName"
                  labelText="Outlet Code *"
                  placeholder="0003"
                  required
                  type="text"
                  name="name"
                  onChange={handleInputChange}
                  errorMsg={errors.name}
                />
              </div>

              <div className="mb-3 col-sm-12 col-md-4 col-lg-4">
                <SettingsInput
                  inputId="ingredientCode"
                  labelFor="ingredientCode"
                  labelText="Outlet Name *"
                  placeholder="Description"
                  required
                  type="text"
                  name="code"
                  onChange={handleInputChange}
                  errorMsg={errors.code}
                />
              </div>

              <div className="mb-3 col-sm-12 col-md-4 col-lg-4">
                <SettingsInput
                  inputId="ingredientCode"
                  labelFor="ingredientCode"
                  labelText="Phone Name *"
                  placeholder="Description"
                  required
                  type="number"
                  name="number"
                  onChange={handleInputChange}
                  errorMsg={errors.number}
                />
              </div>
              <div className="mb-3 col-sm-12 col-md-4 col-lg-4">
                <SettingsInput
                  inputId="ingredientCode"
                  labelFor="ingredientCode"
                  labelText="Email"
                  placeholder="email.."
                  required
                  type="email"
                  name="email"
                  onChange={handleInputChange}
                  errorMsg={errors.email}
                />
              </div>

              <div className="mb-3 col-sm-12 col-md-4 col-lg-4">
                <SettingsInput
                  inputId="ingredientCode"
                  labelFor="ingredientCode"
                  labelText="Address"
                  placeholder="address"
                  required
                  type="text"
                  name="address"
                  onChange={handleInputChange}
                  errorMsg={errors.address}
                />
              </div>
              <div className="mb-3 col-sm-12 col-md-4 col-lg-4">
                <SettingsInput
                  inputId="ingredientCode"
                  labelFor="ingredientCode"
                  labelText="Active State"
                  placeholder="status"
                  required
                  type="text"
                  name="status"
                  onChange={handleInputChange}
                  errorMsg={errors.status}
                />
              </div>

              <div className="mb-3 col-sm-12 col-md-4 col-lg-4">
                <SettingsSelect
                  selectId="Default Waiter"
                  labelFor="Default Waiter"
                  labelText="Default Waiter"
                  required
                  // options={[
                  //   { value: "veg", label: "Veg" },
                  //   { value: "non_veg", label: "Non-Veg" },
                  // ]}
                  options={ingredientCategories}
                  // value={selectedValues["category"]}
                  onChange={(value) => handleSelectChange(value, "category")}

                  // onChange={handleSelectChange}
                />
              </div>

              <div className="mb-3 col-sm-12 col-md-4 col-lg-4">
                <SettingsSelect
                  selectId=" "
                  labelFor=" "
                  labelText="Online/Self Order Receiving Cashier"
                  required
                  // options={[
                  //   { value: "veg", label: "Veg" },
                  //   { value: "non_veg", label: "Non-Veg" },
                  // ]}
                  options={ingredientCategories}
                  // value={selectedValues["category"]}
                  onChange={(value) => handleSelectChange(value, " ")}

                  // onChange={handleSelectChange}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12 col-md-2 col-lg-2">
                <Settings_Button type="submit" btnTxt="Submit" />
              </div>
            </div>
          </form>
        </div>
      </div>
      <Toaster />
    </>
  );
};

const Add_Outlet = () => {
  return (
    <>
      <Main_Layout Content={Content} heading="Add Outlet" />
    </>
  );
};

export default Add_Outlet;
