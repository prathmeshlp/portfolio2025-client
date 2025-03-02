import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Resume } from "../types";

export const fetchResume = createAsyncThunk("resume/fetchResume", async () => {
  const response = await axios.get("http://localhost:4000/api/resume");
  return response.data as Resume;
});

const resumeSlice = createSlice({
  name: "resume",
  initialState: { data: null as Resume | null, loading: false, error: null as string | null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchResume.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchResume.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchResume.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch resume";
      });
  },
});

export default resumeSlice.reducer;