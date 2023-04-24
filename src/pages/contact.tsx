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
								<div>
									اینستاگرام:
									<span className="mr-4">@levelupfx724</span>
								</div>
								<div>
									تلگرام:
									<span className="mr-4">@levelupfx724</span>
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
