// db.js
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'db',
    user: 'user347',
    password: 'pass347',
    database: 'api_example',
    port: 3306,
    waitForConnections: true,
    connectionLimit: 10,
});

export default pool;
