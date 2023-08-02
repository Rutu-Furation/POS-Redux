import React, { useState, useRef, useEffect } from "react";
import "./POS_PDF.css";
import { useReactToPrint } from "react-to-print";
const POS_PDF = () => {
  const [printedData, SetPrintedData] = useState([]);
  const PdfModal = useRef();
  const useEffect = () => SetPrintedData();

  const GengeratePDF = useReactToPrint({
    content: () => PdfModal.current,

    documentTitle: "Order Details",
    onAfterPrinta: () => alertalert("order details is saved"),
  });

  return (
    <div>
      POS_PDF
      <div
        ref={PdfModal}
        style={{
          width: "90%",
          margin: "auto",
          height: "60vh",
          border: "1px solid black",
        }}
      >
        <div className="m-auto    border border-primray">
          <p>are you getting layout</p>
          <button>Click</button>
          <br />

          <button>Click</button>
          <br />
          <button>Click</button>
          <br />

          <button>Click</button>
          <br />

          <button>Click</button>
        </div>
      </div>
      <button onClick={GengeratePDF}>Check PDF</button>
    </div>
  );
};

export default POS_PDF;
