import React from "react";
import {SettingsInput,SettingsSelect} from "../../../../components/index";
 
const InvoicePrinter = () => {
  return (
    <>
      <div>
        <div className="p-2">
          <form>
            <div className="row">
              <div className="mb-3 col-sm-12 col-md-4 col-lg-4">
                <SettingsSelect
                  labelFor="printingChoice"
                  required
                  selectId="printingChoice"
                  labelText="Printing Choice"
                />
              </div>

              <div className="mb-3 col-sm-12 col-md-4 col-lg-4">
                <SettingsSelect
                  labelFor="printingInvoice"
                  required
                  selectId="printingInvoice"
                  labelText="Open Cash Drawer When Printing Invoice"
                />
              </div>

              <div className="mb-3 col-sm-12 col-md-4 col-lg-4">
                <label htmlFor="radioGrp">Radio Group</label>
                <div id="radioGrp" className="d-flex align-items-center">
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="option1"
                    />
                    <label class="form-check-label" for="inlineRadio1">
                      1
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio2"
                      value="option2"
                    />
                    <label class="form-check-label" for="inlineRadio2">
                      2
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio3"
                      value="option3"
                    />
                    <label class="form-check-label" for="inlineRadio3">
                      3
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12 col-md-2 col-lg-2">
                <button className="btn btn-primary w-100">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default InvoicePrinter;
