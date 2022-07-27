const mysql = require('mysql2');
const config = require('./config.json');

module.exports = pool = mysql.createPool(config);