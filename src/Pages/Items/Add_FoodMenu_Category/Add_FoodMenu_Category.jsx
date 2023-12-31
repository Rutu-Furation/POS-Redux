import React, { useState } from "react";
import {
  SettingsInput,
  callApi,
  toast,
  Settings_Button,
  Main_Layout,
  Toaster,
} from "../../../components/index.js";
import useFormValidator from "../../../utils/formValidator.js";
import { addFoodMenuCategory_schema } from "../../../validations/itemsValidations.js";
import { useDispatch, useSelector } from "react-redux";
import { addFoodMenuCategory } from "../../../redux/Items/FoodMenuCategory/FoodMenuCategory.actions.js";
import playSoundEffect from "../../../utils/SoundEffect.js";

const Content = () => {
  const [categoryData, setCategoryData] = useState({
    name: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);

  const {isLoading} = useSelector((state) => state.FoodMenuCategory)

  const handleInputs = (e) => {
    setCategoryData({ ...categoryData, [e.target.name]: e.target.value });
  };

  console.log(categoryData);

  const { errors, validateForm } = useFormValidator(
    categoryData,
    addFoodMenuCategory_schema
  );
  const dispatch = useDispatch();
  const submitCategory = async () => {
    const validationErrors = validateForm();

    if (!validationErrors) {
      
      dispatch(addFoodMenuCategory(categoryData));
      playSoundEffect();
    }
  };

  const formStructure = [
    {
      inputId: "category",
      labelFor: "category",
      labelText: "Category",
      name: "name",
      required: true,
      placeholder: "Category Name",
      type: "text",
      onChange: handleInputs,
      inputType: "input",
      errorMsg: "Category is required",
    },
    {
      inputId: "description",
      labelFor: "description",
      labelText: "Description",
      name: "description",
      placeholder: "Description",
      type: "text",
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

          submitCategory();
        }}
      >
        <div className="row">
          {formStructure.map((fields, index) => (
            <div className="mb-3 col-sm-12 col-md-4 col-lg-4" key={index}>
              <SettingsInput
                inputId={fields.inputId}
                labelFor={fields.labelFor}
                labelText={fields.labelText}
                name={fields.name}
                required={fields.required}
                placeholder={fields.placeholder}
                type={fields.type}
                onChange={fields.onChange}
                errorMsg={errors[fields.name]}
              />
            </div>
          ))}

          {/* <div className="mb-3 col-sm-12 col-md-4 col-lg-4">
            <SettingsInput
              inputId="description"
              labelFor="description"
              labelText="Description"
              name="description"
              placeholder="Description"
              type="text"
              onChange={handleInputs}
            />
          </div> */}
        </div>

        <div className="row">
          <div className="col-sm-12 col-md-2 col-lg-2">
            <Settings_Button type="submit" btnTxt="Submit" loading={isLoading}>
              {/* Show the spinner when loading is true */}
              {isLoading ? (
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                />
              ) : null}
            </Settings_Button>
          </div>
        </div>
      </form>

      <Toaster />
    </>
  );
};

const Add_FoodMenu_Category = () => {
  return (
    <>
      <Main_Layout Content={Content} heading="Add Food Menu Category" />
    </>
  );
};

export default Add_FoodMenu_Category;
