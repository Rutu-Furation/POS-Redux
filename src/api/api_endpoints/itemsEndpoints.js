// ingredients endpoints
const ingredientsEndpoints = {
  getAllIngredients: "/setting/ingredient/list",
  getIngredientById: (id) => `/setting/ingredient/${id}`,
  addIngredient: "/setting/ingredient/new",
  updateIngredient: (id) => `/setting/ingredients/update/${id}`,
  deleteIngredient: (id) => `/setting/ingredient/delete/${id}`,
};

const ingredientUnitsEndpoints = {
  getAllIngredientUnits: `/setting/ingredientUnit/list`,
  getIngredientById: (id) => `/setting/ingredientUnit/${id}`,
  addIngredientUnit: `/setting/ingredientUnit/new`,
  updateIngredientUnit: (id) => `/setting/ingredientUnit/update/${id}`,
  deleteIngredientUnit: (id) => `/setting/ingredientUnit/delete/${id}`,
};

const ingredientCategoryEndpoints = {
  getAllIngredientCategories: `/setting/ingredientCategory/list`,
  getIngredientCategoryById: (id) => `/setting/ingredientCategory/${id}`,
  addIngredientCategory: `/setting/ingredientCategory/new`,
  updateIngredientCategory: (id) => `/setting/ingredientCategory/update/${id}`,
  deleteIngredientCategory: (id) => `/setting/ingredientCategory/delete/${id}`,
};

// Food Menu related apis start
const regularFoodMenuEndpoints = {
  getRegularFoodMenu: `/setting/foodMenu/list`,
  addRegularFoodMenu: `/setting/foodMenu/new`,
  updateRegularFoodMenu: (id) => `/setting/foodMenu/update/${id}`,
  deleteRegularFoodMeny: (id) => `/setting/foodMenu/delete/${id}`,
  getRegularFoodMenuById: (id) => `/setting/foodMenu/${id}`,
};

const comboFoodMenuEndpoints = {
  getComboFoodMenu: `/setting/foodCombo/list`,
  getComboFoodMenuById: (id) => `/setting/foodCombo/${id}`,
  addComboFoodMenu: `/setting/foodCombo/new`,
  updateComboFoodMenu: (id) => `/setting/foodCombo/update/${id}`,
  deleteComboFoodMeny: (id) => `/setting/foodCombo/delete/${id}`,
};

const productFoodMenuEndpoints = {
  getProductFoodMenu: `/setting/foodProduct/list`,
  getProductFoodMenuById: (id) => `/setting/foodProduct/${id}`,
  addProductFoodMenu: `/setting/foodProduct/new`,
  updateProductFoodMenu: (id) => `/setting/foodProduct/update/${id}`,
  deleteProductFoodMeny: (id) => `/setting/foodProduct/delete/${id}`,
};

const FoodMenuCategoryEndpoints = {
  getFoodMenuCategory: `/setting/foodCategory/list`,
  addFoodMenuCategory: `/setting/foodCategory/new`,
  updateFoodMenuCategory: (id) => `/setting/foodCategory/update/${id}`,
  deleteFoodMenuCategory: (id) => `/setting/foodCategory/delete/${id}`,
  getFoodMenuCategoryById: (id) => `/setting/foodCategory/${id}`,
};

// Food Menu related apis end

const modifiersEndpoints = {
  getAllModifiers: `/setting/modifier/list`,
  getModifierById: (id) => `/setting/modifier/${id}`,
  addModifier: `/setting/modifier/new`,
  updateModifier: (id) => `/setting/modifier/update/${id}`,
  deleteModifier: (id) => `/setting/modifier/delete/${id}`,
};

const preMadeFoodEndpoints = {
  getAllPreMadeFood: `/setting/preFoodMade/list`,
  getPreMadeFoodById: (id) => `/setting/preMadeFood/${id}`,
  addPreMadeFood: `/setting/preFoodMade/new`,
  updatePreMadeFood: (id) => `/setting/preMadeFood/update/${id}`,

  deletePreMadeFood: (id) => `/setting/preMadeFood/delete/${id}`,

};

export {
  ingredientsEndpoints,
  ingredientCategoryEndpoints,
  ingredientUnitsEndpoints,
  regularFoodMenuEndpoints,
  comboFoodMenuEndpoints,
  productFoodMenuEndpoints,
  modifiersEndpoints,
  preMadeFoodEndpoints,
  FoodMenuCategoryEndpoints,
};
