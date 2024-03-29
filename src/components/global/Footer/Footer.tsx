import DlMobileApp from "@/components/global/DlMobileApp/DlMobileApp";
import DlMobileAppBtn from "@/components/global/DlMobileApp/DlMobileAppBtn";
import routes from "@/constants/routes";
import Link from "next/link";
import { FC, ReactNode } from "react";
import {
	AiOutlineWhatsApp,
	AiOutlineTwitter,
	AiFillFacebook,
	AiOutlineInstagram,
} from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";

interface IFooter {}

const Footer: FC<IFooter> = ({}) => {
	const getSocialElement = (
		icon: ReactNode,
		url: string
	): ReactNode => (
		<a
			href={url}
			target="_blank"
			rel="noreferrer"
			className="p-1 border rounded-md cursor-pointer hover:bg-l-opposite-text-color border-l-border-color-base hover:text-l-text-color no-transition-effect"
		>
			{icon}
		</a>
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
								شماره واتساپ:
								<span itemProp="telephone" className="mr-4">
									<a href="tel:‌09961977020">‌09961977020</a>
								</span>
							</div>
							<div>
								ایمیل:
								<span itemProp="mail" className="mr-4">
									<a href="mailto:support@levelupfx724.com">
										support@levelupfx724.com
									</a>
								</span>
							</div>
							{/* <div>
								آدرس:
								<span className="mr-4">
									میدان ونک - خیابان ولیعصر
								</span>
							</div> */}
						</address>
						<div className="mt-2">
							<DlMobileAppBtn />
						</div>
					</div>
					<div className="flex flex-col">
						<span className="mb-2 text-xl font-medium">
							دسترسی سریع
						</span>
						<Link href={routes.articles.path}>
							<span className="text-sm cursor-pointer hover:underline">
								مطالب
							</span>
						</Link>
						<Link href={routes.aboutus.path}>
							<span className="text-sm cursor-pointer hover:underline">
								درباره ما
							</span>
						</Link>
						<Link href={routes.contactus.path}>
							<span className="text-sm cursor-pointer hover:underline">
								ارتباط با ما
							</span>
						</Link>
					</div>
					<div className="flex flex-col">
						<span className="mb-2 text-xl font-medium">
							شبکه های اجتماعی
						</span>
						<div className="flex gap-4 mt-2">
							{getSocialElement(
								<AiOutlineInstagram />,
								"https://instagram.com/levelupfx724"
							)}
							{getSocialElement(
								<BsTelegram />,
								"https://t.me/levelupfx724"
							)}
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
