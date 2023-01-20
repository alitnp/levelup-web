import { FC } from "react";

type tab = {
	title: string;
	key: number;
};

interface ILuTab {
	tabs: tab[];
	activeKey: number;
	onChange(a: number): void;
	centered?: boolean;
}

const LuTab: FC<ILuTab> = ({
	tabs,
	activeKey,
	onChange,
	centered,
}) => {
	return (
		<div
			className={`flex flex-col sm:flex-row w-full border-b border-l-border-color-base gap-x-2 text-center sm:text-right ${
				centered && "justify-center"
			}`}
		>
			{tabs.map((tab, index) => (
				<div
					onClick={() => onChange(tab.key)}
					key={index}
					className={` ${
						activeKey === tab.key
							? "border-b-2 border-l-primary-color bg-l-faded-primary-color sm:bg-[unset]"
							: "hover:bg-l-faded-primary-color"
					} px-4  sm:px-10 cursor-pointer py-2 text-lg select-none`}
				>
					{tab.title}
				</div>
			))}
		</div>
	);
};

export default LuTab;
