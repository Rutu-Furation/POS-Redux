import React, { useEffect, useState } from "react";
import { Main_Layout, TableComponent, callApi } from "../../../components/index.js";
import { useDispatch, useSelector } from "react-redux";
import { getmodifier } from "../../../redux/Items/Modifier/Modifier.action.js";

const Content = () => {
  const [modifier, setModifier] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchText, setSearchText] = useState("");

  const dispatch = useDispatch()

  const {isLoading, isError, modifierData} = useSelector((state) => state.modifier)
 

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
      // const res = await callApi("GET", "/setting/modifier/list");
      dispatch(getmodifier())

      // console.log("list modifier", res.modifier);
      const updatedData = modifierData.modifier.map((item) => ({
        "Category Name": item.foodCategory?.name || "Nan",
        Price: item.price || "price",

        Description: item.description,
        "Total Ingredients": item.ingredients?.length || 1,
        "Total Cost": item.total_cost || "total_cost",
        "Added By": "Admin User",
        id: item._id || "",
      }));
      setModifier(updatedData);
    };
    fetchData();
  }, []);

  return (
    <>
      
      <div className="w-100">
        <TableComponent
          PageName="listModifier"
          data={modifier}
          deleteRoute="/setting/modifier/delete"
          currentPage={currentPage}
          rowsPerPage={rowsPerPage}
          searchText={searchText}
          handleSearch={handleSearch}
          handlePageChange={handlePageChange}
          handleRowsPerPageChange={handleRowsPerPageChange}
          exportToCsv={exportToCsv}
          totalPages={Math.ceil(modifier.length / rowsPerPage)}
          startPage={1}
          endPage={3}
          pageNumbers={[1, 2, 3]}
          pagename="Modifer"
        />
      </div>
      {/* </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

const List_Modifier = () => {
  return <Main_Layout Content={Content} heading="Modifiers" />;
};

export default List_Modifier;
