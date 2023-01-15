import { luLogo } from "@/constants/icons";
import React, { FC } from "react";
import { RiUserLine } from "react-icons/ri";

const Navbar: FC = () => {
	return (
		<div className="fixed top-0 left-0 w-full bg-l-bg-color z-50">
			<div className="flex justify-between items-center w-full h-20 text-center bg-l-bg-color l-container ">
				<nav className="list-none flex gap-x-4 items-center ">
					<li>{luLogo()}</li>
					<li className="hover:text-l-primary-color cursor-pointer">
						صفحه اصلی
					</li>
					<li className="hover:text-l-primary-color cursor-pointer">
						اخبار
					</li>
					<li className="hover:text-l-primary-color cursor-pointer">
						درباره ما
					</li>
					<li className="hover:text-l-primary-color cursor-pointer">
						ارتباط با ما
					</li>
				</nav>
				<div className="flex items-center gap-x-1 border border-l-border-color-base hover:border-l-primary-color rounded-md px-2 py-1 cursor-pointer">
					<RiUserLine />
					ورود به حساب
				</div>
			</div>
		</div>
	);
};

export default Navbar;
