import Layout from "@/components/global/Layout/Layout";
import { FC } from "react";

interface IArticles {}
type category = { title: string; articles: article[] };
type article = {
	title: string;
	shortDesc?: string;
	imageUrl: string;
};
const fakeCategories: category[] = [
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
const Articles: FC<IArticles> = ({}) => {
	return (
		<Layout>
			<div>articles</div>
		</Layout>
	);
};

export default Articles;
