import React from "react";
 
import {User_Profile} from "../index"
const HeadNav = () => {
  return (
    <div className="">
      <div
        style={{ height: "50px"   }}
        className="d-flex justify-content-between  align-items-center px-2 "
      >
        {/* <p>Check-in/Check-out</p>
        <p>sign in</p> */}
        <span>Check-in/Check-out</span>
        <div >
          
          <User_Profile/>
        </div>
      </div>
    </div>
  );
};

export default HeadNav;
