import React from "react";
import {SettingsInput} from "../../../../components/index";

const Add_Denomination = () => {
  return (
    <>
      <div>
        <div className="p-3">
          <form>
            <div className="row">
              <div className="mb-3 col-sm-12 col-md-6 col-lg-6">
                <SettingsInput
                  inputId="denominationAmt"
                  labelFor="denominationAmt"
                  labelText="Amount"
                  required
                />
              </div>

              <div className="mb-3 col-sm-12 col-md-6 col-lg-6">
                <SettingsInput
                  inputId="denominationDesc"
                  labelFor="denominationDesc"
                  labelText="Description"
                  required
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

export default Add_Denomination;
