import React, { useEffect, useState } from "react";

import {
  Main_Layout,
  HeadNav,
  TableComponent,
  SideBar,
  SideBar_Links,
  callApi,
} from "../../../../components/index";
import { useDispatch, useSelector } from "react-redux";
import { getTableList } from "../../../../redux/Settings/table/table.action";

const Content = () => {
  const [Table, setTable] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchText, setSearchText] = useState("");

  const { isLoading, isError, TableListData } = useSelector(
    (state) => state.table
  );
  console.log("TableListData", TableListData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTableList());
  }, []);
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
        const updatedData = TableListData.tables.map((item) => ({
          "Area/Floor": item?.area_id?.area_name || "area name",
          "Table Name": item.name || "table name",
          "Seat Capacity": item.sit_capacity || 0,
          Description: item.description || "description",
          Outlet: item.outlet_name || "Outlet",
          id: item._id || "",
        }));
        setTable(updatedData);
      } catch (error) {
        console.error("Error fetching ingredients:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="  w-100">
        <TableComponent
          PageName="listIngredients"
          data={Table}
          deleteRoute="/setting/table/delete"
          currentPage={currentPage}
          rowsPerPage={rowsPerPage}
          searchText={searchText}
          handleSearch={handleSearch}
          handlePageChange={handlePageChange}
          handleRowsPerPageChange={handleRowsPerPageChange}
          exportToCsv={exportToCsv}
          totalPages={Math.ceil(Table.length / rowsPerPage)}
          startPage={1}
          endPage={3}
          pageNumbers={[1, 2, 3]}
          pagename="Tables"
        />
      </div>
    </>
  );
};

const List_Tables = () => {
  return <Main_Layout Content={Content} heading="Tables" />;
};

export default List_Tables;
