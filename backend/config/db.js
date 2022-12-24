var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'sql6.freesqldatabase.com',
  user     : 'sql6586346',
  password : 'ZvZFXuHvSj',
  database : 'sql6586346'
});
 
 connection = connection.connect();
 
connection.query('SELECT * FROM Cointab', function (error, results, fields) {
  if (error){
    console.log(error);
  }
  else{
    console.log('The solution is:', results);
  }
 
});

module.exports = {connection};