/*const { Client } = require('pg')

const connectionData = {
    user: 'postgres',
    host: 'localhost',
    database: 'ejercicio',
    password: '597559',
    port: 5432,
}

const client = new Client(connectionData)

client.connect()*/

const { Pool } = require('pg');
const client = new Pool({
    connectionString: "postgres://xxudtvqgiwdigf:54a89bc06eb75107abf126a0abdf02a72993bb0c4b7c9a3d2ca11d685488b1ae@ec2-54-197-100-79.compute-1.amazonaws.com:5432/d4fvp1bibg3ln7",
    ssl: {
        rejectUnauthorized: false
    }
});

module.exports = client;