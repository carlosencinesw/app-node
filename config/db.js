var mysql = require('mysql');

var myConfig = () => {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'contatos'
    });
}

module.exports = () => {
    return myConfig;
}