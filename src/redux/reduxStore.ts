import contentType from "./reducers/contentTypeReducer";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
	reducer: { contentType },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
