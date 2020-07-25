var express = require('express')
var parseurl = require('parseurl')
var session = require('express-session')
 
var app = express();

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));
 
app.get('/', function (req, res, next) {
    console.log(req.session);
    res.send('Hello, Session');
});
 

app.listen(3000, () => {
    console.log("Express is listening on 3000");
});