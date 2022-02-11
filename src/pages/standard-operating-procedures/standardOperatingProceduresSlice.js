// packages
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import uuid from "react-uuid";

// utils
import {
  createSop as createSopAPI,
  updateSop as updateSopAPI,
  getSopResults as getSopResultsAPI,
  getSopResult as getSopResultAPI,
} from "../../apis";
import { standardOperatingProceduresConstantUtil } from "../../utils/standard-operating-procedures/standardOperatingProceduresConstantUtil";

const initialState = {
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
      name: "Not Available",
      type: "",
      isEnabled: false,
      path: "/",
    },
    {
      id: uuid(),
      name: "Not Available",
      type: "",
      isEnabled: false,
      path: "/",
    },
    {
      id: uuid(),
      name: "Not Available",
      type: "",
      isEnabled: false,
      path: "/",
    },
  ],
  sopResults: [],
  isFetchingSopResults: false,
  activeSop: undefined,
  draftSop: standardOperatingProceduresConstantUtil.initialSopModel,
};

export const getSopResults = createAsyncThunk(
  "sops/getSopResults",
  async (activeSop) => {
    const response = await getSopResultsAPI(activeSop);
    return response?.data || null;
  }
);

export const getSopResult = createAsyncThunk(
  "sops/getSopResult",
  async (payload) => {
    const response = await getSopResultAPI(payload);
    return response?.data || null;
  }
);

export const createSop = createAsyncThunk("sops/createSop", async (payload) => {
  const response = await createSopAPI(payload);
  return response?.data || null;
});

export const updateSop = createAsyncThunk("sops/updateSop", async (payload) => {
  const response = await updateSopAPI(payload);
  return response?.data || null;
});

export const sopsSlice = createSlice({
  name: "sops",
  initialState,
  reducers: {
    setActiveSop: (state, action) => {
      state.activeSop = action.payload;
    },
    setDraftSop: (state, action) => {
      state.draftSop = action.payload;
    },
    setSopResults: (state, action) => {
      state.sopResults = action.payload;
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
      });
  },
});

export const { setActiveSop, setDraftSop, setSopResults } = sopsSlice.actions;

export const selectAvailableSops = (state) => state.sops.availableSops;
export const selectSopResults = (state) => state.sops.sopResults;
export const selectIsFetchingSopResults = (state) =>
  state.sops.isFetchingSopResults;
export const selectActiveSop = (state) => state.sops.activeSop;
export const selectDraftSop = (state) => state.sops.draftSop;

export default sopsSlice.reducer;
