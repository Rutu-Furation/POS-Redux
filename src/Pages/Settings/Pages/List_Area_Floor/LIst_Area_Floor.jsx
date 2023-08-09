import React, { useEffect, useState } from "react";

import {
  callApi,
  HeadNav,
  TableComponent,
  SideBar,
  SideBar_Links,
} from "../../../../components/index";
import { deleteAreaData, getAreaData } from "../../../../redux/Settings/Area/addArea.action";
import { useDispatch, useSelector } from "react-redux";

const List_Area_Floor = () => {
  const [Areadata, setAreadata] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchText, setSearchText] = useState("");

  const { isLoading, isError, AreaData } = useSelector((state) => state.Area);

  console.log("AreaData", AreaData.areas);
  const dispatch = useDispatch();

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
    dispatch(getAreaData());
    
  }, []);

  useEffect(() => {
    if (AreaData.areas) {
      const updatedData = AreaData.areas.map((item) => ({
        Outlet: item.outlet_id.outlet_name || "outlet",
        Name: item.area_name || "area name",
        description: item.description || "description",
        id: item._id || "",
      }));
      setAreadata(updatedData);
    }
  }, [AreaData]);

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
                  data={Areadata}
                  deleteRoute="/setting/area/delete"
                  currentPage={currentPage}
                  rowsPerPage={rowsPerPage}
                  searchText={searchText}
                  handleSearch={handleSearch}
                  handlePageChange={handlePageChange}
                  handleRowsPerPageChange={handleRowsPerPageChange}
                  exportToCsv={exportToCsv}
                  totalPages={Math.ceil(Areadata.length / rowsPerPage)}
                  startPage={1}
                  endPage={3}
                  pageNumbers={[1, 2, 3]}
                  pagename="Area"
                  isLoading={isLoading}
                  DeleteRedux={deleteAreaData}
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
