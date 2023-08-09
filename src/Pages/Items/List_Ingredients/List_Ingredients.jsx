import React, { useEffect, useState } from "react";

import { Main_Layout, callApi, TableComponent } from "../../../components/index.js";
import { useDispatch, useSelector } from "react-redux";
import { getIngredients } from "../../../redux/Items/Ingredients/Ingredients.action.js";

const Content = () => {
  const [ingredientsData, setIngredientsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchText, setSearchText] = useState("");

  const dispatch = useDispatch()

  const { isLoading, isError, IngredientsData} = useSelector((state) => state.Ingredient)
  // console.log(IngredientData)

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
      try {
        // const res = await callApi("GET", "/setting/ingredient/list");

        dispatch(getIngredients())

        // console.log("ingredientsall", res.ingredient);
        const updatedData = IngredientsData?.ingredient.map((item) => ({
          Code: item.code,
          Name: item.name,
          Category: item.category?.ingredientCategory_name,
          "Purchase Unit": item.PurchaseUnit?.ingredientUnit_name,
          "Consumption Unit": item.ConsumptionUnit?.ingredientUnit_name,
          "Conversion Rate": item.ConversionRate,
          "Purchase Price": item.PurchaseRate,
          "Cost Per Unit": item.costUnit,
          "Low Quantity/Amount": item.LowQty,
          "Added By": "Admin User",
          id: item._id || "",
        }));
        setIngredientsData(updatedData);
      } catch (error) {
        console.error("Error fetching ingredients:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className=" w-100">
        <TableComponent
          PageName="listIngredients"
          data={ingredientsData}
          deleteRoute="/setting/ingredient/delete"
          currentPage={currentPage}
          rowsPerPage={rowsPerPage}
          searchText={searchText}
          handleSearch={handleSearch}
          handlePageChange={handlePageChange}
          handleRowsPerPageChange={handleRowsPerPageChange}
          exportToCsv={exportToCsv}
          totalPages={Math.ceil(ingredientsData.length / rowsPerPage)}
          startPage={1}
          endPage={3}
          pageNumbers={[1, 2, 3]}
          pagename="Ingredients"
          isLoading={isLoading}

        />
      </div>
    </>
  );
};

const List_Ingredients = () => {
  return <Main_Layout Content={Content} heading="Ingredients" />;
};

export default List_Ingredients;
