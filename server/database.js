const mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'roottoor',
    database: 'writeup'
});

con.connect(function(error){
    if(error){
        throw error;
    }
    else{
        console.log('Database is connected')
    }
})

module.exports = con;