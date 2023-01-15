import "@/styles/colors.css";
import "@/styles/globals.css";
import "animate.css/animate.min.css";
import type { AppProps } from "next/app";

export default function App({
	Component,
	pageProps,
}: AppProps) {
	return <Component {...pageProps} />;
}