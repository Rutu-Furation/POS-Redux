import React, { useEffect, useMemo, useState } from "react";
import {
  TableComponent,
  Main_Layout,
  callApi,
  toast,
  Toaster,
} from "../../../components/index.js";
import { useDispatch, useSelector } from "react-redux";
import { GetFoodMenu } from "../../../redux/Items/FoodMenu/FoodMenu.actions.js";
const Content = () => {
  const [foodMenu, setFoodMenu] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchText, setSearchText] = useState("");

  const dispatch = useDispatch()

  const {isLoading, isError, FoodMenuData} = useSelector((state) => state.foodMenu)
  console.log(FoodMenuData)

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

    dispatch(GetFoodMenu())
  },[])

  useEffect(() => {
   
     if(FoodMenuData?.data?.foodMenu){

      const updatedData = FoodMenuData?.data?.foodMenu?.map((item) => ({
        "Food Menu Type": item.food_category?.name || "Nan",
        Code: item.code || "Code",
        Name: item.name || "name",
        "Takeaway Price": item.Takeaway_price,
        Category: item.food_category?.name || "Category",
        "Sale Price (DI-TA)": `${item.Dine_price}-${item.Takeaway_price}`, //it would be change,
        "Total Ingredients": item.ingredients || 1,
        "Total Cost": "....",
        id: item._id || "",
      }));
      setFoodMenu(updatedData);

    }
  }, [FoodMenuData]);

  const categories = useMemo(() => {
    const uniqueCategories = [
      ...new Set(foodMenu.map((item) => item["Category"])),
    ];
    return uniqueCategories;
  }, [foodMenu]);

  return (
    <>
      <div className=" ">
        <TableComponent
          PageName="listFoodMenu"
          data={foodMenu}
          deleteRoute="/setting/foodmenu/delete"
          currentPage={currentPage}
          rowsPerPage={rowsPerPage}
          searchText={searchText}
          extraButton="Filter by category"
          handleSearch={handleSearch}
          handlePageChange={handlePageChange}
          handleRowsPerPageChange={handleRowsPerPageChange}
          exportToCsv={exportToCsv}
          totalPages={Math.ceil(foodMenu.length / rowsPerPage)}
          startPage={1}
          endPage={3}
          pageNumbers={[1, 2, 3]}
          categories={categories}
          pagename="Food Menu"
        />
      </div>
    </>
  );
};

const List_Food_Menu = () => {
  return <Main_Layout Content={Content} heading="Food Menu" />;
};

export default List_Food_Menu;
