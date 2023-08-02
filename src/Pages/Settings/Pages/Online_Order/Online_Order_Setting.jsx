import React from "react";
import {SettingsSelect} from "../../../../components/index";

const Online_Order_Setting = () => {
  return (
    <>
      <div>
        <div className="p-3">
          <form>
            <div className="row">
              <div className="mb-3 col-sm-12 col-md-4 col-lg-4">
                <SettingsSelect
                  labelFor="enableOnlineOrder"
                  required
                  labelText="Enable Online Order"
                  selectId="enableOnlineOrder"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12 col-md-2 col-lg-2">
                <button className="btn btn-primary w-100">Submit</button>
              </div>
              <div className="col-sm-12 col-md-2 col-lg-2">
                <button className="btn btn-primary w-100">Back</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Online_Order_Setting;
