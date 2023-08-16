module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET"),
  },
  apiToken: {
    salt: env(`crypto.randomBytes(16).toString('base64')`),
  },
  transfer: {
    token: {
      salt: env(`crypto.randomBytes(16).toString('base64')`),
    },
  },
});
