import { luLogo } from "@/constants/icons";
import routes from "@/constants/routes";
import useScroll from "@/utils/hooks/useScroll";
import Link from "next/link";
import React, { FC, useState, useEffect } from "react";
import { RiUserLine } from "react-icons/ri";
import { HiMenu } from "react-icons/hi";
import { Drawer } from "antd";

const navbarItems = [
	{ title: "صفحه اصلی", href: routes.home.path },
	{ title: "مقاله ها", href: routes.articles.path },
	{ title: "درباره ما", href: routes.aboutus.path },
	{ title: "ارتباط با ما", href: routes.contactus.path },
];

const Navbar: FC = () => {
	//states
	const [lastScroll, setLastScroll] = useState<number>(0);
	const [hideNavbar, setHideNavbar] =
		useState<boolean>(false);
	const [openDrawer, setOpenDrawer] =
		useState<boolean>(false);

	//hooks
	const scroll = useScroll();

	//effects
	useEffect(() => {
		if (scroll === 0) {
			setHideNavbar(false);
		} else if (scroll < lastScroll) {
			setHideNavbar(false);
		} else {
			setHideNavbar(true);
		}
		setLastScroll(scroll);
	}, [scroll]);

	//functions
	const toggleDrawer = () =>
		setOpenDrawer((prevState) => !prevState);

	return (
		<>
			<div
				className={`fixed  left-0 z-50 w-full transition-[top] duration-500 shadow-lg bg-l-bg-color ${
					hideNavbar ? "-top-20" : "top-0"
				}`}
			>
				<div className="flex items-center justify-between w-full h-20 text-center l-container">
					<nav className="items-center hidden list-none sm:flex gap-x-4 ">
						<li>
							<Link href={routes.home.path}>{luLogo()}</Link>
						</li>
						{navbarItems.map((item, index) => (
							<li
								key={index}
								className="hover:text-l-secondary-color no-transition-effect"
							>
								<Link href={item.href}>{item.title}</Link>
							</li>
						))}
					</nav>
					<div className="flex gap-4 sm:hidden">
						<div onClick={toggleDrawer}>
							<HiMenu className="text-3xl cursor-pointer" />
						</div>
						<Link href={routes.home.path}>
							{luLogo("60", "30")}
						</Link>
					</div>
					<Link href={routes.login.path}>
						<button className="flex justify-center sm:min-w-[100px] items-center sm:px-4 sm:py-[6px] border rounded-full p-3 bg-l-secondary-color text-l-opposite-text-color   sm:rounded-md gap-x-1  hover:border-l-primary-color">
							<RiUserLine />
							<span className="hidden sm:inline">
								ورود به حساب
							</span>
						</button>
					</Link>
				</div>
			</div>
			<Drawer
				title="Level Up"
				placement="right"
				onClose={toggleDrawer}
				open={openDrawer}
			>
				<nav className="flex flex-col gap-3 list-none gap-x-4">
					{navbarItems.map((item, index) => (
						<li
							key={index}
							className="text-base font-medium hover:text-l-primary-color no-transition-effect"
						>
							<Link href={item.href}>{item.title}</Link>
						</li>
					))}
				</nav>
			</Drawer>
		</>
	);
};

export default Navbar;
