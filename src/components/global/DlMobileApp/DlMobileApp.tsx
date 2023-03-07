import Link from "next/link";
import { FC } from "react";
import { FaMobileAlt } from "react-icons/fa";

const DlMobileApp: FC = () => {
	return (
		<Link href="http://Dl.levelupfx724.com/levelup.apk">
			<button className="flex justify-center sm:min-w-[100px] items-center sm:px-4 sm:py-[6px] rounded-full p-3 bg-l-secondary-color text-l-opposite-text-color sm:rounded-md gap-x-1 text-sm">
				<FaMobileAlt />
				<span className="hidden sm:inline">
					دانلود نرم افزار موبایل
				</span>
			</button>
		</Link>
	);
};

export default DlMobileApp;
