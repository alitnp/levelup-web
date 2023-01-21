import Layout from "@/components/global/Layout/Layout";
import Head from "next/head";
import Image from "next/image";
import { FC } from "react";

interface IArticleDetail {}

const fakeArticle = {
	title:
		"بزودی طرح فروش متری مسکن از طریق بورس آغاز می شود.",
	desc:
		"متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
	imageUrl: "/images/news/3.webp",
};

const ArticleDetail: FC<IArticleDetail> = ({}) => {
	return (
		<>
			<Head>
				<title>{fakeArticle.title}</title>
			</Head>
			<Layout>
				<div className="max-w-3xl py-10 mx-auto">
					<article className="l-container ">
						<div className="relative w-full overflow-hidden rounded-lg">
							<Image
								src={fakeArticle.imageUrl}
								width={768}
								height={768}
								alt=""
								style={{ objectFit: "cover" }}
							/>
						</div>
						<h1 className="my-4 text-3xl font-bold">
							{fakeArticle.title}
						</h1>
						<p>{fakeArticle.desc}</p>
					</article>
				</div>
			</Layout>
		</>
	);
};

export default ArticleDetail;
