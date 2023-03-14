import Layout from "@/components/global/Layout/Layout";
import { CheckOutlined } from "@ant-design/icons";
import LoginRegisterWrapper from "@/components/global/LoginRegisterWrapper/LoginRegisterWrapper";
import LuButton from "@/components/global/LuButton/LuButton";
import endpoints from "@/constants/endpoints";
import { backendResponse, user } from "@/constants/models";
import ApiService from "@/utils/ApiService";
import { Form, Input } from "antd";
import { useRouter } from "next/router";
import {
	FC,
	useCallback,
	useEffect,
	useState,
} from "react";
import { AppDispatch } from "@/redux/reduxStore";
import { useDispatch } from "react-redux";
import routes from "@/constants/routes";
import RegisterForm from "@/components/register/RegisterForm";
import RegisterToken from "@/components/register/RegisterToken";
import RegisterSuccess from "@/components/register/RegisterSuccess";

interface IRegister {}

const Register: FC<IRegister> = ({}) => {
	//state
	const [referUser, setReferUser] = useState<user>();
	const [registerSuccess, setRegisterSuccess] =
		useState<boolean>(false);

	const [registerInfo, setRegisterInfo] = useState<
		user | undefined
	>();

	//hooks
	const [form] = Form.useForm();
	const router = useRouter();
	const dispatch: AppDispatch = useDispatch();

	//effect

	//functions
	const handleTokenBack = useCallback(
		() => setRegisterInfo(undefined),
		[]
	);
	return (
		<Layout>
			{referUser && (
				<div className="flex justify-center w-full mt-4">
					<div className="flex items-center px-4 py-2 rounded-md bg-l-success-color text-l-bg-color">
						<CheckOutlined className="ml-2" />
						معرف شما : {referUser.fullName}
					</div>
				</div>
			)}
			<LoginRegisterWrapper>
				{!registerSuccess && !registerInfo && (
					<RegisterForm
						setRegisterInfo={setRegisterInfo}
						referUser={referUser}
						setReferUser={setReferUser}
					/>
				)}
				{!registerSuccess && registerInfo && (
					<RegisterToken
						user={registerInfo}
						back={handleTokenBack}
						handleSuccess={() => setRegisterSuccess(true)}
					/>
				)}
				{registerSuccess && registerInfo && <RegisterSuccess />}
			</LoginRegisterWrapper>
		</Layout>
	);
};

export default Register;
