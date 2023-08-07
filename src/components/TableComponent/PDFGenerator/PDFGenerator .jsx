import React from "react";
import { BsFileEarmarkPdf } from "react-icons/bs";
import jsPDF from "jspdf";
import "jspdf-autotable";

const PdfExportButton = ({ pagename, tableHeaders, paginatedData }) => {
  const exportToPdf = () => {
    const doc = new jsPDF();

    // Set the table headers
    const headers = tableHeaders.slice(1); // Remove the first element "SN" from headers

    // Map the paginatedData into an array of arrays
    const tableData = paginatedData.map((item) =>
      headers.map((header) => {
        if (header === "Logo" && item[header]) {
          // If the header is "Logo" and it has a value, return the image URL
          return item[header];
        } else if (header === "" && item[header] === "Enter") {
          // If the header is an empty string and it has the value "Enter", return "Enter"
          return "Enter";
        } else {
          // Otherwise, return the value of the item corresponding to the header
          return Array.isArray(item[header])
            ? item[header].length
            : item[header];
        }
      })
    );

    // Set the table width and height based on the number of columns and rows
    const tableWidth = "100%"; // Set the table width to 100%
    const tableHeight = 10 + (tableData.length + 1) * 7; // 10 for table header and 7 for each row

    // Set the table header
    doc.setFont("helvetica", "bold");
    doc.setTextColor("#FFFFFF"); // Set header text color to white
    doc.setFillColor(47, 24, 105); // Set header background color to #2F1869
    doc.setFontSize(12);
    doc.text("Table Data", 15, 15);

    // Generate the table with custom styles
    doc.autoTable({
      head: [headers],
      body: tableData,
      startY: 20,
      tableWidth, // Set the table width to 100%
      theme: "striped", // Use "striped" theme for alternate background color
      styles: {
        textColor: [0, 0, 0], // Set table text color to black
        cellPadding: 4, // Set padding for table cells
        fontSize: 10, // Set font size for table text
        lineColor: [0, 0, 0], // Set table border color to black
        lineWidth: 0.1, // Set table border width
      },
      headStyles: {
        fillColor: [47, 24, 105], // Set header background color to #2F1869
        textColor: "#FFFFFF", // Set header text color to white
      },
      alternateRowStyles: {
        fillColor: [245, 245, 245], // Set alternate row background color to light grey
      },
    });

    // Add the date and time to the top left of the PDF
    const currentDate = new Date().toLocaleDateString();
    const currentTime = new Date().toLocaleTimeString();
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text(`Date: ${currentDate}    Time: ${currentTime}`, 15, 10);

    // Save the PDF with a specific name
    doc.save(`${pagename}.pdf`);
  };

  return (
    <li>
      <button className="dropdown-item" type="button" onClick={exportToPdf}>
        <span className="m-1">
          <BsFileEarmarkPdf />
        </span>{" "}
        PDF
      </button>
    </li>
  );
};

export default PdfExportButton;
