/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	images: {
		domain: ['lh3.googleusercontent.com', 'images.unsplash.com'],
		remotePatterns: [
			{
				hostname: 'images.unsplash.com',
			},
		],
	},
};

module.exports = nextConfig;
