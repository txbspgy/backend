module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        host: env('DATABASE_HOST', '127.0.0.1'),//127.0.0.1改成自己的网址如119.45.51.123
        srv: env.bool('DATABASE_SRV', true),
        uri: env('DATABASE_URI', 'mongodb://localhost:27017/strapi-test-mongodb'),
        // uri: env('DATABASE_URI', 'mongodb+srv://admin:admin@cluster0.t2xcx.mongodb.net/strapi-test-mongodb?retryWrites=true&w=majority'),
        // port: env.int('DATABASE_PORT', 27017),
        database: env('DATABASE_NAME', 'strapi-test-mongodb'),
        // username: env('DATABASE_USERNAME', null),
        // password: env('DATABASE_PASSWORD', null),
      },
      options: {
        authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
        ssl: env.bool('DATABASE_SSL', false),  // uncomment  for local
        // ssl: env.bool('DATABASE_SSL', true), // uncomment  for cloud

      },
    },
  },
});


//     default: {
//       connector: 'mongoose',
//       settings: {  对于外部会话存储（例如Redis）很有用。
//         host: env('DATABASE_HOST', '119.45.51.253'),数据库主机名
//         srv: env.bool('DATABASE_SRV', false),
//         port: env.int('DATABASE_PORT', 27017),
//         database: env('DATABASE_NAME', 'blog'),数据库名称
//         username: env('DATABASE_USERNAME', 'windfly'),
//         password: env('DATABASE_PASSWORD', '123456'),
//       },
//       options: {数据库连接的选项
//         authenticationDatabase: env('AUTHENTICATION_DATABASE', 'admin'),连接身份验证
//         ssl: env.bool('DATABASE_SSL', false),用于ssl数据库连接。
//       },
//     },
//   },
