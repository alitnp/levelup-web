import Layout from "@/components/global/Layout/Layout";
import LoginRegisterWrapper from "@/components/global/LoginRegisterWrapper/LoginRegisterWrapper";
import LuButton from "@/components/global/LuButton/LuButton";
import { Form, Input } from "antd";
import { useRouter } from "next/router";
import { FC, useEffect } from "react";

interface IRegister {}

const Register: FC<IRegister> = ({}) => {
	//hooks
	const [form] = Form.useForm();
	const router = useRouter();

	//effect
	useEffect(() => {
		router.query?.mobileNumber &&
			form.setFieldValue(
				"referrerUserMobileNumber",
				router.query.mobileNumber
			);
	}, [router]);

	return (
		<Layout>
			<LoginRegisterWrapper>
				<Form
					className="w-3/4 mx-auto"
					form={form}
					layout="vertical"
				>
					<h1 className="pb-2 text-xl font-bold text-center">
						ایجاد حساب کاربری
					</h1>
					<Form.Item
						label="نام"
						name="firstName"
						rules={[{ required: true, message: "نام وارد نشده" }]}
					>
						<Input placeholder="نام" />
					</Form.Item>
					<Form.Item
						label="نام خانوادگی"
						name="lastName"
						rules={[
							{
								required: true,
								message: "نام خانوادگی وارد نشده",
							},
						]}
					>
						<Input placeholder="نام خانوادگی" />
					</Form.Item>
					<Form.Item
						label="شماره همراه"
						name="mobileNumber"
						rules={[
							{
								required: true,
								message: "شماره همراه وارد نشده",
							},
						]}
					>
						<Input placeholder="شماره همراه" />
					</Form.Item>
					<Form.Item
						label="رمز عبور"
						name="password"
						rules={[
							{
								required: true,
								message: "رمز عبور وارد نشده",
							},
						]}
					>
						<Input.Password placeholder="رمز عبور" />
					</Form.Item>
					<Form.Item
						label="شماره معرف"
						name="referrerUserMobileNumber"
					>
						<Input
							placeholder="شماره معرف"
							disabled={!!router.query?.mobileNumber}
						/>
					</Form.Item>
					<div className="flex justify-end mt-4 gap-x-4">
						{/* <Link href={routes.login.path}>
							<span className="text-xs cursor-pointer hover:text-l-primary-color">
								ورود به حساب
							</span>
						</Link> */}
						<LuButton LuType="primary">ایجاد حساب</LuButton>
					</div>
				</Form>
			</LoginRegisterWrapper>
		</Layout>
	);
};

export default Register;
