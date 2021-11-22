import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUserPhoto } from "services/skyboxService";

export const QUALITY = { HD: "HD", SD: "SD" };

export const fetchUserPhoto = createAsyncThunk(
  "photopage/fetchUserPhoto",
  async ({ pathAlias, photoId }) => {
    const response = await getUserPhoto(pathAlias, photoId);
    return response;
  }
);

export const photoPageSlice = createSlice({
  name: "photopage",
  initialState: {
    status: "idle",
    error: null,
    thumbnail: "",
    username: "",
    canLoad: false,
    photoId: "",
    title: "",
    desc: "",
    url: "",
    urlHD: "",
    urlSD: "",
    quality: QUALITY.HD,
  },
  reducers: {
    setPathAlias: (state, action) => {
      state.pathalias = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setSDQuality: (state) => {
      state.quality = QUALITY.SD;
    },
    setHDQuality: (state) => {
      state.quality = QUALITY.HD;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUserPhoto.pending, (state) => {
        state.status = "pending";
        state.error = null;
        state.thumbnail = "";
        state.username = "";
        state.canLoad = "";
        state.photoId = "";
        state.title = "";
        state.desc = "";
        state.url = "";
        state.urlSD = "";
        state.urlHD = "";
      })
      .addCase(fetchUserPhoto.fulfilled, (state, action) => {
        const {
          thumbnail,
          username,
          canLoad,
          photoId,
          title,
          desc,
          url,
          equirectangular,
          sdUrl,
          hdUrl,
        } = action.payload;

        if (equirectangular === "false") {
          throw "The image you are trying to load is not equirectangular.";
        }

        if (!canLoad) {
          throw "The image cant be loaded, sorry.";
        }

        state.status = "success";
        state.error = null;
        state.thumbnail = thumbnail;
        state.username = username;
        state.canLoad = canLoad;
        state.photoId = photoId;
        state.title = title;
        state.desc = desc;
        state.url = url;
        state.urlSD = sdUrl;
        state.urlHD = hdUrl;
      })
      .addCase(fetchUserPhoto.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});

export const selectImageUrl = (state) =>
  state.photopage.quality === QUALITY.HD
    ? state.photopage.urlHD
    : state.photopage.urlSD;

export const selectIsLoaded = (state) =>
  ["success", "error"].includes(state.photopage.status);

export const { setPathAlias, setStatus, setQuality } = photoPageSlice.actions;
export default photoPageSlice.reducer;
