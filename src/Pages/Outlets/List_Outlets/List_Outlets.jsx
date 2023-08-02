import React, { useEffect, useState } from "react";
import Outlets from "../Outlets";
import { useLocation } from "react-router-dom";

import { callApi, Main_Layout } from "../../../components/index";

const Content = () => {
  const [outlets, setOutlets] = useState([]);
  const companyId = "64ababaac632b42ec95f6297";
  useEffect(() => {
    const getCompanyOutlets = async () => {
      const res = await callApi(
        "GET",
        `/company/64ababaac632b42ec95f6297/outlets`
      );
      console.log(res?.company?.outlets);

      setOutlets(res?.company?.outlets);
    };

    getCompanyOutlets();
  }, []);
  return (
    <>
      <div className="row p-3 g-3">
        {outlets?.map((item, index) => (
          <div className="col-sm-12   col-md-6 col-lg-4">
            <div className="card   ">
              <div key={index} className="mb-3 p-3  text-center ">
                <h5 className="card-title" style={{ fontSize: "25px" }}>
                  {item?.outlet_name}
                </h5>
                <p className="card-text" style={{ color: "gray" }}>
                  Outlet Code: {item?.outlet_code}
                </p>
                <p className="card-text" style={{ fontSize: "22px" }}>
                  Address: {item?.address}
                </p>
                <p className="card-text">Phone: {item?.phone}</p>
                <p className="card-text">Email: {item?.email}</p>
                <div className="d-flex justify-content-between">
                  <button className="btn btn-primary px-3">Enter</button>
                  <button className="btn btn-primary px-3">Edit</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const List_Outlets = () => {
  return (
    <>
      <Main_Layout Content={Content} heading="List Outlets" />
    </>
  );
};

export default List_Outlets;
