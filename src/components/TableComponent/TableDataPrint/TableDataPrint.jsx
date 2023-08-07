import React from "react";
import "./TableDataPrint.css";

const TableDataPrint = React.forwardRef((props, ref) => {
  const data = props.props;

  if (!data || data.length === 0) {
    return null; // Return null if data is empty or undefined
  }

  const currentDate = new Date().toLocaleDateString();

  // Filter out the "_id" key from headers
  const headers = Object.keys(data[0]).filter((header) => header !== "id");

  const rows = data.map((item) => {
    // Filter out the "_id" key from each row
    const rowWithoutId = Object.keys(item).reduce((acc, key) => {
      if (key !== "id") {
        acc[key] = item[key];
      }
      return acc;
    }, {});
    return Object.values(rowWithoutId);
  });
  const formatCellValue = (cellValue) => {
    if (Array.isArray(cellValue)) {
      // If the cellValue is an array, display its length
      return `Array[${cellValue.length}]`;
    } else if (typeof cellValue === "object" && cellValue !== null) {
      // If the cellValue is an object, convert it into a readable string
      return JSON.stringify(cellValue);
    }

    return cellValue;
  };

  return (
    <div className="hidden-print" ref={ref}>
      <div className="print-date">Current Date: {currentDate}</div>
      <table className="print-table">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cellValue, cellIndex) => (
                <td key={cellIndex}>{formatCellValue(cellValue)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
});

export default TableDataPrint;
