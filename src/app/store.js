// packages
import { configureStore } from '@reduxjs/toolkit';

// slices
import standardOperatingProceduresReducer from '../pages/standard-operating-procedures/standardOperatingProceduresSlice';

export const store = configureStore({
  reducer: {
    sops: standardOperatingProceduresReducer
  },
});
