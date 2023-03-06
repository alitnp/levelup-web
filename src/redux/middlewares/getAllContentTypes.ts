import endpoints from "@/constants/endpoints";
import {
	backendResponse,
	contentType,
} from "@/constants/models";
import { setContentTypes } from "@/redux/reducers/contentTypeReducer";
import { AppDispatch } from "@/redux/reduxStore";
import ApiService from "@/utils/ApiService";

export const getAllContentTypes =
	() => async (dispatch: AppDispatch) => {
		await ApiService.post(endpoints.getContentTypesList, {})
			.then((res: backendResponse<contentType[]>) => {
				if (res.isSuccess) dispatch(setContentTypes(res.data));
			})
			.catch(() => {});
	};
