import LuButton from "@/components/global/LuButton/LuButton";
import { FC } from "react";
import { BsCheck } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { RiUserLine } from "react-icons/ri";

interface IPlan {
	title: string;
	features: string[];
	keyFeature: string;
	price: number;
}

const Plan: FC<IPlan> = ({
	title,
	features,
	keyFeature,
	price,
}) => {
	return (
		<div className="flex flex-col items-center w-full px-4 pt-8 pb-4 text-center border rounded-md shadow-lg border-l-primary-color">
			<span className="text-3xl font-bold text-l-secondary-color">
				{title}
			</span>
			<span className="mb-4">{keyFeature}</span>
			<div className="flex flex-col gap-2 mb-6 text-sm text-right">
				{features.map((feature, index) => (
					<span key={index}>
						<BsCheck className="inline ml-1 text-l-primary-color" />
						{feature}
					</span>
				))}
			</div>
			{price === 0 && (
				<LuButton LuType="primary" className="w-full mt-auto">
					<RiUserLine className="inline ml-2" />
					ورود به پنل
				</LuButton>
			)}
			{price > 0 && (
				<LuButton LuType="primary" className="w-full mt-auto">
					<FiShoppingCart className="inline ml-2" />
					{price} Tether / تتر
				</LuButton>
			)}
		</div>
	);
};

export default Plan;
