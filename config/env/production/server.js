module.exports = ({ env }) => ({
  url: env("RENDER_EXTERNAL_URL"),
  dirs: {
    public: "/data/public",
  },
  "user-permissions": {
    config: {
      jwtSecret: env("JWT_SECRET"),
    },
  },
});
