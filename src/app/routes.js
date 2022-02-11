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
        <Route index element={<StandardOperatingProceduresPage />} />
        <Route path="sops" element={<StandardOperatingProceduresPage />} />
        <Route path="sops/:type" element={<PipetteCalibrationPage />} />
        <Route
          path="sops/:type/create"
          exact
          element={<PipetteCalibrationHistoryDetailsPage />}
        />
        <Route
          path="sops/:type/:id"
          element={<PipetteCalibrationHistoryDetailsPage />}
        />
        <Route path="*" element={<NotFound404Page />} />
      </Routes>
    </Router>
  );
}
