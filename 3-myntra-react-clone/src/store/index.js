import { configureStore } from "@reduxjs/toolkit";
import bagReducer from "./bagSlice";
import itemsReducer from "./itemsSlice";
import fetchStatusReducer from "./fetchStatusSlice";

const myntraStore = configureStore({
  reducer: {
    bag: bagReducer,
    items: itemsReducer,
    fetchStatus: fetchStatusReducer,
  },
});

export default myntraStore;
