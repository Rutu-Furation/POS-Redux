import React, { useEffect, useState } from "react";
import { Main_Layout, TableComponent, callApi } from "../../../components/index.js";
import { useDispatch, useSelector } from "react-redux";
import { deleteIngredientsCategoryData, getIngredientCategories } from "../../../redux/Items/IngredientsCategory/IngredientsCategory.action.js";

const Content = () => {
  const [ingredientsCategoryData, setIngredientsCategoryData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchText, setSearchText] = useState("");

  const dispatch = useDispatch()

  const {isLoading, isError, IngredientCategoryData} = useSelector((state) => state.Ingredientcategory)
  console.log(IngredientCategoryData)

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
    dispatch(getIngredientCategories())
  },[])

  useEffect(() => {
    if(IngredientCategoryData?.ingredientCategory){
      const updatedData = IngredientCategoryData.ingredientCategory.map((item) => ({
        Category: item.ingredientCategory_name,
        Description: item.description,
        "Added By": "Admin User",
        id: item._id || "",
      }));
      setIngredientsCategoryData(updatedData);
    }
  }, [IngredientCategoryData]);

  return (
    <>
      <div className="  w-100">
        <TableComponent
          PageName="listIngredientsCategory"
          data={ingredientsCategoryData}
          currentPage={currentPage}
          deleteRoute="/setting/ingredientCategory/delete"
          rowsPerPage={rowsPerPage}
          searchText={searchText}
          handleSearch={handleSearch}
          handlePageChange={handlePageChange}
          handleRowsPerPageChange={handleRowsPerPageChange}
          exportToCsv={exportToCsv}
          totalPages={Math.ceil(ingredientsCategoryData.length / rowsPerPage)}
          startPage={1}
          endPage={3}
          pageNumbers={[1, 2, 3]}
          pagename="Ingredient Category"
          isLoading={isLoading}
DeleteRedux={deleteIngredientsCategoryData}
        />
      </div>
    </>
  );
};

const List_Ingredient_Category = () => {
  return <Main_Layout Content={Content} heading="Ingredient Categories" />;
};

export default List_Ingredient_Category;
