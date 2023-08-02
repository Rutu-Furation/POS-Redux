import { createContext, useEffect, useState } from "react";
import { callApi } from "../components/index";

export const CompaniesContext = createContext();

export default CompaniesContextProvider = ({ children }) => {
  const [companiesList, setCompaniesList] = useState([]);
  const [outletsList, setOutletsList] = useState([]);

  useEffect(() => {
    const fetchOutlets = async () => {
      const res = await callApi("GET", `/company/${company_id}/outlets`);
      setOutletsList(res);
    };

    fetchOutlets();
  }, []);

  return (
    <CompaniesContext.Provider value={{ outletsList }}>
      {children}
    </CompaniesContext.Provider>
  );
};
