/**
 * @jsx React.DOM
 */

/* jshint node:true */
'use strict';

require('./style');

var React = require('React');

var Profile = React.createClass({
  render: function() {
    return (
      <div id="profile">Profile Page</div>
    );
  }
});

module.exports = Profile;
