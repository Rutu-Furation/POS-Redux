import React from "react";

const TableHeader = ({ headers }) => {
  return (
    <thead>
      <tr>
        {headers.map((header) => (
          <th key={header}>{header}</th>
        ))}
        <th>Actions</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
