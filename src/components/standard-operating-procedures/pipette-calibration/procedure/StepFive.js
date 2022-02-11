// packages
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, TextField } from "@mui/material";
import { mean, std } from "mathjs";

// slices
import {
  selectDraftSop,
  setDraftSop,
} from "../../../../pages/standard-operating-procedures/standardOperatingProceduresSlice";

// styles
import "./PipetteCalibrationProcedure.css";


export default function StepFive(props) {
  const dispatch = useDispatch();
  const draftSop = useSelector(selectDraftSop);

  let {
    config: { volume },
    readings,
    results,
  } = draftSop;

  useEffect(() => {
    if (
      nonEmptyReadings().length &&
      Object.values(results).some((result) => !result)
    ) {
      const { meanValue, stdValue } = getCalculateResults();
      const newDraftSop = {
        ...draftSop,
        results: {
          mean: meanValue,
          std: stdValue,
          accuracy: "N/A",
          precision: "N/A",
        },
      };
      dispatch(setDraftSop(newDraftSop));
    }
  }, [draftSop]);

  const getCalculateResults = () => {
    const finalReadings = nonEmptyReadings();
    const meanValue = mean(finalReadings);
    const stdValue = std(finalReadings);

    return {
      meanValue,
      stdValue,
    };
  };

  const nonEmptyReadings = () => readings.filter((reading) => !!reading);

  return (
    <div>
      <div className="step-heading">
        <h1>Results</h1>
        <h3>
          {nonEmptyReadings().length
            ? `Following are the results of ${
                nonEmptyReadings().length
              } readings for
          ${volume}% volume`
            : "No reading is given, please go back to previous step and provide readings."}
        </h3>
      </div>

      <Grid justifyContent="center" container spacing={2}>
        <Grid item>
          <TextField
            disabled
            value={results.mean}
            label="Mean"
            variant="outlined"
          />
        </Grid>
        <Grid item>
          <TextField
            disabled
            value={results.std}
            label="Standard Deviation"
            variant="outlined"
          />
        </Grid>
        <Grid item>
          <TextField
            disabled
            value={results.accuracy}
            label="Accuracy"
            variant="outlined"
          />
        </Grid>
        <Grid item>
          <TextField
            disabled
            value={results.precision}
            label="Precision"
            variant="outlined"
          />
        </Grid>
      </Grid>
    </div>
  );
}
