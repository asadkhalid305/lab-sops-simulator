// packages
import { Box, Stepper, Step, StepLabel } from "@mui/material";

export default function CustomStepper(props) {
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={props.activeStep}>
        {props.steps.map((item, index) => {
          return (
            <Step key={index}>
              <StepLabel>{item.label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {props.children}
    </Box>
  );
}
