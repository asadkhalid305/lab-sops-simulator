import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  StandardOperatingProceduresPage,
  PipetteCalibrationPage,
  PipetteCalibrationHistoryDetailsPage,
  NotFound404Page,
} from "../pages";

export default function Routing() {
  return (
    <Router>
      <Routes>
        <Route index element={<StandardOperatingProceduresPage />}></Route>
        <Route
          path="sops"
          element={<StandardOperatingProceduresPage />}
        ></Route>
        <Route
          path="sops/pipette-calibration"
          element={<PipetteCalibrationPage />}
        />
        <Route
          path="sops/pipette-calibration/create"
          element={<PipetteCalibrationHistoryDetailsPage />}
        />
        <Route
          path="sops/pipette-calibration/:id"
          element={<PipetteCalibrationHistoryDetailsPage />}
        />
        <Route path="*" element={<NotFound404Page />} />
      </Routes>
    </Router>
  );
}
