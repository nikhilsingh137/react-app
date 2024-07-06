import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IBanner, IFeature, IHeader, IImagebox } from "./Articel";

export interface IType {
  isloading: boolean;
  headerData: Array<IHeader>;
  imageData: Array<IImagebox>;
  error: boolean;
  bannerData: Array<IBanner>;
  featureData: Array<IFeature>;
}

export const fetchHeder = createAsyncThunk("fetchHeder", async () => {
  const headerData = await fetch("http://localhost:5000/header");
  return headerData.json();
});

export const fetchImagebox = createAsyncThunk("fetchImagebox", async () => {
  const imageData = await fetch("http://localhost:5000/imageboxcontent");
  return imageData.json();
});
export const fetchBanner = createAsyncThunk("fetchBanner", async () => {
  const bannerData = await fetch("http://localhost:5000/banner");
  return bannerData.json();
});
export const fetchFeature = createAsyncThunk("fetchFeature", async () => {
  const featureData = await fetch("http://localhost:5000/feature");
  return featureData.json();
});

export const initialState: IType = {
  isloading: false,
  headerData: [],
  error: false,
  imageData: [],
  bannerData: [],
  featureData: [],
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
    builder.addCase(fetchBanner.fulfilled, (state, action) => {
      state.bannerData = action.payload;
    });
    builder.addCase(fetchFeature.fulfilled, (state, action) => {
      state.featureData = action.payload;
    });
    builder.addCase(fetchHeder.rejected, (state, action) => {
      state.error = true;
    });
  },
});

export default SliceApi.reducer;
