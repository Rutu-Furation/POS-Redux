import React from "react";
import {SettingsSelect} from "../../../../components/index";

const Bill_Printer_Setup = () => {
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
                  required
                  labelText="Printing Choice"
                />
              </div>

              <div className="mb-3 col-sm-12 col-md-4 col-lg-4">
                <SettingsSelect
                  labelFor="printer"
                  selectId="printer"
                  required
                  labelText="Printer"
                />
              </div>

              <div className="mb-3 col-sm-12 col-md-4 col-lg-4"></div>
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

export default Bill_Printer_Setup;
