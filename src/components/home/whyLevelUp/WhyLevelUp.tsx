import React, { FC } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

const WhyLevelUp: FC = () => {
	return (
		<AnimationOnScroll
			animateIn="animate__fadeInUp"
			offset={300}
			duration={2}
		>
			<section>
				<div className="l-container bg-l-layer-bg-color rounded-md h-96 px-6 py-10">
					<h3 className="text-center  text-3xl">
						چرا Level Up ؟
					</h3>
					<p className="text-center"></p>
				</div>
			</section>
		</AnimationOnScroll>
	);
};

export default WhyLevelUp;
