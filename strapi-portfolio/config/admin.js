module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c121c467260167bf368507b1fc222627'),
  },
});
