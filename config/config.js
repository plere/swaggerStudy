
module.exports = {
  development: {
    "username": "postgres",
    "password": "psql**",
    "database": "swaggerStudyDB",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "define": {
      freezeTableName: true
    }
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

