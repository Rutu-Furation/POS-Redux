import React, { useEffect, useState } from "react";
import OutlesCard from "../../components/OutletsCard/OutletsCard";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { callApi } from "../../api/apiConfig";
const Outlets = () => {
  //getting state that was passed from companies page
  const location = useLocation();
  // console.log(location.state.companyId);

  const [outlets, setOutlets] = useState([]);
  const companyId = "64ababaac632b42ec95f6297";
  useEffect(() => {
    const getCompanyOutlets = async () => {
      const res = await callApi(
        "GET",
        `/company/64ababaac632b42ec95f6297/outlets`
      );
      console.log(res.company.outlets);

      setOutlets(res.company.outlets);
    };

    getCompanyOutlets();
  }, []);

  return (
    <div className="p-3 gap-3 d-flex justify-content-center row">
      {/* <OutlesCard />
      <OutlesCard /> */}
      {outlets?.map((item, index) => (
        <OutlesCard key={index} name={item.outlet_name} address={item.address} />
      ))}
    </div>
  );
};

export default Outlets;
