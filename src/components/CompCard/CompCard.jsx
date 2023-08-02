import React from "react";
import { Link } from "react-router-dom";

const CompCard = ({ title, companyId }) => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>

          <Link
            to={`/outlets`}
            state={{ companyId: companyId }}
            className="card-link"
          >
            Another link
          </Link>
        </div>
      </div>
    </>
  );
};

export default CompCard;
