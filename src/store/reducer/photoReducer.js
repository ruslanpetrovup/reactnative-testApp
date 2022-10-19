import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPhotos = createAsyncThunk(
  "photos/fetchPhotos",
  async (_, { rejectWithValue }) => {
    try {
      const result = await axios(
        `https://api.unsplash.com/photos?client_id=${"ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9"}`
      );
      return result.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const photoSlice = createSlice({
  name: "photos",
  initialState: { error: "", status: "", value: [] },
  extraReducers: {
    [fetchPhotos.pending]: (state) => {
      state.status = "loading";
    },
    [fetchPhotos.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.value = action.payload;
    },
    [fetchPhotos.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.payload;
    },
  },
});

export default photoSlice.reducer;
