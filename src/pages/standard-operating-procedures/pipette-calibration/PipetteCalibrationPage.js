// packages
import { Link, useLocation } from "react-router-dom";
import { Button } from "@mui/material";

// components
import PipetteCalibrationHistoryList from "../../../components/standard-operating-procedures/pipette-calibration/PipetteCalibrationHistoryList";

// styles
import "./PipetteCalibrationPage.css";

export function PipetteCalibrationPage() {
  const location = useLocation();

  return (
    <div>
      <div>
        <Button className="nav-btn" variant="contained">
          <Link to="/">Go back</Link>
        </Button>

        <Button className="nav-btn nav-btn-forward" variant="contained">
          <Link to={`${location.pathname}/create`}>Add New Test</Link>
        </Button>
      </div>

      <div className="page-title">
        <h1>Pipette Calibration History</h1>
      </div>

      <PipetteCalibrationHistoryList />
    </div>
  );
}
