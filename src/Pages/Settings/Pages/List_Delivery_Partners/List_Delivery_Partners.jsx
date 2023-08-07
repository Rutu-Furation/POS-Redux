import React, { useEffect, useState } from "react";

import {
  callApi,
  TableComponent,
  HeadNav,
  SideBar,
  SideBar_Links,
} from "../../../../components/index";

const List_Delivery_Partners = () => {
  const [DeliveryPartners, setDeliveryPartners] = useState([]);
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
        const res = await callApi("GET", "/setting/deliveryPartner/list");

        console.log("ingredientsall", res.deliveryPartners);
        const updatedData = res.deliveryPartners.map((item) => ({
          Name: item.DeliveryPartner_name || "DeliveryPartner_name",
          Description: item.description || "Description",
          Logo:
            item.logo ||
            "https://media.istockphoto.com/id/1404531423/photo/aerial-view-of-container-ship.webp?b=1&s=170667a&w=0&k=20&c=rSDM0l-MqCRm3va-7mtN9M5zPBs2NoWoqa7v1TH0hHQ=",

          "Added By": "Admin User",
          id: item._id || "",
        }));
        setDeliveryPartners(updatedData);
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
                <h5 className="headerName">Ingredients</h5>
              </div>
              <div className="  w-100">
                <TableComponent
                  PageName="listIngredients"
                  data={DeliveryPartners}
                  currentPage={currentPage}
                  deleteRoute="/setting/deliveryPartner/delete"
                  rowsPerPage={rowsPerPage}
                  searchText={searchText}
                  handleSearch={handleSearch}
                  handlePageChange={handlePageChange}
                  handleRowsPerPageChange={handleRowsPerPageChange}
                  exportToCsv={exportToCsv}
                  totalPages={Math.ceil(DeliveryPartners.length / rowsPerPage)}
                  startPage={1}
                  endPage={3}
                  pageNumbers={[1, 2, 3]}
                  pagename="Delivery Partners"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default List_Delivery_Partners;
