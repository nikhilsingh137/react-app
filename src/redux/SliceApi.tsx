import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IHeader, IImagebox } from "./Articel";

export interface IType {
  isloading: boolean;
  headerData: Array<IHeader>;
  imageData: Array<IImagebox>;
  error: boolean;
}

export const fetchHeder = createAsyncThunk("fetchHeder", async () => {
  const headerData = await fetch("http://localhost:5000/header");
  return headerData.json();
});

export const fetchImagebox = createAsyncThunk("fetchImagebox", async () => {
  const imageData = await fetch("http://localhost:5000/imageboxcontent");
  return imageData.json();
});

export const initialState: IType = {
  isloading: false,
  headerData: [],
  error: false,
  imageData: [],
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
    builder.addCase(fetchImagebox.fulfilled, (state, action) => {
      state.imageData = action.payload;
    });
    builder.addCase(fetchHeder.rejected, (state, action) => {
      state.error = true;
    });
  },
});

export default SliceApi.reducer;
