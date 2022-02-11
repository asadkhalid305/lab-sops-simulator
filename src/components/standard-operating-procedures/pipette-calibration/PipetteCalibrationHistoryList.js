// packages
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import { Chip } from "@mui/material";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";

// slices
import {
  getSopResults,
  selectSopResults,
  selectIsFetchingSopResults,
} from "../../../pages/standard-operating-procedures/standardOperatingProceduresSlice";

// utils
import { standardOperatingProceduresConstantUtil } from "../../../utils/standard-operating-procedures/standardOperatingProceduresConstantUtil";

// constants
const getPipetteDataTableRows = (data) => {
  return data.map(({ id, config, readings, results, isCompleted }, index) => ({
    id,
    s_no: index + 1,
    container_size: config?.container?.size,
    container_unit: config?.container?.unit,
    iterations: config?.iterations,
    readings: (readings || []).length,
    accuracy: `Accuracy: ${results.accuracy}`,
    status: isCompleted ? "Completed" : "Draft",
  }));
};

let dataTableProps = {
  columns: [
    {
      field: "s_no",
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
  pageSize: 6,
};

export default function PipetteCalibrationDataTable(props) {
  const [dataRows, setDataRows] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { type } = useParams();

  const sopResults = useSelector(selectSopResults);
  const isFetchingSopResults = useSelector(selectIsFetchingSopResults);

  useEffect(() => {
    const activeSop =
      standardOperatingProceduresConstantUtil.routeToModuleMap[type];
    dispatch(getSopResults(activeSop));
  }, []);

  useEffect(() => {
    if (sopResults?.length && !dataRows?.length)
      setDataRows(getPipetteDataTableRows(sopResults));
  }, [sopResults, dataRows]);

  const onEdit = (id) => {
    navigate(`${location.pathname}/${id}`);
  };

  let { columns, ...restProps } = dataTableProps;

  columns = [
    ...columns,
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      getActions: (params) => {
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
    <div style={{ height: "43vh" }}>
      <DataGrid
        {...restProps}
        columns={columns}
        rows={dataRows}
        loading={isFetchingSopResults}
      />
    </div>
  );
}
