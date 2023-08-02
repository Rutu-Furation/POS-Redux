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
import { addModifier_schema } from "../../../validations/itemsValidations.js";

const Content = () => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);
  //STATE FOR INPUTS
  const [inputValues, setInputValues] = useState("");

  //FETCHING INGREDIENTS
  const { ingredients, fetchIngredients } = useContext(FoodContext);
  console.log("inputValues", inputValues);
  useEffect(() => {
    fetchIngredients();
  }, []);

  const newModifier = {
    ...inputValues,
    ...rows,
  };
  const { errors, validateForm } = useFormValidator(
    newModifier,
    addModifier_schema
  );
  const ingredientOptions = ingredients?.ingredient?.map((item) => ({
    value: item._id,
    label: item.name,
    costUnit: item.costUnit,
    code: item.code,
  }));
  // console.log(ingredientOptions);

  //FUNCTION FOR HANDLING INPUT DATA
  const handleInputData = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  // ADD DATA TO THE REGULAR TABLE
  const handleAddRow = (option) => {
    const newRow = {
      sn: rows.length + 1,
      ingredientName: option.label,
      ingredient: option.value,
      code: option.code,
      consumption: "",
      costUnit: option.costUnit,
      total: "",
    };
    setRows([...rows, newRow]);
  };

  //HANDLE CHANGE IN CONSUMPTON OF EACH ROW
  const handleConsumptionChange = (event, row) => {
    const newConsumption = event.target.value;
    const updatedRows = rows.map((r) => {
      if (r.sn === row.sn) {
        return {
          ...r,
          consumption: newConsumption,
          total: newConsumption * r.costUnit,
        };
      }
      return r;
    });
    setRows(updatedRows);
  };

  //HANDLE CHANGES IN COST PER UNIT INPUT
  const handleCostUnitChange = (event, row) => {
    const newCostUnit = event.target.value;
    const updatedRows = rows.map((r) => {
      if (r.sn === row.sn) {
        return {
          ...r,
          costUnit: newCostUnit,
          total: r.consumption * newCostUnit,
        };
      }
      return r;
    });
    setRows(updatedRows);
  };

  console.log(rows);

  const finalObj = {
    name: inputValues.name,
    price: inputValues.price,
    company_id: "64abab87c632b42ec95f628e",
    total_cost: rows.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.total;
    }, 0),

    description: inputValues.description,
    // cgst: inputValues.cgst,
    // sgst: inputValues.sgst,
    // igst: inputValues.igst,
    // vat: inputValues.vat,
    ingredients: rows.map((item) => ({
      quantity: item.consumption,
      ingredient: item.ingredient,
    })),
  };

  console.log(finalObj.ingredients);

  const handelAddModifier = async () => {
    const validationErrors = validateForm();
    if (!validationErrors) {
      try {
        setLoading(true);
        let res = await callApi("POST", "/setting/modifier/new", finalObj);
        console.log("Res", res);
        toast.success("Modifier Added successfully");
      } catch (err) {
        console.log("err", err);
        toast.error("Failed to Add Modifer");
      } finally {
        setLoading(false);
      }
    }
  };
  return (
    <>
      <form
        className="p-3"
        onSubmit={(e) => {
          e.preventDefault();

          handelAddModifier();
        }}
      >
        {/* INPUTS ROW */}
        <div className="row">
          <div className="mb-3 col-sm-12 col-md-4 col-lg-4">
            <SettingsInput
              inputId="modifierName"
              labelFor="modifierName"
              labelText="Name"
              name="name"
              type="text"
              placeholder="Name"
              required
              onChange={handleInputData}
              errorMsg={errors.name}
            />
          </div>

          <div className="mb-3 col-sm-12 col-md-4 col-lg-4">
            <SettingsInput
              inputId="modifierPrice"
              labelFor="modifierPrice"
              labelText="Price"
              name="price"
              type="number"
              placeholder="Price"
              required
              onChange={handleInputData}
              errorMsg={errors.price}
            />
          </div>
        </div>

        {/* BUTTON ROW */}
        <div className="row">
          <div className="mb-3 col-sm-12 col-md-4 col-lg-4">
            <SettingsSelect
              selectId="ingredients"
              labelFor="ingredients"
              labelText="Ingredients Consumption"
              options={ingredientOptions}
              error={errors.ingredient}

              onChange={handleAddRow}
            />
          </div>

          <div className="mb-3 col-sm-12 col-md-2 col-lg-2 d-flex align-items-end">
            <Settings_Button btnTxt="Read First" type="button" />
          </div>
        </div>

        {/* TABLE ROW */}
        <div className="row my-4">
          <table className="table">
            <thead className="table-secondary">
              <tr>
                <th>SN</th>
                <th>Ingredient(Code)</th>
                <th>Consumption</th>
                <th>Cost</th>
                <th>Total</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((items, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    {items.ingredientName} - {items.code}
                  </td>
                  <td>
                    <input
                      className="form-control"
                      type="number"
                      step="0.01"
                      value={items.consumption}
                      onChange={(e) => handleConsumptionChange(e, items)}
                    />
                  </td>
                  <td>
                    <input
                      className="form-control"
                      type="number"
                      step="0.01"
                      value={items.costUnit}
                      onChange={(e) => handleCostUnitChange(e, items)}
                    />
                  </td>
                  <td>
                    <input
                      className="form-control"
                      type="number"
                      step="0.01"
                      value={items.total}
                      readOnly
                      onChange={(e) => handleCostUnitChange(e, items)}
                    />
                  </td>
                </tr>
              ))}
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <p className="" style={{ fontSize: "14px" }}>
                    Total
                  </p>
                </td>
                <td>
                  <input
                    name="finalTotal"
                    className="form-control "
                    disabled
                    type="number"
                    step="0.01"
                    value={rows.reduce((accumulator, currentValue) => {
                      return accumulator + currentValue.total;
                    }, 0)}
                  />
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* DESCRIPTION ROW */}
        <div className="row">
          <div className="mb-3 col-sm-12 col-md-4 col-lg-4">
            <SettingsInput
              inputId="modifierDescription"
              labelFor="modifierDescription"
              labelText="Description"
              name="description"
              placeholder="Description"
              type="text"
              onChange={handleInputData}
            />
          </div>
        </div>

        {/* GST ROW */}
        <div className="row">
          <div className="mb-3 col-sm-12 col-md-4 col-lg-4">
            <SettingsInput
              inputId="cgst"
              labelFor="cgst"
              labelText="CGST %"
              name="cgst"
              placeholder="CGST"
              type="number"
              onChange={handleInputData}
            />
          </div>

          <div className="mb-3 col-sm-12 col-md-4 col-lg-4">
            <SettingsInput
              inputId="sgst"
              labelFor="sgst"
              labelText="SGST %"
              name="sgst"
              placeholder="SGST"
              type="number"
              onChange={handleInputData}
            />
          </div>

          <div className="mb-3 col-sm-12 col-md-4 col-lg-4">
            <SettingsInput
              inputId="igst"
              labelFor="igst"
              labelText="IGST %"
              name="igst"
              placeholder="IGST"
              type="number"
              onChange={handleInputData}
            />
          </div>

          <div className="mb-3 col-sm-12 col-md-4 col-lg-4">
            <SettingsInput
              inputId="vat"
              labelFor="vat"
              labelText="VAT %"
              name="vat"
              placeholder="VAT"
              type="number"
              onChange={handleInputData}
            />
          </div>
        </div>

        {/* BUTTON ROW */}
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

const Add_Modifier = () => {
  return <Main_Layout Content={Content} heading="Add Modifier" />;
};

export default Add_Modifier;
