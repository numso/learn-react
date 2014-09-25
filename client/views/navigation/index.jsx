/**
 * @jsx React.DOM
 */

/* jshint node:true */
'use strict';

require('./style');

var React = require('react');

var Nav = React.createClass({
  render: function() {
    return (
      <div id="nav">Navigation</div>
    );
  }
});

module.exports = Nav;
