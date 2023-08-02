import React from "react";
import {SettingsSelect} from "../../../../components/index";

const KOT_Printer_Setup = () => {
  return (
    <>
      <div>
        <div className="p-2">
          <form>
            <div className="row">
              <div className="mb-3 col-sm-12 col-md-4 col-lg-4">
                <SettingsSelect
                  labelFor="printingChoice"
                  selectId="printingChoice"
                  labelText="Printing Choice"
                  required
                />
              </div>

              <div className="mb-3 col-sm-12 col-md-4 col-lg-4">
                <label htmlFor="kotRadioGrp">Print Format</label>
                <div id="kotRadioGrp">
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="option1"
                    />
                    <label class="form-check-label" for="inlineRadio1">
                      No Print
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
                      56mm
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
                      80mm
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12 col-md-2 col-md-2">
                <button className="btn btn-primary w-100">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default KOT_Printer_Setup;
