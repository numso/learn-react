// --- Require Dependencies ----------------------------------------------------

var     fs = require('fs');
var config = require('config');
var    koa = require('koa');
var  serve = require('koa-static');
var router = require('koa-router');

// --- Koa Setup ---------------------------------------------------------------

var app = koa();
app.use(serve('./client'));
app.use(router(app));

// --- Load Routes -------------------------------------------------------------

fs.readdirSync(__dirname + '/routes').forEach(function (filename) {
  if (filename === '.DS_Store') return;
  require('./routes/' + filename)(app);
});

// --- Listen ------------------------------------------------------------------

app.listen(config.port);
console.log('app listening on port ' + config.port);
