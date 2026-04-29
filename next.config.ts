import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Produce a fully-static export under /out so the site can be uploaded
  // straight into SiteGround's public_html — no Node.js process required.
  output: "export",

  // SiteGround serves the files from the filesystem; next/image's runtime
  // optimization isn't available, so disable it.
  images: {
    unoptimized: true,
  },

  // Append a trailing slash so /privacy serves /privacy/index.html on
  // SiteGround's Apache without rewrites.
  trailingSlash: true,
};

export default nextConfig;
