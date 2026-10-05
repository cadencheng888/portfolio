import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      // The resume was renamed Oct 2026; keep links already out on
      // applications and LinkedIn working.
      {
        source: "/uploads/resume.pdf",
        destination: "/uploads/Cheng_Caden_resume.pdf",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
