import React, { useEffect, useState } from "react";
import "./Tables.css";
import { Link, useNavigate } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";
import { useQuery } from "react-query";
import {
  callApi,
  Loading,
  Settings_Button,
  SideBar,
  SideBar_Links,
} from "../../../components/index";
import { GiHamburgerMenu } from "react-icons/gi";
import POS_Nav from "../POS_Nav/POS_Nav";
// import POS_Nav from "../POS_Nav/POS_Nav";

const Tables = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const nav = useNavigate();
  const [selectedTable, setSelectedTable] = useState("");
  const saveDataToLocalStorage = (data) => {
    localStorage.setItem("tabledata", JSON.stringify(data));
  };

  const handleButtonClick = (item) => {
    setSelectedTable(item);
  };

  useEffect(() => {
    if (selectedTable !== "") {
      saveDataToLocalStorage(selectedTable);
      nav("/panel/pos");
    }
  }, [selectedTable]);

  const GetArea = async () => {
    const res = await callApi("GET", "/setting/area/list");
    return res.areas;
  };
  const orderStatusColors = {
    Running: "#9ddbfb",
    Printed: "#9ce37b",
    Paid: "#f8e1b9",
    KOT: "#fee181",
  };

  const {
    data: areaData,
    isLoading,
    isError,
    error,
    isSuccess,
    isFetching,
  } = useQuery("areaData", GetArea);

  if (isLoading) {
    return <Loading />;
  }

  if (isSuccess) {
    console.log("From Cache");
  }

  if (isFetching) {
    console.log("From Database");
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (isError) {
    return <div>There is a problem with fetching data</div>;
  }

  if (!areaData) {
    return <div>No data available.</div>;
  }

  return (
    <div>
      <POS_Nav />
      <div className=" d-flex flex-wrap  flex-column flex-md-row flex-sm-row align-items-start align-items-md-center d-flex p-2  justify-content-start justify-content-sm-between justify-content-md-between">
        <div className="  p-2 gap-1   flex-column flex-md-row flex-sm-row  d-flex justify-content-around">
          <div>
            <Settings_Button className="w-100 topBtns" btnTxt="Take away" />
          </div>
          <div>
            <Settings_Button className="w-100 topBtns" btnTxt="  Delivery" />
          </div>
          <div>
            <Settings_Button
              className="w-100 topBtns"
              btnTxt="+ Table Reservation"
            />
          </div>
        </div>
        <div className="p-2">
          <Link to="/settings/addTable">
            <Settings_Button className="w-100 topBtns" btnTxt="+ Add Table" />
          </Link>
        </div>
      </div>
      <div className="main-dotts-table-div  d-flex p-3 gap-3  justify-content-start  flex-wrap ">
        <div className=" dotts-table d-flex gap-3   justify-content-between align-content-center">
          <div className="dotts-gray rounded-circle   "></div>
          <p className=" "> Blank Table</p>
        </div>
        <div className="dotts-table d-flex gap-3   justify-content-between align-content-center">
          <div className=" dotts-blue        rounded-circle "></div>

          <p className=" "> Running Table</p>
        </div>
        <div className="dotts-table d-flex gap-3   justify-content-between align-content-center">
          <div className="dotts-green   rounded-circle "></div>
          <p className=" "> Printed Table</p>
        </div>
        <div className="dotts-table d-flex gap-3   justify-content-between align-content-center">
          <div className="dotts-pink   rounded-circle "></div>
          <p className=" "> Paid Table</p>
        </div>

        <div className="dotts-table d-flex gap-3   justify-content-between align-content-center">
          <div className="dotts-dark   rounded-circle "></div>
          <p className=" ">Running KOT Table</p>
        </div>
      </div>

      <div className="p-3">
        {areaData?.map((item, index) => (
          <div className="row g-2 mb-5" key={index}>
            <div className="col-12">
              <p className="text-capitalize">{item?.area_name}</p>
            </div>

            {item?.tables.map((tableId, tableIndex) => {
              const orderStatus = tableId.order?.order_status; // Assuming order_status is available in tableId object
              const bgColor = orderStatusColors[orderStatus] || "#dee2e6";

              return (
                <div
                  className="col-lg-1 col-md-2 col-sm-2 mb-1  tableCard"
                  key={tableIndex}
                >
                  <div
                    onClick={() => handleButtonClick(tableId)}
                    className="Ground-Floor-div"
                    style={{ background: bgColor }}
                    title={tableId?.name}
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-aos="zoom-out-up"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-duration="600"
                  >
                    <p className=" tableName m-0 p-0 text-capitalize">
                      {tableId?.name.length > 11
                        ? `${tableId?.name.slice(0, 11)}..`
                        : tableId?.name}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
      {/* siderbar */}
      <div
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        tabIndex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div className="offcanvas-body p-0">
          <div className="d-flex w-100">
            <SideBar />
            <SideBar_Links />
          </div>
        </div>
      </div>

      {/* siderbarclose */}
    </div>
  );
};

export default Tables;
