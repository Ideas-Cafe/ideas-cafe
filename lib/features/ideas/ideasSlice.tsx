import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = "https.google.com";
const headers = {
  "api-key": "fz-api-key",
};

interface IdeasState {
  data: any[];
  loading: "idle" | "loading" | "failed" | "successful";
  error: string | null;
}

const initialState: IdeasState = {
  data: [],
  loading: "idle",
  error: null,
};

export const fetchData = createAsyncThunk("ideas/fetch", async () => {
  const response = await axios.get(url, { headers });
  return response.data;
});

const ideasSlice = createSlice({
  name: "ideas",
  initialState,
  reducers: {
    addpayload: (state, action) => {
      state.data.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(fetchData.fulfilled, (state) => {
        state.loading = "successful";
      })
      .addCase(fetchData.rejected, (state) => {
        state.loading = "failed";
      });
  },
});

export const { addpayload } = ideasSlice.actions;
export default ideasSlice.reducer;
