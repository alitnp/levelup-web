import Plan from "@/components/home/plans/Plan/Plan";
import { FC } from "react";

interface IPlans {}

const falsePlans = [
	{
		title: "Free",
		keyFeature: "یک سیگنال",
		features: [
			"دسترسی به پنل کاربری",
			"استفاده از اپلیکیشن موبایل",
		],
		price: 0,
	},
	{
		title: "Silver",
		keyFeature: "۳۰۰ پیپ معاملاتی",
		features: [
			"دسترسی به پنل کاربری",
			"استفاده از اپلیکیشن موبایل",
			"سیگنال های نامحدود",
			"بازگشت اعتبار در صورت زیان",
			"آموزش های اختصاصی",
			"درخواست تحلیل",
		],
		price: 30,
	},
	{
		title: "Gold",
		keyFeature: "۵۰۰ پیپ معاملاتی",
		features: [
			"دسترسی به پنل کاربری",
			"استفاده از اپلیکیشن موبایل",
			"سیگنال های نامحدود",
			"بازگشت اعتبار در صورت زیان",
			"آموزش های اختصاصی",
			"درخواست تحلیل",
		],
		price: 50,
	},
	{
		title: "Platinum",
		keyFeature: "۱۰۰۰ پیپ معاملاتی",
		features: [
			"دسترسی به پنل کاربری",
			"استفاده از اپلیکیشن موبایل",
			"سیگنال های نامحدود",
			"بازگشت اعتبار در صورت زیان",
			"آموزش های اختصاصی",
			"درخواست تحلیل",
		],
		price: 80,
	},
];

const Plans: FC<IPlans> = ({}) => {
	return (
		<section className="mb-20">
			<div className=" l-container">
				<h3 className="pb-2 mb-2 text-xl font-bold border-b border-l-border-color-base">
					بسته ها
				</h3>
				<div className="flex gap-x-4">
					{falsePlans.map((plan, index) => (
						<Plan key={index} {...plan} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Plans;
