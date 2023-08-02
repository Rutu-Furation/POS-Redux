import React from "react";
import { Settings_Button, SideBar, SideBar_Links } from "../../../components";
import "./POS_Nav.css";
import { GiHamburgerMenu } from "react-icons/gi";

const POS_Nav = () => {
  return (
    <div className="NavMainDiv">
      <div>
        <button
          className="btn mt-0 hamburger2   "
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasWithBothOptions"
          aria-controls="offcanvasWithBothOptions"
        >
        
          <GiHamburgerMenu/>
        </button>
      </div>
      <div>
        <p className="DoofSoft">Door Soft</p>
      </div>

      <div
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        tabIndex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div className="offcanvas-body p-0">
          <div className="d-flex w-100">
            <SideBar />
            <SideBar_Links />
          </div>
        </div>
      </div>  

      
    </div>
  );
};

export default POS_Nav;
