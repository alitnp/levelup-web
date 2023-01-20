import Layout from "@/components/global/Layout/Layout";
import LuButton from "@/components/global/LuButton/LuButton";
import routes from "@/constants/routes";
import Link from "next/link";
import { FC } from "react";

interface Ilogin {}

const login: FC<Ilogin> = ({}) => {
	return (
		<Layout>
			<div>
				<div className="l-container min-h-[400px] h-[80vh] flex justify-center items-center">
					<div className="w-full mt-10 border h-[70%] flex overflow-hidden rounded-lg shadow-lg border-l-border-color-base">
						<div className="w-1/2 bg-slate-600"></div>
						<div className="flex items-center w-1/2 px-6">
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
									<Link href={routes.register.path}>
										<span className="text-xs cursor-pointer hover:text-l-primary-color">
											ایجاد حساب کاربری
										</span>
									</Link>
									<LuButton LuType="primary">ورود</LuButton>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default login;
