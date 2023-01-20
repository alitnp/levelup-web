import LuTab from "@/components/global/LuTab/LuTab";
import Image from "next/image";
import React, { FC, useState } from "react";
import { BsArrowLeftCircle } from "react-icons/bs";

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
	const [activeCategoryIndex, setActiveCategoryIndex] =
		useState<number>(0);

	return (
		<section className="mb-6">
			<div className="pt-12 pb-10 l-container">
				<LuTab
					tabs={fakeCategories.map((item, index) => ({
						title: item.title,
						key: index,
					}))}
					activeKey={activeCategoryIndex}
					onChange={setActiveCategoryIndex}
				/>
				<div className="grid justify-between grid-cols-1 gap-4 pt-6 sm:grid-cols-2 lg:flex sm:gap-10">
					{fakeCategories[activeCategoryIndex].articles.map(
						(article, index) => {
							if (index > 3) return null;
							return (
								<div
									key={index}
									className="relative w-full overflow-hidden rounded-lg h-80"
								>
									<Image
										src={article.imageUrl}
										fill
										alt=""
										style={{ objectFit: "cover" }}
									/>
									{index !== 3 && (
										<div className="absolute top-0 left-0 flex flex-col items-end justify-end w-full h-full px-2 py-4 cursor-pointer bg-slate-800/60 group">
											<p className="text-lg font-bold text-center text-l-opposite-text-color md:text-right">
												{article.title.length < 55
													? article.title
													: article.title.substring(0, 55) + "..."}
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
						}
					)}
				</div>
			</div>
		</section>
	);
};

export default Articles;
