import { selectDraftSop } from "../../../../pages/standard-operating-procedures/standardOperatingProceduresSlice";
import { useSelector } from "react-redux";

import CustomList from "../../../platform/CustomList";

export default function StepThree() {
  const draftSop = useSelector(selectDraftSop);

  const {
    config: { iterations, volume },
  } = draftSop;

  const list = [
    {
      text: `Aspirate and dispense ${volume}% of the volume into the beaker.`,
      primary: true,
    },
    {
      text: "Record the weight in the table in next step.",
      primary: true,
    },
    {
      text: "Tare the balance.",
      primary: true,
    },
    {
      text: "Repeat steps four more times",
      primary: true,
    },
  ];

  return (
    <div>
      <div className="step-heading">
        <h1>Instructions</h1>
        <h3>
          Weigh the pipettes at {volume}% volume {iterations} times
        </h3>
      </div>
      
      <CustomList list={list}></CustomList>
    </div>
  );
}
