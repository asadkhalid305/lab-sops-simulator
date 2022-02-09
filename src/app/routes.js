import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  StandardOperatingProceduresPage,
  NotFound404Page,
  PipetteCalibrationPage,
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
        <Route path="*" element={<NotFound404Page />} />
      </Routes>
    </Router>
  );
}
