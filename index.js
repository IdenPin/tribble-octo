// var express = require('express');
//var stormpath = require('express-stormpath');
// var app = express();
// app.use(stormpath.init(app,function(){
//   application:process.env.STORMPATH_URL
// }))
//
// app.get('/',function(req,res){
//   res.send('hell heroku...')
// })

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('hell heroku...');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
