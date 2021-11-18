import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getHomePhotos } from "services/skyboxService";

export const DATA_TTL = 300000;

export const fetchLatestPhotos = createAsyncThunk(
  "homepage/fetchLatestPhotos",
  async () => {
    const response = await getHomePhotos();
    return response;
  }
);

export const homepageSlice = createSlice({
  name: "homepage",
  initialState: {
    status: "idle",
    error: null,
    lastUpdated: 0,
    page: 0,
    pages: 0,
    perpage: 0,
    total: 0,
    photos: [],
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchLatestPhotos.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchLatestPhotos.fulfilled, (state, action) => {
        const { page, pages, perpage, total, photos } = action.payload;

        state.status = "success";
        state.lastUpdated = Date.now();
        state.page = page;
        state.pages = pages;
        state.perpage = perpage;
        state.total = total;
        state.photos = photos || [];
      })
      .addCase(fetchLatestPhotos.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});

export const { setLatestPhotosData, loadingLatestPhotos, loadedLatestPhotos } =
  homepageSlice.actions;

export default homepageSlice.reducer;
