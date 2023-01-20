import LuButton from "@/components/global/LuButton/LuButton";
import { luLogo } from "@/constants/icons";
import routes from "@/constants/routes";
import Link from "next/link";
import React, { FC } from "react";
import { RiUserLine } from "react-icons/ri";

const Navbar: FC = () => {
	return (
		<div className="fixed top-0 left-0 z-50 w-full bg-l-bg-color">
			<div className="flex items-center justify-between w-full h-20 text-center bg-l-bg-color l-container ">
				<nav className="flex items-center list-none gap-x-4 ">
					<li>
						<Link href={routes.home.path}>{luLogo()}</Link>
					</li>
					<li className="hover:text-l-primary-color no-transition-effect">
						<Link href={routes.home.path}>صفحه اصلی</Link>
					</li>
					<li className="hover:text-l-primary-color no-transition-effect">
						<Link href={routes.home.path}>اخبار</Link>
					</li>
					<li className="hover:text-l-primary-color no-transition-effect">
						<Link href={routes.home.path}>درباره ما</Link>
					</li>
					<li className="hover:text-l-primary-color no-transition-effect">
						<Link href={routes.home.path}>ارتباط با ما</Link>
					</li>
				</nav>
				<Link href={routes.login.path}>
					<LuButton>
						<RiUserLine />
						ورود به حساب
					</LuButton>
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
