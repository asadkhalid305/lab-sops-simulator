import { Link, useLocation } from "react-router-dom";
import { Button } from "@mui/material";

import CenterContainer from "../../../components/platform/CenterContainer";
import PipetteCalibrationHistoryList from "../../../components/standard-operating-procedures/pipette-calibration/PipetteCalibrationHistoryList";

import styles from "./PipetteCalibrationPage.css";

export function PipetteCalibrationPage() {
  const location = useLocation();

  return (
    <CenterContainer>
      <Button className="nav-btn" variant="contained">
        <Link to="/">Go back</Link>
      </Button>

      <Button className="nav-btn nav-btn-forward" variant="contained">
        <Link to={`${location.pathname}/create`}>Add New Test</Link>
      </Button>

      <div className="page-title">
        <h1>Pipette Calibration History</h1>
      </div>

      <PipetteCalibrationHistoryList />
    </CenterContainer>
  );
}
