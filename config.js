require('dotenv').config()
const config = {
    env: process.env.NODE_ENV || 'dev',
    port: process.env.port || 3000,
    dbUser: process.env.DB_USER || 'admin',
    dbPassword: process.env.DB_PASSWORD || 'admin123',
    dbName: process.env.DB_NAME || 'my_store',
    dbPort: process.env.DB_PORT || '5432',
    dbHost: process.env.DB_HOST || 'localhost',
}

module.exports = config;
