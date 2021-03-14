module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  //url:'https://lcyun.com,' //填自己域名
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'bd8c5eeaa15ca05fda2ee46ec864c832'),
    },
  },
});
