/* eslint-disable react/prop-types */
// test-utils.jsx taken from https://redux.js.org/usage/writing-tests#components
import React from "react";
import { render } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
// Import your own reducer
import homePageReducer from "pages/home/homePageSlice";
import photoPageReducer from "pages/user/photo/photoPageSlice";
import userPageReducer from "pages/user/userPageSlice";

function reduxRender(
  ui,
  {
    preloadedState,
    store = configureStore({
      reducer: {
        homepage: homePageReducer,
        userpage: userPageReducer,
        photopage: photoPageReducer,
      },
      preloadedState,
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return render(ui, { ...renderOptions, wrapper: Wrapper });
}

export { reduxRender };
