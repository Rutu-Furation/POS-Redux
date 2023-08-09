import React, { useEffect, useState } from "react";
import {
  Main_Layout,
  callApi,
  TableComponent,
} from "../../../components/index.js";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteIngredientsUnitData,
  getIngredientUnits,
} from "../../../redux/Items/IngredientsUnit/IngredientsUnit.action.js";

const Content = () => {
  const [ingredientsUnitData, setIngredientsUnitData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchText, setSearchText] = useState("");

  const dispatch = useDispatch();

  const { isLoading, isError, IngredientUnitsData } = useSelector(
    (state) => state.IngredientsUnit
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
    console.log("Exporting CSV...");
  };

  // Fetching data from redux
  useEffect(() => {
    dispatch(getIngredientUnits());
  }, []);

  useEffect(() => {
    // Processing the data
    if (IngredientUnitsData?.ingredientUnit) {
      const updatedData = IngredientUnitsData.ingredientUnit.map((item) => ({
        "Unit Name": item.ingredientUnit_name,
        Description: item.description,
        id: item._id || "",
      }));
      setIngredientsUnitData(updatedData);
    }
  }, [IngredientUnitsData]);

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
          pagename="Ingredients Unit"
          isLoading={isLoading}
          DeleteRedux={deleteIngredientsUnitData}
        />
      </div>
    </>
  );
};

const List_Ingredients_Unit = () => {
  return <Main_Layout Content={Content} heading="Ingredient Units" />;
};

export default List_Ingredients_Unit;
