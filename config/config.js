
module.exports = {
  development: {
    "username": "postgres",
    "password": "",
    "database": "swaggerStudyDB",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  test: {
    url: process.env.DEV_DATABASE_URL,
    dialect: 'postgres',
  },
  production: {
    url: process.env.DEV_DATABASE_URL,
    dialect: 'postgres',
  },
}

