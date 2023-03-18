import TeamMember from "@/components/about/TeamMember";
import Layout from "@/components/global/Layout/Layout";
import Image from "next/image";
import { FC } from "react";

interface IAbout {}

const About: FC<IAbout> = ({}) => {
	return (
		<Layout>
			<div className="">
				<div className="l-container">
					<article className="flex flex-col-reverse items-center justify-between gap-10 mt-16 lg:flex-row mb-28">
						<div>
							<h1 className="mb-2 text-4xl font-bold text-center lg:text-right">
								درباره ما
							</h1>
							<p className="max-w-[100ch] text-justify">
								متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
								استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
								روزنامه و مجله در ستون و سطرآنچنان که لازم است، و
								برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
								متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
								زیادی در شصت و سه درصد گذشته حال و آینده، شناخت
								فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها
								شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
								طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد،
								در این صورت می توان امید داشت که تمام و دشواری موجود
								در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
								زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و
								جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا
								مورد استفاده قرار گیرد.
							</p>
						</div>
						<div className="relative overflow-hidden rounded-lg ">
							<Image
								src="/images/about-levelup.png"
								width={640}
								height={480}
								alt=""
							/>
						</div>
					</article>
					<div className="mb-16">
						<div className="pb-2 mb-4 text-center border-b border-l-border-color-base">
							<span className="text-3xl font-bold">
								تیم Level Up
							</span>
						</div>
						<div className="flex justify-center mb-10">
							<TeamMember
								name="جواد مسعودی"
								position="رهبر تیم تحلیل"
								imageUrl="/images/team-lead.jpg"
							/>
						</div>
						<div className="flex flex-col w-full gap-10 mb-10 lg:flex-row lg:gap-0 justify-evenly">
							<TeamMember
								name="رضا محمدی"
								position="کارشناس تحلیل بازار"
								imageUrl="/images/team-member-1.jpg"
							/>
							<TeamMember
								name="سعید شهروز"
								position="کارشناس تحلیل بازار"
								imageUrl="/images/team-member-2.jpg"
							/>
						</div>
					</div>
				</div>
				<article className="max-w-3xl mx-auto mb-16">
					<div className="pb-2 mb-4 text-center border-b border-l-border-color-base">
						<h2 className="text-3xl font-bold">
							درباره تیم تحلیل
						</h2>
					</div>
					<p className="text-justify">
						متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
						استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
						روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای
						شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با
						هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در
						شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
						متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
						برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ
						پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان
						امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
						شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
						حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
						دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
					</p>
				</article>
			</div>
		</Layout>
	);
};

export default About;
