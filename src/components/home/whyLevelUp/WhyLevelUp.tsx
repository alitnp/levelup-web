import LuTab from "@/components/global/LuTab/LuTab";
import WhyUsSlide from "@/components/home/whyLevelUp/components/WhyUsSlide";
import React, { FC, useState, useRef } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Slide } from "react-slideshow-image";
import { SlideshowRef } from "react-slideshow-image/dist/types";

const fakeData = [
	{
		tabName: "ترید بدون تحلیل تکنیکال",
		title: "ترید بدون تحلیل تکنیکال",
		desc:
			"با Level Up تریدر ارسنج نیاز به یادگیری و تحلیل تکنیکال ندارید. فقط کافی است با تماشای نمودار در سیگنال های خرید و فروش نمایش داده شده، اقدام به خرید و فروش ارزدیجیتال کنید.",
		imageUrl: "/images/fast-efficient-slide.png",
	},
	{
		tabName: "همه جا همراه شما",
		title: "همه جا همراه شما",
		desc:
			"با خرید اشتراک Level Up تریدر در همه جا و با گوشی همراه و رایانه و ... به نمودارها و سیگنال ها دسترسی خواهید داشت. از سودها عقب نمونید.",
		imageUrl: "/images/developer-focused-slide.png",
	},
	{
		tabName: "تصمیم گیر باش",
		title: "تصمیم گیر باش",
		desc:
			"با Level Up تریدر ارزسنج نیازی به تحلیل ندارید. فقط تصمیم گیرنده باش که آیا بخرید یا نه. فارغ از اینکه نیاز به تحلیل زمان خرید و فروش داشته باشید.",
		imageUrl: "/images/security-compliance-slide.png",
	},
	{
		tabName: "تنظیمات",
		title: "تنظیمات",
		desc: "شب شسب شسیب شسیب شسیب ",
		imageUrl: "/images/highly-configurable-slide.png",
	},
];

const WhyLevelUp: FC = () => {
	//states
	const [activeIndex, setActiveIndex] = useState<number>(0);

	//hooks
	const slideRef = useRef<SlideshowRef>(null);

	//functions
	const handleTabChange = (newKey: number) => {
		slideRef?.current && slideRef.current.goTo(newKey);
		setActiveIndex(newKey);
	};

	return (
		<AnimationOnScroll
			animateIn="animate__fadeInUp"
			offset={150}
			duration={1}
			animateOnce
		>
			<section className="mb-16">
				<div className="p-10 rounded-lg l-container bg-l-layer-bg-color ">
					<div className="px-4 pt-6 ">
						<h3 className="text-4xl text-center">
							چرا Level Up ؟
						</h3>
						<p className="mt-2 text-center">
							تیم ما متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
							و با استفاده از طراحان گرافیک است
						</p>
					</div>
					<div className="mt-10">
						<LuTab
							centered
							activeKey={activeIndex}
							onChange={handleTabChange}
							tabs={fakeData.map((item, index) => ({
								title: item.tabName,
								key: index,
							}))}
						/>
						<div className="max-w-5xl mx-auto mt-10">
							<Slide
								indicators={false}
								ref={slideRef}
								autoplay={false}
								transitionDuration={300}
								infinite
								onChange={(_from, to) => setActiveIndex(to)}
								easing="ease-out"
								arrows={false}
							>
								{fakeData.map((item, index) => (
									<WhyUsSlide
										key={index}
										title={fakeData[index].title}
										desc={fakeData[index].desc}
										imageUrl={fakeData[index].imageUrl}
									/>
								))}
							</Slide>
						</div>
					</div>
				</div>
			</section>
		</AnimationOnScroll>
	);
};

export default WhyLevelUp;
