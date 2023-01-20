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
			offset={300}
			duration={1}
			animateOnce
		>
			<section className="w-full h-[680px] flex items-center ">
				<div className="flex items-center justify-between w-full l-container ">
					<div className="">
						<h3 className="mb-4 text-4xl font-medium">
							سیگنال های معاملاتی
						</h3>
						<p className="max-w-lg">
							تیم Level Up مجموعه‌ای از متخصصین با تجربه در حوزه‌
							مالی، سرمایه گذاری و تکنولوژی است که در تلاش‌اند تا
							با ترکیب تکنولوژی و علم مالی،‌ راهکارهایی ساده،
							کارآمد و تخصصی در اختیار علاقه‌مندان رمز ارزها قرار
							دهند تا افراد با هر سطح دانش و تجربه‌ای بتوانند در
							حوزه سرمایه گذاری و کسب‌وکار در زمینه‌های متنوع ارز
							دیجیتال فعالیت نمایند.‌
						</p>
						<Link href={routes.login.path}>
							<LuButton LuType="primary" className="mt-4">
								ورود به پنل کاربری
							</LuButton>
						</Link>
					</div>
					<div className="">
						<Image
							src="/images/feature2.webp"
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
