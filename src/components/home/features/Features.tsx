import Image from "next/image";
import { FC } from "react";

interface IFeatures {}

const Features: FC<IFeatures> = ({}) => {
	return (
		<section className="flex flex-col gap-32 mt-20 mb-28">
			<article className="flex items-center justify-center gap-x-40 l-container">
				<div className="">
					<h3 className="mb-2 text-2xl font-bold">
						درآمد از طریق کد معرف
					</h3>
					<p className="w-[60ch]">
						متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
						استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
						روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای
						شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با
						هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در
						شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
						متخصصان را می طلبد.
					</p>
				</div>
				<div className="relative overflow-hidden rounded-md">
					<Image
						src="/images/referral.webp"
						width={288}
						height={288}
						alt=""
						className="object-cover w-72 h-72"
					/>
				</div>
			</article>
			<article className="flex items-center justify-center gap-x-40 l-container">
				<div className="relative overflow-hidden rounded-md">
					<Image
						src="/images/detect-lost.webp"
						width={288}
						height={288}
						alt=""
						className="object-cover w-72 h-72"
					/>
				</div>
				<div className="">
					<h3 className="mb-2 text-2xl font-bold">
						بازگشت اعتبار در صورت زیان
					</h3>
					<p className="w-[60ch]">
						متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
						استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
						روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای
						شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با
						هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در
						شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
						متخصصان را می طلبد.
					</p>
				</div>
			</article>
		</section>
	);
};

export default Features;
