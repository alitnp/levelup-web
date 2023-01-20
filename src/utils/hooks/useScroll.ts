import { useState, useEffect } from "react";

const useScroll = () => {
	const [scroll, setScroll] = useState<number>(0);

	useEffect(() => {
		const setScrollState = (scrollY: number) =>
			setScroll(scrollY);
		if (typeof window !== "undefined") {
			setScroll(window.scrollY);
			window.addEventListener("scroll", () => {
				setScrollState(window.scrollY);
			});
		}
		return () => {
			window.removeEventListener("resize", () => {
				setScrollState(window.scrollY);
			});
		};
	}, []);

	return scroll;
};

export default useScroll;
