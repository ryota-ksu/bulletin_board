const express = require('express');

const app = express();

app.use('/img', express.static(__dirname + '/dist/img/'));
app.use('/css', express.static(__dirname + '/dist/css/'));
app.use('/js', express.static(__dirname + '/dist/js/'));
app.get('/', (req, res) => res.sendFile(__dirname + '/dist/index.html'))


// app.get('/', (req, res) => {
//   res.render('App.vue');
// });

app.listen(3000);