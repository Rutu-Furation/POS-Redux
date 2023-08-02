import React from "react";
import {SettingsInput} from "../../../../components/index";

const Add_Payment_Method = () => {
  return (
    <>
      <div>
        <div className="p-3">
          <form>
            <div className="row">
              <div className="mb-3 col-sm-12 col-md-6 col-lg-6">
                <SettingsInput
                  type="text"
                  required
                  inputId="paymentMethodName"
                  labelFor="paymentMethodName"
                  labelText="Payment Method Name"
                />
              </div>
              <div className="mb-3 col-sm-12 col-md-6 col-lg-6">
                <SettingsInput
                  type="text"
                  inputId="paymentDescription"
                  labelFor="paymentDescription"
                  labelText="Description"
                />
              </div>
            </div>

            <div className="row">
              <div className="mb-3 col-sm-12 col-md-2 col-lg-2">
                <button type="submit" className="btn btn-primary w-100">
                  Submit
                </button>
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

export default Add_Payment_Method;
