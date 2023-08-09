// Pagination.js
import React from "react";
import { images } from "../../assets";

const Pagination = ({
  currentPage,
  totalPages,
  handlePageChange,
  itemCount,
  rowsPerPage,
}) => {
  const generatePageNumbers = () => {
    const MAX_PAGE_BUTTONS = 2; // Maximum number of page buttons to show
    const halfButtons = Math.floor(MAX_PAGE_BUTTONS / 2);

    let startPage = Math.max(1, currentPage - halfButtons);
    let endPage = Math.min(startPage + MAX_PAGE_BUTTONS - 1, totalPages);

    if (endPage - startPage < MAX_PAGE_BUTTONS - 1) {
      startPage = Math.max(1, endPage - MAX_PAGE_BUTTONS + 1);
    }

    const pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    if (startPage > 1) {
      if (startPage > 2) pageNumbers.unshift("..");
      pageNumbers.unshift(1);
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) pageNumbers.push("..");
      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };
  console.log("itemCount", itemCount);
  const pageNumbers = generatePageNumbers();

  return (
    <div className="pagination-container">
      <div className="NumberofDataDiv">
        <p>
          Showing{" "}
          {Math.min(
            itemCount === 0 ? 0 : (currentPage - 1) * rowsPerPage + 1,
            itemCount
          )}{" "}
          to {Math.min(currentPage * rowsPerPage, itemCount)} of {itemCount}{" "}
          entries
        </p>
      </div>
      <div className="pagination">
        <img
          onClick={() =>
            handlePageChange((prevPage) =>
              prevPage > 1 ? prevPage - 1 : prevPage
            )
          }
          className={currentPage === 1 ? "disableImg" : "activeImg"}
          src={images?.preVector}
          alt=""
        />

        {pageNumbers.map((number, index) =>
          typeof number === "number" ? (
            <button
              key={index}
              onClick={() => handlePageChange(number)}
              className={currentPage === number ? "active" : ""}
            >
              {number}
            </button>
          ) : (
            <span key={index} className="ellipsis">
              {number}
            </span>
          )
        )}
        <img
          onClick={() =>
            handlePageChange((prevPage) =>
              prevPage < totalPages ? prevPage + 1 : prevPage
            )
          }
          className={currentPage === totalPages ? "disableImg" : "activeImg"}
          src={images?.paginatoinVector}
          alt=""
        />
      </div>
    </div>
  );
};

export default Pagination;
