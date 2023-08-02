import React, { useEffect, useState } from "react";
import { Main_Layout, callApi, TableComponent } from "../../../components/index.js";

const Content = () => {
  const [ingredientsUnitData, setIngredientsUnitData] = useState([]);
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
      const res = await callApi("GET", "/setting/ingredientUnit/list");
      const updatedData = res.ingredientUnit.map((item) => ({
        "Unit Name": item.ingredientUnit_name,
        Description: item.description,
        id: item._id || "",
      }));
      setIngredientsUnitData(updatedData);
    };
    fetchData();
  }, []);

  return (
    <>
       
      <div className="w-100">
        <TableComponent
          PageName="listIngredientsUnit"
          deleteRoute="/setting/ingredientUnit/delete"
          data={ingredientsUnitData}
          currentPage={currentPage}
          rowsPerPage={rowsPerPage}
          searchText={searchText}
          handleSearch={handleSearch}
          handlePageChange={handlePageChange}
          handleRowsPerPageChange={handleRowsPerPageChange}
          exportToCsv={exportToCsv}
          totalPages={Math.ceil(ingredientsUnitData.length / rowsPerPage)}
          startPage={1}
          endPage={3}
          pageNumbers={[1, 2, 3]}
        />
      </div>
    </>
  );
};

const List_Ingredients_Unit = () => {
  return <Main_Layout Content={Content} heading="Ingredient Units" />;
};

export default List_Ingredients_Unit;
