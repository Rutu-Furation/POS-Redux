import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Login,
  Settings, 
  WhiteLabel,
  AddPrinter,
  ListPrinters,
  InvoicePrinter,
  Bill_Printer_Setup,
  KOT_Printer_Setup,
  Add_Multiple_Currencies,
  List_Multiple_Currencies,
  Software_Update,
  License_Uninstall,
  Self_Order,
  Online_Order_Setting,
  Reservation_Settings,
  Add_Payment_Method,
  List_Payment_Methods,
  List_Denomination,
  Add_Denomination,
  Add_Delivery_Partner,
  List_Delivery_Partners,
  Add_Area_Floor,
  List_Area_Floor,
  Add_Table,
  List_Tables,
  Companies,
  Outlets,
  Signup,
  Add_Ingredients,
  Add_Ingredient_Unit,
  POS,
  Add_Modifier,
  Add_FoodMenu_Category,
  Add_PreMade_Food,
  Add_Food_Menu,
  Add_Ingredient_Category,
  AddKitchen,
  Tables,
  Add_Outlet,
  List_Outlets,
  List_Ingredient_Category,
  List_Modifier,
  List_Food_Menu_Category,
  List_Food_Menu,
  List_Pre_Made_Food,
  List_Ingredients,
  List_Ingredients_Unit,
  List_Kitchen,
} from "./route_index";

import { AuthContextProvider } from "../context/AuthContext";
import { FoodContextProvider } from "../context/FoodContext";
import { LinksContext_Provider } from "../context/LinksContext";
import { OrderContext_Provider } from "../context/OrderContext";
import Home from "../Pages/Home";

const All_Routes = () => {
  return (
    <>
      <Router>
        <LinksContext_Provider>
          <AuthContextProvider>
            <OrderContext_Provider>
              <FoodContextProvider>
                <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route exact path="/login" element={<Login />} />
                  <Route exact path="/signUp" element={<Signup />} />

                  <Route exact path="/companies" element={<Companies />} />
                  <Route exact path="/outlets" element={<Outlets />} />

                  {/* Settings paths */}
                  <Route exact path="/settings/basic" element={<Settings />} />

                  <Route
                    exact
                    path="/settings/whiteLabel"
                    element={<WhiteLabel />}
                  />

                  <Route
                    exact
                    path="/settings/printer/addPrinter"
                    element={<AddPrinter />}
                  />
                  <Route
                    exact
                    path="/settings/printer/listPrinters"
                    element={<ListPrinters />}
                  />
                  <Route
                    path="/settings/printer/invoicePrinter"
                    element={<InvoicePrinter />}
                  />
                  <Route
                    path="/settings/printer/billPrinterSetup"
                    element={<Bill_Printer_Setup />}
                  />
                  <Route
                    path="/settings/printer/kotPrinterSetup"
                    element={<KOT_Printer_Setup />}
                  />
                  <Route
                    path="/settings/addMultipleCurrencies"
                    element={<Add_Multiple_Currencies />}
                  />

                  <Route
                    path="/settings/listMultipleCurrencies"
                    element={<List_Multiple_Currencies />}
                  />

                  <Route
                    path="/settings/softwareUpdate"
                    element={<Software_Update />}
                  />

                  <Route
                    path="/settings/licenseUninstall"
                    element={<License_Uninstall />}
                  />

                  <Route path="/settings/selfOrder" element={<Self_Order />} />

                  <Route
                    path="/settings/onlineOrder"
                    element={<Online_Order_Setting />}
                  />

                  <Route
                    path="/settings/reservationSettings"
                    element={<Reservation_Settings />}
                  />

                  <Route
                    path="/settings/addPaymentMethod"
                    element={<Add_Payment_Method />}
                  />

                  <Route
                    path="/settings/listPaymentMethods"
                    element={<List_Payment_Methods />}
                  />

                  <Route
                    path="/settings/listDenomination"
                    element={<List_Denomination />}
                  />

                  <Route
                    path="/settings/addDenomination"
                    element={<Add_Denomination />}
                  />

                  <Route
                    path="/settings/addDeliveryPartner"
                    element={<Add_Delivery_Partner />}
                  />

                  <Route
                    path="/settings/listDeliveryPartners"
                    element={<List_Delivery_Partners />}
                  />

                  <Route
                    path="/settings/addAreaFloor"
                    element={<Add_Area_Floor />}
                  />

                  <Route
                    path="/settings/listAreaFloor"
                    element={<List_Area_Floor />}
                  />

                  <Route path="/settings/addTable" element={<Add_Table />} />

                  <Route
                    path="/settings/listTables"
                    element={<List_Tables />}
                  />

                  {/* Settings paths end */}

                  {/* Items paths start */}
                  <Route
                    path="/items/addIngredient"
                    element={<Add_Ingredients />}
                  />
                  <Route
                    path="/items/listIngredients"
                    element={<List_Ingredients />}
                  />
                  <Route
                    path="/items/listIngredientUnit"
                    element={<List_Ingredients_Unit />}
                  />
                  <Route path="/items/modifier" element={<List_Modifier />} />
                  <Route
                    path="/items/foodmenu/category"
                    element={<List_Food_Menu_Category />}
                  />

                  <Route
                    path="/items/listFoodMenu"
                    element={<List_Food_Menu />}
                  />

                  <Route path="/items/foodMenu" element={<Add_Food_Menu />} />
                  {/* ADD LIST FOOD MENU ROUTE */}

                  <Route
                    path="/items/addIngredientUnit"
                    element={<Add_Ingredient_Unit />}
                  />

                  <Route path="/items/addModifier" element={<Add_Modifier />} />

                  <Route
                    path="/items/addFoodMenuCategory"
                    element={<Add_FoodMenu_Category />}
                  />

                  <Route
                    path="/items/addPreMadeFood"
                    element={<Add_PreMade_Food />}
                  />
                  {/* ADD LIST PRE MADE FOOD ROUTE */}

                  <Route
                    path="/items/addIngredientCategory"
                    element={<Add_Ingredient_Category />}
                  />
                  <Route
                    path="/items/listPreMadeFood"
                    element={<List_Pre_Made_Food />}
                  />
                  <Route
                    path="/items/listIngredientCategory"
                    element={<List_Ingredient_Category />}
                  />

                  {/* Items path end */}

                  {/* Panels Path start */}

                  <Route path="/panel/pos" element={<POS />} />

                  <Route path="/panel/addKitchen" element={<AddKitchen />} />
                  <Route path="/panel/listKitchen" element={<List_Kitchen />} />

                  {/* CREATE LIST KITCHEN ROUTE */}
                  <Route path="/panel/tables" element={<Tables />} />

                  {/* Panels Paths end */}

                  {/* Outlet Paths start */}
                  <Route path="/outlet/addOutlet" element={<Add_Outlet />} />
                  <Route
                    path="/outlet/listOutlets"
                    element={<List_Outlets />}
                  />
                  {/* Outlet Paths end */}
                </Routes>
              </FoodContextProvider>
            </OrderContext_Provider>
          </AuthContextProvider>
        </LinksContext_Provider>
      </Router>
    </>
  );
};

export default All_Routes;
