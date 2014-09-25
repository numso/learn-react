/**
 * @jsx React.DOM
 */

/* jshint node:true */
'use strict';

require('./style');

var React = require('react');

var Contacts = React.createClass({
  render: function() {
    return (
      <div id="contacts">Contacts Page</div>
    );
  }
});

module.exports = Contacts;
