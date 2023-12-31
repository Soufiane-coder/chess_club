/** @type {import('next').NextConfig} */

module.exports = {
    images: {
        dangerouslyAllowSVG: true,
        contentDispositionType: 'attachment',
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
        domains: ["source.unsplash.com", 'firebasestorage.googleapis.com'],
    },
    webpack: (config, { isServer }) => {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

        if (!isServer) {
            config.resolve.fallback = {
                ...config.resolve.fallback,
                fs: false, // This might be needed to handle certain webpack issues
            };
        }

        return config;
    },
}
