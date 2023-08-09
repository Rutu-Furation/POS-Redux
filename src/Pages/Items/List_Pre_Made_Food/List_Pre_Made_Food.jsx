import React, { useEffect, useState } from "react";

import { Main_Layout, TableComponent } from "../../../components/index.js";
import { useDispatch, useSelector } from "react-redux";
import {
  deletepremadefood,
  getPreMadeFood,
} from "../../../redux/Items/PreMadeFood/PreMadeFood.actions.js";

const Content = () => {
  const [preMadeFood, setPreMadeFood] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchText, setSearchText] = useState("");

  const dispatch = useDispatch();

  const { isLoading, isError, PreMadeFoodData } = useSelector(
    (state) => state.premadefood
  );

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
  };

  useEffect(() => {
    dispatch(getPreMadeFood());
  }, []);

  useEffect(() => {
    if (PreMadeFoodData?.preFoodMade) {
      const updatedData = PreMadeFoodData.preFoodMade.map((item) => ({
        Code: item.code || "Nan",
        Name: item.nameFood || "Nan",
        "Purchase Price": item.purchasePrice || "Nan",
        "Low Quantity/Amount": item.lowQAmt || "Nan",
        Unit: item.unit || "Nan",
        "Added By": "Admin User",
        id: item._id || "",
      }));
      setPreMadeFood(updatedData);
      console.log(updatedData);
    }
  }, [PreMadeFoodData]);

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
          totalPages={Math.ceil(preMadeFood?.length / rowsPerPage)}
          startPage={1}
          endPage={3}
          pageNumbers={[1, 2, 3]}
          pagename="Pre Made Food"
          isLoading={isLoading}
          DeleteRedux={deletepremadefood}
        />
      </div>
    </>
  );
};

const List_Pre_Made_Food = () => {
  return <Main_Layout Content={Content} heading="Pre-Made Food" />;
};

export default List_Pre_Made_Food;
