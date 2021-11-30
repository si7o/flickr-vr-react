import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUserPhotos } from "services/skyboxService";

export const fetchUserPhotos = createAsyncThunk(
  "userpage/fetchUserPhotos",
  async (pathAlias) => {
    const response = await getUserPhotos(pathAlias);
    return response;
  }
);

export const userPageSlice = createSlice({
  name: "userpage",
  initialState: {
    status: "idle",
    error: null,
    lastUpdated: 0,
    pathAlias: "",
    username: "...",
    page: 0,
    pages: 0,
    perpage: 0,
    total: 0,
    photos: [],
  },
  reducers: {
    setPathAlias: (state, action) => {
      state.pathAlias = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUserPhotos.pending, (state) => {
        state.status = "pending";
        state.lastUpdated = Date.now();
        state.pathAlias = "";
        state.username = "...";
        state.page = 0;
        state.pages = 0;
        state.perpage = 0;
        state.total = 0;
        state.photos = [];
      })
      .addCase(fetchUserPhotos.fulfilled, (state, action) => {
        const { username, page, pages, perpage, total, photos } =
          action.payload;

        state.status = "success";
        state.lastUpdated = Date.now();
        state.pathAlias = action.meta.arg;
        state.username = username;
        state.page = page;
        state.pages = pages;
        state.perpage = perpage;
        state.total = total;
        state.photos = photos || [];
      })
      .addCase(fetchUserPhotos.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});

export const { setPathAlias } = userPageSlice.actions;

export default userPageSlice.reducer;
