import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

import CenterContainer from "../../../components/platform/CenterContainer";
import PipetteCalibrationHistoryList from "../../../components/standard-operating-procedures/pipette-calibration/PipetteCalibrationHistoryList";

export function PipetteCalibrationPage() {
  return (
    <CenterContainer>
      <Button>
        <Link to="/">Go back</Link>
      </Button>
      <Button>
        <Link to="/sops/pipette-calibration/create">Add New Test</Link>
      </Button>
      <h1>Pipette Calibration</h1>

      <PipetteCalibrationHistoryList />
    </CenterContainer>
  );
}
