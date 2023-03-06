import LuTab from "@/components/global/LuTab/LuTab";
import Image from "next/image";
import React, { FC, useState, useEffect } from "react";
import { BsArrowLeftCircle } from "react-icons/bs";
import ApiService from "@/utils/ApiService";
import endpoints from "@/constants/endpoints";
import {
	backendResponse,
	content,
} from "@/constants/models";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/reduxStore";
import { getAllContentTypes } from "@/redux/middlewares/getAllContentTypes";

const fakeCategories = [
	{
		title: "اخبار",
		articles: [
			{
				title:
					"تحلیل بنیادی فملی / ارمغان فلز سرخ برای شرکت ملی مس چه خواهد بود؟",
				imageUrl: "/images/news/1.jpg",
			},
			{
				title:
					"عرضه اولیه سهام شرکت سیمان اردستان / «اردستان» چهارشنبه به بورس می‌آید",
				imageUrl: "/images/news/2.webp",
			},
			{
				title:
					"بزودی طرح فروش متری مسکن از طریق بورس آغاز می شود.",
				imageUrl: "/images/news/3.webp",
			},
			{ title: "", imageUrl: "/images/news/4.jpg" },
		],
	},
	{
		title: "مقالات",
		articles: [
			{
				title:
					"تحلیل بنیادی فملی / ارمغان فلز سرخ برای شرکت ملی مس چه خواهد بود؟",
				imageUrl: "/images/news/1.jpg",
			},
			{
				title:
					"عرضه اولیه سهام شرکت سیمان اردستان / «اردستان» چهارشنبه به بورس می‌آید",
				imageUrl: "/images/news/2.webp",
			},
			{
				title:
					"بزودی طرح فروش متری مسکن از طریق بورس آغاز می شود.",
				imageUrl: "/images/news/3.webp",
			},
			{ title: "", imageUrl: "/images/news/4.jpg" },
		],
	},
	{
		title: "آموزش",
		articles: [
			{
				title:
					"تحلیل بنیادی فملی / ارمغان فلز سرخ برای شرکت ملی مس چه خواهد بود؟",
				imageUrl: "/images/news/1.jpg",
			},
			{
				title:
					"عرضه اولیه سهام شرکت سیمان اردستان / «اردستان» چهارشنبه به بورس می‌آید",
				imageUrl: "/images/news/2.webp",
			},
			{
				title:
					"بزودی طرح فروش متری مسکن از طریق بورس آغاز می شود",
				imageUrl: "/images/news/3.webp",
			},
			{ title: "", imageUrl: "/images/news/4.jpg" },
		],
	},
];

const Articles: FC = () => {
	//states
	const contentTypes = useSelector(
		(state: RootState) => state.contentType
	);
	const [activeCategoryIndex, setActiveCategoryIndex] =
		useState<number>();
	const [contents, setContents] = useState<content[]>();
	console.log(contentTypes);
	//hooks
	const dispatch: AppDispatch = useDispatch();

	//effect
	useEffect(() => {
		contentTypes.list.length > 0 && getContents();
		contentTypes.list.length === 0 &&
			dispatch(getAllContentTypes());
	}, [activeCategoryIndex]);

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
								<div
									key={index}
									className="relative w-full overflow-hidden rounded-lg h-80"
								>
									<Image
										src={content.thumbnailUrl}
										fill
										alt=""
										style={{ objectFit: "cover" }}
									/>
									{index !== 3 && (
										<div className="absolute top-0 left-0 flex flex-col items-end justify-end w-full h-full px-2 py-4 cursor-pointer bg-slate-800/60 group">
											<p className="text-lg font-bold text-center text-l-opposite-text-color md:text-right">
												{content.title.length < 55
													? content.title
													: content.title.substring(0, 55) + "..."}
											</p>
											<div className="pt-2 overflow-hidden transition-all duration-1000 ease-in-out max-h-0 group-hover:max-h-20">
												<p className="px-4 py-1 text-sm text-l-opposite-text-color">
													بیشتر بخوانید
												</p>
											</div>
										</div>
									)}
									{index === 3 && (
										<div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full px-2 py-4 cursor-pointer bg-slate-800/60">
											<span className="text-6xl text-l-opposite-text-color">
												<BsArrowLeftCircle />
											</span>
											<span className="mt-2 text-base text-l-opposite-text-color">
												نمایش همه
											</span>
										</div>
									)}
								</div>
							);
						})}
				</div>
			</div>
		</section>
	);
};

export default Articles;
