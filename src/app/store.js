import { configureStore } from '@reduxjs/toolkit';
import standardOperatingProceduresReducer from '../pages/standard-operating-procedures/standardOperatingProceduresSlice';

export const store = configureStore({
  reducer: {
    sops: standardOperatingProceduresReducer
  },
});
