import LuButton from "@/components/global/LuButton/LuButton";
import endpoints from "@/constants/endpoints";
import { backendResponse, user } from "@/constants/models";
import routes from "@/constants/routes";
import ApiService from "@/utils/ApiService";
import { convertFormValuesToEnglishNumber } from "@/utils/helperFunctions";
import { Form, Input, message } from "antd";
import { useRouter } from "next/router";
import {
	FC,
	useCallback,
	useState,
	useEffect,
	memo,
} from "react";

interface IRegisterToken {
	user: user;
	back(): void;
	handleSuccess(): void;
}

const RegisterToken: FC<IRegisterToken> = ({
	user,
	back,
	handleSuccess,
}) => {
	//state
	const [loading, setLoading] = useState<boolean>(false);
	const [timeLeft, setTimeLeft] = useState<number>(120);

	//hoooks
	const [form] = Form.useForm();
	const [messageApi, contextHolder] = message.useMessage();
	const router = useRouter();

	//effect
	useEffect(() => {
		let timer: ReturnType<typeof setInterval>;
		if (timeLeft < 1) return;
		timer = setInterval(() => {
			if (timeLeft < 1) return;
			setTimeLeft((prevState) => prevState - 1);
		}, 1000);
		return () => clearInterval(timer);
	}, [timeLeft]);

	//functions
	const handleChange = useCallback(
		(value: any, values: any) => {
			convertFormValuesToEnglishNumber(
				value,
				values,
				["token"],
				form,
				true
			);
		},
		[]
	);
	const handleSubmit = useCallback(async (values: any) => {
		setLoading(true);
		await ApiService.post(endpoints.userConfirmOtp, {
			userId: user.id,
			token: values.token,
		})
			.then((res: backendResponse<null>) => {
				if (res.isSuccess) {
					handleSuccess();
					// router.push(
					// 	routes.registerSuccess.path +
					// 		"?firstname=" +
					// 		values.firstname +
					// 		"&lastname=" +
					// 		values.lastName +
					// 		"&mobilenumber=" +
					// 		values.mobileNumber
					// );
				} else messageApi.error(res.message);
			})
			.catch((err: any) =>
				messageApi.error(err?.response?.message)
			);
		setLoading(false);
	}, []);
	const resendToken = useCallback(async () => {
		setLoading(true);
		await ApiService.post(endpoints.userResendOtp, {
			userId: user.id,
		})
			.then((res: backendResponse<user>) => {
				if (res.isSuccess) {
					messageApi.success(
						"کد تایید به شماره " +
							user.mobileNumber +
							" ارسال شد."
					);
					setTimeLeft(120);
				} else messageApi.error(res.message);
			})
			.catch((err: any) =>
				messageApi.error(err?.response?.message)
			);
		setLoading(false);
	}, []);

	return (
		<Form
			onFinish={handleSubmit}
			form={form}
			onValuesChange={handleChange}
			layout="vertical"
			className="w-3/4 mx-auto"
			requiredMark={false}
		>
			<h1 className="pb-2 mb-6 text-xl font-bold text-center">
				ایجاد حساب کاربری
			</h1>
			<Form.Item
				rules={[
					{ required: true, message: "کد تایید وارد نشده" },
				]}
				name="token"
				label={`کد ارسال شده به شماره ${user.mobileNumber}`}
			>
				<Input placeholder="کد تایید" disabled={loading} />
			</Form.Item>
			<p className="text-xs">
				<span>کدی دریافت نکردید؟</span>{" "}
				{timeLeft > 0 && (
					<span className="text-l-secondary-text-color">
						ارسال مجدد در {timeLeft}
					</span>
				)}
				{timeLeft < 1 && (
					<span
						className="cursor-pointer text-l-secondary-color hover:underline"
						onClick={resendToken}
					>
						ارسال مجدد
					</span>
				)}
			</p>
			{contextHolder}
			<div className="flex items-center justify-between mt-4 gap-x-4">
				<p
					className="text-sm cursor-pointer text-l-secondary-color hover:underline"
					onClick={back}
				>
					بازگشت
				</p>
				<LuButton disabled={loading} LuType="primary">
					ارسال کد تایید
				</LuButton>
			</div>
		</Form>
	);
};

export default memo(RegisterToken);
