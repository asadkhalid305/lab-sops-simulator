import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import {
  getSopResults,
  selectSopResults,
} from "../../../pages/standard-operating-procedures/standardOperatingProceduresSlice";
import { Chip } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";

const getPipetteDataTableRows = (data) => {
  return data.map(({ id, config, readings, results, isCompleted }, idx) => {
    const newObj = {
      id,
      container_size: config?.container?.size,
      container_unit: config?.container?.unit,
      iterations: config?.iterations,
      readings: (readings || []).length,
      accuracy: `Accuracy: ${results.accuracy}`,
      status: isCompleted ? "Completed" : "Draft",
      isCompleted: isCompleted,
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
        return (
          <Chip
            label={value}
            color={value === "Completed" ? "success" : "primary"}
            variant="outlined"
          />
        );
      },
    },
  ],
  rowsPerPageOptions: [5, 10],
  pageSize: 5,
};

export default function PipetteCalibrationDataTable(props) {
  const sopResults = useSelector(selectSopResults);
  const [dataRows, setDataRows] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSopResults("pipette_calibration"));
  }, []);

  useEffect(() => {
    if (sopResults.length && !dataRows.length)
      setDataRows(getPipetteDataTableRows(sopResults));
  }, [sopResults, dataRows]);

  const navigate = useNavigate();
  const location = useLocation();
  const onEdit = (id) => {
    navigate(`${location.pathname}/${id}`);
  };

  let columns = [
    ...dataTableProps.columns,
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      getActions: (params) => {
        console.log({ params });
        let availableActions = [
          <GridActionsCellItem
            disabled={params.row.isCompleted === false}
            icon={<VisibilityIcon />}
            onClick={() => onEdit(params.row.id)}
            label="View"
          />,
          <GridActionsCellItem
            disabled={params.row.isCompleted === true}
            icon={<EditIcon />}
            onClick={() => onEdit(params.row.id)}
            label="Edit"
          />,
        ];
        return availableActions;
      },
    },
  ];

  return (
    <div style={{ width: "1200px", height: "300px" }}>
      <DataGrid {...dataTableProps} columns={columns} rows={dataRows} />
    </div>
  );
}
