const mysql = require('mysql2');
const config = require('./config.json');

module.exports = pool = mysql.createPool(config);

// pool.end(function (err) {
//     if (err) {
//         return console.log(err.message);
//     }
// });