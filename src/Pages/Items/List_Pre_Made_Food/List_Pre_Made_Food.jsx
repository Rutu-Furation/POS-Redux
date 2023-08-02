import React, { useEffect, useState } from "react";

import {
  callApi,
  Main_Layout,
  TableComponent,
} from "../../../components/index.js";

const Content = () => {
  const [preMadeFood, setPreMadeFood] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    setSearchText(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(parseInt(e.target.value));
    setCurrentPage(1);
  };

  const exportToCsv = () => {
    // Implement the exportToCsv functionality here
    console.log("Exporting CSV...");
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await callApi("GET", "/setting/preFoodMade/list");
      console.log("Res", res);
      const updatedData = res.preFoodMade?.map((item) => ({
        Code: item.code || "Nan",
        Name: item.nameFood || "Nan",
        "Purchase Price": item.purchasePrice || "Nan",
        "Low Quantity/Amount": item.lowQAmt || "Nan",
        Unit: item.unit || "Nan",
        "Added By": "Admin User",
        id: item._id | "",
      }));
      setPreMadeFood(updatedData);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="p-3 w-100">
        <TableComponent
          PageName="listPreMadeFood"
          deleteRoute="/setting/preFoodMade/delete"
          data={preMadeFood}
          currentPage={currentPage}
          rowsPerPage={rowsPerPage}
          searchText={searchText}
          handleSearch={handleSearch}
          handlePageChange={handlePageChange}
          handleRowsPerPageChange={handleRowsPerPageChange}
          exportToCsv={exportToCsv}
          totalPages={Math.ceil(preMadeFood.length / rowsPerPage)}
          startPage={1}
          endPage={3}
          pageNumbers={[1, 2, 3]}
        />
      </div>
      {/* </div>
        </div>
      </div> */}
    </>
  );
};

const List_Pre_Made_Food = () => {
  return <Main_Layout Content={Content} heading="Pre-Made Food" />;
};

export default List_Pre_Made_Food;
