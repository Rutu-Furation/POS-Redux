import React, { useContext, useEffect, useState } from "react";
import "./SideBar.css";
import { Link, NavLink } from "react-router-dom";
import { LinksContext } from "../../context/LinksContext";
import { images } from "../../assets";

const SideBar = () => {
  const { links, changeLink } = useContext(LinksContext);

  const allLinks = [
    { name: "Home", logo: images.home, set: "homeLinks" },
    { name: "Settings", logo: images.settings, set: "settingsLinks" },
    { name: "Items", logo: images.fileText, set: "itemsLinks" },
    { name: "Outlets", logo: images.hardDrive, set: "outletLinks" },
    { name: "Panel", logo: images.fileText, set: "panelLinks" },
    { name: "Dashboard", logo: images.grid, set: "dashboardLinks" },
    { name: "Purchase", logo: images.truck, set: "purchaseLinks" },
    { name: "Production", logo: images.truck, set: "productionLinks" },
    { name: "Transfer", logo: images.truck, set: "productionLinks" },
    { name: "Sale", logo: images.shoppingCart, set: "saleLinks" },
    { name: "Stock", logo: images.server, set: "stockLinks" },
    { name: "Waste", logo: images.clock, set: "wasteLinks" },
    { name: "Expense", logo: images.dollar, set: "productionLinks" },
    { name: "SDP", logo: images.dollar, set: "productionLinks" },
  ];

  return (
    <>
      <div className="d-flex position-sticky top-0" style={{ height: "100vh" }}>
        <div
          style={{ width: "102px", maxWidth: "102px" }}
          className="d-flex flex-column align-items-center sideBar_container"
        >
          <div className="sideBar_logo">
            <p>POS</p>
          </div>
          <div className="d-flex flex-column w-100">
            {allLinks.map((elem, index) => {
              if (elem.name === "Home") {
                return (
                  <div
                    key={index}
                    className={`text-center  listItemDiv ${
                      elem.set === links ? "isActiveItem" : ""
                    }`}
                  >
                    <img src={elem.logo} alt="" />
                    <p className="listItem text-center">
                      <Link
                        className=" text-white text-decoration-none"
                        to={`/`}
                      >
                        {elem.name}
                      </Link>
                    </p>
                  </div>
                );
              } else {
                return (
                  <div
                    key={index}
                    className={`text-center listItemDiv ${
                      elem.set === links ? "isActiveItem" : ""
                    }`}
                    onClick={() => changeLink(elem.set)}
                  >
                    <img src={elem.logo} alt="" />
                    <p className="listItem text-center">{elem.name}</p>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
