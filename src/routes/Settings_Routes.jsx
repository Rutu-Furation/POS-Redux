import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Settings from "../Pages/Settings/Pages/settings/Settings";
import WhiteLabel from "../Pages/Settings/Pages/White_Label/WhiteLabel";
import AddPrinter from "../Pages/Settings/Pages/Add_Printer/AddPrinter";
import ListPrinters from "../Pages/Settings/Pages/List_Printers/ListPrinters";
import InvoicePrinter from "../Pages/Settings/Pages/Invoice_Printer/InvoicePrinter";
import Bill_Printer_Setup from "../Pages/Settings/Pages/Bill_Printer_Setup/Bill_Printer_Setup";
import KOT_Printer_Setup from "../Pages/Settings/Pages/KOT_Printer_Setup/KOT_Printer_Setup";
import Add_Multiple_Currencies from "../Pages/Settings/Pages/Add_Multiple_Currencies/Add_Multiple_Currencies";
import List_Multiple_Currencies from "../Pages/Settings/Pages/List_Multiple_Currencies/List_Multiple_Currencies";
import Software_Update from "../Pages/Settings/Pages/Software_Update/Software_Update";
import License_Uninstall from "../Pages/Settings/Pages/License_Uninstall/License_Uninstall";
import Self_Order from "../Pages/Settings/Pages/Self_Order/Self_Order";
import Online_Order_Setting from "../Pages/Settings/Pages/Online_Order/Online_Order_Setting";
import Reservation_Settings from "../Pages/Settings/Pages/Reservation_Settings/Reservation_Settings";
import Add_Payment_Method from "../Pages/Settings/Pages/Add_Payment_Method/Add_Payment_Method";
import List_Payment_Methods from "../Pages/Settings/Pages/List_Payment_Methods/List_Payment_Methods";
import Add_Denomination from "../Pages/Settings/Pages/Add_Denomination/Add_Denomination";
import List_Denomination from "../Pages/Settings/Pages/List_Denomination/List_Denomination";
import Add_Delivery_Partner from "../Pages/Settings/Pages/Add_Delivery_Partner/Add_Delivery_Partner";
import List_Delivery_Partners from "../Pages/Settings/Pages/List_Delivery_Partners/List_Delivery_Partners";
import Add_Area_Floor from "../Pages/Settings/Pages/Add_Area_Floor/Add_Area_Floor";
import LIst_Area_Floor from "../Pages/Settings/Pages/List_Area_Floor/LIst_Area_Floor";
import Add_Table from "../Pages/Settings/Pages/Add_Table/Add_Table";
import List_Tables from "../Pages/Settings/Pages/List_Tables/List_Tables";

const Settings_Routes = () => {
  return (
    <Routes>
      <Route exact path="/settings/basic" element={<Settings />} />

      <Route exact path="/settings/whiteLabel" element={<WhiteLabel />} />

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

      <Route path="/settings/softwareUpdate" element={<Software_Update />} />

      <Route
        path="/settings/licenseUninstall"
        element={<License_Uninstall />}
      />

      <Route path="/settings/selfOrder" element={<Self_Order />} />

      <Route path="/settings/onlineOrder" element={<Online_Order_Setting />} />

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

      <Route path="/settings/addDenomination" element={<Add_Denomination />} />

      <Route
        path="/settings/addDeliveryPartner"
        element={<Add_Delivery_Partner />}
      />

      <Route
        path="/settings/listDeliveryPartners"
        element={<List_Delivery_Partners />}
      />

      <Route path="/settings/addAreaFloor" element={<Add_Area_Floor />} />

      <Route path="/settings/listAreaFloor" element={<LIst_Area_Floor />} />

      <Route path="/settings/addTable" element={<Add_Table />} />

      <Route path="/settings/listTables" element={<List_Tables />} />
    </Routes>
  );
};

export default Settings_Routes;
