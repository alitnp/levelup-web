import LuParticles from "@/components/global/LuParticles/LuParticles";
import React, { FC } from "react";

const Header: FC = () => {
	return (
		<header className="relative h-[60vh] min-h-[300px]">
			<LuParticles />
			<div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full px-4 pt-10 text-center text-l-opposite-text-color">
				<h1 className="text-5xl font-black text-center sm:text-9xl ">
					level.UP
				</h1>
				<h3 className="text-lg text-center sm:text-xl">
					بستر تخصصی اشتراک گذاری سیگنال های معاملاتی
				</h3>
			</div>
		</header>
	);
};

export default Header;
