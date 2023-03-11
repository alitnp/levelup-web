import Link from "next/link";
import { FC } from "react";
import { FaMobileAlt } from "react-icons/fa";

const DlMobileAppBtn: FC = () => {
	return (
		<Link href="http://Dl.levelupfx724.com/levelup.apk">
			<button className="flex justify-center sm:min-w-[100px] items-center sm:px-6 sm:py-3 w-full sm:w-fit mt-6 p-3 bg-l-secondary-color text-l-opposite-text-color rounded-md gap-x-1 ">
				<FaMobileAlt />
				<span className="">دانلود نرم افزار موبایل</span>
			</button>
		</Link>
	);
};

export default DlMobileAppBtn;
