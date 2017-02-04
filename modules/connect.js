/**
 * Connection for MySQL DB 
 */

var mysql = require('mysql');
require('dotenv').config();

module.exports = mysql.createPool({
    connectionLimit : 2,
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DB,
    port: process.env.MYSQL_PORT
});