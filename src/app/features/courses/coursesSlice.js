import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCourses } from "../../lib/api";

export const loadCourses = createAsyncThunk(
  "courses/fetchCourses",
  async () => {
    const response = await fetchCourses();
    return Array.isArray(response) ? response : [];
  }
);

const initialState = {
  courses: [],
  status: "idle",
  error: null,
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadCourses.fulfilled, (state, action) => {
        state.courses = action.payload;
      })
      .addCase(loadCourses.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default coursesSlice.reducer;
