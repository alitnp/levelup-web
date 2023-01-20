import HeaderParticles from "@/components/home/header/HeaderParticles";
import Navbar from "@/components/home/header/Navbar";
import React, { FC } from "react";

const Header: FC = () => {
	return (
		<header className="relative h-[60vh] min-h-[300px]">
			<HeaderParticles />
			<div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full pt-10 text-center text-l-opposite-text-color">
				<h1 className="font-black text-center text-9xl ">
					level.UP
				</h1>
				<h3 className="text-xl text-center">
					بستر تخصصی اشتراک گذاری سیگنال های معاملاتی
				</h3>
			</div>
		</header>
	);
};

export default Header;
