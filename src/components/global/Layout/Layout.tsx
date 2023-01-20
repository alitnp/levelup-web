import Footer from "@/components/global/Footer/Footer";
import Navbar from "@/components/home/header/Navbar";
import { FC, ReactNode } from "react";

interface ILayout {
	children: ReactNode;
}

const Layout: FC<ILayout> = ({ children }) => {
	return (
		<>
			<Navbar />
			<main className="overflow-hidden">{children}</main>
			<Footer />
		</>
	);
};

export default Layout;
