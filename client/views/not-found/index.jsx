/**
 * @jsx React.DOM
 */

/* jshint node:true */
'use strict';

require('./style');

var React = require('react');

var NotFound = React.createClass({
  render: function() {
    return (
      <div id="notFound">404 Not Found</div>
    );
  }
});

module.exports = NotFound;
