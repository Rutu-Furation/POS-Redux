import React, { useState } from "react";
import {
  SettingsInput,
  Settings_Button,
  Main_Layout,
  Toaster,
  callApi,
  toast,
} from "../../../components/index.js";
import useFormValidator from "../../../utils/formValidator.js";
import { addIngredientCategory_schema } from "../../../validations/itemsValidations.js";
import { useDispatch } from "react-redux";
import { addIngredientcategory } from "../../../redux/Items/IngredientsCategory/IngredientsCategory.action.js";

const Content = () => {
  const [credentials, setCredentials] = useState("");
  const [loading, setLoading] = useState(false);
  const handleInputs = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const finalObj = {
    ...credentials,
    company_id: "64a940e343320e825b8f4ff7", //ABC COMPANY ID
  };

 
  const { errors, validateForm } = useFormValidator(
    finalObj,
    addIngredientCategory_schema
  );
  const playSoundEffect = () => {
    const scriptURL = new URL(import.meta.url);
    const soundURL = new URL(
      "../../../assets/stop-13692.mp3",
      scriptURL
    ).toString();
    const audio = new Audio(soundURL);
    audio.play();
  };
const dispatch=useDispatch()
  const addIngredientCategory = async () => {
    const validationErrors = validateForm();
    if (!validationErrors) {
    //   try {
    //     setLoading(true);
    //     const res = await callApi(
    //       "POST",
    //       "/setting/ingredientCategory/new",
    //       finalObj
    //     );
    //     if (res) {
    //       toast.success("Ingredient Category added successfully");
    //     }
    //   } catch (error) {
    //     toast.error("Failed to add Ingredient Category");
    //   } finally {
    //     setLoading(false);
    //   }
    // } else {
    //   console.log("Invalid form data");
    // }
    dispatch(addIngredientcategory(finalObj))
    playSoundEffect()
  };
  }
  const formStructure = [
    {
      inputId: "categoryName",
      labelFor: "categoryName",
      labelText: "Category Name",
      name: "ingredientCategory_name",
      placeholder: "Category Name",
      type: "text",
      required: true,
      onChange: handleInputs,
      inputType: "input",
      // errorMsg: errors.ingredientCategory_name,
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
        className="p-3 w-100"
        onSubmit={(e) => {
          e.preventDefault();

          addIngredientCategory();
        }}
      >
        <div className="row">
          {formStructure?.map((fields, index) => (
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
          <div className="mb-3 col-sm-12 col-md-2 col-lg-2">
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

const Add_Ingredient_Category = () => {
  return (
    <>
      <Main_Layout Content={Content} heading="Add Ingredient Category" />
    </>
  );
};

export default Add_Ingredient_Category;
