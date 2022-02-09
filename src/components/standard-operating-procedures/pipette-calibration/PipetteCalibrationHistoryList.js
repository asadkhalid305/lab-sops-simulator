import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useSelector } from "react-redux";
import DataTable from "../../platform/DataTable";
import { standardOperatingProceduresConstantUtil } from "../../../utils/standard-operating-procedures/standardOperatingProceduresConstantUtil";

let dataTableModel = {
  columns: [
    { field: "id", headerName: "S.No", sortable: true, align: "center" },
    {
      field: "container_size",
      headerName: "Container Size",
      sortable: true,
      align: "center",
    },
    {
      field: "container_unit",
      headerName: "Container Unit",
      sortable: false,
      align: "center",
    },
    {
      field: "iterations",
      headerName: "Iterations",
      sortable: true,
      align: "center",
    },
    {
      field: "readings",
      headerName: "Readings",
      sortable: false,
      align: "center",
    },
    {
      field: "results",
      headerName: "Results",
      sortable: false,
      align: "center",
    },
    { field: "status", headerName: "Status", sortable: false, align: "center" },
  ],
  rows: [],
  isSelection: false,
  rowsPerPage: [5, 10],
  pageSize: 5,
};

export default function PipetteCalibrationHistoryList() {
  const { pipette_calibration: pipetteCalibration } = useSelector(
    selectSopsResultsHistory
  );

  dataTableModel.rows = pipetteCalibration.map((row, idx) => {
    let readings = "";
    row.readings.forEach((reading, idx) => {
      readings += `Reading ${idx + 1}: ${reading} `;
    });

    let results = "";
    let StatsMethodsDisplayTextMap =
      standardOperatingProceduresConstantUtil.StatsMethodsDisplayTextMap;
    Object.entries(row.results).forEach(([key, value]) => {
      results += `${StatsMethodsDisplayTextMap[key]}: ${value} `;
    });

    const newObj = {
      id: idx + 1,
      container_size: row.config?.container?.size,
      container_unit: row.config?.container?.unit,
      iterations: row.config?.iterations,
      readings: readings,
      results: results,
      status: row.isCompleted ? "Completed" : "Draft",
    };

    return newObj;
  });

  return (
    <DataTable
      columns={dataTableModel.columns}
      rows={dataTableModel.rows}
      rowsPerPage={dataTableModel.rowsPerPage}
      pageSize={dataTableModel.pageSize}
    />
  );
}
