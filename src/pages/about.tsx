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
							<p className="max-w-[100ch] flex flex-col gap-2">
								<span>
									LEVEL UP به معامله‌گران قدرت می‌دهد تا ارزش بیشتری
									برای کسب سود بیشتر و پتانسیل رشد جدید ایجاد کنند.
									بازارهای مالی همانند فارکس و کسب درامد دلاری از این
									بازار ها اخیرا محبوبیت قابل توجهی پیدا کرده اند و
									بسیاری از کاربران در جهان به دنبال معامله گری در
									این بازار ها می باشند. LEVEL UP با تیم مجرب تحلیل
									گری و سابقه طولانی در فعالیت های اقتصادی و بازار
									های مالی با درک صحیح نیازهای مشتریان و علاقه افراد
									برای ایجاد درآمد موازی برای خود سعی در جمع آوری
									افکار و نیازها و چشم انداز ها در بازارهای مالی
									داشته و سعی در استفاده از آن دارد.
								</span>
								<span>
									تجزیه و تحلیل ده ها نفر متخصص و استراتژیست بازارهای
									مالی که اطلاعات و بینشی در مورد کسب درآمد کم خطر
									اما سودآور با محصول LEVEL UP ارائه می دهند.
								</span>
								<span>
									حضور در بازار های مالی بدون ریسک نخواهد بود و هیچ
									اطمینانی در سود وجود ندارد.
								</span>
								<span>
									اما LEVEL UP با تجزیه و تحلیل مناسب و تدوین نقاط
									ورود و خروج مناسب سعی خواهد کرد ریسک سرمایه شما را
									در این بازار به حداقل برساند.
								</span>
								<span>
									برای اولین بار در استارت آپ تخصصی LEVEL UP بسته های
									اشتراک به صورت تخصصی ارائه شده است، به این معنا که
									در مجموع سیگنالهای دریافتی مثبت و منفی در نهایت به
									مقدار پیپ اشتراک سود واقعی و مثبت از حرکت بازار
									دریافت خواهید نمود.
								</span>
								<span>
									به جز قسمت سیگنال سایر آیتم های اپ نیز قابل توجه می
									باشند.
								</span>
								<ol className="list-disc">
									<li>
										ارائه اخبار صحیح و به موقع در ارتباط با بازارهای
										مالی
									</li>
									<li>معرفی کتاب مربوط به بازارهای مالی</li>
									<li>
										معرفی و ارائه محتوای آموزشی به علاقه مندان به این
										بازار ها
									</li>
								</ol>
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
