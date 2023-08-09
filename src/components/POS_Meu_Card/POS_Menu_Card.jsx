import React from "react";
import "./POS_Menu_Card.css";

const POS_Menu_Card = ({ name, price, onClick, veg }) => {
  return (
    <>
      <div
        onClick={onClick}
        className="card"
        style={{ width: "100%" }}
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        data-bs-title="Tooltip on top"
      >
        <div className="card-body MenuCardBody">
          <div className="d-flex " style={{ height: "auto" }}>
            <div
              style={{ width: "3px" }}
              className={veg ? "bg-success" : "bg-danger"}
            ></div>
            <div className="mx-auto contentDiv">
              <p className="m-0 p-0 text-center text-truncate menuItem ">
                {name}
              </p>
              <p className="m-0 p-0 text-center menuPrice">Rs: {price}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default POS_Menu_Card;
