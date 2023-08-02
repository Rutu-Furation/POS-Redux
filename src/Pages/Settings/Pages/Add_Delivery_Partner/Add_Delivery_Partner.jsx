import React from "react";

import { SettingsInput, Settings_Button } from "../../../../components/index";

const Add_Delivery_Partner = () => {
  return (
    <>
      <div>
        <div className="p-3">
          <form>
            <div className="row">
              <div className="mb-3 col-sm-12 col-md-4 col-lg-4">
                <SettingsInput
                  required
                  inputId="deliveryPartnerName"
                  labelFor="deliveryPartnerName"
                  labelText="Name"
                  type="text"
                  placeholder="Name"
                />
              </div>

              <div className="mb-3 col-sm-12 col-md-4 col-lg-4">
                <SettingsInput
                  inputId="deliveryPartnerLogo"
                  labelFor="deliveryPartnerLogo"
                  labelText="Logo (Width: 195px, Height: 145px)"
                  type="file"
                  //   placeholder="No file selected"
                />
              </div>

              <div className="mb-3 col-sm-12 col-md-4 col-lg-4">
                <label for="floatingTextarea" style={{ fontSize: "12px" }}>
                  Comments
                </label>
                <textarea
                  style={{ height: "36px!important" }}
                  className="form-control mt-1"
                  placeholder="Leave a comment here"
                  id="floatingTextarea"
                ></textarea>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12 col-md-2 col-lg-2 mb-3">
                <Settings_Button btnTxt="Submit" type="submit" />
              </div>

              <div className="col-sm-12 col-md-2 col-lg-2 mb-3">
                <Settings_Button btnTxt="Back" type="button" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Add_Delivery_Partner;
