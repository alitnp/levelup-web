import LuParticles from "@/components/global/LuParticles/LuParticles";
import { FC, ReactNode } from "react";

interface ILoginRegisterWrapper {
	children: ReactNode;
}

const LoginRegisterWrapper: FC<ILoginRegisterWrapper> = ({
	children,
}) => {
	return (
		<div>
			<div className="l-container min-h-[700px] sm:h-[80vh] flex  justify-center items-center">
				<div className="w-full  mb-20 border sm:h-[70%] flex flex-col sm:flex-row overflow-hidden rounded-lg shadow-lg border-l-border-color-base">
					<div className="relative h-52 sm:h-full sm:w-1/2">
						<LuParticles particlesId="tsparticles-login" />
						<div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full text-center border text-l-opposite-text-color">
							<h1 className="text-3xl font-black text-center sm:text-5xl ">
								level.UP
							</h1>
							<h3 className="text-sm text-center sm:text-base">
								بستر تخصصی اشتراک گذاری سیگنال های معاملاتی
							</h3>
						</div>
					</div>
					<div className="flex items-center px-2 py-10 sm:px-6 sm:w-1/2">
						{children}
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginRegisterWrapper;
