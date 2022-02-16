// packages
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

// components
import PipetteCalibrationHistoryList from "../../../components/standard-operating-procedures/pipette-calibration/PipetteCalibrationHistoryList";

// styles
import "./PipetteCalibrationPage.css";

export function PipetteCalibrationPage () {
  const location = useLocation();
  const navigate = useNavigate();

  const onAddNewTest = () => {
    navigate(`${location.pathname}/create`);
  };

  return (
    <div>
      <div>
        <Button className="nav-btn" variant="contained">
          <Link to="/">Go back</Link>
        </Button>

        <Button onClick={onAddNewTest} className="nav-btn nav-btn-forward" variant="contained">
          Add New Test
        </Button>
      </div>

      <div className="page-title">
        <h1>Pipette Calibration History</h1>
      </div>

      <PipetteCalibrationHistoryList />
    </div>
  );
}
