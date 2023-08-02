import React from "react";
import {SettingsInput} from "../../../../components/index";

const Reservation_Settings = () => {
  return (
    <>
      <div>
        <form>
          <div className="p-3">
            <div className="row">
              <div className="mb-3 col-sm-12 col-md-4 col-lg-4">
                <SettingsInput
                  inputId="reservationURL"
                  labelFor="reservationURL"
                  labelText="Reservation Page URL"
                />
              </div>
            </div>
          </div>

          <div>
            <table class="table table-borderless" style={{ width: "100%" }}>
              <thead style={{ width: "50%" }}>
                <tr>
                  <th className="align-center" scope="col">
                    Availability
                  </th>
                  <th className="align-center" scope="col">
                    Day
                  </th>
                  <th className="align-center" scope="col">
                    Start TIme
                  </th>
                  <th className="align-center" scope="col">
                    End Time
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td className="align-center">Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </form>
      </div>
    </>
  );
};

export default Reservation_Settings;
