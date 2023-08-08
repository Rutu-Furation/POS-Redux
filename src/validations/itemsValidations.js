import * as yup from "yup";

const addIngredientUnit_Schema = yup.object().shape({
  ingredientUnit_name: yup
    .string()
    .min(3, "Unit Name Must Be Atleast 3 Characters")
    .required("Ingredient Unit Name is Required"),
});

const addIngredientCategory_schema = yup.object().shape({
  ingredientCategory_name: yup
    .string()
    .min(3, "Category Name Must Be Atleast 3 Characters")
    .required("Category Name is Required"),
});

const addIngredient_schema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Ingredient Name Must Be Atleast 3 Characters")
    .required("Ingredient Name is Required"),
  code: yup
    .string()
    .min(3, "Minimun 3 characters required")
    .required("Code is Required"),
  category: yup.string().required("Select a Category"),
  PurchaseUnit: yup.string().required("Select a Purchase Unit"),
  ConsumptionUnit: yup.string().required("Select a Consumption Unit"),
  ConversionRate: yup.number().required("Conversion Rate is Required"),
  PurchaseRate: yup.number().required("Purchase Rate is Required"),
  costUnit: yup.number().required("Cost Per Unit is Required"),
  LowQty: yup.number().required("Quantity is Required"),
});

const addModifier_schema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Category Name Must Be Atleast 3 Characters")
    .required(" Name is Required"),
  price: yup
    .string()
    .min(1, "price should be more then 00")

    .required("Price is Required"),
 

  //select ingredients is pending
});
//select ingredients is pending
const addFoodMenu_schema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Category Name Must Be Atleast 3 Characters")
    .required("Category Name is Required"),

  code: yup
    .string()
    .min(3, "Code Must Be Atleast 3 Characters")

    .required("Code Is Required"),
  food_category: yup.string().required("Select a Category"),

  ingredients: yup.string().required("Select a Category"),

  isBeverage: yup.string().required("Select a Option"),
  isVeg: yup.string().required("Select a Option"),

  //PENDING......
});

const addFoodMenuCategory_schema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Atleast 3 Characters Are Required")
    .required("Category Name is Required"),
});

// .........Outlet.....
const addOutLet_schema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Atleast 3 Characters Are Required")
    .required("Category Name is Required"),
  code: yup
    .string()
    .min(3, "Atleast 3 Characters Are Required")
    .required("Code is Required"),
  number: yup
    .string()
    .min(10, "Atleast 10 Characters Are Required")
    .required("Phone Number is Required"),
  email: yup
    .string()

    .required("Email is Required"),
  address: yup
    .string()
    .min(2, "Atleast 3 Characters Are Required")
    .required("address is Required"),
  status: yup
    .string()
    .min(2, "Atleast 2 Characters Are Required")
    .required("status is Required"),
});
// ........

// ........ Settings.....
const addTable_schema = yup.object().shape({
  area_id: yup.string().required("Select a Option"),
  name: yup
    .string()
    .min(3, "Atleast 3 Characters Are Required")
    .required("Table name is required"),
  sit_capacity: yup
    .string()

    .required("sit capacity is required"),
  position: yup
    .string()
    .min(3, "Atleast 3 Characters Are Required")
    .required("position is required"),
});

const addArea_schema = yup.object().shape({
  outlet_id: yup
    .string()
    //select ingredients is pending
    .required("Select Outlet"),
  area_name: yup
    .string()
    .min(3, "Atleast 3 Characters Are Required")
    .required("Area  is required"),
});

export {
  addIngredientUnit_Schema,
  addIngredientCategory_schema,
  addIngredient_schema,
  addFoodMenuCategory_schema,
  addModifier_schema,
  addFoodMenu_schema,
  addOutLet_schema,
  addArea_schema,
  addTable_schema,
};
