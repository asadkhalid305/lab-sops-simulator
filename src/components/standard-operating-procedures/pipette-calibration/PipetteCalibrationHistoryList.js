import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import {
  getSopResults,
  selectSopResults,
} from "../../../pages/standard-operating-procedures/standardOperatingProceduresSlice";
import { Chip } from "@mui/material";
import { useEffect, useMemo } from "react";

const getPipetteDataTableRows = (data) => {
  console.log({ data });
  return data.map((row, idx) => {
    const newObj = {
      id: idx + 1,
      container_size: row.config?.container?.size,
      container_unit: row.config?.container?.unit,
      iterations: row.config?.iterations,
      readings: (row.readings || []).length,
      accuracy: `Accuracy: ${row.results.accuracy}`,
      status: row.isCompleted ? "Completed" : "Draft",
    };

    return newObj;
  });
};

let dataTableProps = {
  columns: [
    {
      field: "id",
      headerName: "S.No",
      sortable: true,
      align: "center",
      flex: 1,
    },
    {
      field: "container_size",
      headerName: "Container Size",
      sortable: true,
      align: "center",
      flex: 1,
    },
    {
      field: "container_unit",
      headerName: "Container Unit",
      sortable: false,
      align: "center",
      flex: 1,
    },
    {
      field: "iterations",
      headerName: "Iterations",
      sortable: true,
      align: "center",
      flex: 1,
    },
    {
      field: "readings",
      headerName: "Total Readings",
      sortable: false,
      align: "center",
      flex: 1,
    },
    {
      field: "accuracy",
      headerName: "Accuracy",
      sortable: false,
      align: "center",
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      sortable: false,
      align: "center",
      flex: 1,
      renderCell: ({ value }) => {
        return <Chip label={value} color="success" variant="outlined" />;
      },
    },
    {
      field: "actions",
      type: "actions",
      getActions: (params) => [
        <GridActionsCellItem
          icon={<span>abc</span>}
          onClick={() => {}}
          label="Delete"
        />,
      ],
    },
  ],
  rowsPerPageOptions: [5, 10],
  pageSize: 5,
};

export default function PipetteCalibrationDataTable() {
  const { sopResults } = useSelector(selectSopResults);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSopResults("pipette_calibration"));
  }, []);

  useEffect(() => {
    console.log({ sopResults });
  }, [sopResults]);

  // const dataRows = useMemo(() => {
  //   return getPipetteDataTableRows(sopResults);
  // }, [sopResults]);

  return (
    <div style={{ width: "1200px", height: "300px" }}>
      <DataGrid {...dataTableProps} rows={[]} />
    </div>
  );
}
