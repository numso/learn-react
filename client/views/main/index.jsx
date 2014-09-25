/**
 * @jsx React.DOM
 */

/* jshint node:true */
'use strict';

require('./style');

var React = require('React');
var Profile = require('../profile/index');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <span>hey there!</span>
        <Profile/>
      </div>
    );
  }
});

React.renderComponent(<App/>, document.body);
