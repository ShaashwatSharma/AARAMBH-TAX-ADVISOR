import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  /* config options here */
};
module.exports = {
  async redirects() {
    return [{ source: '/', destination: '/home', permanent: false }];
  },
};
export default nextConfig;
