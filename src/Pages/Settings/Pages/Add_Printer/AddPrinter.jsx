import React from "react";
import {SettingsInput} from "../../../../components/index";

const AddPrinter = () => {
  return (
    <>
      <div>
        <div className="p-2">
          <form>
            <div className="row">
              <div className="mb-3 col-sm-12 col-md-4 col-lg-4">
                <SettingsInput
                  labelText="Title (To identify printer easily)"
                  inputId="printerTitle"
                  labelFor="printerTitle"
                  required
                />
              </div>

              <div className="mb-3 col-sm-12 col-md-4 col-lg-4">
                <SettingsInput
                  labelText="Printer Type"
                  inputId="printerType"
                  labelFor="printerTitle"
                  required
                />
              </div>

              <div className="mb-3 col-sm-12 col-md-4 col-lg-4">
                <SettingsInput
                  labelText="Characters Per Line"
                  inputId="printerCharsPerLine"
                  labelFor="printerCharsPerLine"
                  required
                  tooltip
                />
              </div>

              <div className="mb-3 col-sm-12 col-md-4 col-lg-4">
                <SettingsInput
                  labelText="Printer IP Address"
                  inputId="printerIp"
                  labelFor="printerIp"
                  required
                  tooltip
                />
              </div>

              <div className="mb-3 col-sm-12 col-md-4 col-lg-4">
                <SettingsInput
                  labelText="Printer Port Address"
                  inputId="printerPortAddress"
                  labelFor="printerPortAddress"
                  required
                  tooltip
                />
              </div>
            </div>

            <div className="row">
              <div className="mb-3 col-sm-2 col-md-2 ">
                <button type="submit" className="w-100">
                  Submit
                </button>
              </div>
              <div className="mb-3 col-sm-2 col-md-2">
                <button className="w-100">Back</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddPrinter;
