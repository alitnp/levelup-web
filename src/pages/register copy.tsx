import Layout from "@/components/global/Layout/Layout";
import LoginRegisterWrapper from "@/components/global/LoginRegisterWrapper/LoginRegisterWrapper";
import LuButton from "@/components/global/LuButton/LuButton";
import routes from "@/constants/routes";
import Link from "next/link";
import { FC, useState } from "react";

interface IRegister {}

const Register: FC<IRegister> = ({}) => {
	const [firstName, setFirstName] = useState<string>("");
	const [lastName, setLastName] = useState<string>("");
	const [mobileNumber, setMobileNumber] =
		useState<string>("");
	const [
		referrerUserMobileNumber,
		setReferrerUserMobileNumber,
	] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	return (
		<Layout>
			<LoginRegisterWrapper>
				<form className="w-3/4 mx-auto">
					<h1 className="pb-2 text-xl font-bold text-center">
						ایجاد حساب کاربری
					</h1>
					<div className="mb-2">
						<label
							htmlFor="firstName"
							className="block mb-2 text-sm font-medium text-l-text-color "
						>
							نام
						</label>
						<input
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
							type="text"
							id="نام"
							name="firstName"
							className="bg-gray-50 border outline-none border-l-border-color-base text-l-text-color text-sm rounded-lg focus:ring-l-primary-color focus:border-l-primary-color block w-full p-2.5"
							placeholder="نام"
							required
						/>
					</div>
					<div className="mb-2">
						<label
							htmlFor="lastName"
							className="block mb-2 text-sm font-medium text-l-text-color "
						>
							نام خانوادگی
						</label>
						<input
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
							type="text"
							id="نام خانوادگی"
							name="lastName"
							className="bg-gray-50 border outline-none border-l-border-color-base text-l-text-color text-sm rounded-lg focus:ring-l-primary-color focus:border-l-primary-color block w-full p-2.5"
							placeholder="نام خانوادگی"
							required
						/>
					</div>
					<div className="mb-2">
						<label
							htmlFor="lastName"
							className="block mb-2 text-sm font-medium text-l-text-color "
						>
							شماره موبایل
						</label>
						<input
							value={mobileNumber}
							onChange={(e) => setMobileNumber(e.target.value)}
							type="text"
							id="شماره موبایل"
							name="lastName"
							className="bg-gray-50 border outline-none border-l-border-color-base text-l-text-color text-sm rounded-lg focus:ring-l-primary-color focus:border-l-primary-color block w-full p-2.5"
							placeholder="شماره موبایل"
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
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							type="password"
							id="رمز عبور"
							name="password"
							className="bg-gray-50 border outline-none border-l-border-color-base text-l-text-color text-sm rounded-lg focus:ring-l-primary-color focus:border-l-primary-color block w-full p-2.5     "
							placeholder="رمز عبور"
							required
						/>
					</div>
					<div className="mb-2">
						<label
							htmlFor="password"
							className="block mb-2 text-sm font-medium text-l-text-color "
						>
							شماره معرف
						</label>
						<input
							value={referrerUserMobileNumber}
							onChange={(e) =>
								setReferrerUserMobileNumber(e.target.value)
							}
							type="text"
							id="referrerUserMobileNumber"
							name="password"
							className="bg-gray-50 border outline-none border-l-border-color-base text-l-text-color text-sm rounded-lg focus:ring-l-primary-color focus:border-l-primary-color block w-full p-2.5     "
							placeholder="referrerUserMobileNumber"
							required
						/>
					</div>
					<div className="flex justify-end mt-4 gap-x-4">
						{/* <Link href={routes.login.path}>
							<span className="text-xs cursor-pointer hover:text-l-primary-color">
								ورود به حساب
							</span>
						</Link> */}
						<LuButton LuType="primary">ایجاد حساب</LuButton>
					</div>
				</form>
			</LoginRegisterWrapper>
		</Layout>
	);
};

export default Register;
