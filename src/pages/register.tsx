import Layout from "@/components/global/Layout/Layout";
import LoginRegisterWrapper from "@/components/global/LoginRegisterWrapper/LoginRegisterWrapper";
import LuButton from "@/components/global/LuButton/LuButton";
import routes from "@/constants/routes";
import Link from "next/link";
import { FC } from "react";

interface IRegister {}

const Register: FC<IRegister> = ({}) => {
	return (
		<Layout>
			<LoginRegisterWrapper>
				<form className="w-3/4 mx-auto">
					<h1 className="pb-2 mb-6 text-xl font-bold text-center border-b border-l-border-color-base">
						ورود به حساب
					</h1>
					<div className="mb-2">
						<label
							htmlFor="username"
							className="block mb-2 text-sm font-medium text-l-text-color "
						>
							نام کاربری
						</label>
						<input
							type="text"
							id="نام کاربری"
							name="username"
							className="bg-gray-50 border outline-none border-l-border-color-base text-l-text-color text-sm rounded-lg focus:ring-l-primary-color focus:border-l-primary-color block w-full p-2.5     "
							placeholder="نام کاربری"
							required
						/>
					</div>
					<div className="mb-2">
						<label
							htmlFor="password"
							className="block mb-2 text-sm font-medium text-l-text-color "
						>
							رمز عبور
						</label>
						<input
							type="text"
							id="رمز عبور"
							name="password"
							className="bg-gray-50 border outline-none border-l-border-color-base text-l-text-color text-sm rounded-lg focus:ring-l-primary-color focus:border-l-primary-color block w-full p-2.5     "
							placeholder="رمز عبور"
							required
						/>
					</div>
					<div className="flex justify-between mt-4 gap-x-4">
						<Link href={routes.login.path}>
							<span className="text-xs cursor-pointer hover:text-l-primary-color">
								ورود به حساب
							</span>
						</Link>
						<LuButton LuType="primary">ایجاد حساب</LuButton>
					</div>
				</form>
			</LoginRegisterWrapper>
		</Layout>
	);
};

export default Register;
