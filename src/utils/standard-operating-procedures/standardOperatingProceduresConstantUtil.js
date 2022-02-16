// packages
import uuid from "react-uuid";

export const standardOperatingProceduresConstantUtil = {
  StatsMethodsDisplayTextMap: {
    mean: "Mean",
    std: "Standard Deviation",
    accuracy: "Accuracy",
    precision: "Precision",
  },
  routeToModuleMap: {
    "pipette-calibration": "pipette_calibration",
  },
  availableSops: [
    {
      id: uuid(),
      name: "Routine Pipette Check and Calibration",
      type: "pipette_calibration",
      isEnabled: true,
      path: "/sops/pipette-calibration",
    },
    {
      id: uuid(),
      name: "Not Available",
      type: "",
      isEnabled: false,
      path: "/",
    },
    {
      id: uuid(),
      name: "Not Available",
      type: "",
      isEnabled: false,
      path: "/",
    },
    {
      id: uuid(),
      name: "Not Available",
      type: "",
      isEnabled: false,
      path: "/",
    },
  ],
  initialSopModel: {
    id: uuid(),
    config: {
      container: {
        size: 1000,
        unit: "ul",
      },
      volume: 100,
      iterations: 5,
    },
    readings: [],
    results: {
      mean: "",
      std: "",
      accuracy: "",
      precision: "",
    },
    isCompleted: false,
  },
};
