const express = require('express');
const mysql = require('mysql');
const app = express();

app.use('/img', express.static(__dirname + '/dist/img/'));
app.use('/css', express.static(__dirname + '/dist/css/'));
app.use('/js', express.static(__dirname + '/dist/js/'));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'hs20100531',
  database: 'bulletin_app'
});

app.get('/', (req, res) => {
  connection.query('SELECT * FROM users', (error, results) => {
    res.sendFile(__dirname + '/dist/index.html');
  });
});

app.listen(3000);
