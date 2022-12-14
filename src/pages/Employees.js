import { AgGridReact } from "ag-grid-react";
import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation/Navigation";

import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-alpine.css"; // Optional theme CSS
import Nodata from "../components/NotFound/Nodata";

const Employees = () => {
  const [page, setPage] = useState(10);
  const [columnDefs] = useState([
    { field: "First Name", filter: "agTextColumnFilter", floatingFilter: true },
    { field: "Last Name" },
    { field: "Date of Birth" },
    { field: "Start Date" },
    { field: "Street" },
    { field: "City" },
    { field: "State" },
    { field: "Zip Code" },
    { field: "Department" },
  ]);

  const [rowData, setRowData] = useState([]);
  const paginationPageSize = page;
  const pagination = true;
  const defaultColDef = {
    sortable: true,
    resizable: true,
    width: 131,
  };

  useEffect(() => {
    const employee = JSON.parse(localStorage.getItem("employee"));
     setRowData(employee);
  }, []);


  return (
    <>
      <div>
        <Navigation />
        {rowData !== null  ? (
          <div>
            <div className="flex justify-center mt-4">
              <span>Show</span>
              <select
                name="paginationNumber"
                id="paginationNumber"
                onChange={(e) => setPage(e.target.value)}
              >
                <option>10</option>
                <option>25</option>
                <option>50</option>
                <option>100</option>
              </select>
              <span>entries</span>
            </div>
            <div className="flex justify-center mt-2">
              <div
                className="ag-theme-alpine"
                style={{ width: 1200, height: 500 }}
              >
                {" "}
                <AgGridReact
                  defaultColDef={defaultColDef}
                  columnDefs={columnDefs}
                  rowData={rowData}
                  animateRows={true}
                  pagination={pagination}
                  paginationPageSize={paginationPageSize}
                />
              </div>
            </div>
          </div>
        ) : (
          <Nodata />
        )}
      </div>
    </>
  );
};

export default Employees;
