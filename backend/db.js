var mysql      = require('mysql');
var connect = mysql.createConnection({
  host     : 'sql6.freesqldatabase.com',
  user     : 'sql6586346',
  password : 'ZvZFXuHvSj',
  database : 'sql6586346'
});
 

module.exports = {connect};
