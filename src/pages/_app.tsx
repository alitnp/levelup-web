import "@/styles/colors.css";
import "@/styles/globals.css";
import "animate.css/animate.min.css";
import type { AppProps } from "next/app";
import { ConfigProvider } from "antd";
// import faIR from "antd/lib/locale/fa_IR";

export default function App({
	Component,
	pageProps,
}: AppProps) {
	return (
		<ConfigProvider
			// locale={faIR}
			direction="rtl"
			theme={{
				token: {
					fontFamily: "IRANSans",
					colorPrimary: "#4f47c5",
				},
			}}
		>
			<Component {...pageProps} />
		</ConfigProvider>
	);
}
