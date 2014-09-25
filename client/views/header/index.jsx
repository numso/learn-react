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
      <div id="header" className="row">
        <div className="small-12 column">
          <h1>React Mail</h1>
        </div>
      </div>
    );
  }
});

module.exports = Header;
