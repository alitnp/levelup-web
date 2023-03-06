import { contentType } from "@/constants/models";
import {
	createSlice,
	PayloadAction,
} from "@reduxjs/toolkit";

type initialState = { list: contentType[] };
const initialState: initialState = { list: [] };

export const contentTypeSlice = createSlice({
	name: "contentType",
	initialState: initialState,
	reducers: {
		setContentTypes: (
			state,
			action: PayloadAction<contentType[]>
		) => {
			console.log(action);
			state.list = action.payload;
		},
	},
});

export const { setContentTypes } = contentTypeSlice.actions;

export default contentTypeSlice.reducer;
