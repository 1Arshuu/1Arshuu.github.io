import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Arshu-Portfolio",
  assetPrefix: "/Arshu-Portfolio/",
  trailingSlash: true,

  reactCompiler: true,

  images: {
    unoptimized: true,
  },
};

export default nextConfig;