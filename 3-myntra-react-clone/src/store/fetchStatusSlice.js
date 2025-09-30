import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false,
    currentlyFetching: false,
    error: null
  },
  reducers: {
    markFetchDone: (state) => {
      state.fetchDone = true;
      state.currentlyFetching = false;
    },
    markFetchingStarted: (state) => {
      state.currentlyFetching = true;
      state.error = null;
    },
    markFetchingFinished: (state) => {
      state.currentlyFetching = false;
    },
    markFetchError: (state, action) => {
      state.error = action.payload;
      state.currentlyFetching = false;
    }
  }
});

export const fetchStatusActions = fetchStatusSlice.actions;
export default fetchStatusSlice.reducer;
