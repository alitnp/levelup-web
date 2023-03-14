import LuButton from "@/components/global/LuButton/LuButton";
import endpoints from "@/constants/endpoints";
import { backendResponse, user } from "@/constants/models";
import ApiService from "@/utils/ApiService";
import { convertFormValuesToEnglishNumber } from "@/utils/helperFunctions";
import { Form, Input, message } from "antd";
import { useRouter } from "next/router";
import {
	FC,
	useCallback,
	useState,
	useEffect,
} from "react";

interface IRegisterForm {
	setRegisterInfo: (_user: user) => void;
	setReferUser: (_user: user) => void;
	referUser: user | undefined;
}

const RegisterForm: FC<IRegisterForm> = ({
	setRegisterInfo,
	setReferUser,
	referUser,
}) => {
	const [loading, setLoading] = useState<boolean>(false);

	//hooks
	const router = useRouter();
	const [form] = Form.useForm();
	const [messageApi, contextHolder] = message.useMessage();

	//effect
	useEffect(() => {
		router.query?.mobilenumber &&
			getReferUser(router.query?.mobilenumber as string);
	}, [router]);
	useEffect(() => {
		referUser &&
			form.setFieldValue(
				"referrerUserMobileNumber",
				referUser.mobileNumber
			);
	}, [referUser]);

	//functions
	const getReferUser = useCallback(
		async (mobileNumber: string) => {
			await ApiService.get(
				endpoints.getUserByMobileNumber +
					"?mobileNumber=" +
					mobileNumber
			)
				.then(
					(res: backendResponse<user>) =>
						res.data && setReferUser(res.data)
				)
				.catch(() => {});
		},
		[]
	);
	const handleChange = useCallback(
		(value: any, values: any) => {
			convertFormValuesToEnglishNumber(
				value,
				values,
				["mobileNumber"],
				form,
				true
			);
		},
		[]
	);
	const handleSubmit = useCallback(
		async (values: Record<string, any>) => {
			setLoading(true);
			await ApiService.post(endpoints.userRegister, {
				...values,
				firebaseToken: "string",
			})
				.then((res: backendResponse<user>) => {
					if (res.isSuccess) setRegisterInfo(res.data);
					else messageApi.error(res.message);
				})
				.catch((err: any) =>
					messageApi.error(err?.response?.message)
				);
			setLoading(false);
		},
		[]
	);

	return (
		<>
			{contextHolder}
			<Form
				className="w-3/4 mx-auto"
				form={form}
				layout="vertical"
				onFinish={handleSubmit}
				onValuesChange={handleChange}
				validateTrigger="onSubmit"
				disabled={loading}
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
						{
							max: 11,
							min: 11,
							message: "شماره موبایل باید ۱۱ رقم باشد",
						},
					]}
				>
					<Input placeholder="شماره همراه مثال: ۰۹xxxxxxxxx" />
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
						disabled={!!router.query?.mobilenumber}
					/>
				</Form.Item>
				<div className="flex justify-end mt-4 gap-x-4">
					{/* <Link href={routes.login.path}>
							<span className="text-xs cursor-pointer hover:text-l-primary-color">
								ورود به حساب
							</span>
						</Link> */}
					<LuButton LuType="primary" disabled={loading}>
						ایجاد حساب
					</LuButton>
				</div>
			</Form>
		</>
	);
};

export default RegisterForm;
