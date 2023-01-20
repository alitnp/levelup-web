import Image from "next/image";
import React, { FC } from "react";

interface IWhyUpSlide {
	title: string;
	desc: string;
	imageUrl: string;
}

const WhyUsSlide: FC<IWhyUpSlide> = ({
	title,
	desc,
	imageUrl,
}) => {
	return (
		<article
			className="flex flex-col items-center sm:flex-row"
			style={{ direction: "rtl" }}
		>
			<div className="sm:w-1/2">
				<h5 className="mb-1 text-3xl font-medium text-center sm:text-right">
					{title}
				</h5>
				<p className="sm:w-[50ch] text-center sm:text-right">
					{desc}
				</p>
			</div>
			<div className="px-6 my-10 overflow-hidden sm:my-0 sm:p-0 sm:w-1/2 sm:h-80">
				<Image
					src={imageUrl}
					width={600}
					height={320}
					alt=""
					draggable={false}
				/>
			</div>
		</article>
	);
};

export default WhyUsSlide;
