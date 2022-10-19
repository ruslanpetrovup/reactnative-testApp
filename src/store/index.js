import { configureStore } from "@reduxjs/toolkit";
import photoReducer from "./reducer/photoReducer";

const store = configureStore({
  reducer: {
    photo: photoReducer,
  },
});

export default store;
