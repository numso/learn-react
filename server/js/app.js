/* jshint node:true */
'use strict';

var config = require('config');
var koa = require('koa');
var serve = require('koa-static');

var app = koa();
app.use(serve('./client'));

app.listen(config.port);
console.log('app listening on port ' + config.port);
