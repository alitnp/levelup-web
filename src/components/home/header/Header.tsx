import LuParticles from "@/components/global/LuParticles/LuParticles";
import React, { FC } from "react";

const Header: FC = () => {
	return (
		<header className="relative h-[60vh] min-h-[300px]">
			<LuParticles />
			<div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full px-4 text-center text-l-opposite-text-color">
				<h1 className="text-5xl font-black text-center sm:text-9xl ">
					level.UP
				</h1>
				<h3 className="text-lg text-center sm:text-xl">
					اولین استارت آپ تخصصی بازارهای مالی بین المللی
				</h3>
			</div>
		</header>
	);
};

export default Header;
