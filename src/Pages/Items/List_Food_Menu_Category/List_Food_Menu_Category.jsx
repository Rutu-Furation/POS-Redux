import React, { useEffect, useState } from "react";
import {
  callApi,
  TableComponent,
  Main_Layout,
} from "../../../components/index.js";

const Content = () => {
  const [FoodMenuCategory, setFoodMenuCategory] = useState([]);
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
      const res = await callApi("GET", "/setting/foodcategory/list");
      console.log("foodCategoryData", res.foodCategory);

      const updatedData = res.foodCategory.map((item) => ({
        "Category Name": item.name || "Nan",
        Description: item.description,
        id: item._id || "",
      }));
      setFoodMenuCategory(updatedData);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className=" ">
        <TableComponent
          PageName="listFoodMenuCategory"
          data={FoodMenuCategory}
          deleteRoute="/setting/foodcategory/delete"
          currentPage={currentPage}
          rowsPerPage={rowsPerPage}
          searchText={searchText}
          handleSearch={handleSearch}
          handlePageChange={handlePageChange}
          handleRowsPerPageChange={handleRowsPerPageChange}
          exportToCsv={exportToCsv}
          totalPages={Math.ceil(FoodMenuCategory.length / rowsPerPage)}
          startPage={1}
          endPage={3}
          pageNumbers={[1, 2, 3]}
        />
      </div>
    </>
  );
};

const List_Food_Menu_Category = () => {
  return <Main_Layout Content={Content} heading="Food Menu Categories" />;
};

export default List_Food_Menu_Category;
