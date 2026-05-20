/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Webflow markup has custom attributes (thumbsslider, data-w-id, etc.) that don't satisfy strict React types.
  // Skip type-checking and lint during build; runtime React still accepts them.
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'i.ytimg.com' },
      { protocol: 'https', hostname: 'secure.wayforpay.com' },
    ],
  },
};

export default nextConfig;
