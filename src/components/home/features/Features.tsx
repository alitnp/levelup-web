import Image from "next/image";
import { FC } from "react";

interface IFeatures {}
type feature = {
	title: string;
	desc: string;
	image: string;
};
const features: feature[] = [
	{
		title: "درآمد از طریق کد معرف",
		desc:
			"بعد از خرید اشتراک می توانید از طریق لینک اشتراک گذاری، لینک اختصاصی خود را برای دوستانتان ارسال کنید و 10٪ از میزان خرید اشتراک آنها به صورت همیشگی دریافت نمایید.",
		image: "/images/referral.png",
	},
	{
		title: "خرید بسته های اشتراک به صورت گارانتی",
		desc: `توجه داشته باشید LEVEL UP   اولین و تنها استارت آپی هست که میزان پیپ واقعی در اختیار تریدر میگذارد.
به عنوان مثال شما با خرید یک اشتراک +500 پیپ در مجموع سیگنال های دریافتی مثبت و منفی حتما در نهایت 500 پیپ مثبت از بازار کسب خواهید کرد و آنگاه اشتراک به پایان می رسد.
`,
		image: "/images/detect-lost.png",
	},
];

const Features: FC<IFeatures> = ({}) => {
	const getFeatureElement = (
		feature: feature,
		index: number
	) => {
		if (index % 2 === 0)
			return (
				<article
					key={index}
					className="flex flex-col items-center justify-center md:flex-row gap-x-40 l-container"
				>
					<div className="relative overflow-hidden rounded-md md:hidden">
						<Image
							src={feature.image}
							width={288}
							height={288}
							alt=""
							className="object-cover w-72 h-72"
						/>
					</div>
					<div className="mt-4 md:mt-0">
						<h3 className="mb-2 text-2xl font-bold text-center md:text-right">
							{feature.title}
						</h3>
						<p className="max-w-[60ch] text-center md:text-right">
							{feature.desc}
						</p>
					</div>
					<div className="relative hidden overflow-hidden rounded-md md:block">
						<Image
							src={feature.image}
							width={288}
							height={288}
							alt=""
							className="object-cover w-72 h-72"
						/>
					</div>
				</article>
			);
		return (
			<article
				key={index}
				className="flex flex-col items-center justify-center md:flex-row gap-x-40 l-container"
			>
				<div className="relative overflow-hidden rounded-md">
					<Image
						src={feature.image}
						width={288}
						height={288}
						alt=""
						className="object-cover w-72 h-72"
					/>
				</div>
				<div className="mt-4 md:mt-0">
					<h3 className="mb-2 text-2xl font-bold text-center md:text-right">
						{feature.title}
					</h3>
					<p className="max-w-[60ch] text-center md:text-right">
						{feature.desc}
					</p>
				</div>
			</article>
		);
	};

	return (
		<div className="w-full my-16 md:my-24">
			<section className="flex flex-col gap-24 md:gap-32 l-container">
				{features.map((feature, index) =>
					getFeatureElement(feature, index)
				)}
			</section>
		</div>
	);
};

export default Features;
