// import React, { useContext, useEffect, useState } from "react";
// import { LinksContext } from "../../context/LinksContext";
// import { NavLink, useLocation } from "react-router-dom";

// const SideBar_Links = () => {
//   const { links } = useContext(LinksContext);

//   const location = useLocation();

//   const settingLinks = [
//     { name: "Basics", path: "/settings/basic" },
//     { name: "White Label", path: "/settings/whiteLabel" },
//     { name: "Tax Settings", path: "/settings/basic" },
//     {
//       name: "Add Multiple Currencies",
//       path: "/settings/addMultipleCurrencies",
//     },
//     {
//       name: "List Multiple Currencies",
//       path: "/settings/listMultipleCurrencies",
//     },
//     { name: "License Uninstall", path: "/settings/basic" },
//     { name: "Self Order Setting", path: "/settings/selfOrder" },
//     { name: "Online Order Setting", path: "/settings/onlineOrder" },
//     { name: "Reservation Setting", path: "/settings/reservationSettings" },
//     { name: "Add Payment Method", path: "/settings/addPaymentMethod" },
//     { name: "List Payment Methods", path: "/settings/listPaymentMethods" },
//     { name: "Add Denomination", path: "/settings/addDenomination" },
//     { name: "Add Delivery Partner", path: "/settings/addDeliveryPartner" },
//     { name: "List Delivery Partner", path: "/settings/listDeliveryPartners" },
//     { name: "Add Area/Floor", path: "/settings/addAreaFloor" },
//     { name: "List Area/Floor", path: "/settings/listAreaFloor" },
//     { name: "Add Table", path: "/settings/addTable" },
//     { name: "List Table", path: "/settings/listTables" },
//   ];

//   const itemsLinks = [
//     { name: "Add Ingredient Unit", path: "/items/addIngredientUnit" },
//     { name: "List Ingredient Unit", path: "/items/listIngredientUnit" },
//     { name: "Add Ingredient Category", path: "/items/addIngredientCategory" },
//     { name: "List Ingredient Category", path: "/items/listIngredientCategory" }, //change later
//     { name: "Add Ingredient", path: "/items/addIngredient" },
//     { name: "List Ingredients", path: "/items/listIngredients" },
//     { name: "Add Modifier", path: "/items/addModifier" },

//     { name: "List Modifier", path: "/items/modifier" },
//     { name: "Add Food Menu Category", path: "/items/addFoodMenuCategory" },
//     { name: "List Food Menu Category", path: "/items/foodmenu/category" }, //change later

//     { name: "Add Food Menu", path: "/items/foodMenu" },
//     { name: "List Food Menu", path: "/items/listFoodMenu" },
//     { name: "Add Pre-Made Food", path: "/items/addPreMadeFood" },
//     { name: "List Pre-Made Food", path: "/items/listPreMadeFood" },
//   ];

//   const panelLinks = [
//     { name: "POS", path: "/panel/tables" },
//     { name: "Add Kitchen", path: "/panel/addKitchen" },
//     { name: "List Kitchen", path: "/panel/listKitchen" },
//     { name: "Waiter", path: "/panel/waiter" },
//   ];

//   const outletLinks = [
//     { name: "Add Outlet", path: "/outlet/addOutlet" },
//     { name: "List Outlet", path: "/outlet/listOutlets" },
//   ];

//   return (
//     <>
//       <div
//         style={{ width: "250px", height: "100vh" }}
//         className="position-sticky sideLinks_container top-0"
//       >
//         <div className="sideBarOptionsDiv w-100">
//           {links === "settingsLinks" ? (
//             <div className="d-flex flex-column sideBarOptions w-100">
//               {settingLinks.map((link, index) => {
//                 if (index === 2) {
//                   return (
//                     <div className="py-2 px-1 sideLink" key={index}>
//                       <p className="p-0 m-0">Printer</p>
//                     </div>
//                   );
//                 } else {
//                   return (
//                     <div
//                       className={`sideLink text-decoration-none py-2 ${
//                         location.pathname === link.path ? "isActiveDiv" : ""
//                       }`}
//                       key={index}
//                     >
//                       <NavLink
//                         className={`text-decoration-none sideLink ${
//                           location.pathname === link.path ? "isActiveLink" : ""
//                         }`}
//                         style={{ fontSize: "14px" }}
//                         to={link.path}
//                       >
//                         {link.name}
//                       </NavLink>
//                     </div>
//                   );
//                 }
//               })}
//             </div>
//           ) : links === "purchaseLinks" ? (
//             <div>These are purchase links</div>
//           ) : links === "attendanceLinks" ? (
//             <div>THese are attendance links</div>
//           ) : links === "homeLinks" ? (
//             "Home Links"
//           ) : links === "itemsLinks" ? (
//             <>
//               {itemsLinks.map((link, index) => (
//                 <div className="py-2 px-1" key={index}>
//                   <NavLink
//                     className="text-decoration-none sideLink"
//                     style={{ fontSize: "14px" }}
//                     to={link.path}
//                   >
//                     {link.name}
//                   </NavLink>
//                 </div>
//               ))}
//             </>
//           ) : links === "panelLinks" ? (
//             <>
//               {panelLinks.map((link, index) => (
//                 <div className="py-2 px-1" key={index}>
//                   <NavLink
//                     className="text-decoration-none sideLink"
//                     style={{ fontSize: "14px" }}
//                     to={link.path}
//                   >
//                     {link.name}
//                   </NavLink>
//                 </div>
//               ))}
//             </>
//           ) : links === "outletLinks" ? (
//             <>
//               {outletLinks.map((link, index) => (
//                 <div className="py-2 px-1" key={index}>
//                   <NavLink
//                     className="text-decoration-none sideLink"
//                     style={{ fontSize: "14px" }}
//                     to={link.path}
//                   >
//                     {link.name}
//                   </NavLink>
//                 </div>
//               ))}
//             </>
//           ) : (
//             "Nothing"
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default SideBar_Links;

