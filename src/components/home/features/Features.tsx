import Image from "next/image";
import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
const Features = () => {
	return (
		<AnimationOnScroll
			animateIn="animate__fadeInUp"
			offset={300}
			duration={1}
			animateOnce
		>
			<section className="w-full h-[680px] flex items-center ">
				<div className="flex items-center justify-between w-full l-container ">
					<div className="">
						<h3 className="mb-3 text-4xl font-medium">
							سیگنال های معاملاتی
						</h3>
						<p className="max-w-lg">
							تیم <strong>Level Up</strong> مجموعه‌ای از متخصصین با
							تجربه در حوزه‌ <strong>مالی</strong>،
							<strong>سرمایه گذاری</strong> و
							<strong>تکنولوژی</strong> است که در تلاش‌اند تا با
							ترکیب تکنولوژی و علم مالی،‌ راهکارهایی ساده، کارآمد و
							تخصصی در اختیار علاقه‌مندان رمز ارزها قرار دهند تا
							افراد با هر سطح دانش و تجربه‌ای بتوانند در حوزه
							سرمایه گذاری و کسب‌وکار در زمینه‌های متنوع ارز
							دیجیتال فعالیت نمایند.‌
						</p>
					</div>
					<div className="">
						<Image
							src="/images/features.png"
							width={440}
							height={427}
							alt=""
						/>
					</div>
				</div>
			</section>
		</AnimationOnScroll>
	);
};

export default Features;
