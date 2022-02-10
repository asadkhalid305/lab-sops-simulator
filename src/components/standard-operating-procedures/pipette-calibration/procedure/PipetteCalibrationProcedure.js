import React from "react";

import VerticalTabs from "../../../platform/VerticalTabs";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import StepFive from "./StepFive";

const tabs = [
  {
    id: 1,
    label: "Step 1",
    children: <StepOne />,
  },
  {
    id: 2,
    label: "Step 2",
    children: <StepTwo />,
  },
  {
    id: 3,
    label: "Step 3",
    children: <StepThree />,
  },
  {
    id: 4,
    label: "Step 4",
    children: <StepFour />,
  },
  {
    id: 5,
    label: "Step 5",
    children: <StepFive />,
  },
];

export default function PipetteCalibrationProcedure() {
  return <VerticalTabs tabs={tabs} />;
}
