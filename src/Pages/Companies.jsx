import React, { useEffect, useState } from "react";
import CompCard from "../components/CompCard/CompCard";
import { callApi } from "../components/index";
import { getAllCompanies } from "../api/companiesAPI";

const Companies = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchCompaniesData = async () => {
      const res = await callApi("GET", getAllCompanies);
      setCompanies(res);
    };
    fetchCompaniesData();
  }, []);

  return (
    <div className="p-3 gap-3 d-flex justify-content-center row">
      {companies.map((item, index) => (
        <CompCard key={index} title={item.name} companyId={item._id} />
      ))}
    </div>
  );
};

export default Companies;
