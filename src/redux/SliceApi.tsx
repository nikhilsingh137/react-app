import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IHeader } from "./Articel";

export interface IType {
  isloading: boolean;
  headerData: Array<IHeader>;
  error: boolean;
}

export const fetchHeder = createAsyncThunk("fetchHeder", async () => {
  const headerData = await fetch("http://localhost:5000/header");
  return headerData.json();
});

export const initialState: IType = {
  isloading: false,
  headerData: [],
  error: false,
};

export const SliceApi = createSlice({
  name: "api",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchHeder.pending, (state, action) => {
      state.isloading = true;
    });
    builder.addCase(fetchHeder.fulfilled, (state, action) => {
      state.headerData = action.payload;
    });
    builder.addCase(fetchHeder.rejected, (state, action) => {
      state.error = true;
    });
  },
});

export default SliceApi.reducer;
