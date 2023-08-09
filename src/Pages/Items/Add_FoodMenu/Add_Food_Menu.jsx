import React, { useContext, useEffect, useState } from "react";
import "../../../../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "./add_food_menu.css";
import { FoodContext } from "../../../context/FoodContext";

import {
  SettingsInput,
  callApi,
  toast,
  Settings_Button,
  Main_Layout,
  Toaster,
  SideBar,
  SettingsSelect,
  SideBar_Links,
  HeadNav,
} from "../../../components/index.js";
import useFormValidator from "../../../utils/formValidator.js";
import { addFoodMenu_schema } from "../../../validations/itemsValidations.js";
import { useDispatch, useSelector } from "react-redux";
import { getIngredients } from "../../../redux/Items/Ingredients/Ingredients.action";
import { GetFoodMenu } from "../../../redux/Items/FoodMenu/FoodMenu.actions";
import { getFoodMenuCategory } from "../../../redux/Items/FoodMenuCategory/FoodMenuCategory.actions";


const Add_Food_Menu = () => {

  const {isLoading} = useSelector((state) => state.foodMenu)
  const {IngredientsData} = useSelector((state) => state.Ingredient)//IngredientsData
  const {FoodMenuData} =useSelector((state) => state.foodMenu)
  const {FoodMenuCategoryData} = useSelector((state) => state.FoodMenuCategory)

  const dispatch = useDispatch()

  const [menuType, setMenuType] = useState("regular");
  const handleMenuType = (option) => {
    setMenuType(option.value);
  };

  // CONTEXT FOR FOOD
  const {
    foodCategories,
    ingredients,
    foodMenu,
    fetchFoodCategories,
    fetchFoodMenu,
    fetchIngredients,
  } = useContext(FoodContext);

  //STATE FOR INPUTS
  const [inputsData, setInputsData] = useState("");
  const [selectInputs, setSelectInputs] = useState("");
  const [vegBeverage, setVegBeverage] = useState("");

  const [foodCategoryOptions, setFoodCategoryOptions] = useState([])
  const [foodMenuOptions, setFoodMenuOptions] = useState([])
  const [ingredientOptions, setIngredientOptions] = useState([])

  // STATE FOR REGULAR TABLE
  const [rows, setRows] = useState([]);

  // STATE FOR COMBO TABLE
  const [comboData, setComboData] = useState([]);

  // STATE FOR VARIATION TABLE
  const [variationData, setVariationData] = useState([]);

  //STATE FOR MODAL INPUTS
  const [modalInputs, setModalInputs] = useState("");

  //STATE FOR MODAL DATA AND ADD TO VARIATION TABLE
  const [modalData, setModalData] = useState([]);

  // STATE FOR SETTING INGREDIENT CATEGORY IN PRODUCT OBJECT
  const [ingredientCategory, setIngredientCategory] = useState("");
  // STATE FOR DELIVERY PARTNERS
  const [deliveryPartners, setDeliveryPartners] = useState([]);
  const [deliveryPrices, setDeliveyPrices] = useState([]);
  const newFoodMenu = {
    ...inputsData,
    ...selectInputs,
  };
  const { errors, validateForm } = useFormValidator(
    newFoodMenu,
    addFoodMenu_schema
  );

  // FETCHING REQUIRED DATA
  useEffect(() => {
    callApi("GET", "/setting/deliveryPartner/list")
      .then((res) => setDeliveryPartners(res.deliveryPartners))
      .catch((err) => console.log(err));

    // fetchIngredients();
    // fetchFoodMenu();
    // fetchFoodCategories();
    dispatch(getIngredients())
    dispatch(GetFoodMenu())
    dispatch(getFoodMenuCategory())
    
  }, []);

  // INGREDIENT OPTIONS
  useEffect(() => {
    if(IngredientsData?.ingredient){
    const ingredientOptions = IngredientsData?.ingredient?.map((item) => ({
      value: item._id,
      label: item.name,
      costUnit: item.costUnit,
    }));
    setIngredientOptions(ingredientOptions)
  }
  },[IngredientsData])

  //STATE FOR FOOD MENU OPTIONS
  useEffect(() => {
    if(FoodMenuData?.foodMenu){
    const foodMenuOptions = FoodMenuData?.foodMenu?.map((item) => ({
      value: item._id,
      label: item.name,
    }));
    setFoodMenuOptions(foodMenuOptions)
  }
  },[FoodMenuData])

  //GETTING FOOD CATEGORIES OPTIONS
  useEffect(() => {
    if(FoodMenuCategoryData?.foodCategory){
    const foodCategoryOptions = FoodMenuCategoryData?.foodCategory?.map((item) => ({
      value: item._id,
      label: item.name,
    }));
    setFoodCategoryOptions(foodCategoryOptions)
  }
  },[FoodMenuCategoryData])

  const handleDeliveryPrices = (e) => {
    setDeliveyPrices([
      ...deliveryPrices,
      { deliveryPartnerName: e.target.name, price: e.target.value },
    ]);
  };
  console.log("delivery prices", deliveryPrices);

  // ADDING DATA TO COMBO TABLE
  const handleAddComboData = (option) => {
    const newRow = {
      sn: comboData.length + 1,
      foodMenu: option.value,
      foodMenuName: option.label,
      quantity: "",
      // costUnit: "",
      // total: "",
    };
    setComboData([...comboData, newRow]);
  };
  console.log("combodata", comboData);

  // HANDLING QUANTITY CHANGE IN COMBO TABLE
  const handleComboQuantityChange = (event, row) => {
    const newQuantity = event.target.value;
    const updatedRows = comboData.map((r) => {
      if (r.sn === row.sn) {
        return {
          ...r,
          quantity: newQuantity,
          // total: newConsumption * r.costUnit,
        };
      }
      return r;
    });
    setComboData(updatedRows);
  };
  // console.log(rows);

  // HANDLING CONSUMPTION VALUE CHANGE IN REGULAR TABLE
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
  // console.log(rows);

  // HANDLING COST UNIT VALUE CHANGE IN REGULAR TABLE
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
  console.log("regular data", rows);

  // ADD DATA TO THE REGULAR TABLE
  const handleAddRow = (option) => {
    const newRow = {
      sn: rows.length + 1,
      ingredientName: option.label,
      ingredient: option.value,
      consumption: "",
      costUnit: option.costUnit,
      total: "",
    };
    setRows([...rows, newRow]);
    setVariationData([...rows, newRow]);
  };
  // console.log(variationData);

  //ADD DATA TO VARIATION TABLE
  const handleAddVariationRow = (option) => {
    const newRow = {
      sn: variationData.length + 1,
      ingredient: option.value,
      ingredientName: option.label,
      consumption: "",
      costUnit: "",
      total: "",
    };
    setVariationData([...variationData, newRow]);
  };
  // console.log(variationData);

  //HANDLE VARIATION CONSUMPTION
  const handleVariationConsumption = (event, row) => {
    const newConsumption = event.target.value;
    const updatedRows = variationData.map((r) => {
      if (r.sn === row.sn) {
        return {
          ...r,
          consumption: newConsumption,
          total: newConsumption * r.costUnit,
        };
      }
      return r;
    });
    setVariationData(updatedRows);
  };
  // console.log("variation data", variationData);

  //HANDLE VARIATION COST UNIT
  const handleVariationCostUnit = (event, row) => {
    const newCostUnit = event.target.value;
    const updatedRows = variationData.map((r) => {
      if (r.sn === row.sn) {
        return {
          ...r,
          costUnit: newCostUnit,
          total: r.consumption * newCostUnit,
        };
      }
      return r;
    });
    setVariationData(updatedRows);
  };
  console.log("variation data", variationData);

  // HANDLING VARIATION MODAL DATA

  const handleModalInputs = (e) => {
    setModalInputs({ ...modalInputs, [e.target.name]: e.target.value });
  };
  // console.log(modalInputs);

  const submitModalInputs = () => {
    const newData = {
      sn: modalData.length + 1,
      variationName: modalInputs.variationName,
      variationCode: modalInputs.variationCode,
      variationDineIn: modalInputs.variationDineIn,
      variationTakeAway: modalInputs.variationTakeAway,
      delivery: [
        modalInputs.variationTimHortons,
        modalInputs.variationDoorDash,
        modalInputs.variationGrubhub,
        modalInputs.variationUberEats,
        modalInputs.variationPathao,
      ],
      variationLoyalty: modalInputs.variationLoyalty,
    };
    setModalData([...modalData, newData]);
  };

  //DELETING INGREDIENT DATA ROW
  const handleDelIngredientRow = (item) => {
    const filteredRows = rows.filter((row) => row.sn !== item.sn);
    setRows(filteredRows);
    // console.log(item);
  };

  //DELETING COMBO ROW
  const handleDelComboRow = (item) => {
    const filteredRows = comboData.filter((row) => row.sn !== item.sn);
    setComboData(filteredRows);
    // console.log(item);
  };

  //DELETING MODAL VARIATION TABLE ROW
  const handleVariationModalRow = (item) => {
    const filteredRows = variationData.filter((row) => row.sn !== item.sn);
    setVariationData(filteredRows);
    // console.log(item);
  };

  const deleteVariationTableRow = (item) => {
    const filteredRows = modalData.filter((row) => row.sn !== item.sn);
    setModalData(filteredRows);
    // console.log(item);
  };

  const handleCategoryChange = (value, key) => {
    setSelectInputs((prevState) => ({
      ...prevState,
      [key]: value.value,
    }));
  };

  console.log(selectInputs);

  const handleInputs = (e) => {
    setInputsData({
      ...inputsData,
      [e.target.name]: e.target.value,
    });
  };

  const finalComboObj = {
    name: inputsData.name,
    code: inputsData.code,
    food_category: selectInputs.food_category,
    food_menu: comboData.map(({ foodMenu, quantity }) => ({
      food_item: foodMenu,
      quantity,
    })),
    Dine_price: inputsData.Dine_price,
    Takeaway_price: inputsData.Takeaway_price,
    Delivery_price: deliveryPrices,
    description: inputsData.description,
    isVeg: selectInputs.isVeg,
    isBeverage: selectInputs.isBeverage,
    outlet: "64abae782789b782ecea8a17",
  };

  console.log("final combo", finalComboObj);

  const finalRegularObj = {
    name: inputsData.name,
    code: inputsData.code,
    food_category: selectInputs.food_category,
    ingredients: rows.map((item) => ({
      ingredient: item.ingredient,
      quantity: item.consumption,
    })),
    Dine_price: inputsData.Dine_price,
    Takeaway_price: inputsData.Takeaway_price,
    Delivery_price: deliveryPrices,
    description: inputsData.description,
    isVeg: selectInputs.isVeg,
    isBeverage: selectInputs.isBeverage,
    outlet: "64abae782789b782ecea8a17",
  };
  console.log(finalRegularObj);

  const finbalProductObj = {
    name: inputsData.name,
    code: inputsData.code,
    food_category: selectInputs.food_category,
    ingredients: rows.map((item) => ({
      ingredient: item.ingredient,
      quantity: item.consumption,
    })),
    Dine_price: inputsData.Dine_price,
    Takeaway_price: inputsData.Takeaway_price,
    Delivery_price: deliveryPrices,
    description: inputsData.description,
    isVeg: selectInputs.isVeg,
    isBeverage: selectInputs.isBeverage,
    outlet: "64abae782789b782ecea8a17",
  };
  console.log(finbalProductObj);

  const submitData = async () => {
    const validationErrors = validateForm();
    if (!validationErrors) {
      if (menuType === "regular") {
        try {
          const res = await callApi(
            "POST",
            "/setting/foodMenu/new",
            finalRegularObj
          );
          console.log(res);
          toast.success("Regular Food Menu added successfully");
        } catch (error) {
          console.error(error);
          toast.error("Failed to add Regular Food Menu");
        }
      } else if (menuType === "combo") {
        try {
          const res = await callApi(
            "POST",
            "/setting/foodCombo/new",
            finalComboObj
          );
          console.log(res);
          toast.success("Combo Food Menu added successfully");
        } catch (err) {
          console.log(err);
          toast.error("Failed to add Combo Food Menu");
        }

        // console.log(res);
        alert(res.message);
      } else if (menuType === "product") {
        const res = await callApi(
          "POST",
          "/setting/foodCombo/new",
          finbalProductObj
        );
        // console.log(res);
        alert(res.message);
      }
    }
  };
  console.log("errors", errors);
  return (
    <>
      <div className="d-flex">
        <SideBar />
        <div className="w-100">
          <HeadNav />
          <div className="d-flex">
            <SideBar_Links />
            <div className="w-100">
              <h5 className="headerName">Add Food Menu</h5>
              <form
                onSubmit={(e) => {
                  e.preventDefault();

                  submitData();
                }}
                className="p-3 w-100"
              >
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
                      onChange={handleInputs}
                      errorMsg={errors.name}
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
                      onChange={handleInputs}
                      errorMsg={errors.code}
                    />
                  </div>

                  <div className="mb-3 col-sm-12 col-md-4 col-lg-4">
                    <SettingsSelect
                      selectId="category"
                      labelFor="category"
                      labelText="Category"  
                      options={foodCategoryOptions}
                      required
                      onChange={(value) =>
                        handleCategoryChange(value, "food_category")
                      }
                      error={errors.food_category}
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
                          options={ingredientOptions}
                          onChange={(option) => handleAddRow(option)}
                          error={errors.ingredients}
                        />
                      ) : (
                        <SettingsSelect
                          selectId="foodMenu"
                          labelFor="foodMenu"
                          labelText="Food Menu"
                          options={foodMenuOptions}
                          onChange={handleAddComboData}
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
                    <table className="table w-100 variationTable">
                      <thead className="table-light">
                        <tr>
                          <th>SN</th>
                          <th>Ingredient</th>
                          <th>Consumption</th>
                          <th>Cost per Unit</th>
                          <th>Total</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {rows.map((row) => (
                          <tr key={row.sn}>
                            <td
                              className="align-middle"
                              style={{ width: "12%" }}
                            >
                              {row.sn}
                            </td>
                            <td
                              className="align-middle"
                              style={{ width: "20%" }}
                            >
                              {row.ingredientName}
                            </td>
                            <td style={{ width: "25%" }}>
                              <input
                                className="form-control"
                                type="number"
                                step="0.01"
                                value={row.consumption}
                                onChange={(e) =>
                                  handleConsumptionChange(e, row)
                                }
                                 
                              />
                            </td>
                            <td style={{ width: "25%" }}>
                              <input
                                className="form-control"
                                type="number"
                                step="0.01"
                                value={row.costUnit}
                                onChange={(e) => handleCostUnitChange(e, row)}
                              />
                            </td>
                            <td style={{ width: "25%" }}>
                              <input
                                className="form-control"
                                type="number"
                                value={row.total}
                                step="0.01"
                                readOnly
                                onChange={(e) => handleCostUnitChange(e, row)}
                              />
                            </td>
                            <td>
                              <i
                                className="bi bi-trash btn btn-danger"
                                onClick={() => handleDelIngredientRow(row)}
                              ></i>
                            </td>
                          </tr>
                        ))}
                        <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td className="align-middle">
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
                              value={rows.reduce(
                                (accumulator, currentValue) => {
                                  return accumulator + currentValue.total;
                                },
                                0
                              )}
                            />
                          </td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Table only for Combo */}
                {menuType === "combo" && (
                  <div className="row my-5">
                    <table className="table w-100 variationTable">
                      <thead>
                        <tr>
                          <th>SN</th>
                          <th>Food Menu</th>
                          <th>Quantity</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {comboData.map((row) => (
                          <tr key={row.sn}>
                            <td style={{ width: "12%" }}>{row.sn}</td>
                            <td style={{ width: "30%" }}>{row.foodMenuName}</td>
                            <td style={{ width: "30%" }}>
                              <input
                                className="form-control"
                                type="number"
                                value={row.consumption}
                                onChange={(e) =>
                                  handleComboQuantityChange(e, row)
                                }
                              />
                            </td>
                            <td style={{ width: "30%" }}>
                              <button
                                className="btn btn-danger"
                                type="button"
                                onClick={() => handleDelComboRow(row)}
                              >
                                <i className="bi bi-trash"></i>
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
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
                        onChange={() => setIngredientCategory(option.value)}
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
                      name="Dine_price"
                      required
                      type="text"
                      onChange={handleInputs}
                    />
                  </div>

                  <div className="mb-3 col-sm-12 col-md-4 col-lg-4">
                    <SettingsInput
                      inputId="takeAway"
                      labelFor="takeAway"
                      labelText="Sale Price (Take Away)"
                      placeholder="Sale Price (Take Away)"
                      name="Takeaway_price"
                      required
                      type="text"
                      onChange={handleInputs}
                    />
                  </div>

                  <div className="mb-3 col-sm-12 col-md-4 col-lg-4">
                    <label htmlFor="deliveryPartners" className="form-label">
                      Sale Price (Delivery) *
                    </label>

                    {/* DELIVERY INPUTS */}
                    <table>
                      <tbody>
                        {deliveryPartners.map((elem, index) => (
                          <tr key={index}>
                            <td>
                              <label
                                className="form-label"
                                htmlFor="timHortons"
                              >
                                {elem.DeliveryPartner_name}
                              </label>
                            </td>
                            <td>
                              <input
                                id="timHortons"
                                className="form-control"
                                type="number"
                                name={elem._id}
                                onChange={handleDeliveryPrices}
                              />
                            </td>
                          </tr>
                        ))}
                        {/* <tr>
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
                        </tr> */}
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
                      onChange={handleInputs}
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
                        { value: true, label: "Yes" },
                        { value: false, label: "No" },
                      ]}
                      required
                      onChange={(value) => handleCategoryChange(value, "isVeg")}
                      error={errors.isVeg}
                    />
                  </div>

                  <div className="mb-3 col-sm-12 col-md-4 col-lg-4">
                    <SettingsSelect
                      selectId="beverage"
                      labelFor="beverage"
                      labelText="Is it Beverage?"
                      options={[
                        { value: true, label: "Yes" },
                        { value: false, label: "No" },
                      ]}
                      required
                      onChange={(value) =>
                        handleCategoryChange(value, "isBeverage")
                      }
                      error={errors.isBeverage}
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
                      onChange={handleInputs}
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
                      onChange={handleInputs}
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
                      onChange={handleInputs}
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
                      onChange={handleInputs}
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
                      onChange={handleInputs}
                    />
                  </div>
                </div>

                {/* VARIATION TABLE ROW */}
                {menuType === "regular" && (
                  <div className="row">
                    <table className="table variationTable">
                      <thead>
                        <tr>
                          <th>SN</th>
                          <th>VARIATION NAME</th>
                          <th>CODE</th>
                          <th>SALE PRICE(DINE IN)</th>
                          <th>SALE PRICE(TAKE AWAY)</th>
                          <th>SALE PRICE (DELIVERY)</th>
                          <th>LOYALTY POINT</th>
                          <th>ACTIONS</th>
                        </tr>
                      </thead>
                      <tbody>
                        {modalData.map((item, index) => (
                          <tr key={index}>
                            <td>{item.sn}</td>
                            <td>{item.variationName}</td>
                            <td>{item.variationCode}</td>
                            <td>{item.variationDineIn}</td>
                            <td>{item.variationTakeAway}</td>
                            <td>
                              {item.delivery.map((item, index) => (
                                <span key={index}>{item},</span>
                              ))}
                            </td>
                            <td>{item.variationLoyalty}</td>
                            <td>
                              <button
                                type="button"
                                onClick={() => console.log(item)}
                              >
                                Edit
                              </button>
                              <i
                                className="bi bi-trash btn btn-danger"
                                onClick={() => deleteVariationTableRow(item)}
                              ></i>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Buttons Row */}
                {menuType === "regular" && (
                  <div className="row">
                    <div className="mb-3 col-sm-12 col-md-2 col-lg-2">
                      <Settings_Button
                        type="button"
                        btnTxt="Add Variation"
                        target="#variationModal"
                        toggle="modal"
                      />
                    </div>
                  </div>
                )}
                <div className="row">
                  <div className="mb-3 col-sm-12 col-md-2 col-lg-2">
                    <Settings_Button type="Submit" btnTxt="Submit" />
                  </div>
                </div>

                {/* VARIATION MODAL */}
                <div
                  className="modal fade"
                  id="variationModal"
                  tabIndex="-1"
                  aria-labelledby="variationModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                      {/* MODAL HEADER */}
                      <div className="modal-header">
                        <h1
                          className="modal-title fs-5"
                          id="variationModalLabel"
                        >
                          Add Variation
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        {/* VARIATION INPUTS */}
                        <div className="row">
                          <div className="mb-2 col-sm-12 col-md-6 col-lg-6">
                            <SettingsInput
                              inputId="variationName"
                              labelFor="variationName"
                              labelText="Variation Name"
                              name="variationName"
                              placeholder="Variation Name"
                              type="text"
                              onChange={handleModalInputs}
                              // required
                              tooltip
                            />
                          </div>

                          <div className="mb-2 col-sm-12 col-md-6 col-lg-6">
                            <SettingsInput
                              inputId="variationCode"
                              labelFor="variationCode"
                              labelText="Code"
                              name="variationCode"
                              placeholder="Code"
                              type="text"
                              onChange={handleModalInputs}
                              // required
                            />
                          </div>

                          <div className="mb-2 col-sm-12 col-md-6 col-lg-6">
                            <SettingsInput
                              inputId="variationDineIn"
                              labelFor="variationDineIn"
                              labelText="Sale Price (Dine In)"
                              name="variationDineIn"
                              placeholder="Sale Price (Dine In)"
                              type="text"
                              onChange={handleModalInputs}
                              // required
                            />
                          </div>

                          <div className="mb-2 col-sm-12 col-md-6 col-lg-6">
                            <SettingsInput
                              inputId="variationTakeAway"
                              labelFor="variationTakeAway"
                              labelText="Sale Price (Take Away)"
                              name="variationTakeAway"
                              placeholder="Sale Price (Take Away)"
                              type="text"
                              onChange={handleModalInputs}
                              // required
                            />
                          </div>
                        </div>

                        {/* VARIATION DELIVERY */}
                        <div className="row my-1">
                          <div className="col-6 align-middle">Tim Hortons</div>
                          <div className="col-6">
                            <SettingsInput
                              inputId="timHortons"
                              labelFor="timHortons"
                              name="variationTimHortons"
                              onChange={handleModalInputs}
                            />
                          </div>

                          <div className="col-6 align-middle">DoorDash</div>
                          <div className="col-6">
                            <SettingsInput
                              inputId="doorDash"
                              labelFor="doorDash"
                              name="variationDoorDash"
                              onChange={handleModalInputs}
                            />
                          </div>

                          <div className="col-6 align-middle">Grubhub</div>
                          <div className="col-6">
                            <SettingsInput
                              inputId="grubHub"
                              labelFor="grubHub"
                              name="variationGrubhub"
                              onChange={handleModalInputs}
                            />
                          </div>

                          <div className="col-6 align-middle">Uber Eats</div>
                          <div className="col-6">
                            <SettingsInput
                              inputId="userEats"
                              labelFor="uberEats"
                              name="variationUberEats"
                              onChange={handleModalInputs}
                            />
                          </div>

                          <div className="col-6 align-middle">
                            Pathao Food Riders
                          </div>
                          <div className="col-6">
                            <SettingsInput
                              inputId="pathao"
                              labelFor="pathao"
                              name="variationPathao"
                              onChange={handleModalInputs}
                            />
                          </div>
                        </div>

                        {/* VARIATION MODAL TABLE ROW */}
                        <div className="row">
                          <div className="col-12">
                            <SettingsSelect
                              labelText="Ingredients Consumption"
                              onChange={handleAddVariationRow}
                              selectId="variationIngredients"
                              labelFor="variationIngredients"
                              options={ingredientOptions}
                            />
                          </div>

                          {/* <div className="col-12"> */}
                          <table className="mt-2 table w-100 variationTable">
                            <thead>
                              <tr>
                                <th>SN</th>
                                <th>Ingredient</th>
                                <th>Consumption</th>
                                <th>Cost Per Unit</th>
                                <th>Total</th>
                                <th>Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              {variationData.map((row, index) => (
                                <tr key={index}>
                                  {/* <td>{index + 1}</td> */}
                                  <td>{row.sn}</td>
                                  <td>{row.ingredientName}</td>
                                  <td>
                                    <input
                                      name="variation_quantity"
                                      type="number"
                                      className="form-control"
                                      onChange={(e) =>
                                        handleVariationConsumption(e, row)
                                      }
                                    />
                                  </td>
                                  <td>
                                    <input
                                      name="variation_costUnit"
                                      type="number"
                                      className="form-control"
                                      onChange={(e) =>
                                        handleVariationCostUnit(e, row)
                                      }
                                    />
                                  </td>
                                  <td>
                                    <input
                                      name="variation_price"
                                      className="form-control"
                                      type="number"
                                      readOnly
                                      value={row.total}
                                    />
                                  </td>
                                  <td>
                                    <i
                                      className="bi bi-trash btn btn-danger"
                                      onClick={() =>
                                        handleVariationModalRow(row)
                                      }
                                    ></i>
                                  </td>
                                </tr>
                              ))}
                              <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>Total</td>
                                <td>
                                  <input
                                    className="form-control"
                                    type="number"
                                    step="0.01"
                                    value={variationData.reduce(
                                      (accumulator, currentValue) => {
                                        return accumulator + currentValue.total;
                                      },
                                      0
                                    )}
                                  />
                                </td>
                                <td></td>
                              </tr>
                            </tbody>
                          </table>
                          {/* </div> */}
                        </div>

                        {/* GST ROW */}
                        <div className="row">
                          <div className="col-sm-12 col-md-4 col-lg-4">
                            <SettingsInput
                              inputId="variationCgst"
                              labelFor="variationCgst"
                              labelText="CGST %"
                              name="variationCgst"
                              placeholder="CGST"
                              type="number"
                              onChange={handleModalInputs}
                            />
                          </div>

                          <div className="col-sm-12 col-md-4 col-lg-4">
                            <SettingsInput
                              inputId="variationSgst"
                              labelFor="variationSgst"
                              labelText="SGST %"
                              name="variationSgst"
                              placeholder="SGST"
                              type="number"
                              onChange={handleModalInputs}
                            />
                          </div>

                          <div className="col-sm-12 col-md-4 col-lg-4">
                            <SettingsInput
                              inputId="variationIgst"
                              labelFor="variationIgst"
                              labelText="IGST %"
                              name="variationIgst"
                              placeholder="IGST"
                              type="number"
                              onChange={handleModalInputs}
                            />
                          </div>
                        </div>

                        {/* VAT ROW */}
                        <div className="row">
                          <div className="col-sm-12 col-md-4 col-lg-4">
                            <SettingsInput
                              inputId="variationVat"
                              labelFor="variationVat"
                              labelText="VAT %"
                              name="variationVat"
                              placeholder="VAT"
                              type="number"
                              onChange={handleModalInputs}
                            />
                          </div>

                          <div className="col-sm-12 col-md-4 col-lg-4">
                            <SettingsInput
                              inputId="variationLoyalty"
                              labelFor="variationLoyalty"
                              labelText="Loyalty Points"
                              name="variationLoyalty"
                              placeholder="Loyalty Points"
                              type="number"
                              onChange={handleModalInputs}
                            />
                          </div>
                        </div>

                        <div className="row mt-2">
                          <div className="col-sm-12 col-md-2 col-lg-2">
                            <Settings_Button
                              btnTxt="Submit"
                              type="button"
                              onClick={submitModalInputs}
                              dismiss="modal"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default Add_Food_Menu;
