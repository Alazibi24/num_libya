const mysql = require('mysql');

var connection = mysql.createConnection({
	host : 'db4free.net',
	database : 'marcstest2',
	user : 'testmar2',
	password : '12345678'
});

connection.connect(function(error){
	if(error)
	{
		throw error;
	}
	else
	{
		console.log('MySQL Database is connected Successfully')
	}
});

module.exports = connection;