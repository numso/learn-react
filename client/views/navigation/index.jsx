/**
 * @jsx React.DOM
 */

/* jshint node:true */
'use strict';

require('./style');

var React = require('React');

var Nav = React.createClass({
  render: function() {
    return (
      <div id="nav">Navigation</div>
    );
  }
});

module.exports = Nav;
