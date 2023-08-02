import React, { useContext } from "react";
import "./KOT_Modal.css";
import { OrderContext } from "../../context/OrderContext";

const KOT_Modal = React.forwardRef((props, ref) => {
  const { orderDetails } = useContext(OrderContext);

  return (
    <div className="hidden-print" ref={ref}>
      <div className="my-5">
        <h4 className="text-center">KOT PRINT</h4>
        <p className="text-center" style={{ fontSize: "15px" }}>
          <b>Date:</b>
          {Date().toString()}
        </p>
        <div className="container">
          <div
            style={{ width: "100%" }}
            className="d-flex align-items-center flex-column"
          >

            {orderDetails?.map((item, index) => (
              <div key={index} className="row" style={{ width: "500px" }}>
                <div className="col-10">{item.name}</div>
                <div className="col-2">{item.quantity}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

export default KOT_Modal;
