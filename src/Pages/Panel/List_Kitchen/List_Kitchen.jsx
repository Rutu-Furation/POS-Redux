import React, { useEffect, useState } from "react";

import {
  callApi,
  SideBar_Links,
  SideBar,
  TableComponent,
  HeadNav,
} from "../../../components/index";

const List_Kitchen = () => {
  const [ingredientsData, setIngredientsData] = useState([]);
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
      const res = await callApi("GET", "/setting/kitchen/list");
      console.log("/setting/kitchen", res.kitchen);

      const updatedData = res.kitchen.map((item) => ({
        " Name": item?.kitchen_name || "name",
        outlet: item?.outlet?.outlet_name || "outlet",
        Categories:
          item?.outlet?.food_menus
            ?.map((categoryItem) => categoryItem)
            .join(", ") || "No Categories",
        "": "Enter",
        Priner: "",
        id: item._id || "",
      }));
      setIngredientsData(updatedData);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="d-flex">
        <SideBar />
        <div className="w-100">
          <HeadNav />
          <div className="d-flex">
            <SideBar_Links />
            <div className="w-100">
              <div className="HearderDiv">
                <h5 className="headerName">Kitchens</h5>
              </div>
              <div className="p-3">
                <TableComponent
                  PageName="listFoodMenuCategory"
                  data={ingredientsData}
                  currentPage={currentPage}
                  rowsPerPage={rowsPerPage}
                  searchText={searchText}
                  deleteRoute="/setting/kitchen/delete"
                  handleSearch={handleSearch}
                  handlePageChange={handlePageChange}
                  handleRowsPerPageChange={handleRowsPerPageChange}
                  exportToCsv={exportToCsv}
                  totalPages={Math.ceil(ingredientsData.length / rowsPerPage)}
                  startPage={1}
                  endPage={3}
                  pageNumbers={[1, 2, 3]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default List_Kitchen;
