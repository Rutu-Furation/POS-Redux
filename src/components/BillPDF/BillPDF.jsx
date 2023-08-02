import React from "react";
import "./BillPDF.css";
const BillPDF = React.forwardRef((props, ref) => {
  const data = [
    {
      item: "Fish And Chips",
      quantity: 1,
      price: 7.0,

      total: 6.65,
      totalItems: 1,
      subTotal: 6.65,
      discount: 0.35,
      vat: 1.0,
      cgst: 0.33,
      sgst: 0.33,
      igst: 0.17,
      grandTotal: 8.48,
    },
    {
      item: "Fish And Chips",
      quantity: 1,
      price: 7.0,

      total: 6.65,
      totalItems: 1,
      subTotal: 6.65,
      discount: 0.35,
      vat: 1.0,
      cgst: 0.33,
      sgst: 0.33,
      igst: 0.17,
      grandTotal: 8.48,
    },
    {
      item: "Fish And Chips",
      quantity: 1,
      price: 7.0,

      total: 6.65,
      totalItems: 1,
      subTotal: 6.65,
      discount: 0.35,
      vat: 1.0,
      cgst: 0.33,
      sgst: 0.33,
      igst: 0.17,
      grandTotal: 8.48,
    },
  ];

  return (
    <div ref={ref} className="BillPDFMainDiv    w-100 m-auto">
      <div className="d-flex justify-content-between">
        <p>13/7/2023</p>
        <p>Bill No : aLN230714-001</p>
      </div>

      <div className="d-flex m-auto justify-content-center align-items-center flex-column">
        {/* <img src="" alt="Door Soft" /> */}
        <h2>Door Soft</h2>
        <p>Address: House No: 5, Road No: 4, Nikunja 2, Khilkhet, Dhaka.</p>
        <p>Phone: +8801812391633</p>
        <p>Local Taxes: 32132587</p>
        <p>Bill No:aLN230714-001</p>
        <p className="OrderPtag">Order Type:Dine In</p>
      </div>
      <div className="d-flex m-auto justify-content-center align-items-start flex-column">
        <p>Date:2023-07-14 12:54:47 PM</p>
        <p>Sales Associate: Admin User</p>
        <p>
          Customer: <span>Walk-in Customer</span>{" "}
        </p>
        <p>Waiter: Ds Waiter</p>
      </div>

      <div>
        <table className="table">
          <thead>
            <tr className="TableHead">
              <th>#</th>
              <th>Item</th>
              <th>Total Item</th>
              <th>Price</th>

              <th>subTotal</th>

              <th>Disc Amt(%)</th>
              <th>VAT</th>
              <th>CGST</th>
              <th>SGST</th>
              <th>IGST </th>
              <th>Grand Total</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.item}</td>
                <td>{item.quantity}</td>
                <td>${item.price.toFixed(2)}</td>

                <td>${item.subTotal.toFixed(2)}</td>

                <td>${item.discount.toFixed(2)}</td>
                <td>${item.vat.toFixed(2)}</td>
                <td>${item.cgst.toFixed(2)}</td>
                <td>${item.sgst.toFixed(2)}</td>
                <td>${item.igst.toFixed(2)}</td>
                <td>${item.grandTotal.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="totalAmmount d-flex     justify-content-between align-items-center">
        <p>Total Payable</p>
        <p>$8.48</p>
      </div>

      <p className="text-center m-3">Thank you for visiting us!</p>
    </div>
  );
});

export default BillPDF;
