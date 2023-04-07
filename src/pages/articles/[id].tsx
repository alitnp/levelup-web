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
import LuButton from "@/components/global/LuButton/LuButton";
import { BsArrowRightShort } from "react-icons/bs";
import Link from "next/link";
import routes from "@/constants/routes";

const ArticleDetail: FC = () => {
	//states
	const [contentDetail, setContentDetail] =
		useState<content>();
	const [otherContents, setOtherContents] =
		useState<backendResponse<content[]>>();

	console.log(otherContents);

	//hooks
	const router = useRouter();
	//effect
	useEffect(() => {
		router.isReady &&
			router.query.id &&
			getContent(+router.query.id);
	}, [router.isReady, router.query.id]);
	useEffect(() => {
		getOtherContents();
	}, []);

	//functions
	const getOtherContents = async () => {
		await ApiService.post(endpoints.getContentsList, {}).then(
			(res: backendResponse<content[]>) => {
				if (res.isSuccess) setOtherContents(res);
			}
		);
	};
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
							<Link href={routes.articles.path}>
								<LuButton className="mb-4">
									<BsArrowRightShort />
									بازگشت
								</LuButton>
							</Link>
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
					{otherContents && (
						<div className=" l-container">
							<div className="flex justify-between mt-6 mb-4 border-b border-l-secondary-color">
								<p className="font-medium">مطالب دیگر</p>
								<Link
									href={routes.articles.path}
									className="text-l-secondary-color"
								>
									همه
								</Link>
							</div>
							<div className="flex gap-4">
								{otherContents.data.map((content, index) => {
									if (index > 3) return null;
									return (
										<Link
											href={routes.articles.path + "/" + content.id}
											key={content.id}
											className="w-full"
										>
											<div className="relative h-40">
												<Image
													src={content.thumbnailUrl}
													fill
													alt=""
													style={{ objectFit: "cover" }}
												/>
											</div>
											<p>{content.title}</p>
										</Link>
									);
								})}
							</div>
						</div>
					)}
				</div>
			</Layout>
		</>
	);
};

export default ArticleDetail;
