import React from "react";
import {SettingsInput} from "../../../../components/index";

const Add_Multiple_Currencies = () => {
  return (
    <>
      <div>
        <div className="p-2">
          <form>
            <div className="row">
              <div className="mb-3 col-sm-12 col-md-4 col-lg-4">
                <SettingsInput
                  inputId="currencySymbol"
                  type="text"
                  labelFor="currencySymbol"
                  labelText="Currency Symbol"
                  required
                />
              </div>

              <div className="mb-3 col-sm-12 col-md-4 col-lg-4">
                <SettingsInput
                  inputId="conversionRate"
                  type="text"
                  labelFor="conversionRate"
                  labelText="Conversion Rate"
                  required
                />
              </div>

              <div className="mb-3 col-sm-12 col-md-4 col-lg-4"></div>
            </div>

            <div className="row">
              <div className="mb-3 col-sm-12 col-md-2 col-lg-2">
                <button className="w-100">Submit</button>
              </div>
              <div className="mb-3 col-sm-12 col-md-2 col-lg-2">
                <button className="w-100">Back</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Add_Multiple_Currencies;
