import React, { useState } from "react";
import {
  SettingsInput,
  Settings_Button,
  Main_Layout,
  Toaster,
  callApi,
  toast,
} from "../../../components/index.js";
import * as yup from "yup";
import useFormValidator from "../../../utils";
import { addIngredientUnit_Schema } from "../../../validations/itemsValidations.js";
import { useDispatch } from "react-redux";
import { addIngredientUnit } from "../../../redux/Items/IngredientsUnit/IngredientsUnit.action.js";
import playSoundEffect from "../../../utils/SoundEffect.js";

const Content = () => {
  const [credentials, setCredentials] = useState("");
  const [loading, setLoading] = useState(false);
  const handleInputs = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  console.log(credentials);
  const finalObj = {
    ...credentials,
    company_id: "64a940e343320e825b8f4ff7", //ABC COMPANY ID
  };

  console.log(finalObj);

  const { errors, validateForm } = useFormValidator(
    finalObj,
    addIngredientUnit_Schema
  );
const dispatch=useDispatch()
  const submitUnit = async () => {
    const validationErrors = validateForm();
    if (!validationErrors) {
       
      dispatch(addIngredientUnit(finalObj))
      playSoundEffect();
    }  
  };
  console.log("loading");

  const formStructure = [
    {
      inputId: "unitName",
      labelFor: "unitName",
      labelText: "Unit Name",
      name: "ingredientUnit_name",
      placeholder: "Unit Name",
      type: "text",
      required: true,
      onChange: handleInputs,
      errorMsg: "Unit name is required",
    },
    {
      inputId: "unitDescription",
      labelFor: "unitDescription",
      labelText: "Unit Description",
      name: "description",
      placeholder: "Unit Decription",
      type: "text",
      onChange: handleInputs,
    },
  ];

  return (
    <>
      <form
        className="p-3 w-100"
        onSubmit={(e) => {
          e.preventDefault();

          submitUnit();
        }}
      >
        <div className="row">
          {formStructure.map((fields, index) => (
            <div className="mb-3 col-sm-12 col-md-6 col-lg-6" key={index}>
              <SettingsInput
                inputId={fields.inputId}
                labelFor={fields.labelFor}
                labelText={fields.labelText}
                name={fields.name}
                placeholder={fields.placeholder}
                type={fields.type}
                required={fields.required}
                onChange={fields.onChange}
                errorMsg={errors[fields.name]}
              />
            </div>
          ))}
        </div>

        <div className="row">
          <div className="col-sm-12 col-md-2 col-lg-2">
            <Settings_Button type="submit" btnTxt="Submit" loading={loading}>
              {/* Show the spinner when loading is true */}
              {loading ? (
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

const Add_Ingredient_Unit = () => {
  return <Main_Layout Content={Content} heading="Add Ingredient Unit" />;
};

export default Add_Ingredient_Unit;
