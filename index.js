var express = require('express');
var stormpath = require('express-stormpath');
var app = express();
app.use(stormpath.init(app,function(){
  application:process.env.STORMPATH_URL
}))
app.get('/',function(req,res){
  res.send('hell heroku')
})
