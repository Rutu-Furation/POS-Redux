import React from "react";
import Select from "react-select";

import {
  SideBar_Links,
  HeadNav,
  SideBar,
  SettingsSelect,
  SettingsInput,
} from "../../../../components/index";

const Settings = () => {
  return (
    <>
      <div className="d-flex">
        <SideBar />
        <div>
          <HeadNav />
          <div className="row">
            <div className="col-md-12 d-flex">
              <SideBar_Links />
              <div className="table-box w-100">
                <form className="m-2">
                  <div className="box-body p-1">
                    <div className="row">
                      <div className="mb-3 col-sm-12 col-md-4 col-lg-3">
                        <SettingsInput
                          labelFor="restaurantName"
                          labelText="Restaurant Name"
                          type="text"
                          inputId="restaurantName"
                          required
                        />
                      </div>
                      <div className="mb-3 col-sm-12 col-md-4 col-lg-3">
                        <SettingsInput
                          labelFor="restaurantShortName"
                          labelText="Restaurant Short Name"
                          type="text"
                          inputId="restaurantShortName"
                          required
                        />
                      </div>
                      <div className="mb-3 col-sm-12 col-md-4 col-lg-3">
                        <div className="d-flex justify-content-between align-items-center">
                          <label
                            htmlFor="invoiceLogo"
                            className="form-label settings_select_label"
                          >
                            Invoice Logo
                          </label>
                          <button
                            className="text-center"
                            style={{
                              fontSize: "10px",
                              height: "17px",
                              width: "40px",
                              borderRadius: "5px",
                            }}
                          >
                            Show
                          </button>
                        </div>
                        <input
                          type="file"
                          className="form-control settings_input"
                          id="invoiceLogo"
                          aria-describedby="emailHelp"
                        />
                      </div>
                      <div className="mb-3 col-sm-12 col-md-4 col-lg-3">
                        <SettingsInput
                          labelFor="website"
                          labelText="Website"
                          type="text"
                          inputId="website"
                        />
                      </div>

                      <div className="mb-3 col-sm-12 col-md-4 col-lg-3">
                        <SettingsSelect
                          labelText="Date Format"
                          labelFor="dateFormat"
                          selectId="dateFormat"
                          required
                        />
                      </div>

                      <div className="mb-3 col-sm-12 col-md-4 col-lg-3">
                        <SettingsSelect
                          labelText="Time Zone"
                          labelFor="timeZone"
                          selectId="timeZone"
                          required
                        />
                      </div>

                      <div className="mb-3 col-sm-12 col-md-4 col-lg-3">
                        <SettingsInput
                          type="text"
                          labelFor="currencySymbol"
                          inputId="currencySymbol"
                          labelText="Currency Symbol"
                          required
                        />
                      </div>

                      <div className="mb-3 col-sm-12 col-md-4 col-lg-3">
                        <SettingsSelect
                          labelFor="currencyPosition"
                          inputId="currencyPosition"
                          labelText="Currency Position"
                          required
                        />
                      </div>

                      <div className="mb-3 col-sm-12 col-md-4 col-lg-3">
                        <SettingsSelect
                          labelFor="precision"
                          inputId="precision"
                          labelText="Precision"
                          required
                        />
                      </div>

                      <div className="mb-3 col-sm-12 col-md-4 col-lg-3">
                        <SettingsSelect
                          labelFor="decimalSeparator"
                          inputId="decimalSeparator"
                          labelText="Decimal Separator"
                          required
                        />
                      </div>

                      <div className="mb-3 col-sm-12 col-md-4 col-lg-3">
                        <SettingsSelect
                          labelFor="thousandsSeparator"
                          inputId="thousandsSeparator"
                          labelText="Thousands Separator"
                          required
                        />
                      </div>

                      <div className="mb-3 col-sm-12 col-md-4 col-lg-3">
                        <SettingsSelect
                          labelFor="clickingItemPos"
                          inputId="clickingItemPos"
                          labelText="When clicking on item in POS"
                          tooltip
                          // required
                        />
                      </div>

                      <div className="mb-3 col-sm-12 col-md-4 col-lg-3">
                        <SettingsSelect
                          labelFor="defaultOrderType"
                          inputId="defaultOrderType"
                          labelText="Default Order Type"
                          tooltip
                          required
                        />
                      </div>

                      <div className="mb-3 col-sm-12 col-md-4 col-lg-3">
                        <SettingsSelect
                          labelFor="defaultDeliveryPartner"
                          inputId="defaultDeliveryPartner"
                          labelText="Default Delivery Partner"
                        />
                      </div>

                      <div className="mb-3 col-sm-12 col-md-4 col-lg-3">
                        <SettingsSelect
                          labelFor="defaultCustomer"
                          inputId="defaultCustomer"
                          labelText="Default Customer"
                          required
                        />
                      </div>

                      <div className="mb-3 col-sm-12 col-md-4 col-lg-3">
                        <SettingsSelect
                          labelFor="defaultPaymentMethod"
                          inputId="defaultPaymentMethod"
                          labelText="Default Payment Method"
                          required
                        />
                      </div>

                      <div className="mb-3 col-sm-12 col-md-4 col-lg-3">
                        <SettingsSelect
                          labelFor="placeOrderTooltip"
                          inputId="placeOrderTooltip"
                          labelText="Place Order Tooltip (in POS)"
                          required
                        />
                      </div>

                      <div className="mb-3 col-sm-12 col-md-4 col-lg-3">
                        <SettingsSelect
                          labelFor="foodMenuTooltip"
                          inputId="foodMenuTooltip"
                          labelText="Food Menu Tooltip (in POS)"
                          required
                        />
                      </div>

                      <div className="mb-3 col-sm-12 col-md-4 col-lg-3">
                        <SettingsSelect
                          labelFor="smsSendAuto"
                          inputId="smsSendAuto"
                          labelText="SMS Send Auto (in final invoice)"
                        />
                      </div>

                      <div className="mb-3 col-sm-12 col-md-4 col-lg-3">
                        <SettingsSelect
                          labelFor="prePostPayment"
                          inputId="prePostPayment"
                          labelText="Pre or Post Payment"
                          required
                        />
                      </div>

                      <div className="mb-3 col-sm-12 col-md-4 col-lg-3">
                        <SettingsInput
                          type="text"
                          labelFor="serviceCharge"
                          inputId="serviceCharge"
                          labelText="Service Charge (eg: 10% or 10)"
                          tooltip
                        />
                      </div>

                      <div className="mb-3 col-sm-12 col-md-4 col-lg-3">
                        <SettingsInput
                          type="text"
                          labelFor="deliveryCharge"
                          inputId="deliveryCharge"
                          labelText="Delivery Charge (eg: 10% or 10)"
                          tooltip
                        />
                      </div>

                      <div className="mb-3 col-sm-12 col-md-4 col-lg-3">
                        <SettingsSelect
                          labelFor="loyaltyPoint"
                          inputId="loyaltyPoint"
                          labelText="Loyalty Point"
                          tooltip
                        />
                      </div>

                      <div className="mb-3 col-sm-12 col-md-4 col-lg-3"></div>

                      <div className="mb-3 col-sm-12 col-md-4 col-lg-3">
                        <SettingsSelect
                          labelFor="exportDailySales"
                          selectId="exportDailySales"
                          labelText="Export Daily Sales & Reset All Sales"
                          tooltip
                        />
                      </div>

                      <div className="mb-3 col-sm-12 col-md-4 col-lg-3">
                        <button style={{ marginTop: "32px" }}>
                          Reset Transactional Data
                        </button>
                      </div>
                    </div>

                    <div className="row">
                      <div className="mb-3 col-md-6">
                        <label htmlFor="invoiceFooter">Invoice Footer</label>
                        <textarea
                          className="form-control"
                          placeholder="Mellows @ Dine Hub"
                          id="invoiceFooter"
                          style={{ height: "74px" }}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
