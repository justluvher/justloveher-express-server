/**
 * Created by justluvher on 2016. 11. 15..
 */
var mysql = require('mysql');

var connection = mysql.createConnection(
  {
    host:'aa1hb5a8zoclm0w.cqnytilw0wcs.us-west-2.rds.amazonaws.com',
    user:'justloveher',
    password:'rbtjrl79',
    database:'justloveher_dev'
  }
);

connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected...')
  console.log(connection.state);
})

module.exports = connection;
