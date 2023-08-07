import React, { useEffect, useMemo, useRef, useState } from "react";

import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import "aos/dist/aos.css";
import AOS from "aos";
import "./Table.css";
import { ImCopy } from "react-icons/im";
import { FiPrinter } from "react-icons/fi";
import { useReactToPrint } from "react-to-print";

import { BsFileEarmarkExcel } from "react-icons/bs";

import { images } from "../../assets";
import { Loading, callApi, toast, Toaster, Pagination } from "../index";
import TableHeader from "./Table_Headers";
import TableDataPrint from "./TableDataPrint/TableDataPrint";
import PdfExportButton from "./PDFGenerator/PDFGenerator ";
import { deleteAreaData } from "../../redux/Settings/Area/addArea.action";
import { useDispatch } from "react-redux";

const TableComponent = ({
  data,
  currentPage,
  rowsPerPage,
  searchText,
  handleSearch,
  handlePageChange,
  handleRowsPerPageChange,
  exportToCsv,
  totalPages,
  extraButton,
  deleteRoute,
  categories,
  pagename,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [tableHeaders, setTableHeaders] = useState([]);
  const [initialData, setInitialData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    AOS.init();
  }, []);
  const TableRef = useRef();
  useEffect(() => {
    if (data.length !== 0) {
      setIsLoading(false);
      const keys = Object.keys(data[0]).filter(
        (key) => key !== "SN" && key !== "id"
      );
      setTableHeaders(["SN", ...keys]);
      setInitialData(data); // Set the initialData state when data prop changes
    } else {
      setIsLoading(true);
    }
  }, [data]);

  // Filtering the data based on the search text
  const filteredData = useMemo(() => {
    if (selectedCategory === "") {
      // If no category is selected, return all data
      return initialData.filter((item) =>
        Object.values(item).some((value) =>
          String(value).toLowerCase().includes(searchText.toLowerCase())
        )
      );
    } else {
      // Filter data based on the selected category
      return initialData
        .filter((item) =>
          item["Category"]
            .toLowerCase()
            .includes(selectedCategory.toLowerCase())
        )
        .filter((item) =>
          Object.values(item).some((value) =>
            String(value).toLowerCase().includes(searchText.toLowerCase())
          )
        );
    }
  }, [selectedCategory, searchText, initialData]);

  // Pagination
  const paginatedData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );
 
  const handleDelete = async (dataId) => {
    try {
      let res = await callApi("DELETE", `${deleteRoute}/${dataId}`);
      toast.success("Item deleted successfully");
      playSoundEffect();
      const updatedData = initialData.filter((item) => item.id !== dataId);
      setInitialData(updatedData);
    } catch (error) {
      toast.error("Failed to delete item:", error);
    }
  };

  const playSoundEffect = () => {
    const scriptURL = new URL(import.meta.url);
    const soundURL = new URL(
      "../../assets/stop-13692.mp3",
      scriptURL
    ).toString();
    const audio = new Audio(soundURL);
    audio.play();
  };

  exportToCsv = () => {
    const dataToExport = [...paginatedData];
    const header = tableHeaders;
    dataToExport.unshift(header);
    const csvData = dataToExport.map((row) => {
      return Object.values(row).map((value) => String(value));
    });
    const csvContent =
      "data:text/csv;charset=utf-8," +
      csvData.map((row) => row.join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "table_data.csv");
    document.body.appendChild(link);
    link.click();
  };

  const handleCopy = () => {
    const dataToCopy = paginatedData.map((item) => {
      return tableHeaders.map((header) => {
        if (header === "Logo" && item[header]) {
          return item[header];
        } else if (header === "" && item[header] === "Enter") {
          return "Enter";
        } else {
          return Array.isArray(item[header])
            ? item[header].length
            : item[header];
        }
      });
    });

    const headerRow = tableHeaders.join("\t");
    const dataRows = dataToCopy.map((row) => row.join("\t"));

    const csvData = [headerRow, ...dataRows].join("\n");

    try {
      navigator.clipboard.writeText(csvData);
      toast.success("Table data copied to clipboard");
      playSoundEffect();
    } catch (error) {
      toast.error("Failed to copy table data to clipboard");
    }
  };

  const handleBillPrint = useReactToPrint({
    content: () => TableRef.current,
  });

  console.log("pagename", pagename);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="tableMainDiv d-flex w-100">
        <div className="w-100" style={{ fontSize: "13px", width: "100%" }}>
          <div className="d-flex">
            <div className="w-100">
              <div className="FunctionalDiv d-flex justify-content-between">
                <div className="paginationAndSearchDiv d-flex gap-3 justify-content-around">
                  <div className="pagination-limit">
                    <span>Entries</span>
                    <select
                      value={rowsPerPage}
                      onChange={handleRowsPerPageChange}
                      className="limit-select"
                    >
                      <option value="5">5</option>
                      <option value="10">10</option>
                      <option value="15">15</option>
                    </select>
                  </div>
                  <div className="search-container">
                    <img src={images.search} alt="" />
                    <input
                      type="text"
                      value={searchText}
                      onChange={handleSearch}
                      placeholder="Search here..."
                    />
                  </div>
                </div>
                <div className=" buttonGroup d-flex    ">
                  {/* Export button */}
                  {extraButton && (
                    <div className="filter-by-category">
                      <label>Filter by category</label>
                      <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                      >
                        <option value="">Select</option>
                        {categories?.map((category, index) => (
                          <option key={index} value={category}>
                            {category}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  <div
                    //  onClick={exportToCsv}
                    className="export-btnDiv"
                  >
                    <img src={images.share} alt="" />
                    {/* <button className="export-btn">Export</button> */}
                    <div className="dropdown">
                      <button
                        className="dropDownButton"
                        type="button"
                        id={`actionDropdown`}
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Export
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby={`actionDropdown `}
                      >
                        <li>
                          <TableDataPrint
                            props={paginatedData}
                            ref={TableRef}
                          />

                          <button
                            onClick={() => {
                              handleBillPrint();
                            }}
                            className="dropdown-item"
                            type="button"
                          >
                            <span className="m-1">
                              <FiPrinter />
                            </span>{" "}
                            Print
                          </button>
                        </li>
                        <li>
                          <button
                            className="dropdown-item"
                            type="button"
                            onClick={() => handleCopy()} // Add the onClick event for copy functionality
                          >
                            <span className="m-1">
                              <ImCopy />
                            </span>{" "}
                            Copy
                          </button>
                        </li>
                        <li>
                          <button
                            className="dropdown-item"
                            type="button"
                            onClick={exportToCsv}
                          >
                            <span className="m-1">
                              <BsFileEarmarkExcel />
                            </span>{" "}
                            Excel
                          </button>
                        </li>

                        <li>
                          {/* <button
                            className="dropdown-item"
                            type="button"
                            
                          >
                              <span className="m-1">
                              <RiDeleteBin6Line />
                               
                            </span>{" "}
                            PDF  

                          
                          </button> */}
                          <PdfExportButton
                            tableHeaders={tableHeaders}
                            paginatedData={paginatedData}
                            pagename={pagename}
                          />
                        </li>
                      </ul>
                    </div>
                    <img src={images.Vector} alt="" />
                  </div>
                </div>
              </div>

              <div className="tableWrapper">
                <table className="tableComponents">
                  {/* Table headers */}
                  {/* <thead>
                    <tr>
                      {tableHeaders.map((header) => (
                        <th key={header}>{header}</th>
                      ))}
                      <th>Actions</th>
                    </tr>
                  </thead> */}
                  <TableHeader headers={tableHeaders} />
                  {/* Table body */}
                  <tbody>
                    {paginatedData.length === 0 ? (
                      <tr>
                        <td colSpan={tableHeaders.length + 1}>No Data Found</td>
                      </tr>
                    ) : (
                      paginatedData.map((item, index) => (
                        <tr
                          key={index}
                          className={index % 2 === 1 ? "alternet-row" : ""}
                        >
                          <td>{index + 1}</td>
                          {tableHeaders.slice(1).map((header) => (
                            <td key={header}>
                              {header === "Logo" && item[header] ? (
                                <img
                                  src={item[header]}
                                  alt="Logo"
                                  className="logo-image"
                                />
                              ) : header === "" && item[header] === "Enter" ? (
                                <button className="enterButton">Enter</button>
                              ) : (
                                <>
                                  {Array.isArray(item[header])
                                    ? `  ${item[header].length}`
                                    : item[header]}
                                </>
                              )}
                            </td>
                          ))}
                          <td>
                            <div className="dropdown">
                              <button
                                className="dropDownButton"
                                type="button"
                                id={`actionDropdown${index}`}
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <BsThreeDotsVertical />
                              </button>
                              <ul
                                className="dropdown-menu"
                                aria-labelledby={`actionDropdown${index}`}
                              >
                                <li>
                                  <button
                                    className="dropdown-item"
                                    type="button"
                                  >
                                    <span className="m-1">
                                      <AiOutlineEdit />
                                    </span>{" "}
                                    Edit
                                  </button>
                                </li>
                                <li>
                                  <button
                                    className="dropdown-item"
                                    type="button"
                                    onClick={() => handleDelete(item.id)} // Pass the appropriate data ID here
                                  >
                                    <span className="m-1">
                                      <RiDeleteBin6Line />
                                    </span>{" "}
                                    Delete
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
              {/* Pagination */}
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                handlePageChange={handlePageChange}
                itemCount={filteredData?.length}
                rowsPerPage={rowsPerPage}
              />
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default TableComponent;
