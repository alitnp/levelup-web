/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	images: {
		unoptimized: true,
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
