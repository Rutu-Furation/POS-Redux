import React from "react";
import {SettingsSelect} from "../../../../components/index";

const Self_Order = () => {
  return (
    <>
      <div>
        <div className="p-3">
          <form>
            <div className="row">
              <div className="mb-3 col-sm-12 col-md-4 col-lg-4">
                <SettingsSelect
                  labelFor="enableSelfOrder"
                  required
                  labelText="Enable Self Order"
                  selectId="enableSelfOrder"
                />
              </div>
            </div>

            <div className="row">
              <div className="mb-3 col-sm-12 col-md-2 col-lg-2">
                <button className="btn btn-primary w-100">Submit</button>
              </div>
              <div className="mb-3 col-sm-12 col-md-2 col-lg-2">
                <button className="btn btn-primary w-100">Back</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Self_Order;
