/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,
	serverRuntimeConfig: {
		NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
	},
};
