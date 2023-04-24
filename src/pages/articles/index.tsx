import Layout from "@/components/global/Layout/Layout";
import { FC, useState, useEffect, useMemo } from "react";
import LuTab from "@/components/global/LuTab/LuTab";
import ArticleItem from "@/components/articles/ArticleItem";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/reduxStore";
import { getAllContentTypes } from "@/redux/middlewares/getAllContentTypes";
import ApiService from "@/utils/ApiService";
import endpoints from "@/constants/endpoints";
import {
	backendResponse,
	content,
} from "@/constants/models";
import { useRouter } from "next/router";
import { Pagination } from "antd";
import routes from "@/constants/routes";
import queryString from "query-string";

const Articles: FC = () => {
	//states
	const [contents, setContents] =
		useState<backendResponse<content[]>>();
	const contentTypes = useSelector(
		(state: RootState) => state.contentType
	);
	const [contentTypeId, setContentTypeId] = useState<
		string | undefined
	>();
	const [pageNumber, setPageNumber] = useState<number>(1);

	//hooks
	const dispatch: AppDispatch = useDispatch();
	const { isReady, push, asPath } = useRouter();

	//effect
	useEffect(() => {
		contentTypes.list.length === 0 &&
			dispatch(getAllContentTypes());
	}, []);
	useEffect(() => {
		if (!isReady) return;
		const query: Record<string, any> =
			queryString.parseUrl(asPath).query;
		setContentTypeId(query?.contentTypeId || undefined);
		setPageNumber(query?.pageNumber || 1);
	}, [asPath, isReady]);
	useEffect(() => {
		contentTypes.list.length > 0 &&
			getContents(contentTypeId, pageNumber);
	}, [pageNumber, contentTypeId, contentTypes]);

	//functions
	const getContents = async (
		contentTypeId: string | undefined = undefined,
		pageNumber: number = 1
	) => {
		const payload: Record<string, any> = { pageNumber };
		if (contentTypeId === "0" || !contentTypeId )
			payload.isFeatured = true;
		else payload.contentTypeId = contentTypeId;
		await ApiService.post(endpoints.getContentsList, payload)
			.then((res: backendResponse<content[]>) => {
				if (res.isSuccess) setContents(res);
				else setContents(undefined);
			})
			.catch(() => setContents(undefined));
	};
	const handlePagination = (pageNumber: number) => {
		const query = queryString.parseUrl(asPath).query;
		push(routes.articles.path, {
			query: { ...query, pageNumber },
		});
	};
	const tabs = useMemo(
		() =>
			contentTypes.list.map((item) => ({
				title: item.title,
				key: item.id,
			})),
		[contentTypes]
	);
	const articles = useMemo(() => {
		if (!contents)
			return (
				<div className="flex items-center justify-center w-full py-10 border border-dashed">
					محتوایی موجود نیست
				</div>
			);
		return contents.data.map((content) => (
			<ArticleItem
				id={content.id}
				creationDate={content.creationDate}
				creationTime={content.creationTime}
				description={content.description}
				title={content.title}
				thumbnailUrl={content.thumbnailUrl}
				key={content.id}
			/>
		));
	}, [contents]);

	return (
		<>
			<Head>
				<title>لول آپ - Level Up | مقاله ها</title>
			</Head>
			<Layout>
				<div className="w-full min-h-[50vh] max-w-5xl mx-auto mb-10">
					<div className="pt-10 l-container">
						<LuTab
							centered
							activeKey={contentTypeId ? +contentTypeId : 0}
							onChange={(e) =>
								push(routes.articles.path, {
									query: { contentTypeId: e },
								})
							}
							tabs={tabs}
						/>
						<div className="flex flex-col gap-6 pt-4">
							{articles}
						</div>
					</div>
				</div>
				{contents && contents?.totalItemCount > 10 && (
					<div className="flex justify-center mb-10">
						<Pagination
							current={+pageNumber}
							total={contents?.totalItemCount}
							pageSize={10}
							onChange={handlePagination}
						/>
					</div>
				)}
			</Layout>
		</>
	);
};

export default Articles;
