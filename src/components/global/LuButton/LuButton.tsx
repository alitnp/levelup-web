import { ButtonHTMLAttributes, FC, ReactNode } from "react";

interface ILuButton
	extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	LuType?: "default" | "primary";
	className?: string;
}

const LuButton: FC<ILuButton> = ({
	children,
	className,
	LuType = "default",
	...props
}) => {
	return (
		<button
			className={`flex justify-center min-w-[100px] items-center px-4 py-[6px] border rounded-md gap-x-1 border-l-border-color-base hover:border-l-primary-color ${
				LuType === "primary" &&
				"bg-l-secondary-color text-l-opposite-text-color"
			} ${className}`}
			{...props}
		>
			{children}
		</button>
	);
};

export default LuButton;
