import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	experimental: {
		agentFeedback: true,
		goRoutes: true,
	},
	cacheComponents: true,
	partialPrefetching: true,
	reactCompiler: true,
	turbopack: {
		rules: {
			"*.css": {
				loaders: ["@tailwindcss/turbopack"],
				as: "*.css",
			},
		},
	},
	async rewrites() {
		return [
			{
				source: "/api/health",
				destination: "/api",
			},
		];
	},
};

export default nextConfig;
