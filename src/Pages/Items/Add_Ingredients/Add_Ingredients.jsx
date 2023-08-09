import React, { useContext, useEffect, useState } from "react";
import {
  SettingsInput,
  Settings_Button,
  SettingsSelect,
  Main_Layout,
  Toaster,
  callApi,
  toast,
} from "../../../components/index.js";
import { FoodContext } from "../../../context/FoodContext.jsx";
import useFormValidator from "../../../utils/formValidator.js";
import { addIngredient_schema } from "../../../validations/itemsValidations.js";
import { useDispatch, useSelector } from "react-redux";
import { addnewIngredient } from "../../../redux/Items/Ingredients/Ingredients.action.js";
import playSoundEffect from "../../../utils/SoundEffect.js";

const Content = () => {
  const { units, fetchUnits } = useContext(FoodContext);

  // STATE FOR INGREDIENT CATEGORIES
  const [ingredientCategories, setIngredientCategories] = useState([]);

  //States of inputs and select components
  const [inputValues, setInputValues] = useState("");
  const [selectedValues, setSelectedValues] = useState({});
  const [loading, setLoading] = useState(false);

  const { isLoading } = useSelector((state) => state.Ingredient);

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

    fetchUnits();
  }, [loading]);

  const formattedUnits = units?.ingredientUnit?.map((item) => ({
    value: item._id,
    label: item.ingredientUnit_name,
  }));

  const newIngredient = {
    ...inputValues,
    ...selectedValues,
  };

  console.log("new", newIngredient);

  const { errors, validateForm } = useFormValidator(
    newIngredient,
    addIngredient_schema
  );

  const dispatch = useDispatch();

  const handleAddIngredient = async () => {
    const validationErrors = validateForm();
    if (!validationErrors) {
      dispatch(addnewIngredient(newIngredient));
      playSoundEffect();
    }
  };
  console.log("loading", loading);

  const formStructure = [
    {
      inputId: "ingredientName",
      labelFor: "ingredientName",
      labelText: "Name",
      placeholder: "Name",
      required: true,
      type: "text",
      name: "name",
      onChange: handleInputChange,
      errorMsg: "Ingredient Name is Required",
      inputType: "input",
    },
    {
      inputId: "ingredientCode",
      labelFor: "ingredientCode",
      labelText: "Code",
      placeholder: "Code",
      required: true,
      type: "number",
      name: "code",
      onChange: handleInputChange,
      errorMsg: "Code is Required",
      inputType: "input",
    },
    {
      selectId: "ingredientCategory",
      labelFor: "ingredientCategory",
      labelText: "Category",
      required: true,
      options: ingredientCategories,
      onChange: (value) => handleSelectChange(value, "category"),
      inputType: "select",
      name: "category",
    },
    {
      selectId: "ingredientPurchaseUnit",
      labelFor: "ingredientPurchaseUnit",
      labelText: "Purchase Unit",
      required: true,
      tooltip: true,
      options: formattedUnits,
      onChange: (value) => handleSelectChange(value, "PurchaseUnit"),
      inputType: "select",
      name: "PurchaseUnit",
    },
    {
      selectId: "ingredientConsumptionUnit",
      labelFor: "ingredientConsumptionUnit",
      labelText: "Consumption Unit",
      required: true,
      options: formattedUnits,
      onChange: (value) => handleSelectChange(value, "ConsumptionUnit"),
      tooltip: true,
      inputType: "select",
      name: "ConsumptionUnit",
    },
    {
      name: "ConversionRate",
      inputId: "ingredientConversionRate",
      labelFor: "ingredientConversionRate",
      labelText: "Conversion Rate",
      placeholder: "Conversion Rate",
      required: true,
      tooltip: true,
      type: "number",
      onChange: handleInputChange,
      errorMsg: "Conversion Rate is required",
      inputType: "input",
    },
    {
      name: "PurchaseRate",
      inputId: "ingredientPurchasePrice",
      labelFor: "ingredientPurchasePrice",
      labelText: "Purchase Price",
      placeholder: "Purchase Price",
      required: true,
      tooltip: true,
      type: "number",
      onChange: handleInputChange,
      errorMsg: "Purchase Price is Required",
      inputType: "input",
    },
    {
      name: "costUnit",
      inputId: "ingredientCostPerUnit",
      labelFor: "ingredientCostPerUnit",
      labelText: "Cost Per Unit",
      placeholder: "Cost Per Unit",
      required: true,
      tooltip: true,
      type: "number",
      onChange: handleInputChange,
      errorMsg: "Cost Per Unit is Required",
      inputType: "input",
    },
    {
      name: "LowQty",
      inputId: "ingredientQty",
      labelFor: "ingredientQty",
      labelText: "Low Qty",
      placeholder: "Low Qty",
      required: true,
      tooltip: true,
      type: "number",
      onChange: handleInputChange,
      errorMsg: "Quantity is Required",
      inputType: "input",
    },
  ];

  return (
    <>
      <form
        className="p-3"
        onSubmit={(e) => {
          e.preventDefault();

          handleAddIngredient();
        }}
      >
        <div className="row">
          {formStructure.map((fields, index) => (
            <div className="mb-3 col-sm-12 col-md-4 col-lg-4" key={index}>
              {fields.inputType === "input" && (
                <SettingsInput
                  type={fields.type}
                  name={fields.name}
                  inputId={fields.inputId}
                  labelFor={fields.labelFor}
                  labelText={fields.labelText}
                  placeholder={fields.placeholder}
                  onChange={fields.onChange}
                  required={fields.required}
                  errorMsg={errors[fields.name]}
                  tooltip={fields.tooltip}
                />
              )}

              {fields.inputType === "select" && (
                <SettingsSelect
                  selectId={fields.selectId}
                  labelFor={fields.labelFor}
                  labelText={fields.labelText}
                  required={fields.required}
                  options={fields.options}
                  onChange={fields.onChange}
                  tooltip={fields.tooltip}
                  error={errors[fields.name]}
                />
              )}
            </div>
          ))}
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

const Add_Ingredients = () => {
  return <Main_Layout Content={Content} heading="Add Ingredient" />;
};

export default Add_Ingredients;
