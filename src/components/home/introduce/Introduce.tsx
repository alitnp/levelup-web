import DlMobileApp from "@/components/global/DlMobileApp/DlMobileApp";
import DlMobileAppBtn from "@/components/global/DlMobileApp/DlMobileAppBtn";
import LuButton from "@/components/global/LuButton/LuButton";
import routes from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
const Introduce = () => {
	return (
		<AnimationOnScroll
			animateIn="animate__fadeInUp"
			offset={150}
			duration={1}
			animateOnce
		>
			<section className="flex items-center w-full my-28 ">
				<div className="flex items-center justify-between w-full l-container ">
					<div className="w-full">
						<h3 className="mb-4 text-4xl font-medium text-center sm:text-right">
							سیگنال های معاملاتی
						</h3>
						<p className="max-w-lg mx-auto text-center sm:text-right sm:m-0 sm:mb-4">
							تیم Level Up مجموعه‌ای از متخصصین با تجربه در حوزه‌
							مالی، سرمایه گذاری و تکنولوژی است که در تلاش‌اند تا
							با ترکیب تکنولوژی و علم مالی،‌ راهکارهایی ساده،
							کارآمد و تخصصی در اختیار علاقه‌مندان رمز ارزها قرار
							دهند تا افراد با هر سطح دانش و تجربه‌ای بتوانند در
							حوزه سرمایه گذاری و کسب‌وکار در زمینه‌های متنوع ارز
							دیجیتال فعالیت نمایند.‌
						</p>
						<DlMobileAppBtn />
					</div>
					<div className="hidden sm:block">
						<Image
							src="/images/feature2.png"
							width={500}
							height={500}
							alt=""
						/>
					</div>
				</div>
			</section>
		</AnimationOnScroll>
	);
};

export default Introduce;
