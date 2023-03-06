import "@/styles/colors.css";
import "@/styles/globals.css";
import "animate.css/animate.min.css";
import type { AppProps } from "next/app";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import { store } from "@/redux/reduxStore";
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
			<Provider store={store}>
				<Component {...pageProps} />
			</Provider>
		</ConfigProvider>
	);
}
