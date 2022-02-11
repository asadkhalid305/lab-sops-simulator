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
