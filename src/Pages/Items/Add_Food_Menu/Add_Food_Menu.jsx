import React, { useState } from "react";

import DataTable from "react-data-table-component";

import {
  Settings_Button,
  SettingsInput,
  SettingsSelect,
} from "../../../components/index";

const Add_Food_Menu = () => {
  const [menuType, setMenuType] = useState("regular");

  const [regularData, setRegularData] = useState([]);

  const [comboData, setComboData] = useState("");

  const [total, setTotal] = useState(0);

  const Itemtotal = regularData.map((ele) => {
    return ele.consumption * ele.cost;
  });
  console.log("Item ", Itemtotal);

  const handleInputChange = (e, row) => {
    const updatedData = regularData.map((item) => {
      if (item.sn === row.sn) {
        return { ...item, [e.target.name]: e.target.value };
      }
      return item;
    });
    setRegularData(updatedData);
  };

  const handleComboInputChange = (e, row) => {
    const updatedData = comboData.map((item) => {
      if (item.sn === row.sn) {
        return { ...item, [e.target.name]: e.target.value };
      }
      return item;
    });
    setComboData(updatedData);
    console.log(updatedData);
  };

  console.log(total);

  const handleRegularRowDel = (item) => {
    // const filteredRows = regularData.filter((item) => row.sn !== item.id);
    const filteredRows = regularData.filter((row) => row.sn !== item.sn);
    setRegularData(filteredRows);
    console.log(item);
  };

  //Columns for regular table
  const regularColumns = [
    { name: "SN", selector: (row) => row.sn },
    { name: "Ingredient", selector: (row) => row.ingredient },
    {
      name: "Consumption",
      selector: (row) => row.consumption,
      cell: (row) => (
        <input
          className="form-control"
          onChange={(e) => handleInputChange(e, row)}
          name="consumption"
          type="number"
        />
      ),
    },
    {
      name: "Cost",
      selector: (row) => row.cost,
      cell: (row) => (
        <input
          className="form-control"
          onChange={(e) => handleInputChange(e, row)}
          name="cost"
          type="number"
        />
      ),
    },
    {
      name: "Total",
      selector: (row) => row.total,
      cell: (row) => (
        <input
          className="form-control"
          value={row.cost * row.consumption}
          onChange={() => handleInputChange(e, row)}
          readOnly
          name="total"
          type="number"
        />
      ),
    },
    {
      name: "Actions",
      selector: (row) => row.actions,
      cell: (row) => (
        <button type="button" onClick={() => handleRegularRowDel(row)}>
          Del
        </button>
      ),
    },
  ];

  //Columns for combo table
  const comboColumns = [
    { name: "SN", selector: (row) => row.sn },
    { name: "Food Menu", selector: (row) => row.foodMenu },
    {
      name: "Quantity",
      selector: (row) => row.quantity,
      cell: (row) => (
        <input
          className="form-control"
          onChange={(e) => handleComboInputChange(e, row)}
          name="quantity"
          type="number"
        />
      ),
    },
    { name: "Actions", selector: (row) => row.actions },
  ];

  const handleMenuType = (option) => {
    setMenuType(option.value);
  };

  const changeIngredient = (option) => {
    if (option.value !== "") {
      const newData = {
        sn: regularData.length + 1,
        ingredient: option.value,
        consumption: regularData.consumption,
        cost: regularData.cost,

        // total: regularData.consumption * regularData.cost,
      };
      setRegularData([...regularData, newData]);
      // console.log("consumption", regularData);
    }
  };
  console.log(regularData);

  const changeFoodMenu = (option) => {
    if (option.value !== "") {
      const newData = { sn: comboData.length + 1, foodMenu: option.value };
      setComboData([...comboData, newData]);
    }
  };

  console.log("combo data", comboData);

  return (
    <>
      <div>
        <div className="p-3">
          <form>
            <div className="row">
              <div className="mb-3 col-sm-12 col-md-4 col-lg-4">
                <SettingsSelect
                  selectId="foodMenuType"
                  labelFor="foodMenuType"
                  labelText="Food Menu Type"
                  options={[
                    { value: "regular", label: "Regular" },
                    { value: "combo", label: "Combo" },
                    { value: "product", label: "Product" },
                  ]}
                  required
                  tooltip
                  onChange={handleMenuType}
                />
              </div>
            </div>

            <div className="row">
              <div className="mb-3 col-sm-12 col-md-4 col-lg-4">
                <SettingsInput
                  name="name"
                  inputId="name"
                  labelFor="name"
                  labelText="Name"
                  placeholder="Name"
                  required
                  type="text"
                />
              </div>

              <div className="mb-3 col-sm-12 col-md-4 col-lg-4">
                <SettingsInput
                  name="code"
                  inputId="code"
                  labelFor="code"
                  labelText="Code"
                  placeholder="Code"
                  required
                  type="text"
                />
              </div>

              <div className="mb-3 col-sm-12 col-md-4 col-lg-4">
                <SettingsSelect
                  selectId="category"
                  labelFor="category"
                  labelText="Category"
                  required
                />
              </div>
            </div>

            {/* Inputs for regular and combo */}
            {menuType !== "product" && (
              <div className="row">
                <div className="mb-3 col-sm-12 col-md-4 col-lg-4">
                  {menuType === "regular" ? (
                    <SettingsSelect
                      selectId="ingredientsConsumption"
                      labelFor="ingredientsConsumption"
                      labelText="Ingredients Consumption"
                      options={[
                        { value: "Paneer", label: "Paneer" },
                        { value: "Cheese", label: "Cheese" },
                        {
                          value: "Boneless Chicken",
                          label: "Boneless Chicken",
                        },
                      ]}
                      // onChange={(value) =>
                      //   handleIngredientChange(value, "ingredient")
                      // }
                      onChange={(option) => changeIngredient(option)}
                    />
                  ) : (
                    <SettingsSelect
                      selectId="foodMenu"
                      labelFor="foodMenu"
                      labelText="Food Menu"
                      options={[
                        { value: "Pepsi", label: "Pepsi" },
                        { value: "Butter Chicken", label: "Butter Chicken" },
                        {
                          value: "Cheese Roti",
                          label: "Cheese Roti",
                        },
                      ]}
                      // onChange={(value) =>
                      //   handleIngredientChange(value, "ingredient")
                      // }
                      onChange={changeFoodMenu}
                    />
                  )}
                </div>

                <div className="mb-3 col-sm-12 col-md-2 col-lg-2 d-flex align-items-end">
                  <Settings_Button type="button" btnTxt="Read Me First" />
                </div>
              </div>
            )}

            {/* Table only for Regular */}
            {menuType === "regular" && (
              <div className="row my-5">
                <DataTable columns={regularColumns} data={regularData} />
                {/* Add an input for total */}
              </div>
            )}

            {/* Table only for Combo */}
            {menuType === "combo" && (
              <div className="row">
                <DataTable columns={comboColumns} data={comboData} />
              </div>
            )}

            {/* Inputs only for products */}
            {menuType === "product" && (
              <div className="row">
                <div className="mb-3 col-sm-12 col-md-4 col-lg-4">
                  <SettingsInput
                    inputId="purchasePrice"
                    labelFor="purchasePrice"
                    labelText="Purchase Price"
                    name="purchasePrice"
                    placeholder="Purchase Price"
                    required
                    tooltip
                    type="text"
                  />
                </div>

                <div className="mb-3 col-sm-12 col-md-4 col-lg-4">
                  <SettingsInput
                    inputId="lowQuantity"
                    labelFor="lowQuantity"
                    labelText="Low Quantity"
                    name="lowQuantity"
                    placeholder="Low Quantity"
                    required
                    tooltip
                    type="text"
                  />
                </div>

                <div className="mb-3 col-sm-12 col-md-4 col-lg-4">
                  <SettingsSelect
                    selectId="ingredientCategory"
                    labelFor="ingredientCategory"
                    labelText="Ingredient Category"
                    required
                    tooltip
                    options={[
                      { value: "Vegetable", label: "Vegetable" },
                      { value: "Fish", label: "Fish" },
                    ]}
                  />
                </div>
              </div>
            )}

            {/* SALES Row */}
            <div className="row">
              <div className="mb-3 col-sm-12 col-md-4 col-lg-4">
                <SettingsInput
                  inputId="dineIn"
                  labelFor="dineIn"
                  labelText="Sale Price (Dine In)"
                  placeholder="Sale Price (Dine In)"
                  name="dineIn"
                  required
                  type="text"
                />
              </div>

              <div className="mb-3 col-sm-12 col-md-4 col-lg-4">
                <SettingsInput
                  inputId="takeAway"
                  labelFor="takeAway"
                  labelText="Sale Price (Take Away)"
                  placeholder="Sale Price (Take Away)"
                  name="takeAway"
                  required
                  type="text"
                />
              </div>

              <div className="mb-3 col-sm-12 col-md-4 col-lg-4">
                <label htmlFor="deliveryPartners" className="form-label">
                  Sale Price (Delivery) *
                </label>

                <table>
                  <tbody>
                    <tr>
                      <td>
                        <label className="form-label" htmlFor="timHortons">
                          Tim Hortons
                        </label>
                      </td>
                      <td>
                        <input
                          id="timHortons"
                          className="form-control"
                          type="text"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label className="form-label" htmlFor="doorDash">
                          Door Dash
                        </label>
                      </td>
                      <td>
                        <input
                          id="doorDash"
                          className="form-control"
                          type="text"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label className="form-label" htmlFor="grubhub">
                          Grubhub
                        </label>
                      </td>
                      <td>
                        <input
                          id="grubhub"
                          className="form-control"
                          type="text"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label className="form-label" htmlFor="uberEats">
                          Uber Eats
                        </label>
                      </td>
                      <td>
                        <input
                          id="uberEats"
                          className="form-control"
                          type="text"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label className="form-label" htmlFor="pathao">
                          Pathao Food Riders
                        </label>
                      </td>
                      <td>
                        <input
                          id="pathao"
                          className="form-control"
                          type="text"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Description and photo row */}
            <div className="row">
              <div className="mb-3 col-sm-12 col-md-4 col-lg-4">
                <SettingsInput
                  inputId="description"
                  labelFor="description"
                  labelText="Description"
                  name="description"
                  placeholder="Description"
                  type="text"
                />
              </div>

              <div className="mb-3 col-sm-12 col-md-4 col-lg-4">
                <SettingsInput
                  inputId="photo"
                  labelFor="photo"
                  labelText="Photo( Height must be 102px and Width must be 235px)"
                  name="photo"
                  type="file"
                />
              </div>

              <div className="mb-3 col-sm-12 col-md-4 col-lg-4"></div>
            </div>

            {/* Veg item and beverage row */}
            <div className="row">
              <div className="mb-3 col-sm-12 col-md-4 col-lg-4">
                <SettingsSelect
                  selectId="vegItem"
                  labelFor="vegItem"
                  labelText="Is it Veg Item?"
                  options={[
                    { value: "yes", label: "Yes" },
                    { value: "no", label: "No" },
                  ]}
                  required
                />
              </div>

              <div className="mb-3 col-sm-12 col-md-4 col-lg-4">
                <SettingsSelect
                  selectId="beverage"
                  labelFor="beverage"
                  labelText="Is it Beverage?"
                  options={[
                    { value: "yes", label: "Yes" },
                    { value: "no", label: "No" },
                  ]}
                  required
                />
              </div>

              <div className="mb-3 col-sm-12 col-md-4 col-lg-4"></div>
            </div>

            {/* GST Row */}
            <div className="row">
              <div className="mb-3 col-sm-12 col-md-4 col-lg-4">
                <SettingsInput
                  inputId="cgst"
                  labelFor="cgst"
                  labelText="CGST %"
                  name="cgst"
                  placeholder="CGST"
                  type="number"
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
                />
              </div>
            </div>

            {/* VAT row */}
            <div className="row">
              <div className="mb-3 col-sm-12 col-md-4 col-lg-4">
                <SettingsInput
                  inputId="vat"
                  labelFor="vat"
                  labelText="VAT %"
                  name="vat"
                  placeholder="VAT"
                  type="number"
                />
              </div>

              <div className="mb-3 col-sm-12 col-md-4 col-lg-4">
                <SettingsInput
                  inputId="loyaltyPts"
                  labelFor="loyaltyPts"
                  labelText="Loyalty Points"
                  name="loyaltyPts"
                  placeholder="Loyalty Points"
                  type="number"
                />
              </div>
            </div>

            {/* Buttons Row */}
            <div className="row">
              <div className="mb-3 col-sm-12 col-md-2 col-lg-2">
                <Settings_Button type="Submit" btnTxt="Submit" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Add_Food_Menu;
