import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import uuid from 'react-uuid'

import {
  createSop as createSopAPI,
  updateSop as updateSopAPI,
  getSopResults as getSopResultsAPI,
  getSopResult as getSopResultAPI,
} from "../../apis";

const initialState = {
  activeSop: undefined,
  availableSops: [
    {
      id: uuid(),
      name: "Routine Pipette Check and Calibration",
      type: "pipette_calibration",
      isEnabled: true,
      path: "/sops/pipette-calibration",
    },
    {
      id: uuid(),
      name: "Coming Soon",
      type: "",
      isEnabled: false,
      path: "/",
    },
    {
      id: uuid(),
      name: "Coming Soon",
      type: "",
      isEnabled: false,
      path: "/",
    },
    {
      id: uuid(),
      name: "Coming Soon",
      type: "",
      isEnabled: false,
      path: "/",
    },
  ],
  sopResults: [],
  isFetchingSopResults: false,
  isFetchingSopResult: false,
  isCreatingSop: false,
  isUpdatingSop: false,
};

export const getSopResults = createAsyncThunk(
  "sops/getSopResults",
  async (activeSop) => {
    const response = await getSopResultsAPI(activeSop);
    return (response || {}).data;
  }
);

export const getSopResult = createAsyncThunk(
  "sops/getSopResult",
  async (payload) => {
    const response = await getSopResultAPI(payload);
    return (response || {}).data;
  }
);

export const createSop = createAsyncThunk("sops/createSop", async (payload) => {
  const response = await createSopAPI(payload);
  return (response || {}).data;
});

export const updateSop = createAsyncThunk("sops/updateSop", async (payload) => {
  const response = await updateSopAPI(payload);
  return (response || {}).data;
});

export const sopsSlice = createSlice({
  name: "sops",
  initialState,
  reducers: {
    setActiveSop: (state, action) => {
      state.activeSop = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSopResults.pending, (state) => {
        state.isFetchingSopResults = true;
      })
      .addCase(getSopResults.fulfilled, (state, action) => {
        state.isFetchingSopResults = false;
        state.sopResults = action.payload;
      })
      .addCase(getSopResults.rejected, (state) => {
        state.isFetchingSopResults = false;
      })
      .addCase(getSopResult.pending, (state) => {
        state.isFetchingSopResult = true;
      })
      .addCase(getSopResult.fulfilled, (state) => {
        state.isFetchingSopResult = false;
      })
      .addCase(getSopResult.rejected, (state) => {
        state.isFetchingSopResult = false;
      })
      .addCase(createSop.pending, (state) => {
        state.isCreatingSop = true;
      })
      .addCase(createSop.fulfilled, (state) => {
        state.isCreatingSop = false;
      })
      .addCase(createSop.rejected, (state) => {
        state.isCreatingSop = false;
      })
      .addCase(updateSop.pending, (state) => {
        state.isUpdatingSop = true;
      })
      .addCase(updateSop.fulfilled, (state) => {
        state.isUpdatingSop = false;
      })
      .addCase(updateSop.rejected, (state) => {
        state.isUpdatingSop = false;
      });
  },
});

export const { setActiveSop } = sopsSlice.actions;

export const selectAvailableSops = (state) => state.sops.availableSops;
export const selectSopResults = (state) => state.sops.sopResults;
export const selectActiveSop = (state) => state.sops.activeSop;
export const selectIsFetchingSopResults = (state) => state.sops.isFetchingSopResults;

export default sopsSlice.reducer;
