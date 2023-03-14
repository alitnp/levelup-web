const routes = {
	home: { path: "/", isPrivate: false },
	login: { path: "/login", isPrivate: false },
	register: { path: "/register", isPrivate: false },
	forgot: { path: "/forgot", isPrivate: false },
	articles: { path: "/articles", isPrivate: false },
	aboutus: { path: "/about", isPrivate: false },
	contactus: { path: "/contact", isPrivate: false },
	registerSuccess: {
		path: "/registersuccess",
		isPrivate: false,
	},
};

export default routes;
