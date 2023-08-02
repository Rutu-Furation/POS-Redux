import React from "react";

import {
  SideBar,
  SideBar_Links,
  HeadNav,
  SettingsInput,
} from "../../../../components/index";

const WhiteLabel = () => {
  return (
    <>
      <div className="d-flex w-100">
        <SideBar />
        <div className="w-100">
          <HeadNav />
          <div className="d-flex">
            <SideBar_Links />
            <div className=" py-2 px-2 w-100">
              <div className="row">
                <div className="mb-3 col-sm-12 col-md-4 col-lg-4">
                  <SettingsInput
                    inputId="siteName"
                    labelFor="siteName"
                    labelText="Site Name"
                    required
                  />
                </div>

                <div className="mb-3 col-sm-12 col-md-4 col-lg-4">
                  <div className="d-flex justify-content-between align-items-center">
                    <label
                      htmlFor="siteLogo"
                      className="form-label settings_select_label"
                    >
                      Site Logo (Width: 240px, Height: 50px)
                    </label>
                    <button
                      className="text-center"
                      style={{
                        fontSize: "10px",
                        height: "17px",
                        width: "40px",
                        borderRadius: "5px",
                      }}
                    >
                      Show
                    </button>
                  </div>
                  <input
                    type="file"
                    className="form-control settings_input"
                    id="siteLogo"
                    aria-describedby="emailHelp"
                  />
                </div>

                <div className="mb-3 col-sm-12 col-md-4 col-lg-4">
                  <SettingsInput
                    inputId="siteFooter"
                    labelFor="siteFooter"
                    labelText="Site Footer"
                    required
                  />
                </div>
              </div>

              <div className="row my-2">
                <div className="col-sm-12 col-md-2 mb-2">
                  <button className="">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhiteLabel;
