import Layout from "@/components/global/Layout/Layout";
import endpoints from "@/constants/endpoints";
import {
	backendResponse,
	content,
} from "@/constants/models";
import ApiService from "@/utils/ApiService";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import RichTextRenderer from "@/components/global/RichText/RichTextRenderer";

const ArticleDetail: FC = () => {
	//states
	const [contentDetail, setContentDetail] =
		useState<content>();

	console.log(contentDetail);

	//hooks
	const router = useRouter();
	//effect
	useEffect(() => {
		router.isReady &&
			router.query.id &&
			getContent(+router.query.id);
	}, [router.isReady]);

	//functions
	const getContent = async (id: number) => {
		await ApiService.post(endpoints.getContentsList, {
			id,
		}).then((res: backendResponse<content[]>) => {
			if (res.isSuccess && res.data.length > 0) {
				setContentDetail(res.data[0]);
			}
		});
	};
	const getContentText = (data: string) => {
		let text;
		try {
			text = JSON.parse(data);
		} catch (error) {
			text = data;
		}
		return text;
	};

	if (!contentDetail) return null;

	const contentText = getContentText(contentDetail.text);

	return (
		<>
			<Head>
				<title>{contentDetail.title}</title>
			</Head>
			<Layout>
				<div className="max-w-3xl py-10 mx-auto">
					<article className="l-container ">
						<div className="relative w-full overflow-hidden rounded-lg">
							<Image
								src={contentDetail.thumbnailUrl}
								width={768}
								height={768}
								alt=""
								style={{ objectFit: "cover" }}
							/>
						</div>
						<h1 className="my-4 text-3xl font-bold">
							{contentDetail.title}
						</h1>
						{typeof contentText === "string" ? (
							<p>{contentText}</p>
						) : (
							<RichTextRenderer data={contentText} />
						)}
					</article>
				</div>
			</Layout>
		</>
	);
};

export default ArticleDetail;
