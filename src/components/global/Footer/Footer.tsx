import { FC, ReactNode } from "react";
import {
	AiOutlineWhatsApp,
	AiOutlineTwitter,
	AiFillFacebook,
	AiOutlineInstagram,
} from "react-icons/ai";

interface IFooter {}

const Footer: FC<IFooter> = ({}) => {
	const getSocialElement = (icon: ReactNode): ReactNode => (
		<div className="p-1 border rounded-md cursor-pointer hover:bg-l-opposite-text-color border-l-border-color-base hover:text-l-text-color no-transition-effect">
			{icon}
		</div>
	);

	return (
		<footer className="w-full py-14 bg-l-text-color text-l-opposite-text-color">
			<div className="l-container">
				<div className="m-0 text-center md:text-right">
					<span className="m-0 text-3xl font-black text-center">
						LEVEL UP
					</span>
				</div>
				<div className="flex flex-col items-center justify-between gap-12 text-center md:items-start md:gap-2 md:text-right md:flex-row">
					<div className="text-sm ">
						<p className="mb-4 text-xs">
							بستر تخصصی اشتراک گزاری سیگنال های معاملاتی‌
						</p>
						<address className="not-italic font-normal">
							<div>
								تماس:
								<span itemProp="telephone" className="mr-4">
									<a href="tel:02134567879">۳۴۵ ۶۷۸ ۹۹ - ۰۲۱</a>
								</span>
							</div>
							<div>
								ایمیل:
								<span itemProp="mail" className="mr-4">
									<a href="mailto:info@levelup.com">
										info@levelup.com
									</a>
								</span>
							</div>
							<div>
								آدرس:
								<span className="mr-4">
									میدان ونک - خیابان ولیعصر
								</span>
							</div>
						</address>
					</div>
					<div className="flex flex-col">
						<span className="mb-2 text-xl font-medium">
							دسترسی سریع
						</span>
						<span className="text-sm cursor-pointer hover:underline">
							ورود به حساب کاربری
						</span>
						<span className="text-sm cursor-pointer hover:underline">
							ایجاد حساب کاربری
						</span>
						<span className="text-sm cursor-pointer hover:underline">
							مطالب
						</span>
						<span className="text-sm cursor-pointer hover:underline">
							درباره ما
						</span>
						<span className="text-sm cursor-pointer hover:underline">
							ارتباط با ما
						</span>
					</div>
					<div className="flex flex-col">
						<span className="mb-2 text-xl font-medium">
							شبکه های اجتماعی
						</span>
						<div className="flex gap-4 mt-2">
							{getSocialElement(<AiOutlineInstagram />)}
							{getSocialElement(<AiFillFacebook />)}
							{getSocialElement(<AiOutlineTwitter />)}
							{getSocialElement(<AiOutlineWhatsApp />)}
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
