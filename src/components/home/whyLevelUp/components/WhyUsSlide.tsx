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
			className="flex items-center"
			style={{ direction: "rtl" }}
		>
			<div className="w-1/2">
				<h5 className="mb-1 text-3xl font-medium">{title}</h5>
				<p className="w-[50ch]">{desc}</p>
			</div>
			<div className="w-1/2 overflow-hidden h-80">
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
