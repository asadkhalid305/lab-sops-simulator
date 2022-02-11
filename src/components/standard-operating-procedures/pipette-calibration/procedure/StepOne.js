// packages
import { useSelector } from "react-redux";

// slices
import { selectDraftSop } from "../../../../pages/standard-operating-procedures/standardOperatingProceduresSlice";

// components
import CustomList from "../../../platform/CustomList";

export default function StepOne(props) {
  const draftSop = useSelector(selectDraftSop);
  const {
    config: {
      container: { size, unit },
    },
  } = draftSop;

  const list = [
    {
      text: `Place a beaker with ${size}${unit} of distilled H20 on the balance and stare.`,
      primary: true,
    },
    { text: "Place a new pipette tip on the pipettor.", primary: true },
  ];
  return (
    <div>
      <div className="step-heading">
        <h1>Preparation</h1>
      </div>

      <CustomList list={list} />
    </div>
  );
}
