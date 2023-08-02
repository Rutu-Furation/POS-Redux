import React from "react";

const OutletsCard = ({ name,address }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>

        {/* <Link to={`/outlets`} className="card-link">
          Another link
        </Link> */}
      </div>
    </div>
  );
};

export default OutletsCard;
