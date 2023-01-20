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
		desc: `	متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
						استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
						روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای
						شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با
						هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در
						شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
						متخصصان را می طلبد.`,
		image: "/images/referral.webp",
	},
	{
		title: "بازگشت اعتبار در صورت زیان",
		desc: `	متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
						استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
						روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای
						شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با
						هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در
						شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
						متخصصان را می طلبد.`,
		image: "/images/detect-lost.webp",
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
