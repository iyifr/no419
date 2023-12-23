/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [{
            hostname: 'ui-avatars.com',
            pathname: '/api/*',
            protocol: 'https'
        }]
	},
}

module.exports = nextConfig
