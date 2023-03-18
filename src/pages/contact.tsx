import Layout from "@/components/global/Layout/Layout";
import Image from "next/image";
import { FC } from "react";

interface IContact {}

const Contact: FC<IContact> = ({}) => {
	return (
		<Layout>
			<div className="">
				<div className="l-container">
					<div className="flex flex-col-reverse items-center justify-between gap-10 mt-16 lg:flex-row mb-28">
						<div>
							<h1 className="mb-2 text-4xl font-bold text-center lg:text-right">
								ارتباط با ما
							</h1>
							<address className="not-italic font-normal text-center lg:text-right">
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
						<div className="relative overflow-hidden rounded-lg ">
							<Image
								src="/images/contact.png"
								width={640}
								height={640}
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Contact;