import React, { useContext } from "react";
import { LinksContext } from "../../context/LinksContext";
import { NavLink, useLocation } from "react-router-dom";

const SideBar_Links = () => {
  const { links } = useContext(LinksContext);
  const location = useLocation();

  const settingLinks = [
    { name: "Basics", path: "/settings/basic" },
    { name: "White Label", path: "/settings/whiteLabel" },
    { name: "Tax Settings", path: "/settings/basic" },
    {
      name: "Add Multiple Currencies",
      path: "/settings/addMultipleCurrencies",
    },
    {
      name: "List Multiple Currencies",
      path: "/settings/listMultipleCurrencies",
    },
    { name: "License Uninstall", path: "/settings/basic" },
    { name: "Self Order Setting", path: "/settings/selfOrder" },
    { name: "Online Order Setting", path: "/settings/onlineOrder" },
    { name: "Reservation Setting", path: "/settings/reservationSettings" },
    { name: "Add Payment Method", path: "/settings/addPaymentMethod" },
    { name: "List Payment Methods", path: "/settings/listPaymentMethods" },
    { name: "Add Denomination", path: "/settings/addDenomination" },
    { name: "Add Delivery Partner", path: "/settings/addDeliveryPartner" },
    { name: "List Delivery Partner", path: "/settings/listDeliveryPartners" },
    { name: "Add Area/Floor", path: "/settings/addAreaFloor" },
    { name: "List Area/Floor", path: "/settings/listAreaFloor" },
    { name: "Add Table", path: "/settings/addTable" },
    { name: "List Table", path: "/settings/listTables" },
  ];

  const itemsLinks = [
    { name: "Add Ingredient Unit", path: "/items/addIngredientUnit" },
    { name: "List Ingredient Unit", path: "/items/listIngredientUnit" },
    { name: "Add Ingredient Category", path: "/items/addIngredientCategory" },
    { name: "List Ingredient Category", path: "/items/listIngredientCategory" }, //change later
    { name: "Add Ingredient", path: "/items/addIngredient" },
    { name: "List Ingredients", path: "/items/listIngredients" },
    { name: "Add Modifier", path: "/items/addModifier" },

    { name: "List Modifier", path: "/items/modifier" },
    { name: "Add Food Menu Category", path: "/items/addFoodMenuCategory" },
    { name: "List Food Menu Category", path: "/items/foodmenu/category" }, //change later

    { name: "Add Food Menu", path: "/items/foodMenu" },
    { name: "List Food Menu", path: "/items/listFoodMenu" },
    { name: "Add Pre-Made Food", path: "/items/addPreMadeFood" },
    { name: "List Pre-Made Food", path: "/items/listPreMadeFood" },
  ];

  const panelLinks = [
    { name: "POS", path: "/panel/tables" },
    { name: "Add Kitchen", path: "/panel/addKitchen" },
    { name: "List Kitchen", path: "/panel/listKitchen" },
    { name: "Waiter", path: "/panel/waiter" },
  ];

  const outletLinks = [
    { name: "Add Outlet", path: "/outlet/addOutlet" },
    { name: "List Outlet", path: "/outlet/listOutlets" },
  ];

  const renderLinks = (linksArray) => {
    return linksArray.map((link, index) => (
      <div
        className={`sideLink text-decoration-none py-2 ${
          location.pathname === link.path ? "isActiveDiv" : ""
        }`}
        key={index}
      >
        <NavLink
          className={`text-decoration-none sideLink px-2 ${
            location.pathname === link.path ? "isActiveLink" : ""
          }`}
          style={{ fontSize: "14px" }}
          to={link.path}
        >
          {link.name}
        </NavLink>
      </div>
    ));
  };

  const renderLinksSection = () => {
    switch (links) {
      case "settingsLinks":
        return renderLinks(settingLinks);
      case "purchaseLinks":
        return <div>These are purchase links</div>;
      case "attendanceLinks":
        return <div>These are attendance links</div>;
      case "homeLinks":
        return "Home Links";
      case "itemsLinks":
        return <>{renderLinks(itemsLinks)}</>;
      case "panelLinks":
        return <>{renderLinks(panelLinks)}</>;
      case "outletLinks":
        return <>{renderLinks(outletLinks)}</>;
      default:
        return "";
    }
  };

  return (
    <div
      style={{ width: "250px", height: "100vh" }}
      className="position-sticky sideLinks_container top-0"
    >
      <div className="sideBarOptionsDiv w-100">{renderLinksSection()}</div>
    </div>
  );
};

export default SideBar_Links;
