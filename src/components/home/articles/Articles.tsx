import LuTab from "@/components/global/LuTab/LuTab";
import React, { FC, useState, useEffect } from "react";
import ApiService from "@/utils/ApiService";
import endpoints from "@/constants/endpoints";
import {
	backendResponse,
	content,
} from "@/constants/models";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/reduxStore";
import { getAllContentTypes } from "@/redux/middlewares/getAllContentTypes";
import HomeArticle from "@/components/home/articles/HomeArticle";

const Articles: FC = () => {
	//states
	const contentTypes = useSelector(
		(state: RootState) => state.contentType
	);
	const [activeCategoryIndex, setActiveCategoryIndex] =
		useState<number | undefined>(0);
	const [contents, setContents] = useState<content[]>();
	console.log(contentTypes);
	//hooks
	const dispatch: AppDispatch = useDispatch();

	//effect
	useEffect(() => {
		if (contentTypes.list.length > 0) {
			getContents();
		} else {
			contentTypes.list.length === 0 &&
				dispatch(getAllContentTypes());
		}
	}, [contentTypes, activeCategoryIndex]);

	//functions
	const getContents = async () => {
		await ApiService.post(endpoints.getContentsList, {
			recordsPerPage: 4,
			contentTypeId:
				contentTypes.list[activeCategoryIndex || 0].id,
		})
			.then((res: backendResponse<content[]>) => {
				if (res.isSuccess) setContents(res.data);
			})
			.catch(() => {});
	};

	return (
		<section className="mb-6">
			<div className="pt-12 pb-10 l-container">
				<LuTab
					tabs={contentTypes.list.map((type, index) => ({
						title: type.title,
						key: index,
					}))}
					activeKey={activeCategoryIndex}
					onChange={setActiveCategoryIndex}
				/>
				<div className="grid justify-between grid-cols-1 gap-4 pt-6 sm:grid-cols-2 lg:flex sm:gap-10">
					{contents &&
						contents.map((content, index) => {
							return (
								<HomeArticle
									key={content.id}
									activeCategoryIndex={activeCategoryIndex}
									content={content}
									index={index}
									contentTypes={contentTypes.list}
								/>
							);
						})}
				</div>
			</div>
		</section>
	);
};

export default Articles;
