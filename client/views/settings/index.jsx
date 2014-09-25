/**
 * @jsx React.DOM
 */

/* jshint node:true */
'use strict';

require('./style');

var React = require('react');

var Settings = React.createClass({
  render: function() {
    return (
      <div id="settings">Settings Page</div>
    );
  }
});

module.exports = Settings;
