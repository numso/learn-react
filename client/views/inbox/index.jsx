/**
 * @jsx React.DOM
 */

/* jshint node:true */
'use strict';

require('./style');

var React = require('react');

var Inbox = React.createClass({
  render: function() {
    return (
      <div id="inbox">Inbox Page</div>
    );
  }
});

module.exports = Inbox;
