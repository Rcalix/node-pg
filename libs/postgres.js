const { Client } = require('pg');

const getConnection =  async() => {
    const client = new Client({
        user: 'admin',
        database: 'my_store',
        password: 'admin123',
        host: 'localhost',
        port: 5434
    
    })
    await client();
    return client;
}

exports.module = getConnection;