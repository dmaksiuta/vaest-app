/** @type {import('next').NextConfig} */
const nextConfig = {
	distDir: "build",
	output: "export",
	images: {
		loader: "akamai",
		path: "",
	},
	assetPrefix: "./",
};

module.exports = nextConfig;
