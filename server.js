var fs = require("fs");
var express = require('express');
var app = express();

app.use(express.static('html'));
app.use(express.static('css'));
app.use(express.static('js'));
app.use(express.static('img'));

app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/js/" + "users.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
});
app.get('/courses', function (req, res) {
   fs.readFile( __dirname + "/js/" + "course.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
});
var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("curd app listening at http://localhost:3000", host, port)

});