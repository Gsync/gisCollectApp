/*jshint esnext: true*/

var express = require('express');
var app = express();


app.set("port", process.env.PORT || 3000);

//app.use(express.static('/'));
app.use('/', express.static('giscollecapp'));

var server = app.listen(app.get("port"), function() {
  console.log('Listening on port ' + app.get("port"));
});
