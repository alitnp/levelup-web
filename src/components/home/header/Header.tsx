import HeaderParticles from "@/components/home/header/HeaderParticles";
import Navbar from "@/components/home/header/Navbar";
import React, { FC } from "react";

const Header: FC = () => {
	return (
		<header className="relative h-[80vh] min-h-[300px]">
			<Navbar />
			<HeaderParticles />
			<div className="w-full h-full absolute text-l-opposite-text-color top-0 left-0 flex items-center justify-center text-center flex-col pt-10">
				<h1 className="text-9xl text-center font-black ">
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
