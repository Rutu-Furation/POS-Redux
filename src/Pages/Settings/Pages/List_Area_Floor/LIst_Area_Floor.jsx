import React, { useEffect, useState } from "react";

import {
  callApi,
  HeadNav,
  TableComponent,
  SideBar,
  SideBar_Links,
} from "../../../../components/index";

const List_Area_Floor = () => {
  const [AreaData, setAreaData] = useState([]);
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
      try {
        const res = await callApi("GET", "/setting/area/list");

        console.log("/setting/area", res.areas);
        const updatedData = res.areas.map((item) => ({
          Outlet: item.outlet_id.outlet_name || "outlet",
          Name: item.area_name || "area name",
          description: item.description || "description",
          id: item._id || "",
        }));
        setAreaData(updatedData);
      } catch (error) {
        console.error("Error fetching ingredients:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="d-flex">
        <SideBar />
        <div
          className="overflow-scroll"
          style={{ fontSize: "12px", width: "100%" }}
        >
          <HeadNav />
          <div className="d-flex w-100">
            <SideBar_Links openLinksFor="settingsLinks" />
            <div className="w-100">
              <div className="HearderDiv">
                <h5 className="headerName"> Area/Floors</h5>
              </div>
              <div className="  w-100">
                <TableComponent
                  PageName="listIngredients"
                  data={AreaData}
                  deleteRoute="/setting/area/delete"
                  currentPage={currentPage}
                  rowsPerPage={rowsPerPage}
                  searchText={searchText}
                  handleSearch={handleSearch}
                  handlePageChange={handlePageChange}
                  handleRowsPerPageChange={handleRowsPerPageChange}
                  exportToCsv={exportToCsv}
                  totalPages={Math.ceil(AreaData.length / rowsPerPage)}
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

export default List_Area_Floor;
