/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "unsplash.com",
      },
    ],
  },
  env: {
    MONGODB_URI:
      "mongodb+srv://bhanupratappatkar777:nextJsAuth@cluster0.gzhyoqr.mongodb.net",
  },
};

export default nextConfig;
