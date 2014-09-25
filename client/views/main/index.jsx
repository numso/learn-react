/**
 * @jsx React.DOM
 */

/* jshint node:true */
'use strict';

require('./style');

var React = require('React');
// var {Routes, Route, DefaultRoute} = require('React-Router');

var Profile = require('../profile');
var Nav = require('../navigation');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <span>Main Page!</span>
        <Nav/>
        <Profile/>
      </div>
    );
  }
});

React.renderComponent(<App/>, document.body);
