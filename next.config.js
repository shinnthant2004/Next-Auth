/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    mongodb_username: "shinnthant",
    mongodb_password: "80Dzlssy3od1F4SU",
    mongodb_cluster: "cluster0",
    mongodb_database: "users",
  },
};

module.exports = nextConfig;
