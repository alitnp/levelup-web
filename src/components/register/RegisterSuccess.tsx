import DlMobileAppBtn from "@/components/global/DlMobileApp/DlMobileAppBtn";
import { CheckCircleOutlined } from "@ant-design/icons";
import { FC } from "react";

const RegisterSuccess: FC = () => {
	return (
		<div className="flex flex-col items-center w-3/4 mx-auto">
			<p className="text-7xl text-l-success-color ">
				<CheckCircleOutlined />
			</p>
			<h3>حساب شما با موفقیت ایجاد شد.</h3>
			<DlMobileAppBtn />
		</div>
	);
};

export default RegisterSuccess;
