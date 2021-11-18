import { configureStore } from "@reduxjs/toolkit";
import homePageReducer from "pages/home/homePageSlice";
import photoPageReducer from "pages/user/photo/photoPageSlice";
import userPageReducer from "pages/user/userPageSlice";

export default configureStore({
  reducer: {
    homepage: homePageReducer,
    userpage: userPageReducer,
    photopage: photoPageReducer,
  },
});
