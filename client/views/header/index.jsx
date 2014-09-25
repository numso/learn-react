/**
 * @jsx React.DOM
 */

/* jshint node:true */
'use strict';

require('./style');

var React = require('react');

var Header = React.createClass({
  render: function() {
    return (
      <div id="header">Header Page</div>
    );
  }
});

module.exports = Header;
