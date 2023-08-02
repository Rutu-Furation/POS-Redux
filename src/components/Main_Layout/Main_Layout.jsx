import React from "react";

import { SideBar, HeadNav, SideBar_Links } from "../index";
const Main_Layout = ({ Content, heading }) => {
  return (
    <>
      <div className="d-flex">
        <SideBar />
        <div className="w-100">
          <HeadNav />
          <div className="d-flex">
            <SideBar_Links />
            <div className="w-100">
              <h5
                className="headerName "
                style={{ background: "#F1F3F5", padding: "20px" }}
              >
                {heading}
              </h5>
              <Content />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main_Layout;
