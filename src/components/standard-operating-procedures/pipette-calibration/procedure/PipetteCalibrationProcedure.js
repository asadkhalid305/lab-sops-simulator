import { useState, Fragment, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import styles from "./PipetteCalibrationProcedure.css";
import CustomStepper from "../../../platform/CustomStepper";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import StepFive from "./StepFive";
import { Paper } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDraftSop,
  selectSopResults,
  setDraftSop,
  setSopResults,
  createSop,
  updateSop,
  getSopResult,
} from "../../../../pages/standard-operating-procedures/standardOperatingProceduresSlice";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { standardOperatingProceduresConstantUtil } from "../../../../utils/standard-operating-procedures/standardOperatingProceduresConstantUtil";

const steps = [
  {
    id: 1,
    label: "Step",
    element: <StepOne />,
  },
  {
    id: 2,
    label: "Step",
    element: <StepThree />,
  },
  {
    id: 3,
    label: "Step",
    element: <StepFour />,
  },
  {
    id: 4,
    label: "Step",
    element: <StepFive />,
  },
];

export default function PipetteCalibrationProcedure() {
  const [activeStep, setActiveStep] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const draftSop = useSelector(selectDraftSop);
  const sopResults = useSelector(selectSopResults);

  useEffect(() => {
    const { id, type } = params;
    if (id) {
      const activeSop =
        standardOperatingProceduresConstantUtil.routeToModuleMap[type];
      dispatch(getSopResult({ id, activeSop })).then((response) => {
        dispatch(setDraftSop(response.payload));
      });
    }
  }, []);

  const handleNext = async () => {
    if (activeStep === steps.length - 1) {
      let newDraftSop = { ...draftSop };
      let method = undefined;
      if (isResultsAvailable()) {
        newDraftSop.isCompleted = true;
        method = createSop;
      } else {
        method = updateSop;
      }
      dispatch(method(newDraftSop)).then((response) => {
        // we don't need to set sopResults, it is just for demo purpose
        // const { id } = params;
        // if (!id) {
        //   dispatch(setSopResults([...sopResults, response.payload]));
        // }
        goBack();
      });
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const isResultsAvailable = () =>
    Object.values(draftSop.results).every((result) => !!result);

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const goBack = () => {
    dispatch(
      setDraftSop(standardOperatingProceduresConstantUtil.initialSopModel)
    );
    navigate(location.pathname.split("/").slice(0, -1).join("/"));
  };

  return (
    <CustomStepper steps={steps} activeStep={activeStep}>
      <Fragment>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: "100%",
              height: "70vh",
            },
          }}
        >
          <Paper className="step-container" elevation={1}>
            {steps.find((_, index) => index === activeStep)?.element}
          </Paper>
        </Box>

        {/* footer */}
        <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
          <Button
            color="inherit"
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            Back
          </Button>
          <Box sx={{ flex: "1 1 auto" }} />
          <Button onClick={goBack}>Cancel</Button>
          {(!draftSop?.isCompleted || activeStep < steps.length - 1) && (
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          )}
        </Box>
      </Fragment>
    </CustomStepper>
  );
}
