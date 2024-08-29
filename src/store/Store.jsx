import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Features/Counter/counterSlice";
import themeReducer from "../Features/theme/themeSlice";

export const store = configureStore(
  {
    reducer: {
      counter: counterReducer,
      theme: themeReducer,
    },
  },
  []
);
