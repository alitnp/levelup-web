/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	webpackDevMiddleware: (config) => {
		config.watchOptions = {
			poll: 1000,
			aggregateTimeout: 300,
		};
		return config;
	},
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "apitest.levelupfx724.com",
				port: "",
				pathname: "/Uploads/Contents/**",
			},
		],
	},
};

module.exports = nextConfig;
