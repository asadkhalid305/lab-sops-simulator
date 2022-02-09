import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createSop, updateSop, getSopResults, getSopResult } from "../../apis";

const initialState = {
  activeSop: undefined,
  availableSops: [
    {
      id: 1,
      name: "Routine Pipette Check and Calibration",
      type: "pipette_calibration",
      isEnabled: true,
      path: "/sops/pipette-calibration",
    },
    {
      id: 2,
      name: "X",
      type: "pipette_calibration",
      isEnabled: false,
      path: "/sops/pipette-calibration",
    },
    {
      id: 3,
      name: "Y",
      type: "pipette_calibration",
      isEnabled: false,
      path: "/sops/pipette-calibration",
    },
    {
      id: 4,
      name: "Z",
      type: "pipette_calibration",
      isEnabled: false,
      path: "/sops/pipette-calibration",
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
    const response = await getSopResults(activeSop);
    return response.data;
  }
);

export const getSopResult = createAsyncThunk(
  "sops/getSopResult",
  async (payload) => {
    const response = await getSopResult(payload);
    return response.data;
  }
);

export const createSop = createAsyncThunk("sops/createSop", async (payload) => {
  const response = await createSop(payload);
  return response.data;
});

export const updateSop = createAsyncThunk("sops/updateSop", async (payload) => {
  const response = await updateSop(payload);
  return response.data;
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

export default sopsSlice.reducer;
