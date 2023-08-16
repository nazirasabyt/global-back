module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "dsjhvcfk8w4723329841csb"),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT", "jksjdbfiueeer834iw6745true"),
  },
  transfer: {
    token: {
      salt: env("TRANSFER_TOKEN_SALT", "754yeruhfjdn4738iuqe"),
    },
  },
});
