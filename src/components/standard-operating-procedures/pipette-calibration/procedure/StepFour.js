// packages
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, TextField } from "@mui/material";

// slices
import {
  selectDraftSop,
  setDraftSop,
} from "../../../../pages/standard-operating-procedures/standardOperatingProceduresSlice";

// styles
import "./PipetteCalibrationProcedure.css";

export default function StepFour(props) {
  const dispatch = useDispatch();
  const draftSop = useSelector(selectDraftSop);

  let {
    config: { iterations, volume },
    readings,
  } = draftSop;

  useEffect(() => {
    if (!readings.length) {
      readings = Array(iterations).fill(0);
      const newDraftSop = { ...draftSop, readings };
      dispatch(setDraftSop(newDraftSop));
    }
  }, [draftSop]);

  const handleChange = (changedIndex, event) => {
    const re = /^[0-9\b]*$/;
    if (!re.test(event.target.value)) {
      return;
    }

    const newReadings = readings.map((reading, index) => {
      if (index === changedIndex) {
        reading = Number(event.target.value);
      }
      return reading;
    });
    const newDraftSop = { ...draftSop, readings: newReadings };
    dispatch(setDraftSop(newDraftSop));
  };

  return (
    <div>
      <div className="step-heading">
        <h1>Instructions</h1>
        <h3>
          We will record {iterations} readings for {volume}% volume
        </h3>
      </div>

      <Grid justifyContent="center" container spacing={2}>
        {readings.map((reading, index) => (
          <Grid key={index} item>
            <TextField
              disabled={draftSop.isCompleted}
              id={`${index + 1}`}
              value={reading}
              onChange={(e) => handleChange(index, e)}
              label={`Reading ${index + 1}`}
              variant="outlined"
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
