/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/rss",
        destination: "/api/feed.xml",
      },
      {
        source: "/api/rss.xml",
        destination: "/api/feed.xml",
      },
      {
        source: "/api/feed",
        destination: "/api/feed.xml",
      },
    ];
  },
};

export default nextConfig;
